'use client'

import { Container } from '@/components/site/container'
import { JourneyContent } from '@/modules/homepage/journey/components/journey-content'
import { JourneyMedia } from '@/modules/homepage/journey/components/journey-media'
import { JOURNEY_CONTENT } from '@/modules/homepage/journey/data/journey-data'

export function JourneySection() {
  const { image, imageAlt, experience, title, description, stats } = JOURNEY_CONTENT

  return (
    <section className='bg-[#F4F6F8] pt-[3.94rem] xsm:py-12'>
      <Container>
        <div className='grid grid-cols-2 items-center gap-x-[4rem] gap-y-12 xsm:grid-cols-1 xsm:gap-y-10 tablet:gap-x-10'>
          <JourneyMedia
            image={image}
            imageAlt={imageAlt}
            experience={experience}
          />
          <JourneyContent
            title={title}
            description={description}
            stats={stats}
          />
        </div>
      </Container>
    </section>
  )
}
