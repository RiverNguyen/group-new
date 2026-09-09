'use client'

import { ChevronDown, MoveRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  HeroControls,
  setRingProgress,
} from '@/modules/industrial-services/components/hero-controls'
import type { HeroContent } from '@/modules/industrial-services/data/industrial-services-data'

import 'swiper/css'
import 'swiper/css/parallax'

const ease = [0.32, 0.72, 0, 1] as const

export function IndustrialHero({ content }: { content: HeroContent }) {
  const reduce = useReducedMotion()
  // `initial` phải giống nhau giữa server và lần render đầu trên client. useReducedMotion()
  // đọc media query nên trả null khi render trên server (không có media query) nhưng có thể
  // trả true ngay ở lần render đầu trên client — nếu để `initial` phụ thuộc vào nó thì inline
  // style lệch nhau và React báo hydration mismatch. Vì vậy chỉ tắt animation qua `duration`:
  // `transition` không sinh ra inline style nên khác nhau giữa hai bên là vô hại.
  const dur = (seconds: number) => (reduce ? 0 : seconds)
  const swiperRef = useRef<SwiperType | null>(null)
  const ringRef = useRef<SVGCircleElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { slides } = content
  const activeSlide = slides[activeIndex] ?? slides[0]

  return (
    <section className='relative w-full overflow-hidden bg-[#121414] pt-[4.6rem]'>
      <div className='absolute inset-0 bg-[#062B68]' />
      <motion.div
        className='absolute inset-0'
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: dur(1.15), ease }}
      >
        <Swiper
          modules={[Parallax, Autoplay]}
          slidesPerView={1}
          speed={1200}
          loop
          parallax
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setActiveIndex(swiper.realIndex)
            setRingProgress(ringRef.current, 0)
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)
            setRingProgress(ringRef.current, 0)
          }}
          onAutoplayTimeLeft={(_swiper, _time, ratio) => {
            setRingProgress(ringRef.current, 1 - ratio)
          }}
          className='!absolute inset-0 !h-full w-full'
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={slide.id}
              className='relative !h-full w-full overflow-hidden'
            >
              {/* `scale-[1.15]` chừa biên cho cú dịch parallax 70%, đúng như hero trang chủ */}
              <div
                className='absolute inset-0 size-full overflow-hidden will-change-transform'
                data-swiper-parallax='70%'
              >
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  fill
                  priority={i === 0}
                  sizes='100vw'
                  className='scale-[1.15] object-cover object-center opacity-40 will-change-transform'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <div className='absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(6,43,104,0.8)_0%,rgba(6,43,104,0.4)_50%,rgba(18,20,20,0.9)_100%)]' />
      <div className='absolute inset-0 z-[2] bg-[linear-gradient(0deg,#121414_0%,rgba(18,20,20,0)_50%)]' />

      <div
        data-figma='64:5531'
        className='pointer-events-none relative z-10 h-[56.823rem] w-full xsm:flex xsm:h-auto xsm:min-h-[30rem] xsm:flex-col xsm:justify-end xsm:py-12'
      >
        <motion.div
          className='absolute top-[1.42375rem] left-[0.875rem] flex h-[30.25rem] w-[1.3125rem] flex-col items-center gap-[1rem] xlg:hidden'
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: dur(0.7), ease, delay: dur(0.15) }}
        >
          <span className='font-arial text-[0.875rem] leading-[1.3125rem] tracking-[0.04375rem] whitespace-nowrap text-[#E2E2E2] uppercase [writing-mode:vertical-rl] rotate-180'>
            {content.verticalTagline}
          </span>
          <span className='h-[3rem] w-px bg-[#AEC6FF]/50' />
          <span className='font-inter text-[0.625rem] leading-[0.9375rem] font-bold tracking-[0.1875rem] whitespace-nowrap text-[#AEC6FF] uppercase [writing-mode:vertical-rl] rotate-180'>
            {content.verticalBrand}
          </span>
        </motion.div>

        <motion.h1
          className='absolute top-[19.3125rem] left-[12rem] max-w-[49.8125rem] bg-[linear-gradient(180deg,#FFD887_0%,#FFDF9F_50%,#F4B700_100%)] bg-clip-text font-arial font-bold text-transparent xlg:left-[4rem] xsm:relative xsm:top-auto xsm:left-auto xsm:px-4'
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.75), ease, delay: dur(0.22) }}
        >
          <AnimatePresence mode='wait'>
            <motion.span
              key={activeSlide.id}
              className='block'
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: dur(0.5), ease }}
            >
              <span className='block text-[5.25rem] leading-[4.375rem] tracking-[-0.105rem] xlg:text-[3.5rem] xlg:leading-[3.25rem] xsm:text-[2.25rem] xsm:leading-[2.5rem]'>
                {activeSlide.titleTop}
              </span>
              <span className='mt-2 block text-[1.875rem] leading-[2.25rem] xsm:text-[1.25rem]'>
                {activeSlide.titleBottom}
              </span>
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* CTA Button [485.33×48] @120,733.17 */}
        <motion.div
          className='pointer-events-auto absolute top-[45.823rem] left-[7.5rem] flex h-[3rem] items-center gap-[1.5rem] xlg:left-[4rem] xsm:relative xsm:top-auto xsm:left-auto xsm:mt-10 xsm:h-auto xsm:flex-wrap xsm:px-4'
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.7), ease, delay: dur(0.36) }}
        >
          <a
            href={content.ctaHref}
            className='inline-flex h-[3rem] items-center gap-[0.5rem] rounded-[0.125rem] bg-[linear-gradient(90deg,#FFD887_0%,#FFDF9F_100%)] px-[2rem] font-inter text-[0.75rem] leading-4 font-semibold tracking-[0.075rem] text-[#261A00] transition-opacity hover:opacity-90'
          >
            {content.ctaLabel}
            <MoveRight className='size-3' />
          </a>
          <a
            href={content.secondaryHref}
            className='font-inter text-[0.875rem] leading-5 font-medium text-[#B1C6FF] transition-opacity hover:opacity-80'
          >
            {content.secondaryLabel}
          </a>
        </motion.div>

        {/* Right-Side Indicator & Controls [306×164] @1261,715 */}
        <div className='pointer-events-auto absolute top-[44.6875rem] left-[78.8125rem] xlg:hidden'>
          <HeroControls
            slideIndex={activeIndex + 1}
            slideTotal={slides.length}
            progressRef={ringRef}
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
        </div>

        {/* Bottom Scroll Indicator [99.58×7.4] @750.21,869.77 */}
        <span
          aria-hidden
          className='absolute top-[54.36rem] left-1/2 -translate-x-1/2 opacity-70 xsm:hidden'
        >
          <ChevronDown className='h-[0.4625rem] w-[0.75rem] text-[#E2E2E2]' />
        </span>
      </div>
    </section>
  )
}
