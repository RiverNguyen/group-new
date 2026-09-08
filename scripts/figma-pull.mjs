#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, relative, resolve } from 'node:path'

import { download, figmaClient } from './figma/api.mjs'
import { collectTokens, distillNode } from './figma/distill.mjs'
import { readEnv } from './figma/env.mjs'
import { renderSpec } from './figma/report.mjs'

const CWD = process.cwd()
const SPEC_DIR = resolve(CWD, 'plans/figma')

/** Results go to stdout so they can be piped; progress and warnings go to stderr. */
const print = (line = '') => process.stdout.write(`${line}\n`)

/** Vietnamese-friendly comparison: fold diacritics so "cổ đông" matches "co dong". */
const fold = (text) =>
  String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()

const slugify = (text) =>
  fold(text)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'frame'

function parseArgs(argv) {
  const [command, ...rest] = argv
  const flags = {}

  for (let i = 0; i < rest.length; i += 1) {
    const token = rest[i]
    if (!token.startsWith('--')) continue

    const key = token.slice(2)
    const next = rest[i + 1]

    if (next === undefined || next.startsWith('--')) {
      flags[key] = true
    } else {
      flags[key] = next
      i += 1
    }
  }

  return { command, flags }
}

function requireConfig(flags) {
  const token = readEnv('FIGMA_TOKEN', CWD)
  const fileKey = flags.file ?? readEnv('FIGMA_FILE_KEY', CWD)

  if (!token) {
    throw new Error(
      'FIGMA_TOKEN is not set.\n' +
        '  Create one at figma.com → Settings → Security → Personal access tokens\n' +
        '  Scope required: "File content" (read-only)\n' +
        '  Then add to .env.local:  FIGMA_TOKEN=figd_...',
    )
  }

  if (!fileKey) {
    throw new Error(
      'No Figma file key.\n' +
        '  Pass --file <key>, or add to .env.local:  FIGMA_FILE_KEY=<key>\n' +
        '  The key is the segment after /design/ in the file URL.',
    )
  }

  return { token, fileKey }
}

/** Collects every FRAME/COMPONENT/SECTION in the (depth-limited) document, with its page. */
function indexFrames(document) {
  const found = []

  const walk = (node, page, depth) => {
    const isCandidate = ['FRAME', 'COMPONENT', 'COMPONENT_SET', 'SECTION'].includes(node.type)
    if (isCandidate) {
      const box = node.absoluteBoundingBox
      found.push({
        id: node.id,
        name: node.name,
        type: node.type,
        page,
        depth,
        width: box ? Math.round(box.width) : null,
        height: box ? Math.round(box.height) : null,
      })
    }

    for (const child of node.children ?? []) {
      walk(child, page, depth + 1)
    }
  }

  for (const page of document.children ?? []) {
    for (const child of page.children ?? []) walk(child, page.name, 1)
  }

  return found
}

async function commandList(flags) {
  const { token, fileKey } = requireConfig(flags)
  const depth = Number(flags.depth ?? 3)
  const client = figmaClient(token)

  process.stderr.write(`Fetching file structure (depth=${depth})…\n`)
  const file = await client.file(fileKey, { depth })

  const frames = indexFrames(file.document)
  const needle = typeof flags.match === 'string' ? fold(flags.match) : null
  const matches = needle ? frames.filter((f) => fold(f.name).includes(needle)) : frames

  print(`\nFile: ${file.name}`)
  print(
    `Frames found: ${frames.length}${needle ? ` — matching "${flags.match}": ${matches.length}` : ''}\n`,
  )

  let currentPage = null
  for (const frame of matches) {
    if (frame.page !== currentPage) {
      currentPage = frame.page
      print(`  ── page: ${currentPage}`)
    }
    const size = frame.width ? `${frame.width}×${frame.height}` : '—'
    const indent = '  '.repeat(frame.depth)
    print(
      `  ${indent}${frame.id.padEnd(12)} ${size.padEnd(12)} ${frame.type.padEnd(14)} ${frame.name}`,
    )
  }

  if (!matches.length) {
    print('  (nothing matched)')
    print(`\n  Frames may sit deeper than depth=${depth}. Retry with --depth ${depth + 2}.`)
  }

  print('\nNext: node scripts/figma-pull.mjs pull --nodes <id>,<id>\n')
}

