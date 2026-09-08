import { ProjectCard } from '@/modules/projects/components/project-card'
import type { Project } from '@/modules/projects/data/projects-data'

const IMAGE_SIZES = '(max-width: 639px) 100vw, (max-width: 1024px) 45vw, 29vw'

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <section
      data-figma='64:2434'
      className='flex w-full flex-col gap-[3rem]'
    >
      <header className='flex items-center gap-[1.5rem]'>
        <span
          aria-hidden
          className='h-[0.125rem] w-[4rem] shrink-0 bg-[#FFD887] shadow-[0_0_10px_rgba(255,216,135,0.4)]'
        />
        <h2 className='font-arial text-[3rem] leading-[3.5rem] font-bold tracking-[0.075rem] text-black uppercase xlg:text-[2.25rem] xlg:leading-[2.75rem] xsm:text-[1.75rem] xsm:leading-[2.25rem]'>
          Dự án khác
        </h2>
      </header>

      <div
        data-figma='64:2440'
        className='grid grid-cols-3 gap-[2rem] xlg:grid-cols-2 xsm:grid-cols-1'
      >
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            imageSizes={IMAGE_SIZES}
          />
        ))}
      </div>
    </section>
  )
}
