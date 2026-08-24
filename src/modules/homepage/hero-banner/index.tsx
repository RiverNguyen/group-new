'use client'

import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HeroOverlay } from '@/modules/homepage/hero-banner/components/hero-overlay'
import { HeroSlideMedia } from '@/modules/homepage/hero-banner/components/hero-slide-media'
import { HERO_SLIDES } from '@/modules/homepage/hero-banner/data/hero-data'
import { updateSegmentProgress } from '@/modules/homepage/hero-banner/utils/update-segment-progress'

import 'swiper/css'
import 'swiper/css/parallax'

export function HeroBanner() {
  const swiperRef = useRef<SwiperType | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const activeSlide = HERO_SLIDES[activeIndex] ?? HERO_SLIDES[0]

  return (
    <section className='relative h-[100vh] w-full overflow-hidden bg-[#06152c] xsm:h-[60vh] tablet:h-[40vh]'>
      <Swiper
        modules={[Parallax, Autoplay]}
        slidesPerView={1}
        speed={1800}
        loop
        parallax
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          activeIndexRef.current = swiper.realIndex
          updateSegmentProgress(progressRef.current, swiper.realIndex, 0)
        }}
        onSlideChange={(swiper) => {
          activeIndexRef.current = swiper.realIndex
          setActiveIndex(swiper.realIndex)
          updateSegmentProgress(progressRef.current, swiper.realIndex, 0)
        }}
        onAutoplayTimeLeft={(_swiper, _time, ratio) => {
          updateSegmentProgress(progressRef.current, activeIndexRef.current, 1 - ratio)
        }}
        className='absolute inset-0 h-full w-full'
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className='relative !h-full w-full overflow-hidden'
          >
            <HeroSlideMedia slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay trên để header transparent dễ đọc */}
      <div
        className='pointer-events-none absolute inset-x-0 top-0 z-[5] h-[8.5rem] xsm:h-[6.5rem]'
        style={{
          background:
            'linear-gradient(180deg, rgba(0,20,45,0.72) 0%, rgba(0,20,45,0.35) 25%, transparent 100%)',
        }}
        aria-hidden
      />

      <HeroOverlay
        slide={activeSlide}
        index={activeIndex}
        total={HERO_SLIDES.length}
        progressRef={progressRef}
        onPrev={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
      />
    </section>
  )
}
