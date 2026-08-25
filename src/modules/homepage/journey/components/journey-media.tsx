'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

import { JourneyExperienceCard } from '@/modules/homepage/journey/components/journey-experience-card'
import { fadeUp } from '@/modules/homepage/journey/constants'
import type { JourneyExperience } from '@/modules/homepage/journey/data/journey-data'

type JourneyMediaProps = {
  image: string
  imageAlt: string
  experience: JourneyExperience
}

export function JourneyMedia({ image, imageAlt, experience }: JourneyMediaProps) {
  return (
    <motion.div
      {...fadeUp}
      className='relative'
    >
      <div className='relative aspect-[4/5] rounded-[0.5rem] xsm:aspect-[5/4]'>
        <div className='absolute -top-4 -left-4 z-[1] size-[6rem] rounded-[0.25rem] bg-[#FFDEA5]/50' />
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes='(max-width: 639px) 100vw, 45vw'
          className='z-[2] rounded-[0.5rem] object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]'
        />
      </div>

      <JourneyExperienceCard experience={experience} />
    </motion.div>
  )
}
