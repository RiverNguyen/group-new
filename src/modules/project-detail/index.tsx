import { BreadcrumbBar } from '@/modules/project-detail/components/breadcrumb-bar'
import {
  GALLERY_POOLS,
  getOtherProjects,
  type ProjectDetail,
} from '@/modules/project-detail/data/project-details-data'
import { ProjectGallery } from '@/modules/project-detail/sections/gallery'
import { ProjectDetailHero } from '@/modules/project-detail/sections/hero'
import { OtherProjects } from '@/modules/project-detail/sections/other-projects'
import { ProjectOverview } from '@/modules/project-detail/sections/overview'

const ProjectDetailModule = ({ detail }: { detail: ProjectDetail }) => {
  return (
    <main className='bg-white'>
      <ProjectDetailHero detail={detail} />
      <BreadcrumbBar current={detail.title} />
      <ProjectOverview detail={detail} />
      <ProjectGallery images={GALLERY_POOLS[detail.galleryPool]} />
      <OtherProjects items={getOtherProjects(detail.slug)} />
    </main>
  )
}

export default ProjectDetailModule
