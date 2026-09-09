import Image from 'next/image'

import type { ProjectDetail } from '@/modules/project-detail/data/project-details-data'

export function ProjectOverview({ detail }: { detail: ProjectDetail }) {
  return (
    <section
      data-figma='64:2748'
      className='w-full bg-black/5 px-[5rem] py-[6rem] xlg:px-[2rem] xsm:px-4 xsm:py-10'
    >
      <div
        data-figma='64:2749'
        className='flex w-full gap-[5rem] xlg:flex-col xlg:gap-[2rem]'
      >
        <div
          data-figma='64:2750'
          className='relative h-[31.25rem] w-[42.5rem] shrink-0 overflow-hidden bg-white/[0.002] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] xlg:aspect-[680/500] xlg:h-auto xlg:w-full'
        >
          <Image
            src={detail.overviewImage}
            alt={detail.overviewImageAlt}
            fill
            sizes='(max-width: 1024px) 100vw, 42.5rem'
            className='object-cover object-center'
          />
        </div>

        <div className='flex w-[42.5rem] flex-col gap-[1.5rem] pt-[2rem] xlg:w-full xlg:pt-0'>
          <div
            data-figma='64:2754'
            className='flex w-full items-baseline'
          >
            <span
              aria-hidden
              className='mr-[1rem] font-playfair text-[2.25rem] leading-[2.25rem] font-light text-[#E5E7EB]'
            >
              {detail.index}.
            </span>
            <h2 className='font-arial text-[1.875rem] leading-[1.875rem] font-bold tracking-[-0.046875rem] text-[#111827]'>
              Tổng Quan Dự Án
            </h2>
          </div>

          <span
            aria-hidden
            className='h-[0.125rem] w-[6rem] bg-[#FFC107]'
          />

          <div className='flex flex-col gap-[1rem] pt-[0.5rem]'>
            {detail.overviewParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className='font-inter text-[1rem] leading-[1.5rem] text-[#374151]'
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
