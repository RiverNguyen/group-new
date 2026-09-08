import { FEATURED_PROJECTS } from '@/modules/projects/data/featured-data'
import { PROJECTS_HERO, PROJECTS_PAGE_TITLE } from '@/modules/projects/data/hero-data'
import { PROJECTS } from '@/modules/projects/data/projects-data'
import { ProjectsContent } from '@/modules/projects/projects-content'
import { ProjectsHero } from '@/modules/projects/sections/hero'

const ProjectsModule = () => {
  return (
    <main className='bg-white'>
      <ProjectsHero content={PROJECTS_HERO} />
      <ProjectsContent
        pageTitle={PROJECTS_PAGE_TITLE}
        projects={PROJECTS}
        featured={FEATURED_PROJECTS}
      />
    </main>
  )
}

export default ProjectsModule
