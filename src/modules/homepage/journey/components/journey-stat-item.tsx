'use client'

import { motion } from 'motion/react'

import { CountingNumber } from '@/components/shared/counting-number'
import { ease } from '@/modules/homepage/journey/constants'
import type { JourneyStat } from '@/modules/homepage/journey/data/journey-data'

type JourneyStatItemProps = {
  stat: JourneyStat
  index: number
}

export function JourneyStatItem({ stat, index }: JourneyStatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease, delay: 0.1 + index * 0.06 }}
      className='border-l-[4px] border-[#F4B700] pl-[1.5rem]'
    >
      <p className='font-manrope text-[1.875rem] leading-[2.25rem] font-extrabold text-[#001E40] xsm:text-[1.75rem]'>
        <CountingNumber
          number={stat.value}
          inView
          delay={150 + index * 80}
        />
        {stat.suffix}
      </p>
      <p className='mt-2 font-work-sans text-base leading-[1.5rem] font-medium text-[#43474F] xsm:text-[0.8rem]'>
        {stat.label}
      </p>
    </motion.div>
  )
}
