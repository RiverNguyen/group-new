'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselProgress, setBarProgress } from '@/modules/projects/components/carousel-progress'
import type { FeaturedProject } from '@/modules/projects/data/featured-data'

import 'swiper/css'

export function FeaturedCarousel({ items }: { items: FeaturedProject[] }) {
  const reduce = useReducedMotion()
  const swiperRef = useRef<SwiperType | null>(null)
  const barRef = useRef<HTMLSpanElement | null>(null)
  // Con trỏ và bàn phím có thể cùng lúc "giữ" carousel; nhớ riêng từng nguồn để khi rời chuột
  // mà vẫn đang focus thì autoplay không tự chạy lại.
  const hoverRef = useRef(false)
  const focusRef = useRef(false)

  const syncAutoplay = useCallback(() => {
    const autoplay = swiperRef.current?.autoplay
    if (!autoplay) return

    if (hoverRef.current || focusRef.current) autoplay.stop()
    else autoplay.start()
  }, [])

  return (
    <section
      data-figma='64:2408'
      className='flex w-full flex-col gap-[2.5rem]'
    >
      <header className='flex items-center gap-[1.5rem]'>
        <span
          aria-hidden
          className='h-[0.125rem] w-[4rem] shrink-0 bg-[linear-gradient(90deg,#F4B700_0%,rgba(244,183,0,0.1)_100%)]'
        />
        <h2 className='font-arial text-[2rem] leading-[2.5rem] font-bold tracking-[0.1rem] text-black uppercase xsm:text-[1.375rem] xsm:leading-[1.875rem]'>
          Dự án nổi bật
        </h2>
      </header>

      <div
        data-figma='64:2411'
        className='relative h-[37.815rem] w-full overflow-hidden rounded-[1rem] bg-[#1E2020] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] xsm:h-[24rem]'
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
          slidesPerView={1}
          speed={800}
          loop={items.length > 1}
          keyboard={{ enabled: true }}
          // Người chọn giảm chuyển động thì chỉ còn prev/next; thanh progress cũng đứng yên
          // vì onAutoplayTimeLeft không bắn nữa.
          autoplay={reduce ? false : { delay: 6000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setBarProgress(barRef.current, 0)
          }}
          onSlideChange={() => setBarProgress(barRef.current, 0)}
          onAutoplayTimeLeft={(_swiper, _time, ratio) => setBarProgress(barRef.current, 1 - ratio)}
          className='!absolute inset-0 !h-full w-full'
        >
          {items.map((item, i) => (
            <SwiperSlide
              key={item.id}
              className='relative !h-full w-full overflow-hidden'
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                priority={i === 0}
                sizes='(max-width: 639px) 100vw, 90vw'
                className='object-cover object-center'
              />
              <span
                aria-hidden
                className='absolute inset-0 bg-[#062B68]/20'
              />
              <span
                aria-hidden
                className='absolute inset-0 bg-[linear-gradient(0deg,#121414_0%,rgba(18,20,20,0.4)_50%,rgba(18,20,20,0)_100%)] opacity-90'
              />

              <div className='absolute bottom-[4rem] left-[4rem] flex w-[48rem] max-w-[calc(100%-8rem)] flex-col gap-[0.6875rem] xsm:bottom-8 xsm:left-4 xsm:max-w-[calc(100%-2rem)]'>
                <span className='w-fit rounded-[0.125rem] bg-gold px-[1rem] py-[0.34375rem] font-inter text-[0.75rem] leading-[1rem] font-semibold tracking-[0.075rem] text-[#654A00] uppercase shadow-[0_0_20px_rgba(244,183,0,0.25)]'>
                  {item.chip}
                </span>
                <h3 className='font-playfair text-[4.5rem] leading-[5.25rem] font-bold tracking-[-0.09rem] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] xlg:text-[3rem] xlg:leading-[3.5rem] xsm:text-[2rem] xsm:leading-[2.5rem] xsm:tracking-normal'>
                  <a
                    href={item.href}
                    className='outline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#FFD887]'
                  >
                    {item.title}
                  </a>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hai vệt sáng viền là trang trí của cả card, không thuộc slide nào */}
        <span
          aria-hidden
          className='pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-[linear-gradient(90deg,rgba(216,226,255,0.4)_0%,rgba(216,226,255,0)_100%)]'
        />
        <span
          aria-hidden
          className='pointer-events-none absolute inset-y-0 left-0 z-20 w-px bg-[linear-gradient(180deg,rgba(216,226,255,0.4)_0%,rgba(216,226,255,0)_100%)]'
        />

        <button
          type='button'
          aria-label='Dự án trước'
          onClick={() => swiperRef.current?.slidePrev()}
          className='absolute top-1/2 left-[2rem] z-20 flex size-[4rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[0.75rem] bg-[#121414]/30 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-[1rem] transition-colors hover:bg-[#121414]/60 xsm:left-3 xsm:size-[2.75rem]'
        >
          <ChevronLeft className='size-[1rem] text-[#FFD887]' />
        </button>
        <button
          type='button'
          aria-label='Dự án tiếp theo'
          onClick={() => swiperRef.current?.slideNext()}
          className='absolute top-1/2 right-[2rem] z-20 flex size-[4rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[0.75rem] bg-[#121414]/30 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-[1rem] transition-colors hover:bg-[#121414]/60 xsm:right-3 xsm:size-[2.75rem]'
        >
          <ChevronRight className='size-[1rem] text-[#FFD887]' />
        </button>

        <CarouselProgress barRef={barRef} />
      </div>
    </section>
  )
}
