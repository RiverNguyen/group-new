#!/usr/bin/env node

import { readFileSync } from 'node:fs'

const BROWSER_SNIPPET = `() => {
  const html = document.documentElement
  const prev = html.style.scrollbarWidth
  html.style.scrollbarWidth = 'none'
  html.getBoundingClientRect()
  const rows = [...document.querySelectorAll('[data-figma]')].map((el) => {
    const r = el.getBoundingClientRect()
    const p = el.parentElement.getBoundingClientRect()
    return { node: el.dataset.figma, w: r.width, h: r.height, dx: r.left - p.left, dy: r.top - p.top }
  })
  html.style.scrollbarWidth = prev
  return rows
}`

const [, , slug, toleranceArg] = process.argv

if (slug === '--snippet') {
  process.stdout.write(BROWSER_SNIPPET + '\n')
  process.exit(0)
}

if (!slug) {
  console.error('Dùng: echo <json> | node scripts/figma-measure.mjs <slug> [tolerancePx]')
  console.error('      node scripts/figma-measure.mjs --snippet')
  process.exit(2)
}

const TOLERANCE = Number(toleranceArg ?? 2)
const spec = JSON.parse(readFileSync(`plans/figma/${slug}.json`, 'utf8'))

/** id -> { node, parent } để tra nhanh cả node lẫn khối cha của nó */
const index = new Map()
;(function walk(node, parent) {
  index.set(node.id, { node, parent })
  for (const child of node.children ?? []) walk(child, node)
})(spec.root, null)

const measured = JSON.parse(readFileSync(0, 'utf8'))
if (!Array.isArray(measured) || measured.length === 0) {
  console.error('FAIL: stdin không có block [data-figma] nào. Trang đã gắn thuộc tính chưa?')
  process.exit(1)
}

const round = (n) => Math.round(n * 10) / 10

/** In một dòng ra stdout — với CLI này stdout là đầu ra chính, không phải log gỡ rối. */
const out = (text = '') => process.stdout.write(`${text}\n`)

function median(values) {
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

const rawDy = measured
  .map((m) => {
    const entry = index.get(m.node)
    if (!entry) return null
    const { node, parent } = entry
    return m.dy - (parent ? node.frame.y - parent.frame.y : 0)
  })
  .filter((v) => v !== null)

const baselineDy = rawDy.length ? median(rawDy) : 0

const rows = []
let failed = 0

for (const m of measured) {
  const entry = index.get(m.node)
  if (!entry) {
    rows.push([m.node, '— KHÔNG CÓ TRONG SPEC —', '', '', '', '', 'FAIL'])
    failed++
    continue
  }

  const { node, parent } = entry
  const deltas = {
    w: m.w - node.frame.w,
    h: m.h - node.frame.h,
    dx: m.dx - (parent ? node.frame.x - parent.frame.x : 0),
    dy: m.dy - (parent ? node.frame.y - parent.frame.y : 0) - baselineDy,
  }

  // Gate cứng: chỉ w / h / dx. dy chỉ để tham khảo (xem ghi chú ở `baselineDy`).
  const bad = Object.entries(deltas)
    .filter(([k]) => k !== 'dy')
    .filter(([, d]) => Math.abs(d) > TOLERANCE)
  const dyDrift = Math.abs(deltas.dy) > TOLERANCE
  if (bad.length) failed++

  rows.push([
    m.node,
    node.name.slice(0, 30),
    `${round(m.w)} / ${round(node.frame.w)}`,
    `${round(m.h)} / ${round(node.frame.h)}`,
    `${deltas.dx >= 0 ? '+' : ''}${round(deltas.dx)}`,
    `${deltas.dy >= 0 ? '+' : ''}${round(deltas.dy)}`,
    bad.length
      ? `LỆCH ${bad.map(([k, d]) => `${k}${d > 0 ? '+' : ''}${round(d)}`).join(' ')}`
      : dyDrift
        ? 'ok (dy trôi, xem ghi chú)'
        : 'ok',
  ])
}

const header = ['node', 'tên', 'w đo/spec', 'h đo/spec', 'Δdx', 'Δdy', 'kết quả']
const widths = header.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)))
const line = (cells) => cells.map((c, i) => String(c).padEnd(widths[i])).join('  ')

out(
  `Viewport 1600×900 · dung sai ±${TOLERANCE}px · ${measured.length} block · ` +
    `mốc Δdy = ${round(baselineDy)}px (trung vị, đã trừ khỏi mọi Δdy)\n` +
    'Gate cứng: w / h / dx. Δdy chỉ để tham khảo.\n',
)
out(line(header))
out(widths.map((w) => '-'.repeat(w)).join('  '))
for (const r of rows) out(line(r))
out(`\n${measured.length - failed}/${measured.length} block đạt (theo w / h / dx)`)

process.exit(failed ? 1 : 0)
