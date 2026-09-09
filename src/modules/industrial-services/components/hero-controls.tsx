'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { RefObject } from 'react'

/** Bán kính vòng progress trong hộp 128×128 — Figma vẽ vector 122.88 nên r = 61.44 */
const RING_RADIUS = 61.44
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

export function setRingProgress(circle: SVGCircleElement | null, ratio: number) {
  if (!circle) return

  const drawn = RING_CIRCUMFERENCE * Math.min(Math.max(ratio, 0), 1)
  circle.setAttribute('stroke-dasharray', `${drawn} ${RING_CIRCUMFERENCE - drawn}`)
}

type HeroControlsProps = {
  /** Số slide đang xem, đã +1 để hiển thị cho người đọc */
  slideIndex: number
  slideTotal: number
  progressRef: RefObject<SVGCircleElement | null>
  onPrev: () => void
  onNext: () => void
}

export function HeroControls({
  slideIndex,
  slideTotal,
  progressRef,
  onPrev,
  onNext,
}: HeroControlsProps) {
  return (
    <div className='flex h-[10.25rem] w-[19.125rem] items-start justify-center gap-[2rem] xsm:hidden'>
      <ArrowGroup
        direction='prev'
        onClick={onPrev}
      />

      {/* Circular Progress Outline [128×128] */}
      <div className='relative flex size-[8rem] items-center justify-center'>
        <svg
          viewBox='0 0 128 128'
          className='absolute inset-0 size-full -rotate-90'
          aria-hidden
        >
          <circle
            cx='64'
            cy='64'
            r={RING_RADIUS}
            fill='none'
            stroke='#444650'
            strokeWidth='1.28'
          />
          <circle
            ref={progressRef}
            cx='64'
            cy='64'
            r={RING_RADIUS}
            fill='none'
            stroke='#FFD887'
            strokeWidth='2.56'
            strokeLinecap='round'
            strokeDasharray={`0 ${RING_CIRCUMFERENCE}`}
          />
        </svg>

        <p
          aria-live='polite'
          className='relative flex flex-col items-center'
        >
          <span className='font-arial text-[3rem] leading-[3rem] font-bold tracking-[-0.03rem] text-[#FFD887]'>
            {slideIndex}
          </span>
          <span className='mt-1 font-inter text-[0.625rem] leading-[0.9375rem] tracking-[0.0625rem] text-[#C4C6D1]/70'>
            / {slideTotal}
          </span>
        </p>
      </div>

      <ArrowGroup
        direction='next'
        onClick={onNext}
      />
    </div>
  )
}

/** Một cụm mũi tên [57×164]: nút 40×40 và một gạch dọc 1×64 có viên kim cương ở giữa */
function ArrowGroup({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

  const divider = (
    <span
      aria-hidden
      className='relative flex h-[4rem] w-px items-center justify-center bg-[linear-gradient(180deg,#444650_0%,#FFD887_50%,#444650_100%)]'
    >
      <span className='absolute size-[0.5rem] rotate-45 bg-[#FFD887] shadow-[0_0_8px_rgba(255,216,135,0.6)]' />
    </span>
  )

  const button = (
    <button
      type='button'
      aria-label={direction === 'prev' ? 'Slide hero trước' : 'Slide hero sau'}
      onClick={onClick}
      className='flex size-[2.5rem] items-center justify-center rounded-[0.75rem] border border-[#444650]/50 bg-[#1E2020]/20 backdrop-blur-sm transition-colors hover:cursor-pointer hover:border-[#FFD887]/60 hover:bg-[#1E2020]/50'
    >
      <Icon className='size-4 text-[#E2E2E2]' />
    </button>
  )

  return (
    <span className='flex h-[10.25rem] w-[3.5625rem] items-center justify-center gap-[1rem]'>
      {direction === 'prev' ? (
        <>
          {divider}
          {button}
        </>
      ) : (
        <>
          {button}
          {divider}
        </>
      )}
    </span>
  )
}
