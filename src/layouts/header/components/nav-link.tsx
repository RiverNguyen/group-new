'use client'

import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import { Link } from '@/i18n/navigation'
import type { NavItem } from '@/layouts/header/components/header-data'
import { cn } from '@/lib/utils'

const NAV_CLOSE_DELAY = 150

export function NavLink({ item }: { item: NavItem }) {
  const hasChildren = Boolean(item.children?.length)
  const [open, setOpen] = useState(false)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimeout()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimeout()
    closeTimeout.current = setTimeout(() => setOpen(false), NAV_CLOSE_DELAY)
  }

  useEffect(() => clearCloseTimeout, [])

  if (!hasChildren) {
    return (
      <Link
        href={item.href as '/'}
        className='font-inter text-[0.75rem] font-semibold whitespace-nowrap text-white uppercase leading-[1.25rem] tracking-[0.04375rem] transition-colors hover:text-[#F4B700]'
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div
      className='relative flex items-center'
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type='button'
        aria-expanded={open}
        onFocus={openMenu}
        onBlur={scheduleClose}
        onClick={() => (open ? setOpen(false) : openMenu())}
        className='inline-flex items-center gap-1 font-inter text-[0.75rem] uppercase font-semibold whitespace-nowrap text-white leading-[1.25rem] tracking-[0.04375rem] outline-none  hover:text-[#F4B700] aria-expanded:text-[#F4B700] transition-all duration-300 hover:cursor-pointer'
      >
        {item.label}
        <ChevronDown
          className={cn(
            'size-3.5 opacity-80 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className='absolute top-full left-0 z-50 mt-2 overflow-hidden text-white shadow-xl'
            style={{
              background: 'linear-gradient(84deg, #001E40 0%, #036 100%)',
            }}
          >
            {item.children?.map((child) => (
              <Link
                key={child.label}
                href={child.href as '/'}
                className='block w-full py-[0.3125rem] pr-[2.0625rem] pl-[1.1875rem] transition-all duration-300 font-inter font-medium text-[0.75rem] whitespace-nowrap text-white  hover:bg-white/5 hover:text-[#F4B700]'
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
