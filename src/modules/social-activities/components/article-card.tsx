import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import ROUTES from '@/configs/routes'
import { Link } from '@/i18n/navigation'
import { formatArticleDate, type Article } from '@/modules/social-activities/data/articles-data'

type ArticleCardProps = {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article
      data-figma='64:3101'
      className='flex flex-col overflow-hidden rounded-[1.5rem] border border-[#F3F4F6] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]'
    >
      <div className='relative h-[13.43rem] w-full shrink-0'>
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes='(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 29vw'
          className='object-cover'
        />
      </div>

      <div className='flex flex-1 flex-col p-[1.5rem]'>
        <p className='font-arial text-[0.75rem] leading-4 tracking-[0.0375rem] text-[#B45309] uppercase'>
          {article.categoryLabel} •{' '}
          <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
        </p>

        <h3 className='mt-[0.5rem] line-clamp-3 font-arial text-[1.25rem] leading-[1.71875rem] text-[#111827]'>
          {article.title}
        </h3>

        <p className='mt-[0.75rem] line-clamp-2 font-inter text-[0.875rem] leading-5 text-[#6B7280]'>
          {article.excerpt}
        </p>

        <Link
          href={{ pathname: ROUTES.articleDetail, params: { slug: article.id } }}
          className='mt-auto inline-flex w-fit items-center gap-[0.25rem] pt-[1.5rem] font-playfair text-[0.875rem] leading-5 font-bold text-[#062B68] transition-colors hover:text-[#0A47A9]'
        >
          Xem chi tiết
          <span className='sr-only'>: {article.title}</span>
          <ArrowRight
            aria-hidden
            className='size-4'
          />
        </Link>
      </div>
    </article>
  )
}
