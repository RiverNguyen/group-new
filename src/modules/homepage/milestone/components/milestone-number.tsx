'use client'

import { motion } from 'motion/react'

import { QuoteMark } from '@/modules/homepage/milestone/components/quote-mark'
import { ease } from '@/modules/homepage/milestone/constants'

type MilestoneNumberProps = {
  years: number
  fillImage: string
}

export function MilestoneNumber({ years, fillImage }: MilestoneNumberProps) {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <QuoteMark className='absolute top-4 left-0 size-[3.5rem] text-[#C5C9D1] opacity-70 xsm:top-0 xsm:size-[2rem]' />

      <div
        className='pointer-events-none absolute top-1/2 left-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full xsm:size-[14rem]'
        style={{
          background:
            'radial-gradient(circle, rgba(244,183,0,0.28) 0%, rgba(244,183,0,0.1) 42%, transparent 70%)',
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease }}
        className='relative mb-[2rem]'
      >
        <span
          className='font-playfair text-[12rem] leading-none font-bold tracking-tight xsm:text-[7.5rem]'
          style={{
            backgroundImage: `url(${fillImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {years}
        </span>
      </motion.div>
    </div>
  )
}
