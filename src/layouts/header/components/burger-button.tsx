'use client'

import { cn } from '@/lib/utils'

const lineEase = 'duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]'

export function BurgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type='button'
      className='relative inline-flex size-10 items-center justify-center rounded-md text-white'
      aria-label={open ? 'Đóng menu' : 'Mở menu'}
      aria-expanded={open}
      onClick={onClick}
    >
      <span className='relative block h-3.5 w-5'>
        <span
          className={cn(
            'absolute left-0 block h-[1.5px] w-full origin-center rounded-full bg-current transition-all',
            lineEase,
            open ? 'top-[6px] rotate-45' : 'top-0',
          )}
        />
        <span
          className={cn(
            'absolute top-[6px] left-0 block h-[1.5px] w-full origin-center rounded-full bg-current transition-all',
            lineEase,
            open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
          )}
        />
        <span
          className={cn(
            'absolute left-0 block h-[1.5px] w-full origin-center rounded-full bg-current transition-all',
            lineEase,
            open ? 'top-[6px] -rotate-45' : 'top-[12px]',
          )}
        />
      </span>
    </button>
  )
}
