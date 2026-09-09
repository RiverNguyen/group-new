'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

import { DevelopmentJourneyLines } from '@/modules/about/components/development-journey-lines'
import {
  DevelopmentJourneyTexts,
  type DevelopmentJourneyTextItem,
} from '@/modules/about/components/development-journey-texts'

type DevelopmentJourneyTimelineProps = {
  items: readonly DevelopmentJourneyTextItem[]
}

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.72,
    y: 18,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.82,
    y: 12,
    transition: { duration: 0.22, ease: 'easeInOut' },
  },
} as const

const contentVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
} as const

export function DevelopmentJourneyTimeline({ items }: DevelopmentJourneyTimelineProps) {
  const [activeYear, setActiveYear] = useState<string | null>(null)
  const activeItem = items.find((item) => item.year === activeYear) ?? null

  return (
    <div
      className='xsm:hidden'
      onMouseLeave={() => setActiveYear(null)}
    >
      <DevelopmentJourneyLines activeYear={activeYear} />
      <DevelopmentJourneyCenter activeItem={activeItem} />
      <DevelopmentJourneyTexts
        items={items}
        activeYear={activeYear}
        onActiveYearChange={setActiveYear}
      />
    </div>
  )
}

function DevelopmentJourneyCenter({
  activeItem,
}: {
  activeItem: DevelopmentJourneyTextItem | null
}) {
  return (
    <div className='absolute top-1/2 left-1/2 z-20 flex size-[22rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
      <motion.div
        className='relative z-10 flex size-[13.5rem] items-center justify-center rounded-full bg-white shadow-[0_0_0_0.55rem_#153A78,0_1.3rem_2.1rem_rgba(4,37,83,0.28)]'
        animate={{ scale: activeItem ? 0.96 : 1 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        <Image
          src='/header/logo.svg'
          alt='Bateco Group'
          width={148}
          height={47}
          className='h-auto w-[8.9rem]'
        />
      </motion.div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            key={activeItem.year}
            className='absolute z-20 flex h-[19.5rem] w-[16.5rem] origin-center flex-col items-center overflow-hidden rounded-t-[8.25rem] rounded-b-[0.75rem] border-[0.16rem] border-[#DDA438] bg-[#FFFEFB] px-7 pt-[2.25rem] pb-6 text-center shadow-[0_1.4rem_3.5rem_rgba(5,45,100,0.22),0_0_2.5rem_rgba(255,196,54,0.18)]'
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <motion.p
              className='font-work-sans text-[0.56rem] leading-none font-semibold tracking-[0.32em] text-[#B77C1E] uppercase'
              variants={contentVariants}
            >
              Dấu mốc phát triển
            </motion.p>
            <motion.p
              className='mt-2 font-libertinus-serif text-[4rem] leading-none font-bold text-[#C77D00]'
              variants={contentVariants}
            >
              {activeItem.year}
            </motion.p>
            <motion.h3
              className='mt-2 flex min-h-[3.75rem] w-full flex-col items-center justify-center gap-1 font-work-sans text-[0.875rem] leading-[1.18] font-semibold tracking-[0.08em] text-[#30343B] uppercase'
              variants={contentVariants}
            >
              {activeItem.cardTitle.map((line) => (
                <span
                  key={line}
                  className='block whitespace-nowrap'
                >
                  {line}
                </span>
              ))}
            </motion.h3>
            <motion.p
              className='mt-2 max-w-[12.4rem] font-work-sans text-[0.68rem] leading-[1.72] text-[#74777E]'
              variants={contentVariants}
            >
              {activeItem.description}
            </motion.p>
            <motion.p
              className='mt-2 font-work-sans text-[0.58rem] font-bold tracking-[0.22em] text-[#B77C1E]'
              variants={contentVariants}
            >
              {activeItem.order}
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
