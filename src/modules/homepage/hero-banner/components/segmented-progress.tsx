import type { RefObject } from 'react'

import { GOLD } from '@/modules/homepage/hero-banner/constants'

export function SegmentedProgress({
  current,
  total,
  progressRef,
}: {
  current: number
  total: number
  progressRef: RefObject<HTMLDivElement | null>
}) {
  const size = 120
  const stroke = 2.5
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const gapLength = circumference * 0.05
  const segmentLength = circumference / total
  const arcLength = Math.max(segmentLength - gapLength, 0)

  return (
    <div className='relative size-[7.5rem] shrink-0 xsm:size-[4.75rem]'>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className='absolute inset-0 size-full'
        aria-hidden
      >
        {Array.from({ length: total }, (_, index) => {
          const rotation = -90 + (360 / total) * index + ((gapLength / circumference) * 360) / 2

          return (
            <g
              key={index}
              transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill='none'
                stroke='rgba(255,255,255,0.22)'
                strokeWidth={stroke}
                strokeDasharray={`${arcLength} ${circumference}`}
                strokeLinecap='butt'
              />
              <circle
                data-progress-segment={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill='none'
                stroke={GOLD}
                strokeWidth={stroke}
                strokeDasharray={`0 ${circumference}`}
                strokeLinecap='butt'
              />
            </g>
          )
        })}
      </svg>

      <div
        ref={progressRef}
        className='pointer-events-none absolute inset-0'
        data-arc={arcLength}
        data-circumference={circumference}
        data-total={total}
        hidden
      />

      <div className='absolute inset-0 flex flex-col items-center justify-center font-manrope leading-none'>
        <span className='text-[2.5rem] font-semibold text-[#EBD08B] xsm:text-[1.5rem]'>
          {current}
        </span>
        <span className='mt-0.5 text-[0.875rem] tracking-wide text-white/65 xsm:text-[0.7rem]'>
          / {total}
        </span>
      </div>
    </div>
  )
}
