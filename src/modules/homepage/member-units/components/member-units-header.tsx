'use client'

import { motion } from 'motion/react'

const ease = [0.32, 0.72, 0, 1] as const

type MemberUnitsHeaderProps = {
  eyebrow: string
  title: string
}

export function MemberUnitsHeader({ eyebrow, title }: MemberUnitsHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease }}
      className='mb-10 xsm:mb-7'
    >
      <div className='flex items-center gap-3'>
        <span className='h-px w-8 shrink-0 bg-[#C5A059]' />
        <p className='font-work-sans text-[0.75rem] font-medium tracking-[0.2em] text-[#C5A059] uppercase'>
          {eyebrow}
        </p>
      </div>
      <h2 className='mt-3 font-manrope text-[2.25rem] leading-tight font-bold text-[#001E40] xsm:text-[1.65rem]'>
        {title}
      </h2>
    </motion.div>
  )
}
