import type { PageTitleContent } from '@/modules/projects/data/hero-data'

export function PageTitle({ content }: { content: PageTitleContent }) {
  return (
    <section
      data-figma='64:2377'
      className='w-full pt-[4rem] xsm:pt-8'
    >
      <h2 className='text-center font-arial text-[4.5rem] leading-[5.25rem] font-bold tracking-[-0.09rem] text-black/50 uppercase drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] xlg:text-[3.25rem] xlg:leading-[4rem] xsm:text-[1.75rem] xsm:leading-[2.25rem] xsm:tracking-normal'>
        {content.title}
      </h2>
    </section>
  )
}
