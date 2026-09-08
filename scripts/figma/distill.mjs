const round = (value, digits = 2) => {
  const factor = 10 ** digits
  return Math.round(value * factor) / factor
}

/** The project renders 1rem = 1vw, so px values are divided by a calibrated base. */
export const toRem = (px, base) => Number((px / base).toFixed(4))

/** Figma stores colour channels as 0..1 floats. */
function toHex({ r, g, b }) {
  const channel = (value) =>
    Math.round(value * 255)
      .toString(16)
      .padStart(2, '0')

  return `#${channel(r)}${channel(g)}${channel(b)}`.toUpperCase()
}

function describePaint(paint) {
  if (paint.visible === false) return null

  const layerOpacity = paint.opacity ?? 1

  if (paint.type === 'SOLID') {
    return {
      type: 'solid',
      hex: toHex(paint.color),
      alpha: round((paint.color.a ?? 1) * layerOpacity, 3),
    }
  }

  if (paint.type.startsWith('GRADIENT')) {
    return {
      type: paint.type.toLowerCase(),
      stops: (paint.gradientStops ?? []).map((stop) => ({
        at: round(stop.position, 3),
        hex: toHex(stop.color),
        alpha: round((stop.color.a ?? 1) * layerOpacity, 3),
      })),
    }
  }

  if (paint.type === 'IMAGE') {
    return { type: 'image', imageRef: paint.imageRef, scaleMode: paint.scaleMode }
  }

  return { type: paint.type.toLowerCase() }
}

function describeLayout(node) {
  if (!node.layoutMode || node.layoutMode === 'NONE') return null

  return {
    dir: node.layoutMode === 'HORIZONTAL' ? 'row' : 'col',
    gap: node.itemSpacing ?? 0,
    padding: [
      node.paddingTop ?? 0,
      node.paddingRight ?? 0,
      node.paddingBottom ?? 0,
      node.paddingLeft ?? 0,
    ],
    justify: node.primaryAxisAlignItems ?? 'MIN',
    align: node.counterAxisAlignItems ?? 'MIN',
    wrap: node.layoutWrap ?? 'NO_WRAP',
    sizing: {
      primary: node.primaryAxisSizingMode ?? null,
      counter: node.counterAxisSizingMode ?? null,
    },
  }
}

function describeText(node) {
  if (node.type !== 'TEXT') return null

  const style = node.style ?? {}
  const overrides = node.styleOverrideTable ?? {}

  return {
    characters: node.characters ?? '',
    font: style.fontFamily ?? null,
    weight: style.fontWeight ?? null,
    size: style.fontSize ?? null,
    lineHeightPx: style.lineHeightPx == null ? null : round(style.lineHeightPx),
    lineHeightPct:
      style.lineHeightPercentFontSize == null ? null : round(style.lineHeightPercentFontSize, 1),
    letterSpacing: style.letterSpacing == null ? null : round(style.letterSpacing, 3),
    case: style.textCase ?? 'ORIGINAL',
    decoration: style.textDecoration ?? 'NONE',
    align: style.textAlignHorizontal ?? null,
    // Mixed runs cannot collapse into one CSS rule; flag them so they get eyes on.
    mixed: Object.keys(overrides).length > 0,
  }
}

function describeEffects(node) {
  return (node.effects ?? [])
    .filter((effect) => effect.visible !== false)
    .map((effect) => ({
      type: effect.type,
      hex: effect.color ? toHex(effect.color) : null,
      alpha: effect.color ? round(effect.color.a ?? 1, 3) : null,
      offset: effect.offset ? [round(effect.offset.x), round(effect.offset.y)] : null,
      blur: effect.radius == null ? null : round(effect.radius),
      spread: effect.spread == null ? null : round(effect.spread),
    }))
}

function describeRadius(node) {
  if (Array.isArray(node.rectangleCornerRadii)) {
    return node.rectangleCornerRadii.map((value) => round(value))
  }
  if (node.cornerRadius != null) return round(node.cornerRadius)
  return null
}

/** Rebases absolute canvas coordinates onto the pulled root frame. */
function rebaseFrame(box, origin) {
  return {
    x: round(box.x - origin.x),
    y: round(box.y - origin.y),
    w: round(box.width),
    h: round(box.height),
  }
}

