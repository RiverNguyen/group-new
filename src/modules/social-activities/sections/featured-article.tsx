import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'

import { formatArticleDate, type Article } from '@/modules/social-activities/data/articles-data'

type FeaturedArticleProps = {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section
      data-figma='64:3016'
      className='px-[8rem] py-[8rem] xlg:px-[3rem] xlg:py-[4rem] xsm:px-4 xsm:py-[3rem]'
    >
      <div className='relative flex items-center'>
        <span
          aria-hidden
          className='absolute top-1/2 left-0 h-[2.5rem] w-[0.25rem] -translate-y-1/2 bg-[#F4B700]'
        />
        <h2 className='pl-[1.5rem] font-arial text-[3rem] leading-[3.5rem] font-bold tracking-[-0.075rem] text-[#946E0E] uppercase xlg:text-[2.25rem] xlg:leading-[2.75rem] xsm:text-[1.75rem] xsm:leading-[2.25rem] xsm:tracking-normal'>
          Bài viết nổi bật
        </h2>
      </div>

      <article
        data-figma='64:3023'
        className='relative mt-[3.4375rem] flex h-[34.375rem] overflow-hidden rounded-[0.5rem] bg-white shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] xlg:mt-[2rem] xlg:h-auto xlg:flex-col'
      >
        <span
          aria-hidden
          className='absolute top-0 left-0 z-10 h-px w-[28rem] max-w-full bg-[linear-gradient(90deg,rgba(174,198,255,0.4)_0%,rgba(174,198,255,0)_100%)]'
        />

        <div className='relative w-[52.8125rem] shrink-0 xlg:aspect-[16/9] xlg:w-full'>
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes='(max-width: 1024px) 100vw, 53vw'
            className='object-cover'
          />
          <span
            aria-hidden
            className='absolute inset-0 bg-[#121414]/10'
          />
          <span className='absolute top-[1.5rem] left-[1.5rem] rounded-[0.75rem] border border-[#B1C6FF]/20 bg-[#062B68]/80 px-[1rem] py-[0.5rem] font-inter text-[0.75rem] leading-4 font-semibold tracking-[0.075rem] text-[#7A95D7] uppercase shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] backdrop-blur-[0.75rem]'>
            {article.categoryLabel}
          </span>
        </div>

        <div className='flex min-w-0 flex-1 flex-col justify-center p-[3rem] xlg:p-[2rem] xsm:p-[1.5rem]'>
          <p className='flex items-center gap-[0.75rem] font-inter text-[0.875rem] leading-5 text-[#6B7280]'>
            <Clock
              aria-hidden
              className='size-[0.9375rem] shrink-0 text-[#946E0E]'
            />
            <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
          </p>

          <h3 className='mt-[1.5rem] line-clamp-4 font-arial text-[2rem] leading-[2.5rem] font-bold text-[#062B68] xsm:text-[1.5rem] xsm:leading-[2rem]'>
            {article.title}
          </h3>

          <p className='mt-[1.5rem] line-clamp-4 font-inter text-[1rem] leading-[1.625rem] text-[#6B7280]'>
            {article.excerpt}
          </p>

          <a
            href={article.href}
            className='mt-[2.5rem] inline-flex w-fit items-center gap-[0.5rem] rounded-[0.75rem] border border-[#E1AA36] px-[1.5rem] py-[0.75rem] font-inter text-[0.75rem] leading-4 font-semibold tracking-[0.0375rem] text-[#946E0E] uppercase transition-colors hover:bg-[#FFD887] hover:text-[#062B68]'
          >
            Xem chi tiết
            <span className='sr-only'>: {article.title}</span>
            <ArrowRight
              aria-hidden
              className='size-[0.75rem]'
            />
          </a>
        </div>
      </article>
    </section>
  )
}
