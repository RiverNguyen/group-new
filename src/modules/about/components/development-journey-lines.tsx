'use client'

import { motion } from 'motion/react'

const GROUP_DELAY = 0.72
const LINE_DRAW_DURATION = 0.62

const LINE_GROUPS = [
  [
    { year: '2012', points: '454,200 418,299 250,311' },
    { year: '2026', points: '666,200 702,299 870,311' },
  ],
  [
    { year: '2014', points: '452,192 250,192' },
    { year: '2023', points: '668,192 870,192' },
  ],
  [
    { year: '2018', points: '454,184 418,85 250,73' },
    { year: '2020', points: '666,184 702,85 870,73' },
  ],
] as const

export function DevelopmentJourneyLines({ activeYear }: { activeYear?: string | null }) {
  return (
    <motion.svg
      className='pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible xsm:hidden'
      viewBox='0 0 1120 384'
      preserveAspectRatio='none'
      aria-hidden='true'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.45 }}
    >
      <g
        fill='none'
        stroke='#F4B700'
        strokeLinecap='square'
        strokeLinejoin='miter'
        strokeWidth='1.35'
        vectorEffect='non-scaling-stroke'
      >
        {LINE_GROUPS.map((group, groupIndex) =>
          group.map((line) => (
            <motion.polyline
              key={line.year}
              points={line.points}
              animate={{
                opacity: activeYear && activeYear !== line.year ? 0.22 : 1,
                strokeWidth: activeYear === line.year ? 2.2 : 1.35,
              }}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    delay: groupIndex * GROUP_DELAY,
                    duration: LINE_DRAW_DURATION,
                    ease: 'easeInOut',
                  },
                },
              }}
            />
          )),
        )}
      </g>
    </motion.svg>
  )
}
