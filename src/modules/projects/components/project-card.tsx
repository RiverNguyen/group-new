import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import ROUTES from '@/configs/routes'
import { Link } from '@/i18n/navigation'
import type { Project } from '@/modules/projects/data/projects-data'

type ProjectCardProps = {
  project: Project
  imageSizes: string
}

export function ProjectCard({ project, imageSizes }: ProjectCardProps) {
  return (
    <article className='group relative aspect-[458.67/469.33] min-w-0 overflow-hidden rounded-[0.5rem] bg-[#1E2020] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)]'>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes={imageSizes}
        className='object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105'
      />

      <span
        aria-hidden
        className='absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9)_0%,rgba(6,43,104,0.4)_50%,rgba(6,43,104,0)_100%)]'
      />
      <span
        aria-hidden
        className='absolute inset-0 bg-[linear-gradient(0deg,rgba(6,43,104,0.9)_0%,rgba(6,43,104,0.2)_50%,rgba(6,43,104,0)_100%)] opacity-80'
      />
      <span
        aria-hidden
        className='absolute inset-0 rounded-[0.5rem] shadow-[inset_1px_1px_0_rgba(174,198,255,0.2)]'
      />

      <div className='absolute inset-0 flex flex-col justify-end p-[2rem] xsm:p-5'>
        <span
          aria-hidden
          className='mb-[1rem] font-playfair text-[4.5rem] leading-[4.5rem] font-light tracking-[-0.225rem] text-white/30 xsm:mb-3 xsm:text-[3rem] xsm:leading-[3rem]'
        >
          {project.index}.
        </span>

        <span className='mb-[0.75rem] font-inter text-[0.75rem] leading-[1rem] font-semibold tracking-[0.075rem] text-[#FFD887] uppercase'>
          {project.sectorLabel}
        </span>

        <h3 className='mb-[1.5rem] font-playfair text-[2rem] leading-[2.5rem] font-semibold text-[#E2E2E2] xsm:mb-4 xsm:text-[1.5rem] xsm:leading-[2rem]'>
          {project.title}
        </h3>

        <Link
          href={{ pathname: ROUTES.projectDetail, params: { slug: project.id } }}
          aria-label={`Xem chi tiết dự án ${project.title}`}
          className='inline-flex w-fit items-center gap-[0.5rem] font-inter text-[0.875rem] leading-[1.25rem] font-medium tracking-[0.04375rem] text-[#FFD887] uppercase outline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#FFD887]'
        >
          Xem chi tiết
          <ArrowUpRight className='size-[0.625rem]' />
        </Link>
      </div>
    </article>
  )
}
