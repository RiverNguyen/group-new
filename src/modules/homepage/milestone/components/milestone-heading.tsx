'use client'

import { motion } from 'motion/react'

import { ease } from '@/modules/homepage/milestone/constants'

type MilestoneHeadingProps = {
  title: string
  yearRange: string
}

export function MilestoneHeading({ title, yearRange }: MilestoneHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease, delay: 0.08 }}
      className='flex flex-col items-center'
    >
      <h2 className='font-playfair text-center text-[1.5rem] leading-tight font-bold tracking-[0.04em] text-[#111827] uppercase xsm:text-[1.45rem]'>
        {title}
      </h2>

      <div className='mt-5 flex items-center gap-5 xsm:mt-4 xsm:gap-3'>
        <span className='h-px w-[4.5rem] bg-[#F4B700] xsm:w-[2.5rem]' />
        <p className='font-work-sans text-[0.95rem] tracking-[0.08em] text-[#9CA3AF] xsm:text-[0.8rem]'>
          {yearRange}
        </p>
        <span className='h-px w-[4.5rem] bg-[#F4B700] xsm:w-[2.5rem]' />
      </div>
    </motion.div>
  )
}
