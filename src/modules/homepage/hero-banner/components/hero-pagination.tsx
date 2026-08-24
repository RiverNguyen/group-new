import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { RefObject } from 'react'

import { SegmentedProgress } from '@/modules/homepage/hero-banner/components/segmented-progress'

function NavRail() {
  return (
    <div
      className='relative flex h-[3rem] w-3 shrink-0 items-center justify-center xsm:hidden'
      aria-hidden
    >
      <span className='absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/35' />
      <span className='relative z-10 size-[0.4375rem] rotate-45 bg-[#EBD08B] shadow-[0_0_0.625rem_rgba(235,208,139,0.85)]' />
    </div>
  )
}

export function HeroPagination({
  current,
  total,
  progressRef,
  onPrev,
  onNext,
}: {
  current: number
  total: number
  progressRef: RefObject<HTMLDivElement | null>
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className='flex items-center gap-4 xsm:gap-2'>
      <NavRail />
      <button
        type='button'
        aria-label='Slide trước'
        onClick={onPrev}
        className='flex size-[3rem] shrink-0 items-center justify-center rounded-md bg-black/45 text-white transition-colors hover:cursor-pointer hover:bg-black/60 xsm:size-[2.5rem]'
      >
        <ChevronLeft
          className='size-6 xsm:size-5'
          strokeWidth={1.75}
        />
      </button>

      <SegmentedProgress
        current={current}
        total={total}
        progressRef={progressRef}
      />

      <button
        type='button'
        aria-label='Slide sau'
        onClick={onNext}
        className='flex size-[3rem] shrink-0 items-center justify-center rounded-md bg-black/45 text-white transition-colors hover:cursor-pointer hover:bg-black/60 xsm:size-[2.5rem]'
      >
        <ChevronRight
          className='size-6 xsm:size-5'
          strokeWidth={1.75}
        />
      </button>
      <NavRail />
    </div>
  )
}
