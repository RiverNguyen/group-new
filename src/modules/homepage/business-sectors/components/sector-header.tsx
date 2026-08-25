'use client'

import { motion } from 'motion/react'

const ease = [0.32, 0.72, 0, 1] as const

type SectorHeaderProps = {
  eyebrow: string
  title: string
}

export function SectorHeader({ eyebrow, title }: SectorHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease }}
      className='mb-12 flex flex-col items-center text-center xsm:mb-8'
    >
      <p className='font-work-sans text-[0.75rem] font-medium tracking-[0.45em] text-[#9CA3AF] uppercase'>
        {eyebrow}
      </p>
      <h2 className='mt-3 font-manrope text-[2.25rem] leading-tight font-bold text-[#001E40] xsm:text-[1.65rem]'>
        {title}
      </h2>
    </motion.div>
  )
}
