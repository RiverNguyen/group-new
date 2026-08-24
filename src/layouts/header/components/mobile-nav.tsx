'use client'

import { ChevronDown, Phone, Search } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { Link } from '@/i18n/navigation'
import { HEADER_NAV, HEADER_SOCIAL, type NavItem } from '@/layouts/header/components/header-data'
import { FacebookIcon } from '@/layouts/header/components/icons'
import { SocialButton } from '@/layouts/header/components/social-button'
import { cn } from '@/lib/utils'

const slideTransition = { duration: 0.34, ease: [0.32, 0.72, 0, 1] as const }
const accordionTransition = { duration: 0.28, ease: [0.32, 0.72, 0, 1] as const }

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const hasChildren = Boolean(item.children?.length)
  const [open, setOpen] = useState(false)

  if (!hasChildren) {
    return (
      <div className='border-b border-white/10'>
        <Link
          href={item.href as '/'}
          className='block py-3.5 font-manrope text-sm font-semibold tracking-[0.04em] text-white uppercase'
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      </div>
    )
  }

  return (
    <div className='border-b border-white/10'>
      <button
        type='button'
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className='flex w-full items-center justify-between gap-3 py-3.5 font-manrope text-sm font-semibold tracking-[0.04em] text-white uppercase'
      >
        {item.label}
        <ChevronDown
          className={cn(
            'size-4 shrink-0 opacity-80 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
            open && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key='children'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={accordionTransition}
            className='overflow-hidden'
          >
            <div className='flex flex-col gap-2.5 pb-3.5 pl-3'>
              {item.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href as '/'}
                  className='font-manrope text-sm text-white/75 transition-colors hover:text-[#F4B700]'
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return

    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    const { body } = document
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollbar > 0) {
      body.style.paddingRight = `${scrollbar}px`
    }

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
    }
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <div
          key='mobile-nav'
          className='fixed inset-x-0 top-[4.6rem] bottom-0 z-40'
        >
          <motion.button
            type='button'
            aria-label='Đóng menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute inset-0 bg-black/45'
            onClick={onClose}
          />

          <motion.aside
            role='dialog'
            aria-modal='true'
            aria-label='Menu'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={slideTransition}
            className='absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-[#0B2148] shadow-2xl'
          >
            <div className='flex flex-1 flex-col overflow-y-auto px-4 pb-6 pt-2'>
              <nav
                className='flex flex-col'
                aria-label='Mobile'
              >
                {HEADER_NAV.map((item) => (
                  <MobileNavItem
                    key={item.href}
                    item={item}
                    onNavigate={onClose}
                  />
                ))}
              </nav>

              <div className='mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-6'>
                <div className='flex items-center gap-3'>
                  {HEADER_SOCIAL.map((item) => (
                    <SocialButton
                      key={item.id}
                      href={item.href}
                      label={item.label}
                    >
                      {item.id === 'facebook' ? (
                        <FacebookIcon className='size-4' />
                      ) : (
                        <Phone className='size-3.5 fill-current' />
                      )}
                    </SocialButton>
                  ))}
                  <button
                    type='button'
                    aria-label='Tìm kiếm'
                    className='inline-flex size-9 items-center justify-center rounded-full text-white'
                  >
                    <Search className='size-5' />
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
