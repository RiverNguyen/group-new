'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '@/lib/utils'
import { BrandSlot } from '@/modules/industrial-services/components/brand-slot'
import type { BrandsContent } from '@/modules/industrial-services/data/industrial-services-data'

import 'swiper/css'

/** Nút của Figma `Navigation Controls` — hai ô vuông 67.88 sát nhau, fill `#282A2B` */
const NAV_BUTTON_CLASS =
  'flex size-[4.2425rem] items-center justify-center bg-[#282A2B] transition-opacity hover:cursor-pointer hover:opacity-80 disabled:cursor-default disabled:opacity-40'

/** Trạng thái carousel mà thanh chỉ báo và 2 nút cần để phản ánh đúng vị trí thật */
type CarouselState = {
  snapIndex: number
  pageCount: number
  atStart: boolean
  atEnd: boolean
}

export function IndustrialBrands({ content }: { content: BrandsContent }) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [carousel, setCarousel] = useState<CarouselState>({
    snapIndex: 0,
    pageCount: 1,
    atStart: true,
    atEnd: true,
  })

  const syncCarousel = (swiper: SwiperType) => {
    setCarousel({
      snapIndex: swiper.snapIndex,
      pageCount: Math.max(swiper.snapGrid.length, 1),
      atStart: swiper.isBeginning,
      atEnd: swiper.isEnd,
    })
  }

  return (
    <section
      id='thuong-hieu'
      data-figma='64:5700'
      className='w-full bg-white py-[5rem] xsm:py-12'
    >
      <div className='flex items-center gap-[2rem] px-[5rem] xlg:flex-col xlg:items-stretch xsm:px-4'>
        {/* Left Column: Content [581.33×482] gap=32 */}
        <div className='flex min-w-0 flex-[581.33_1_0%] flex-col gap-[2rem] xlg:flex-none xlg:w-full'>
          <div className='flex flex-col gap-[1.5rem]'>
            {/* Heading Group [581.33×74] gap=16 */}
            <div className='relative flex flex-col gap-[1rem]'>
              <span
                aria-hidden
                className='absolute top-0 -left-[1.75rem] font-inter text-[0.75rem] leading-4 font-semibold tracking-[0.225rem] whitespace-nowrap text-[#FFD887]/80 uppercase [writing-mode:vertical-rl] rotate-180 xsm:hidden'
              >
                {content.verticalLabel}
              </span>

              <h2 className='font-arial text-[3rem] leading-[3.5rem] font-bold tracking-[-0.03rem] text-[#0D59A7] xsm:text-[1.75rem] xsm:leading-[2.25rem]'>
                {content.heading}
              </h2>
              <span
                aria-hidden
                className='h-[0.125rem] w-[4rem] bg-[#FFD887] shadow-[0_0_8px_rgba(255,216,135,0.5)]'
              />
            </div>

            {/* Description [581.33×272] gap=16 pad-right=48 */}
            <div className='flex flex-col gap-[1rem] pr-[3rem] xsm:pr-0'>
              <p className='font-inter text-[1.125rem] leading-[1.75rem] text-[#6B7280] xsm:text-[0.9375rem] xsm:leading-[1.5rem]'>
                {content.paragraphs[0]}
              </p>
              <p className='font-inter text-[1rem] leading-[1.5rem] text-[#6B7280]/80 xsm:text-[0.875rem]'>
                {content.paragraphs[1]}
              </p>
            </div>
          </div>

          {/* Navigation Controls:margin [581.33×80] — bên trong là 2 nút 67.88 sát nhau */}
          <div className='flex h-[5rem] items-start'>
            <button
              type='button'
              aria-label='Nhóm thương hiệu trước'
              disabled={carousel.atStart}
              onClick={() => swiperRef.current?.slidePrev()}
              className={NAV_BUTTON_CLASS}
            >
              <ArrowLeft className='h-3 w-4 text-[#C4C6D1]' />
            </button>
            <button
              type='button'
              aria-label='Nhóm thương hiệu sau'
              disabled={carousel.atEnd}
              onClick={() => swiperRef.current?.slideNext()}
              className={NAV_BUTTON_CLASS}
            >
              <ArrowRight className='h-3 w-4 text-[#C4C6D1]' />
            </button>
          </div>
        </div>

        {/* Right Column [826.67×158] gap=32 */}
        <div className='flex min-w-0 flex-[826.67_1_0%] flex-col gap-[2rem] xlg:flex-none xlg:w-full'>
          {/* Frame 22 [800×122] gap=32 — 4 ô × 176 + 3 khoảng 32 */}
          <div className='w-[50rem] max-w-full'>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
                syncCarousel(swiper)
              }}
              onSnapIndexChange={syncCarousel}
              onBreakpoint={syncCarousel}
              onResize={syncCarousel}
              slidesPerView={2}
              slidesPerGroup={2}
              spaceBetween={16}
              speed={700}
              grabCursor
              watchOverflow
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 32,
                },
              }}
            >
              {content.slots.map((slot) => (
                <SwiperSlide key={slot.id}>
                  <BrandSlot slot={slot} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div
            aria-hidden
            className='flex items-center justify-center gap-[0.5rem]'
          >
            {Array.from({ length: carousel.pageCount }, (_, i) => (
              <span
                key={i}
                className={cn(
                  'h-[0.25rem] rounded-[0.75rem] transition-all duration-300',
                  i === carousel.snapIndex
                    ? 'w-[2rem] bg-[#FFD887] shadow-[0_0_6px_rgba(255,216,135,0.5)]'
                    : 'w-[0.5rem] bg-[#333535]',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
