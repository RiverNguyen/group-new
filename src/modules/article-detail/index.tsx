import { headers } from 'next/headers'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import ROUTES from '@/configs/routes'
import { getPathname } from '@/i18n/navigation'
import { BreadcrumbBar } from '@/modules/article-detail/components/breadcrumb-bar'
import { ARTICLE_POOL, findArticleDetail } from '@/modules/article-detail/data/article-details-data'
import { RelatedContent } from '@/modules/article-detail/related-content'
import { ArticleBody } from '@/modules/article-detail/sections/article-body'
import { ArticleHeader } from '@/modules/article-detail/sections/article-header'

const HOST_PATTERN = /^[a-zA-Z0-9.-]+(:\d{1,5})?$/

type ArticleDetailModuleProps = {
  slug: string
}

const resolveShareUrl = async (pathname: string): Promise<string> => {
  const headerList = await headers()
  const host = headerList.get('x-forwarded-host') ?? headerList.get('host') ?? ''

  if (!HOST_PATTERN.test(host)) return pathname

  const protocol = headerList.get('x-forwarded-proto') === 'https' ? 'https' : 'http'

  return `${protocol}://${host}${pathname}`
}

const ArticleDetailModule = async ({ slug }: ArticleDetailModuleProps) => {
  const entry = findArticleDetail(slug)

  if (!entry) notFound()

  const locale = await getLocale()
  const pathname = getPathname({
    locale,
    href: { pathname: ROUTES.articleDetail, params: { slug } },
  })
  const shareUrl = await resolveShareUrl(pathname)
  const relatedArticles = ARTICLE_POOL.filter((article) => article.id !== slug)

  return (
    <main className='bg-white'>
      <BreadcrumbBar title={entry.article.title} />

      <div
        data-figma='64:3321'
        className='flex flex-col gap-[4rem] px-[2rem] pt-[3rem] pb-[6rem] xsm:gap-[2rem] xsm:px-4 xsm:pt-[1.5rem] xsm:pb-[3rem]'
      >
        <ArticleHeader
          article={entry.article}
          lead={entry.detail.lead}
        />

        <ArticleBody
          blocks={entry.detail.blocks}
          title={entry.article.title}
          shareUrl={shareUrl}
        />
      </div>

      <RelatedContent articles={relatedArticles} />
    </main>
  )
}

export default ArticleDetailModule
