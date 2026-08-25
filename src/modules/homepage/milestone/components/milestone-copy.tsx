'use client'

import { motion } from 'motion/react'

import { Link } from '@/i18n/navigation'
import { ease } from '@/modules/homepage/milestone/constants'

type MilestoneCopyProps = {
  paragraphs: [string, string]
  cta: { label: string; href: string }
}

export function MilestoneCopy({ paragraphs, cta }: MilestoneCopyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease, delay: 0.14 }}
      className='flex flex-col items-center'
    >
      <div className='mt-10 max-w-[60.5rem] space-y-5 text-center xsm:mt-7 xsm:space-y-4'>
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className='font-inter text-[0.9375rem] leading-[1.85] text-[#333535]/80 xsm:text-[0.9rem] xsm:leading-[1.75]'
          >
            {paragraph}
          </p>
        ))}
      </div>

      <Link
        href={cta.href as '/'}
        className='mt-12 inline-flex items-center gap-3 font-inter text-[0.875rem] font-semibold tracking-[0.14em] text-[#062B68] uppercase transition-opacity hover:opacity-80 xsm:mt-8'
      >
        {cta.label}
        <span
          className='size-[0.55rem] shrink-0 bg-[#F4B700] rotate-45'
          aria-hidden
        />
      </Link>
    </motion.div>
  )
}
