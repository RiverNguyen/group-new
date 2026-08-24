export function updateSegmentProgress(
  root: HTMLDivElement | null,
  activeIndex: number,
  progress: number,
) {
  if (!root) return

  const parent = root.parentElement
  if (!parent) return

  const total = Number(root.dataset.total ?? 0)
  const arcLength = Number(root.dataset.arc ?? 0)
  const circumference = Number(root.dataset.circumference ?? 0)
  if (!total || !arcLength || !circumference) return

  const clamped = Math.min(Math.max(progress, 0), 1)

  // Slide N chỉ fill đoạn N; các đoạn trước giữ full, đoạn sau để trống.
  parent.querySelectorAll<SVGCircleElement>('[data-progress-segment]').forEach((circle, index) => {
    const fill = index < activeIndex ? 1 : index === activeIndex ? clamped : 0
    const drawn = arcLength * fill
    circle.setAttribute('stroke-dasharray', `${drawn} ${circumference - drawn}`)
  })
}
