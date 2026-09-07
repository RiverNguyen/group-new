'use client'

import { motion, type Variants } from 'motion/react'

export type DevelopmentJourneyTextItem = {
  year: string
  text: string
  cardTitle: readonly string[]
  className: string
  groupIndex: number
  order: string
  description: string
}

type DevelopmentJourneyTextsProps = {
  items: readonly DevelopmentJourneyTextItem[]
  activeYear: string | null
  onActiveYearChange: (year: string) => void
}

const GROUP_DELAY = 0.72
const LINE_DRAW_DURATION = 0.62
const YEAR_DELAY_AFTER_LINE = 0.02
const TEXT_DELAY_AFTER_YEAR = 0.08
const TEXT_FADE_DURATION = 0.16

export function DevelopmentJourneyTexts({
  activeYear,
  items,
  onActiveYearChange,
}: DevelopmentJourneyTextsProps) {
  return (
    <motion.div
      className='xsm:hidden'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.45 }}
    >
      {items.map((item) => (
        <button
          key={item.year}
          type='button'
          className={`group absolute z-30 w-[20.5rem] translate-x-2 cursor-pointer appearance-none bg-transparent text-left outline-none transition-opacity duration-300 ${item.className} ${
            activeYear && activeYear !== item.year ? 'opacity-30' : 'opacity-100'
          }`}
          onMouseEnter={() => onActiveYearChange(item.year)}
          onFocus={() => onActiveYearChange(item.year)}
        >
          <motion.p
            className='relative w-fit overflow-hidden font-libertinus-serif text-[2.15rem] leading-none font-bold tracking-[0.02em] text-[#F4B700]'
            custom={item.groupIndex}
            variants={textPartVariants(YEAR_DELAY_AFTER_LINE)}
            whileHover={{ scale: 1.08, x: 6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {item.year}
            <motion.span
              className='pointer-events-none absolute inset-y-0 left-0 w-1/2 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] mix-blend-screen'
              initial={{ opacity: 0, x: '-140%' }}
              whileHover={{ opacity: [0, 1, 0], x: ['-140%', '55%', '240%'] }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              aria-hidden='true'
            />
          </motion.p>
          <motion.p
            className='mt-3 font-work-sans text-[0.72rem] leading-tight font-bold tracking-[0.05em] text-[#102F62] uppercase transition-colors duration-300 group-hover:text-[#0B2858]'
            custom={item.groupIndex}
            variants={textPartVariants(YEAR_DELAY_AFTER_LINE + TEXT_DELAY_AFTER_YEAR)}
          >
            {item.text}
          </motion.p>
        </button>
      ))}
    </motion.div>
  )
}

function textPartVariants(extraDelay: number): Variants {
  return {
    hidden: { opacity: 0, y: 8 },
    visible: (groupIndex: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: groupIndex * GROUP_DELAY + LINE_DRAW_DURATION + extraDelay,
        duration: TEXT_FADE_DURATION,
        ease: 'easeOut' as const,
      },
    }),
  }
}
