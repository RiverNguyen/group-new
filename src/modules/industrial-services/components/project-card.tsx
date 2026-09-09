import Image from 'next/image'

import { cn } from '@/lib/utils'
import type { IndustrialProject } from '@/modules/industrial-services/data/industrial-services-data'

type ProjectCardProps = {
  project: IndustrialProject
  sizeClassName: string
  /** `sizes` cho next/image, tính theo bề rộng thật của card */
  imageSizes: string
}

export function ProjectCard({ project, sizeClassName, imageSizes }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group relative h-[21.875rem] min-w-0 overflow-hidden rounded-[0.25rem] shadow-[0_4px_12px_rgba(0,0,0,0.15)]',
        sizeClassName,
      )}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={imageSizes}
        className='object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105'
      />

      <div className='absolute inset-0 flex flex-col justify-end bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_50%)] p-[1.5rem]'>
        <div className='mb-1 flex items-start'>
          <span className='pr-[0.75rem] font-inter text-[1.875rem] leading-[2.25rem] font-light text-white'>
            {project.index}
          </span>

          <span className='flex flex-col pt-[0.5rem]'>
            <span className='font-inter text-[0.75rem] leading-4 font-bold tracking-[0.075rem] text-[#FACC15] uppercase'>
              {project.category}
            </span>
            <span
              aria-hidden
              className='mt-[0.125rem] h-[0.125rem] w-[1.5rem] bg-[#FACC15]'
            />
          </span>
        </div>

        <h3 className='font-inter text-[1.125rem] leading-[1.40625rem] font-medium text-white'>
          {project.title}
        </h3>
      </div>
    </article>
  )
}
