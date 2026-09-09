'use client'

import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ROUTES from '@/configs/routes'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import type { ProjectDetail } from '@/modules/project-detail/data/project-details-data'

import 'swiper/css'

const PER_GROUP = {
  narrow: 1,
  tablet: 2,
  wide: 3,
} as const

export function OtherProjects({ items }: { items: ProjectDetail[] }) {
  const reduce = useReducedMotion()
  const swiperRef = useRef<SwiperType | null>(null)
  const hoverRef = useRef(false)
  const focusRef = useRef(false)
  const [snapCount, setSnapCount] = useState(() => Math.ceil(items.length / PER_GROUP.wide))
  const [snapIndex, setSnapIndex] = useState(0)

  const syncAutoplay = useCallback(() => {
    const autoplay = swiperRef.current?.autoplay
    if (!autoplay) return

    if (hoverRef.current || focusRef.current) autoplay.stop()
    else autoplay.start()
  }, [])

  const syncSnaps = useCallback((swiper: SwiperType) => {
    setSnapCount(Math.max(swiper.snapGrid.length, 1))
    setSnapIndex(swiper.snapIndex)
  }, [])

  return (
    <section
      data-figma='64:2792'
      className='w-full bg-black/5 p-[2rem] xsm:p-4'
    >
      <div
        data-figma='64:2793'
        className='flex w-full flex-col gap-[2rem] py-[3rem] xsm:gap-6 xsm:py-8'
      >
        <header
          data-figma='64:2794'
          className='flex items-end justify-between gap-[2rem] pb-[1rem] xsm:flex-col xsm:items-start xsm:gap-4'
        >
          <div className='flex items-baseline'>
            <span
              aria-hidden
              className='font-inter text-[2.25rem] leading-[2.5rem] font-light text-[#D1D5DB]'
            >
              03.
            </span>
            <span className='ml-[0.5rem] flex flex-col'>
              <h2 className='font-inter text-[1.875rem] leading-[2.25rem] font-bold text-[#111827]'>
                Các Dự Án Khác
              </h2>
              <span
                aria-hidden
                className='mt-[0.375rem] h-[0.125rem] w-full bg-[#FACC15]'
              />
            </span>
          </div>

          <Link
            href={ROUTES.projects}
            className='flex shrink-0 items-center gap-[0.75rem] outline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#062B68]'
          >
            <span className='font-inter text-[0.875rem] leading-[1.25rem] font-semibold tracking-[0.04375rem] text-[#1F2937] uppercase'>
              Xem tất cả
            </span>
            <span
              aria-hidden
              className='flex size-[2rem] shrink-0 items-center justify-center bg-[#062B68] text-white xsm:size-11'
            >
              <ArrowRight className='size-[0.765625rem] xsm:size-4' />
            </span>
          </Link>
        </header>

        <div
          className='mx-auto w-[77.499375rem] max-w-full xsm:w-full'
          onMouseEnter={() => {
            hoverRef.current = true
            syncAutoplay()
          }}
          onMouseLeave={() => {
            hoverRef.current = false
            syncAutoplay()
          }}
          onFocusCapture={() => {
            focusRef.current = true
            syncAutoplay()
          }}
          onBlurCapture={() => {
            focusRef.current = false
            syncAutoplay()
          }}
        >
          <Swiper
            modules={[Autoplay, Keyboard]}
            slidesPerView={PER_GROUP.narrow}
            slidesPerGroup={PER_GROUP.narrow}
            spaceBetween={0}
            speed={700}
            rewind
            keyboard={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: PER_GROUP.tablet, slidesPerGroup: PER_GROUP.tablet },
              1025: { slidesPerView: PER_GROUP.wide, slidesPerGroup: PER_GROUP.wide },
            }}
            autoplay={reduce ? false : { delay: 5000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              syncSnaps(swiper)
            }}
            onSnapIndexChange={syncSnaps}
            onBreakpoint={syncSnaps}
            onResize={syncSnaps}
          >
            {items.map((item) => (
              <SwiperSlide key={item.slug}>
                <div className='px-[0.75rem] xsm:px-0'>
                  <Link
                    href={{ pathname: ROUTES.projectDetail, params: { slug: item.slug } }}
                    className='group relative block aspect-[389.33/218.98] w-full overflow-hidden bg-[#E5E7EB] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#062B68]'
                  >
                    <Image
                      src={item.heroImage}
                      alt={item.heroImageAlt}
                      fill
                      sizes='(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 25vw'
                      className='object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 motion-reduce:transition-none'
                    />
                    <span
                      aria-hidden
                      className='absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]'
                    />

                    <div className='absolute inset-0 flex flex-col justify-end p-[1.5rem] xsm:p-4'>
                      <span className='flex items-baseline pb-[0.25rem]'>
                        <span className='font-inter text-[1.5rem] leading-[2rem] font-bold text-white'>
                          {item.index}.
                        </span>
                        <span className='ml-[0.5rem] flex flex-col'>
                          <span className='font-inter text-[0.875rem] leading-[1.25rem] font-bold tracking-[0.021875rem] text-[#FACC15] uppercase'>
                            {item.badge}
                          </span>
                          <span
                            aria-hidden
                            className='mt-[0.125rem] h-[0.125rem] w-full bg-[#FACC15]'
                          />
                        </span>
                      </span>
                      <h3 className='pt-[0.5rem] font-inter text-[1.125rem] leading-[1.75rem] font-bold text-white'>
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          data-figma='64:2846'
          className='flex w-full flex-wrap items-center justify-center gap-[0.5rem] xsm:gap-0'
        >
          {Array.from({ length: snapCount }, (_, i) => (
            <button
              key={i}
              type='button'
              aria-label={`Xem nhóm dự án ${i + 1}`}
              aria-current={i === snapIndex}
              onClick={() => {
                const swiper = swiperRef.current
                if (!swiper) return

                swiper.slideTo(i * Number(swiper.params.slidesPerGroup ?? 1))
              }}
              className='flex size-[0.5rem] cursor-pointer items-center justify-center xsm:size-6'
            >
              <span
                className={cn(
                  'block size-[0.5rem] rounded-full transition-colors',
                  i === snapIndex ? 'bg-[#1F2937]' : 'bg-[#D1D5DB]',
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
