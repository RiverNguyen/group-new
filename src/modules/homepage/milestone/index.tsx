'use client'

import { Container } from '@/components/site/container'
import { MilestoneCopy } from '@/modules/homepage/milestone/components/milestone-copy'
import { MilestoneHeading } from '@/modules/homepage/milestone/components/milestone-heading'
import { MilestoneNumber } from '@/modules/homepage/milestone/components/milestone-number'
import { MILESTONE_CONTENT } from '@/modules/homepage/milestone/data/milestone-data'

export function MilestoneSection() {
  const { years, fillImage, title, yearRange, paragraphs, cta, watermark } = MILESTONE_CONTENT

  return (
    <section className='relative overflow-hidden bg-white pt-[7rem] pb-[4.5rem] xsm:py-14'>
      <p
        aria-hidden
        className='pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-[42%] font-playfair text-[15.625rem] leading-none font-bold tracking-[0.08em] text-[#0E2751]/3 select-none xsm:text-[22vw]'
      >
        {watermark}
      </p>

      <Container className='relative z-[1] flex flex-col items-center'>
        <MilestoneNumber
          years={years}
          fillImage={fillImage}
        />
        <MilestoneHeading
          title={title}
          yearRange={yearRange}
        />
        <MilestoneCopy
          paragraphs={paragraphs}
          cta={cta}
        />
      </Container>
    </section>
  )
}
