import { ProjectCard } from '@/modules/industrial-services/components/project-card'
import type { FeaturedProjectsContent } from '@/modules/industrial-services/data/industrial-services-data'

const CARD_WIDTHS = [
  'w-[calc((100%-3rem)/3)]',
  'w-[calc((100%-3rem)/3)]',
  'w-[calc((100%-3rem)/3)]',
  'w-[calc((100%-3rem)*350/1424)]',
  'w-[calc((100%-3rem)*724/1424)]',
  'w-[calc((100%-3rem)*350/1424)]',
]

const CARD_IMAGE_SIZES = [
  '(max-width: 639px) 92vw, (max-width: 1024px) 46vw, 30vw',
  '(max-width: 639px) 92vw, (max-width: 1024px) 46vw, 30vw',
  '(max-width: 639px) 92vw, (max-width: 1024px) 46vw, 30vw',
  '(max-width: 639px) 92vw, (max-width: 1024px) 46vw, 22vw',
  '(max-width: 639px) 92vw, (max-width: 1024px) 46vw, 46vw',
  '(max-width: 639px) 92vw, (max-width: 1024px) 46vw, 22vw',
]

const RESPONSIVE_WIDTH = 'xlg:w-[calc((100%-1.5rem)/2)] xsm:w-full'

export function FeaturedProjects({ content }: { content: FeaturedProjectsContent }) {
  const projects = [...content.topRow, ...content.bottomRow]

  return (
    <section
      id='du-an-tieu-bieu'
      data-figma='64:5689'
      className='flex w-full flex-col gap-[1.5rem] rounded-tl-[9.375rem] rounded-br-[6.25rem] bg-[#C7C7C7] p-[4rem] xsm:rounded-tl-[3rem] xsm:rounded-br-[2rem] xsm:p-6'
    >
      {/* Section Header [1465×48] SPACE_BETWEEN cross=MAX */}
      <div className='flex w-full items-end justify-between gap-4'>
        <h2 className='font-inter text-[3rem] leading-[3rem] font-bold tracking-[-0.075rem] text-[#1F2937] xsm:text-[1.75rem] xsm:leading-[2rem]'>
          {content.heading}
        </h2>

        <a
          href={content.ctaHref}
          className='flex shrink-0 items-center gap-[0.5rem] font-inter text-[0.875rem] leading-5 font-semibold tracking-[0.04375rem] text-[#374151] uppercase transition-opacity hover:opacity-70'
        >
          {content.ctaLabel}
          <svg
            viewBox='0 0 20 20'
            aria-hidden
            className='size-5 text-[#FACC15]'
          >
            <path
              fill='currentColor'
              d='M6 3.5 15 10l-9 6.5V3.5Z'
            />
          </svg>
        </a>
      </div>

      {/* Frame 24 [1472×732] — pad-top 8 nằm ở hàng đầu của design */}
      <div className='flex w-full flex-wrap gap-[1.5rem] pt-[0.5rem]'>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            sizeClassName={`${CARD_WIDTHS[i]} ${RESPONSIVE_WIDTH}`}
            imageSizes={CARD_IMAGE_SIZES[i]}
          />
        ))}
      </div>
    </section>
  )
}
