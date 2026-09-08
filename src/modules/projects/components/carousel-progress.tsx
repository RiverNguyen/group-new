import type { RefObject } from 'react'

/**
 * Đặt tiến độ thanh ngang bằng cách ghi thẳng transform, không qua state: hàm này chạy mỗi
 * khung hình theo autoplay của Swiper nên re-render React ở nhịp đó là lãng phí.
 */
export function setBarProgress(bar: HTMLSpanElement | null, ratio: number) {
  if (!bar) return

  bar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`
}

export function CarouselProgress({ barRef }: { barRef: RefObject<HTMLSpanElement | null> }) {
  return (
    <span
      aria-hidden
      className='absolute inset-x-0 bottom-0 z-20 h-[0.1875rem] bg-[#1E2020]/50'
    >
      <span
        ref={barRef}
        className='block h-full origin-left scale-x-0 bg-gold shadow-[0_0_10px_rgba(244,183,0,0.5)]'
      />
    </span>
  )
}
