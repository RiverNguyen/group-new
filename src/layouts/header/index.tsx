'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

import { Container } from '@/components/site/container'
import ROUTES from '@/configs/routes'
import { HEADER_BG, useScrollHeader } from '@/hooks/use-scroll-header'
import { Link, usePathname } from '@/i18n/navigation'
import { BurgerButton } from '@/layouts/header/components/burger-button'
import { HeaderActions } from '@/layouts/header/components/header-actions'
import { HEADER_BRAND, HEADER_NAV } from '@/layouts/header/components/header-data'
import { LanguageSwitcher } from '@/layouts/header/components/language-switcher'
import { MobileNav } from '@/layouts/header/components/mobile-nav'
import { NavLink } from '@/layouts/header/components/nav-link'
import { cn } from '@/lib/utils'

const SOLID_HEADER_PATHNAMES: string[] = [ROUTES.articleDetail]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()
  const solidAtTop = SOLID_HEADER_PATHNAMES.includes(pathname)
  const { isScrolled } = useScrollHeader(headerRef, { solidAtTop })

  return (
    <>
      <header
        ref={headerRef}
        style={solidAtTop ? { background: HEADER_BG } : undefined}
        className={cn(
          'fixed top-0 z-50 w-full bg-transparent transition-[background,transform] duration-500',
          isScrolled && 'shadow-[0_8px_24px_rgba(0,0,0,0.18)]',
        )}
      >
        <Container className='flex h-[4.6rem] items-center justify-between gap-4'>
          <Link
            href={HEADER_BRAND.href}
            className='flex shrink-0 items-center gap-2.5'
          >
            <Image
              src='/header/logo.svg'
              alt={HEADER_BRAND.name}
              width={240}
              height={76}
              loading='eager'
              className='h-[3.5rem] w-auto object-cover xsm:h-[2.5rem]'
            />
          </Link>

          <nav
            className='flex flex-1 items-center justify-center gap-5 xsm:hidden'
            aria-label='Main'
          >
            {HEADER_NAV.map((item) => (
              <NavLink
                key={item.label}
                item={item}
              />
            ))}
          </nav>

          <HeaderActions />

          <div className='hidden items-center gap-1 xsm:flex'>
            <LanguageSwitcher />
            <BurgerButton
              open={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            />
          </div>
        </Container>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  )
}