async function commandPull(flags) {
  const { token, fileKey } = requireConfig(flags)

  if (typeof flags.nodes !== 'string') {
    throw new Error('pull requires --nodes <id>,<id>  (get ids from the `list` command)')
  }

  const ids = flags.nodes
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean)
  const remBase = Number(flags['rem-base'] ?? 16)
  const scale = Number(flags.scale ?? 2)
  const outDir = resolve(CWD, flags.out ?? join(tmpdir(), 'figma-pull', fileKey))
  const client = figmaClient(token)

  await mkdir(SPEC_DIR, { recursive: true })
  await mkdir(outDir, { recursive: true })

  process.stderr.write(`Fetching ${ids.length} node(s)…\n`)
  const response = await client.nodes(fileKey, ids)

  const written = []
  const allImageRefs = new Set()

  for (const id of ids) {
    const entry = response.nodes?.[id]
    if (!entry?.document) {
      console.warn(`  ! node ${id} not returned — check the id and your view access`)
      continue
    }

    const node = entry.document
    const origin = node.absoluteBoundingBox ?? { x: 0, y: 0 }
    const root = distillNode(node, { origin, remBase })
    const tokens = collectTokens(root)

    for (const ref of tokens.imageRefs) allImageRefs.add(ref)

    const slug = slugify(node.name)
    const jsonPath = join(SPEC_DIR, `${slug}.json`)
    const mdPath = join(SPEC_DIR, `${slug}.md`)

    await writeFile(
      jsonPath,
      `${JSON.stringify({ id, name: node.name, remBase, root }, null, 2)}\n`,
    )
    await writeFile(
      mdPath,
      renderSpec({
        frameName: node.name,
        frameId: id,
        fileKey,
        root,
        tokens,
        remBase,
        jsonPath: relative(CWD, jsonPath),
      }),
    )

    written.push({ id, name: node.name, mdPath, jsonPath, tokens })
  }

  if (!written.length) throw new Error('No nodes could be read. Nothing was written.')

  process.stderr.write('Rendering reference PNGs…\n')
  const renders = await client.renders(
    fileKey,
    written.map((w) => w.id),
    { scale },
  )
  for (const item of written) {
    const url = renders.images?.[item.id]
    if (!url) {
      console.warn(`  ! no render returned for ${item.id}`)
      continue
    }
    const dest = join(outDir, `${slugify(item.name)}@${scale}x.png`)
    await download(url, dest)
    item.png = dest
  }

  if (allImageRefs.size && flags['no-images'] !== true) {
    process.stderr.write(`Downloading ${allImageRefs.size} image asset(s)…\n`)
    const fills = await client.imageFills(fileKey)
    const map = fills.meta?.images ?? {}

    for (const ref of allImageRefs) {
      const url = map[ref]
      if (!url) continue
      await download(url, join(outDir, 'assets', `${ref}.png`)).catch((error) =>
        console.warn(`  ! asset ${ref.slice(0, 8)} failed: ${error.message}`),
      )
    }
  }

  print('\nDone.\n')
  for (const item of written) {
    print(`  ${item.name}`)
    print(`    spec   ${relative(CWD, item.mdPath)}`)
    print(`    json   ${relative(CWD, item.jsonPath)}`)
    if (item.png) print(`    render ${item.png}`)
    print(
      `    tokens ${item.tokens.colors.length} colours · ${item.tokens.typography.length} text styles · ` +
        `${item.tokens.spacing.length} spacing values`,
    )
  }
  print(`\n  assets ${outDir}\n`)
}

const USAGE = `
figma-pull — read Figma designs with view-only access

  node scripts/figma-pull.mjs list [--match <text>] [--depth 3] [--file <key>]
  node scripts/figma-pull.mjs pull --nodes <id>,<id> [--rem-base 16] [--scale 2]
                                   [--out <dir>] [--no-images] [--file <key>]

Env (.env.local):  FIGMA_TOKEN=figd_...   FIGMA_FILE_KEY=<key>
`

async function main() {
  const { command, flags } = parseArgs(process.argv.slice(2))

  if (command === 'list') return commandList(flags)
  if (command === 'pull') return commandPull(flags)

  print(USAGE)
  process.exitCode = command ? 1 : 0
}

main().catch((error) => {
  // Fail closed and legibly. Nothing here can contain the token.
  console.error(`\n✗ ${error.message}\n`)
  process.exitCode = 1
})
