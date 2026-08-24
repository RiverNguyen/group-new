import Image from 'next/image'

import { HERO_SLIDES, type HeroSlide } from '@/modules/homepage/hero-banner/data/hero-data'

export function HeroSlideMedia({ slide }: { slide: HeroSlide }) {
  return (
    <>
      <div
        className='absolute inset-0 size-full overflow-hidden will-change-transform'
        data-swiper-parallax='70%'
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={slide.id === HERO_SLIDES[0].id}
          sizes='100vw'
          className='scale-[1.15] object-cover will-change-transform xsm:scale-[1.25]'
        />
      </div>
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(180deg, rgba(6,21,44,0.55) 0%, rgba(6,21,44,0.2) 35%, rgba(6,21,44,0.25) 55%, rgba(6,21,44,0.6) 100%)',
        }}
      />
    </>
  )
}
