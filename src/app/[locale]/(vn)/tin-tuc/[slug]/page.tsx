import ArticleDetailModule from '@/modules/article-detail'

export const dynamic = 'force-dynamic'

type ArticleDetailPageProps = {
  params: Promise<{ slug: string }>
}

const ArticleDetailPage = async ({ params }: ArticleDetailPageProps) => {
  const { slug } = await params

  return <ArticleDetailModule slug={slug} />
}

export default ArticleDetailPage