/**
 * Reduces one Figma node tree to the properties a UI implementation actually consumes,
 * with coordinates rebased onto the pulled root frame so they read as layout offsets.
 */
export function distillNode(node, { origin, remBase }) {
  const box = node.absoluteBoundingBox
  const frame = box ? rebaseFrame(box, origin) : null

  const fills = (node.fills ?? []).map(describePaint).filter(Boolean)
  const strokes = (node.strokes ?? []).map(describePaint).filter(Boolean)
  const effects = describeEffects(node)
  const layout = describeLayout(node)
  const text = describeText(node)
  const radius = describeRadius(node)

  const out = {
    id: node.id,
    name: node.name,
    type: node.type,
    ...(node.visible === false && { hidden: true }),
    ...(frame && { frame, rem: { w: toRem(frame.w, remBase), h: toRem(frame.h, remBase) } }),
    ...(layout && { layout }),
    ...(fills.length && { fills }),
    ...(strokes.length && { strokes, strokeWeight: round(node.strokeWeight ?? 0) }),
    ...(radius != null && { radius }),
    ...(effects.length && { effects }),
    ...(node.opacity != null && node.opacity !== 1 && { opacity: round(node.opacity, 3) }),
    ...(node.clipsContent && { clipsContent: true }),
    ...(text && { text }),
    ...(node.componentId && { componentId: node.componentId }),
  }

  const children = (node.children ?? []).map((child) => distillNode(child, { origin, remBase }))
  if (children.length) out.children = children

  return out
}

/** Walks a distilled tree and aggregates the recurring values worth naming as tokens. */
export function collectTokens(root) {
  const colors = new Map()
  const typography = new Map()
  const spacing = new Map()
  const radii = new Map()
  const fonts = new Set()
  const imageRefs = new Set()

  const bump = (map, key, sample) => {
    const entry = map.get(key)
    if (entry) entry.count += 1
    else map.set(key, { count: 1, ...sample })
  }

  const addColor = (paint) => {
    if (paint.type === 'solid') {
      bump(colors, `${paint.hex}@${paint.alpha}`, { hex: paint.hex, alpha: paint.alpha })
    }
    for (const stop of paint.stops ?? []) {
      bump(colors, `${stop.hex}@${stop.alpha}`, { hex: stop.hex, alpha: stop.alpha })
    }
    if (paint.imageRef) imageRefs.add(paint.imageRef)
  }

  const walk = (node) => {
    for (const fill of node.fills ?? []) addColor(fill)
    for (const stroke of node.strokes ?? []) addColor(stroke)

    if (node.text?.size) {
      const t = node.text
      if (t.font) fonts.add(t.font)
      bump(
        typography,
        `${t.font}|${t.weight}|${t.size}|${t.lineHeightPx}|${t.letterSpacing}|${t.case}`,
        {
          font: t.font,
          weight: t.weight,
          size: t.size,
          lineHeightPx: t.lineHeightPx,
          letterSpacing: t.letterSpacing,
          case: t.case,
        },
      )
    }

    if (node.layout) {
      if (node.layout.gap) bump(spacing, String(node.layout.gap), { px: node.layout.gap })
      for (const pad of node.layout.padding) {
        if (pad) bump(spacing, String(pad), { px: pad })
      }
    }

    if (typeof node.radius === 'number' && node.radius > 0) {
      bump(radii, String(node.radius), { px: node.radius })
    }
    if (Array.isArray(node.radius)) {
      for (const value of node.radius) {
        if (value > 0) bump(radii, String(value), { px: value })
      }
    }

    for (const child of node.children ?? []) walk(child)
  }

  walk(root)

  const byUsage = (map) => [...map.values()].sort((a, b) => b.count - a.count)

  return {
    colors: byUsage(colors),
    typography: byUsage(typography),
    spacing: byUsage(spacing).sort((a, b) => a.px - b.px),
    radii: byUsage(radii).sort((a, b) => a.px - b.px),
    fonts: [...fonts],
    imageRefs: [...imageRefs],
  }
}
