'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

type SectorNavButtonProps = {
  direction: 'prev' | 'next'
  onClick: () => void
  className?: string
}

export function SectorNavButton({ direction, onClick, className }: SectorNavButtonProps) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

  return (
    <button
      type='button'
      aria-label={direction === 'prev' ? 'Slide trước' : 'Slide sau'}
      onClick={onClick}
      className={`absolute top-1/2 z-20 flex size-[2.25rem] -translate-y-1/2 items-center justify-center bg-[#F4B700] text-[#654A00] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_4px_6px_-4px_rgba(0,0,0,0.10)] transition-opacity hover:cursor-pointer hover:opacity-90 xsm:size-[2rem] ${className ?? ''}`}
      style={{
        [direction === 'prev' ? 'left' : 'right']: '-1.25rem',
      }}
    >
      <Icon
        className='size-5'
        strokeWidth={2.25}
      />
    </button>
  )
}
