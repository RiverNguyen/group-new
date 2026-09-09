import Image from 'next/image'

import { formatArticleDate, type Article } from '@/modules/social-activities/data/articles-data'

type ArticleHeaderProps = {
  article: Article
  lead: string
}

export function ArticleHeader({ article, lead }: ArticleHeaderProps) {
  return (
    <section
      data-figma='64:3322'
      className='flex gap-[3rem] xlg:flex-col xlg:gap-[2rem]'
    >
      <div
        data-figma='64:3323'
        className='flex w-[46.5rem] flex-col gap-[1.5rem] pt-[0.1875rem] xlg:w-full'
      >
        <p className='font-inter text-[0.875rem] leading-5 font-bold tracking-[0.04375rem] text-gold-on-light uppercase'>
          {article.categoryLabel}
        </p>

        <h1
          data-figma='64:3325'
          className='pt-[0.0625rem] font-inter text-[3rem] leading-[3rem] font-bold text-[#111827] xlg:text-[2.5rem] xlg:leading-[2.75rem] xsm:text-[2rem] xsm:leading-[2.5rem]'
        >
          {article.title}
        </h1>

        <time
          dateTime={article.publishedAt}
          className='font-inter text-[0.875rem] leading-5 text-[#9CA3AF]'
        >
          {formatArticleDate(article.publishedAt)}
        </time>

        <p className='font-inter text-[1rem] leading-6 text-[#6B7280] uppercase'>{lead}</p>
      </div>

      <div
        data-figma='64:3331'
        className='relative aspect-[744/314] w-[46.5rem] shrink-0 self-start overflow-hidden rounded-[0.125rem] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] xlg:w-full'
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          sizes='(max-width: 1024px) 100vw, 47vw'
          className='object-cover'
        />
      </div>
    </section>
  )
}
