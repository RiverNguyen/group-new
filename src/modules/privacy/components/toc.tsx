'use client'

import { useReducedMotion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

import { cn } from '@/lib/utils'
import { PRIVACY_SECTIONS } from '@/modules/privacy/data/privacy-data'

export function PrivacyToc() {
  const t = useTranslations('PrivacyPolicy')
  const reduce = useReducedMotion()
  const scrollerRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [activeId, setActiveId] = useState<string>(PRIVACY_SECTIONS[0].id)
  const [edge, setEdge] = useState({ left: false, right: false })
  const [headerOffset, setHeaderOffset] = useState(0)

  useEffect(() => {
    const elements = PRIVACY_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null,
    )

    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .toSorted((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = visible[0]?.target.id
        if (nextId) {
          setActiveId(nextId)
        }
      },
      { rootMargin: '-22% 0px -62% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    for (const element of elements) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) {
      return
    }

    const updateOffset = () => {
      setHeaderOffset(Math.max(0, header.getBoundingClientRect().bottom))
    }

    updateOffset()
    window.addEventListener('scroll', updateOffset, { passive: true })
    window.addEventListener('resize', updateOffset, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateOffset)
      window.removeEventListener('resize', updateOffset)
    }
  }, [])

  useEffect(() => {
    const scroller = scrollerRef.current

    const updateEdge = () => {
      if (!scroller || scroller.scrollWidth <= scroller.clientWidth + 1) {
        setEdge({ left: false, right: false })
        return
      }

      setEdge({
        left: scroller.scrollLeft > 6,
        right: scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 6,
      })
    }

    const activeLink = itemRefs.current[activeId]
    activeLink?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: reduce ? 'auto' : 'smooth',
    })

    updateEdge()
    if (!scroller) {
      return
    }

    scroller.addEventListener('scroll', updateEdge, { passive: true })
    window.addEventListener('resize', updateEdge, { passive: true })

    return () => {
      scroller.removeEventListener('scroll', updateEdge)
      window.removeEventListener('resize', updateEdge)
    }
  }, [activeId, reduce])

  return (
    <nav
      aria-label={t('toc.title')}
      style={{ '--privacy-toc-top': `${headerOffset}px` } as CSSProperties}
      className={cn(
        'sticky top-[6.4rem] self-start lg:w-[280px] xlg:top-[var(--privacy-toc-top)] xlg:z-20 xlg:border-b xlg:border-[#E6EAEF] xlg:bg-white/94 xlg:py-3.5 xlg:backdrop-blur-md tablet:px-[40px] xsm:px-4',
        // Dùng biến thể motion-safe thay cho `!reduce &&`: className suy từ useReducedMotion()
        // sẽ khác nhau giữa server (trả null) và client, gây hydration mismatch.
        'xlg:motion-safe:transition-[top] xlg:motion-safe:duration-500',
      )}
    >
      <p className='mb-5 font-semibold tracking-[0.14em] text-[0.72rem] text-[#BB9650] uppercase xlg:sr-only'>
        {t('toc.title')}
      </p>

      <div className='relative'>
        <div
          aria-hidden='true'
          className={cn(
            'pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-7 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 xlg:block',
            edge.left ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div
          aria-hidden='true'
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-7 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 xlg:block',
            edge.right ? 'opacity-100' : 'opacity-0',
          )}
        />

        <ul
          ref={scrollerRef}
          data-lenis-prevent
          className='hidden_scroll flex flex-col gap-0.5 xlg:flex-row xlg:gap-2 xlg:overflow-x-auto xlg:overscroll-x-contain xlg:scroll-px-1 xlg:[-webkit-overflow-scrolling:touch]'
        >
          {PRIVACY_SECTIONS.map((section) => {
            const isActive = activeId === section.id

            return (
              <li
                key={section.id}
                className='xlg:shrink-0'
              >
                <a
                  ref={(node) => {
                    itemRefs.current[section.id] = node
                  }}
                  href={`#${section.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'flex items-start gap-3 border-l-2 border-transparent py-2.5 pl-3 font-work-sans text-[0.88rem] leading-[1.45] transition-colors duration-300',
                    'xlg:h-9 xlg:items-center xlg:gap-1.5 xlg:rounded-full xlg:border xlg:py-0 xlg:pl-2.5 xlg:pr-3 xlg:text-[12px] xlg:leading-none xlg:whitespace-nowrap',
                    isActive
                      ? 'border-[#BB9650] font-semibold text-[#001E40] xlg:border-[#001E40] xlg:bg-[#001E40] xlg:text-white'
                      : 'text-[#5B6570] hover:text-[#001E40] xlg:border-[#D7DEE6] xlg:hover:border-[#001E40]',
                  )}
                >
                  <span
                    className={cn(
                      'mt-0.5 shrink-0 font-manrope text-[0.7rem] font-bold tabular-nums tracking-[0.04em] text-[#BB9650]',
                      'xlg:mt-0 xlg:text-[11px] xlg:text-current',
                    )}
                  >
                    {section.number}
                  </span>
                  <span>{t(section.labelKey)}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
