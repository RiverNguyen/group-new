'use client'

import { CountingNumber } from '@/components/shared/counting-number'
import type { JourneyExperience } from '@/modules/homepage/journey/data/journey-data'

type JourneyExperienceCardProps = {
  experience: JourneyExperience
}

export function JourneyExperienceCard({ experience }: JourneyExperienceCardProps) {
  return (
    <div className='absolute -right-[2rem] -bottom-[2rem] z-10 w-[18.8125rem] rounded-[0.5rem] bg-white p-[2rem] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),_0_8px_10px_-6px_rgba(0,0,0,0.10)] xsm:right-4 xsm:bottom-4 xsm:w-[11.5rem] xsm:px-4 xsm:py-4'>
      <p className='font-work-sans text-[2.25rem] leading-none font-semibold text-[#001E40] xsm:text-[2.25rem]'>
        <CountingNumber
          number={experience.value}
          inView
          delay={120}
        />
        {experience.suffix}
      </p>
      <p className='mt-2 font-work-sans text-base leading-snug text-[#43474F] xsm:text-[0.72rem]'>
        {experience.label}
      </p>
    </div>
  )
}
