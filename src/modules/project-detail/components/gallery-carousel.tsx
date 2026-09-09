'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { GalleryImage } from '@/modules/project-detail/data/project-details-data'
import { CarouselProgress, setBarProgress } from '@/modules/projects/components/carousel-progress'

import 'swiper/css'

const arrowClassName =
  'absolute top-1/2 z-20 flex h-[2.5rem] w-[3.125rem] -translate-y-1/2 cursor-pointer items-center justify-center bg-gold text-[#111827] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111827] xsm:h-11 xsm:w-11'

const frameClassName =
  'absolute top-1/2 left-[71.0338%] h-[75%] w-[28.0435%] -translate-y-1/2 overflow-hidden rounded-[0.125rem] opacity-80 shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-[left,width,height,opacity] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none [.swiper-slide-next_&]:left-[0.9225%] [.swiper-slide-active_&]:left-[0.9225%] [.swiper-slide-active_&]:h-[91.6667%] [.swiper-slide-active_&]:w-[98.155%] [.swiper-slide-active_&]:opacity-100 [.swiper-slide-active_&]:shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)]'

export function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const reduce = useReducedMotion()
  const swiperRef = useRef<SwiperType | null>(null)
  const barRef = useRef<HTMLSpanElement | null>(null)
  const hoverRef = useRef(false)
  const focusRef = useRef(false)

  const syncAutoplay = useCallback(() => {
    const autoplay = swiperRef.current?.autoplay
    if (!autoplay) return

    if (hoverRef.current || focusRef.current) autoplay.stop()
    else autoplay.start()
  }, [])

  return (
    <div
      data-figma='64:2771'
      className='relative h-[37.5rem] w-full overflow-hidden xsm:h-[14rem]'
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
        slidesPerView='auto'
        centeredSlides
        speed={700}
        loop={images.length > 2}
        loopAdditionalSlides={0}
        keyboard={{ enabled: true }}
        autoplay={reduce ? false : { delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          setBarProgress(barRef.current, 0)
        }}
        onSlideChange={() => setBarProgress(barRef.current, 0)}
        onAutoplayTimeLeft={(_swiper, _time, ratio) => setBarProgress(barRef.current, 1 - ratio)}
        className='h-full w-full'
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.src}
            className='relative w-[67.749375rem]! xsm:w-full!'
          >
            <div className={frameClassName}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes='(max-width: 639px) 100vw, 67vw'
                className='object-cover object-center'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type='button'
        aria-label='Ảnh trước'
        onClick={() => swiperRef.current?.slidePrev()}
        className={`${arrowClassName} left-0`}
      >
        <ChevronLeft className='size-[1.25rem]' />
      </button>
      <button
        type='button'
        aria-label='Ảnh tiếp theo'
        onClick={() => swiperRef.current?.slideNext()}
        className={`${arrowClassName} right-0`}
      >
        <ChevronRight className='size-[1.25rem]' />
      </button>

      <CarouselProgress barRef={barRef} />
    </div>
  )
}
