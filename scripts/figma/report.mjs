import { toRem } from './distill.mjs'

const MAX_TREE_DEPTH = 7

const truncate = (text, max) => {
  const flat = String(text).replace(/\s+/g, ' ').trim()
  return flat.length > max ? `${flat.slice(0, max - 1)}…` : flat
}

function nodeSummary(node) {
  const size = node.frame ? `${node.frame.w}×${node.frame.h}` : '—'
  const parts = [`${node.type} "${node.name}" [${size}]`]

  if (node.layout) {
    const l = node.layout
    parts.push(
      `auto=${l.dir} gap=${l.gap} pad=${l.padding.join('/')} main=${l.justify} cross=${l.align}`,
    )
  }

  if (node.text) {
    const t = node.text
    parts.push(`"${truncate(t.characters, 48)}"`)
    parts.push(`${t.font} ${t.weight} ${t.size}px/${t.lineHeightPx ?? '?'}`)
    if (t.letterSpacing) parts.push(`ls=${t.letterSpacing}`)
    if (t.case && t.case !== 'ORIGINAL') parts.push(t.case)
    if (t.mixed) parts.push('MIXED-STYLES')
  }

  const solid = (node.fills ?? []).find((fill) => fill.type === 'solid')
  if (solid) parts.push(`fill=${solid.hex}${solid.alpha < 1 ? `/${solid.alpha}` : ''}`)

  const gradient = (node.fills ?? []).find((fill) => fill.type?.startsWith('gradient'))
  if (gradient) parts.push(`grad=${gradient.stops.map((s) => s.hex).join('→')}`)

  const image = (node.fills ?? []).find((fill) => fill.type === 'image')
  if (image) parts.push(`img=${image.imageRef?.slice(0, 8)} ${image.scaleMode}`)

  if (node.radius) {
    parts.push(`r=${Array.isArray(node.radius) ? node.radius.join('/') : node.radius}`)
  }
  if (node.effects?.length) parts.push(node.effects.map((e) => e.type).join(','))
  if (node.opacity != null) parts.push(`opacity=${node.opacity}`)
  if (node.hidden) parts.push('HIDDEN')

  return parts.join('  ')
}

function renderTree(node, depth = 0, lines = []) {
  lines.push(`${'  '.repeat(depth)}${nodeSummary(node)}`)

  if (depth >= MAX_TREE_DEPTH) {
    const buried = node.children?.length ?? 0
    if (buried) lines.push(`${'  '.repeat(depth + 1)}… ${buried} more level(s) — see the JSON`)
    return lines
  }

  for (const child of node.children ?? []) renderTree(child, depth + 1, lines)
  return lines
}

/** Builds the review-ready spec. The JSON stays authoritative; this is the readable view. */
export function renderSpec({ frameName, frameId, fileKey, root, tokens, remBase, jsonPath }) {
  const width = root.frame?.w ?? 0
  const impliedBase = width ? Number((width / 100).toFixed(4)) : null

  const out = []

  out.push(`# Figma spec — ${frameName}`)
  out.push('')
  out.push(`- File: \`${fileKey}\``)
  out.push(`- Node: \`${frameId}\``)
  out.push(`- Frame size: **${root.frame?.w ?? '?'} × ${root.frame?.h ?? '?'} px**`)
  out.push(`- rem base used: **${remBase}** (px ÷ ${remBase} = rem)`)
  out.push(`- Full data: \`${jsonPath}\``)
  out.push('')

  if (impliedBase && Math.abs(impliedBase - remBase) > 0.01) {
    out.push(
      `> ⚠️ **Calibration mismatch.** The project renders \`1rem = 1vw\`, so this ${width}px frame ` +
        `maps 1:1 only at a rem base of **${impliedBase}**, not the **${remBase}** used here. ` +
        `At base ${remBase} the design renders 1:1 at a **${(remBase * 100).toFixed(0)}px** viewport ` +
        'and scales proportionally elsewhere. Decide which one the project standardises on before ' +
        `implementing — the existing homepage already uses ${remBase}.`,
    )
    out.push('')
  }

  out.push('## Colours')
  out.push('')
  out.push('| Hex | Alpha | Uses |')
  out.push('| --- | --- | --- |')
  for (const color of tokens.colors) {
    out.push(`| \`${color.hex}\` | ${color.alpha} | ${color.count} |`)
  }
  out.push('')

  out.push('## Typography')
  out.push('')
  out.push('| Font | Weight | Size px | Size rem | Line-height px | Letter-spacing | Case | Uses |')
  out.push('| --- | --- | --- | --- | --- | --- | --- | --- |')
  for (const t of tokens.typography) {
    out.push(
      `| ${t.font} | ${t.weight} | ${t.size} | ${toRem(t.size, remBase)} | ${t.lineHeightPx ?? '—'} | ` +
        `${t.letterSpacing ?? 0} | ${t.case} | ${t.count} |`,
    )
  }
  out.push('')

  out.push('## Spacing (auto-layout gaps + padding)')
  out.push('')
  out.push('| px | rem | Uses |')
  out.push('| --- | --- | --- |')
  for (const s of tokens.spacing) {
    out.push(`| ${s.px} | ${toRem(s.px, remBase)} | ${s.count} |`)
  }
  out.push('')

  if (tokens.radii.length) {
    out.push('## Corner radius')
    out.push('')
    out.push('| px | rem | Uses |')
    out.push('| --- | --- | --- |')
    for (const r of tokens.radii) {
      out.push(`| ${r.px} | ${toRem(r.px, remBase)} | ${r.count} |`)
    }
    out.push('')
  }

  out.push('## Fonts referenced')
  out.push('')
  out.push(tokens.fonts.length ? tokens.fonts.map((f) => `- ${f}`).join('\n') : '_none_')
  out.push('')

  out.push('## Layout tree')
  out.push('')
  out.push('```')
  out.push(...renderTree(root))
  out.push('```')
  out.push('')

  return out.join('\n')
}
