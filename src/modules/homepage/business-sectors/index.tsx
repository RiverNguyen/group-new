'use client'

import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '@/components/site/container'
import { SectorCard } from '@/modules/homepage/business-sectors/components/sector-card'
import { SectorHeader } from '@/modules/homepage/business-sectors/components/sector-header'
import { SectorNavButton } from '@/modules/homepage/business-sectors/components/sector-nav-button'
import { BUSINESS_SECTORS_CONTENT } from '@/modules/homepage/business-sectors/data/sectors-data'

import 'swiper/css'

export function BusinessSectorsSection() {
  const swiperRef = useRef<SwiperType | null>(null)
  const { eyebrow, title, ctaLabel, sectors } = BUSINESS_SECTORS_CONTENT

  return (
    <section className='bg-[#F4F6F8] py-[7.5rem] xsm:py-12'>
      <Container className='xsm:px-0'>
        <SectorHeader
          eyebrow={eyebrow}
          title={title}
        />

        <div className='relative'>
          <SectorNavButton
            direction='prev'
            onClick={() => swiperRef.current?.slidePrev()}
            className='xsm:hidden'
          />
          <SectorNavButton
            direction='next'
            onClick={() => swiperRef.current?.slideNext()}
            className='xsm:hidden'
          />

          <div className='xsm:hidden'>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              slidesPerView={1.15}
              spaceBetween={12}
              speed={700}
              grabCursor
              watchOverflow
              breakpoints={{
                640: {
                  slidesPerView: 4,
                  spaceBetween: 14,
                },
              }}
            >
              {sectors.map((sector) => (
                <SwiperSlide
                  key={sector.id}
                  className='!h-auto'
                >
                  <SectorCard
                    sector={sector}
                    ctaLabel={ctaLabel}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='hidden gap-3 overflow-x-auto pb-2 [scrollbar-width:none] xsm:flex xsm:[&::-webkit-scrollbar]:hidden xsm:px-4'>
            {sectors.map((sector) => (
              <div
                key={sector.id}
                className='w-[85vw] shrink-0'
              >
                <SectorCard
                  sector={sector}
                  ctaLabel={ctaLabel}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
