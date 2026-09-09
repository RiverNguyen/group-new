'use client'

import { parseAsStringLiteral } from 'nuqs'

import { useListFilters } from '@/hooks/use-list-filters'
import { ListPagination } from '@/modules/projects/components/list-pagination'
import type { FeaturedProject } from '@/modules/projects/data/featured-data'
import { SECTOR_FILTER_VALUES } from '@/modules/projects/data/filters-data'
import type { PageTitleContent } from '@/modules/projects/data/hero-data'
import { PROJECTS_PER_PAGE, type Project } from '@/modules/projects/data/projects-data'
import { FeaturedCarousel } from '@/modules/projects/sections/featured-carousel'
import { PageTitle } from '@/modules/projects/sections/page-title'
import { ProjectGrid } from '@/modules/projects/sections/project-grid'
import { SectorFilter } from '@/modules/projects/sections/sector-filter'

const parsers = {
  sector: parseAsStringLiteral(SECTOR_FILTER_VALUES).withDefault('all').withOptions({
    history: 'push',
  }),
}

function filterProjects(
  projects: Project[],
  filters: { sector: (typeof SECTOR_FILTER_VALUES)[number] },
) {
  if (filters.sector === 'all') return projects

  return projects.filter((project) => project.sector === filters.sector)
}

type ProjectsContentProps = {
  pageTitle: PageTitleContent
  projects: Project[]
  featured: FeaturedProject[]
}

export function ProjectsContent({ pageTitle, projects, featured }: ProjectsContentProps) {
  const { filters, items, page, totalPages, setFilter, setPage } = useListFilters(projects, {
    parsers,
    filter: filterProjects,
    perPage: PROJECTS_PER_PAGE,
  })

  return (
    <>
      <div
        data-figma='64:2376'
        className='flex w-full flex-col gap-[2.5rem] px-[5rem] pb-[6rem] xsm:px-4 xsm:pb-10'
      >
        <PageTitle content={pageTitle} />
        <SectorFilter
          value={filters.sector}
          onChange={(sector) => setFilter({ sector })}
        />
        <FeaturedCarousel items={featured} />
      </div>

      <div className='flex w-full flex-col gap-[3rem] px-[5rem] pt-[3.4375rem] pb-[6rem] xsm:px-4 xsm:pt-10 xsm:pb-12'>
        <ProjectGrid items={items} />
        <ListPagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </>
  )
}
