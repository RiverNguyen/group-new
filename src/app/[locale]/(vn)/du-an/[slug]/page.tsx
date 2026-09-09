import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

import ProjectDetailModule from '@/modules/project-detail'
import {
  getProjectDetail,
  PROJECT_DETAILS,
} from '@/modules/project-detail/data/project-details-data'

type ProjectDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return [...new Set(PROJECT_DETAILS.map((detail) => detail.slug))].map((slug) => ({ slug }))
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { locale, slug } = await params

  setRequestLocale(locale)

  const detail = getProjectDetail(slug)

  if (!detail) {
    notFound()
  }

  return <ProjectDetailModule detail={detail} />
}

export default ProjectDetailPage
