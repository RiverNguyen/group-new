'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const SCROLL_BG_THRESHOLD = 24
const SCROLL_DIR_THRESHOLD = 15

export const HEADER_BG = 'linear-gradient(84deg, #001E40 0%, #036 100%), #062B68'

type ScrollHeaderOptions = {
  solidAtTop?: boolean
}

export function useScrollHeader(
  headerRef: React.RefObject<HTMLElement | null>,
  { solidAtTop = false }: ScrollHeaderOptions = {},
) {
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const updateScrollDirection = useCallback(() => {
    if (!headerRef.current || typeof window === 'undefined') return

    const scrollY = window.scrollY

    if (!ticking.current) {
      requestAnimationFrame(() => {
        const header = headerRef.current
        if (!header) return

        const scrolled = scrollY > SCROLL_BG_THRESHOLD
        setIsScrolled((prev) => (prev === scrolled ? prev : scrolled))
        header.style.background = scrolled || solidAtTop ? HEADER_BG : 'transparent'

        const direction = scrollY > lastScrollY.current ? 'down' : 'up'

        if (Math.abs(scrollY - lastScrollY.current) > SCROLL_DIR_THRESHOLD) {
          // Chỉ ẩn khi đã scroll xuống và đang đi xuống
          if (direction === 'down' && scrolled) {
            header.style.transform = 'translateY(-150%)'
          } else {
            header.style.transform = 'translateY(0)'
          }
          lastScrollY.current = scrollY > 0 ? scrollY : 0
        }

        if (!scrolled) {
          header.style.transform = 'translateY(0)'
          lastScrollY.current = 0
        }

        ticking.current = false
      })

      ticking.current = true
    }
  }, [headerRef, solidAtTop])

  useEffect(() => {
    if (typeof window === 'undefined') return

    updateScrollDirection()
    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [updateScrollDirection])

  return { headerRef, isScrolled }
}
