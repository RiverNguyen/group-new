'use client'

import { motion } from 'motion/react'

import { JourneyStatItem } from '@/modules/homepage/journey/components/journey-stat-item'
import { ease, fadeUp } from '@/modules/homepage/journey/constants'
import type { JourneyStat } from '@/modules/homepage/journey/data/journey-data'

type JourneyContentProps = {
  title: string
  description: string
  stats: JourneyStat[]
}

export function JourneyContent({ title, description, stats }: JourneyContentProps) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, ease, delay: 0.08 }}
      className='flex flex-col'
    >
      <h2 className='font-manrope text-[2rem] leading-[2.8125rem] font-bold text-[#001E40] xsm:text-[1.65rem]'>
        {title}
      </h2>

      <p className='mt-[1.5rem] text-justify font-work-sans text-[1.125rem] leading-[1.82813rem] text-[#43474F] xsm:mt-4 xsm:text-[0.875rem] xsm:leading-[1.7]'>
        {description}
      </p>

      <div className='mt-10 grid grid-cols-2 gap-x-10 gap-y-8 xsm:mt-8 xsm:gap-x-6 xsm:gap-y-6'>
        {stats.map((stat, index) => (
          <JourneyStatItem
            key={stat.label}
            stat={stat}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}
