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
      className='mb-[4rem] flex flex-col items-center text-center xsm:mb-4'
    >
      <p className='text-center text-[#8E909B] text-[0.875rem] leading-[1.3125rem] tracking-[0.5rem] uppercase'>
        {eyebrow}
      </p>
      <h2 className='mt-4 font-arial text-center text-[3.5rem] leading-[5.25rem] font-bold text-[#062B68] xsm:text-[1.65rem] xsm:leading-[2.25rem] xsm:mt-2'>
        {title}
      </h2>
    </motion.div>
  )
}
