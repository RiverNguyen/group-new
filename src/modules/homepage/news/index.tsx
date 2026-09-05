'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '@/components/site/container'
import {
  FEATURED_NEWS,
  NEWS_ARTICLES,
  type NewsArticle,
} from '@/modules/homepage/news/data/news-data'

import 'swiper/css'

function NewsMeta({ article }: { article: NewsArticle }) {
  return (
    <div className='flex flex-wrap items-center gap-x-2 gap-y-1 font-work-sans text-[0.68rem] font-medium uppercase xsm:text-[0.65rem]'>
      <span className='shrink-0 text-[#F05B68]'>{article.category}</span>
      <span className='h-3 w-px bg-[#D9D9D9]' />
      <span className='flex min-w-0 items-center gap-1.5 text-[#A6A6A6]'>
        <span className='block size-[0.65rem] rounded-full border border-current before:mx-auto before:mt-[0.1rem] before:block before:h-[0.18rem] before:w-px before:bg-current' />
        {article.date}
      </span>
    </div>
  )
}

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={article.href}
      className='group grid h-full grid-cols-[48%_1fr] bg-white xsm:grid-cols-1 xsm:overflow-hidden'
    >
      <div className='relative min-h-[11.2rem] overflow-hidden xsm:aspect-[16/9] xsm:min-h-0'>
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes='(max-width: 639px) 86vw, 30vw'
          className='object-cover transition-transform duration-700 group-hover:scale-105'
        />
      </div>
      <div className='flex min-w-0 flex-col p-5 xsm:min-h-[12.5rem] xsm:p-4'>
        <h3 className='line-clamp-2 font-manrope text-[0.9rem] leading-[1.45] font-bold text-[#17202A] xsm:text-[0.98rem]'>
          {article.title}
        </h3>
        <p className='mt-2 line-clamp-2 font-work-sans text-[0.72rem] leading-[1.65] text-[#555] xsm:text-[0.82rem]'>
          {article.excerpt}
        </p>
        <div className='mt-auto pt-5'>
          <NewsMeta article={article} />
        </div>
      </div>
    </Link>
  )
}

function DiamondButton({
  direction,
  onClick,
}: {
  direction: 'previous' | 'next'
  onClick: () => void
}) {
  const isPrevious = direction === 'previous'

  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={isPrevious ? 'Tin trước' : 'Tin tiếp theo'}
      className='flex size-8 rotate-45 items-center justify-center bg-[#FFC62F] text-white transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#001E40] xsm:size-9'
    >
      <svg
        viewBox='0 0 20 20'
        aria-hidden='true'
        className='size-4 -rotate-45'
      >
        <path
          d={isPrevious ? 'm12 5-5 5 5 5' : 'm8 5 5 5-5 5'}
          fill='none'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}

export function NewsSection() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className='overflow-hidden bg-[#F8F7F5] pb-[5.5rem] pt-[4.2rem] xsm:py-10'>
      <Container>
        <Link
          href={FEATURED_NEWS.href}
          className='group grid grid-cols-[1.15fr_0.85fr] gap-8 bg-white xsm:grid-cols-1 xsm:gap-0 xsm:overflow-hidden'
        >
          <div className='relative aspect-[2.96/1] overflow-hidden xsm:aspect-[16/9]'>
            <Image
              src={FEATURED_NEWS.image}
              alt={FEATURED_NEWS.imageAlt}
              fill
              priority={false}
              sizes='(max-width: 639px) 100vw, 58vw'
              className='object-cover transition-transform duration-700 group-hover:scale-[1.025]'
            />
          </div>
          <div className='flex flex-col justify-center py-5 pr-8 xsm:p-4'>
            <h2 className='font-manrope text-[1.15rem] leading-[1.45] font-semibold text-[#17202A] xsm:text-[1.1rem]'>
              {FEATURED_NEWS.title}
            </h2>
            <div className='mt-3'>
              <NewsMeta article={FEATURED_NEWS} />
            </div>
            <p className='mt-4 font-work-sans text-[0.76rem] leading-[1.7] text-[#4B4B4B] xsm:text-[0.82rem]'>
              {FEATURED_NEWS.excerpt}
            </p>
          </div>
        </Link>

        <div className='ml-[3rem] grid grid-cols-[12rem_minmax(0,1fr)] xsm:ml-0 xsm:grid-cols-1'>
          <div className='relative z-10 flex min-h-[15.2rem] flex-col overflow-hidden bg-[#FFC62F] px-5 py-7 xsm:min-h-[8rem] xsm:flex-row xsm:items-end xsm:justify-between xsm:gap-4 xsm:px-4 xsm:py-5'>
            <div>
              <p className='font-work-sans text-[0.68rem] font-semibold tracking-[0.28em] text-[#18202A] uppercase'>
                Bateco Group
              </p>
              <h2 className='mt-2 font-manrope text-[2.2rem] leading-none font-semibold text-[#17202A] xsm:text-3xl'>
                Tin Tức
              </h2>
            </div>
            <Link
              href='#'
              className='mt-9 flex items-center gap-3 font-work-sans text-[0.68rem] font-semibold text-[#17202A] uppercase xsm:mt-0 xsm:z-[10]'
            >
              Xem tất cả
              <span className='flex size-5 rotate-45 items-center justify-center border border-[#17202A]'>
                <span className='size-1.5 rounded-full bg-[#17202A]' />
              </span>
            </Link>
            <Image
              src={'/home/news/decor.png'}
              alt='Decor'
              width={100}
              height={100}
              className='absolute bottom-0 right-0 h-[8rem] w-auto xsm:h-[5.5rem]'
            />
          </div>

          <div className='relative ml-[3rem] min-w-0 xsm:ml-0 xsm:pt-4'>
            <div className='absolute top-1/2 -left-4 z-20 -translate-y-1/2 xsm:hidden'>
              <DiamondButton
                direction='previous'
                onClick={() => swiperRef.current?.slidePrev()}
              />
            </div>
            <div className='absolute top-1/2 -right-4 z-20 -translate-y-1/2 xsm:hidden'>
              <DiamondButton
                direction='next'
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>

            <div className='xsm:hidden h-full'>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                slidesPerView={1.08}
                spaceBetween={12}
                speed={650}
                grabCursor
                watchOverflow
                breakpoints={{
                  640: {
                    slidesPerView: 1.35,
                    spaceBetween: 0,
                  },
                }}
                className='h-full'
              >
                {NEWS_ARTICLES.map((article) => (
                  <SwiperSlide
                    key={article.id}
                    className='!h-auto'
                  >
                    <NewsCard article={article} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='hidden gap-3 overflow-x-auto pb-2 [scrollbar-width:none] xsm:flex xsm:[&::-webkit-scrollbar]:hidden xsm:-mx-4 xsm:px-4'>
              {NEWS_ARTICLES.map((article) => (
                <div
                  key={article.id}
                  className='w-[86vw] shrink-0'
                >
                  <NewsCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
