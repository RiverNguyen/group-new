'use client'

import { ArrowRight, ArrowUpRight, CalendarDays, Globe, Leaf } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import { MemberUnitIcon } from '@/modules/homepage/member-units/components/member-unit-icon'
import type { MemberUnit } from '@/modules/homepage/member-units/data/member-units-data'

const ease = [0.32, 0.72, 0, 1] as const

type MemberUnitItemProps = {
  unit: MemberUnit
  index: number
  isExpanded: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

export function MemberUnitItem({
  unit,
  index,
  isExpanded,
  onHoverStart,
  onHoverEnd,
}: MemberUnitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, flexGrow: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{ flexGrow: isExpanded ? 2.8 : 1 }}
      transition={{
        opacity: { duration: 0.55, ease, delay: 0.06 + index * 0.05 },
        y: { duration: 0.55, ease, delay: 0.06 + index * 0.05 },
        flexGrow: { duration: 0.5, ease },
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{ flexBasis: 0, flexShrink: 1 }}
      className='relative flex min-h-0 overflow-hidden rounded-[0.5rem] xsm:min-h-[5.5rem]'
    >
      <Link
        href={unit.href as '/'}
        className='relative flex h-full w-full overflow-hidden rounded-[0.5rem]'
      >
        {/* Expanded background */}
        <motion.div
          className='absolute inset-0'
          initial={false}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <Image
            src={unit.image}
            alt={unit.name}
            fill
            sizes='(max-width: 639px) 100vw, 45vw'
            className='object-cover'
          />
          <div
            className='absolute inset-0 opacity-95'
            style={{
              background: 'linear-gradient(84deg, #001E40 0%, #0369A1 100%)',
            }}
          />
          <div
            className='absolute top-0 left-0 w-[25.76381rem] h-[0.125rem]'
            style={{
              background: 'linear-gradient(90deg, #FFDF9F 0%, rgba(255, 223, 159, 0.00) 100%)',
            }}
          />
        </motion.div>

        {/* Collapsed background */}
        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(90deg, #1E2020 0%, rgba(30, 32, 32, 0.95) 50%, rgba(30, 32, 32, 0.80) 100%)',
          }}
          initial={false}
          animate={{ opacity: isExpanded ? 0 : 1 }}
          transition={{ duration: 0.4, ease }}
        />

        <div className='relative z-[1] flex h-full w-full'>
          <AnimatePresence
            mode='wait'
            initial={false}
          >
            {isExpanded ? (
              <motion.div
                key='expanded'
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
                className='grid h-full w-full grid-cols-[1.15fr_0.85fr] gap-5 p-5 xsm:min-h-[18rem] xsm:grid-cols-1 xsm:gap-4 xsm:p-4'
              >
                <div className='flex min-h-0 flex-col border-r border-white/20 pr-5 xsm:border-r-0 xsm:pr-0'>
                  <span className='font-playfair text-[1.75rem] leading-none font-medium text-[#F4B700]'>
                    {unit.index}
                  </span>
                  <h3 className='mt-3 font-arial text-[2rem] leading-[2.5rem] font-bold text-[#E2E2E2] xsm:text-[1.1rem] xsm:leading-snug'>
                    {unit.name}
                  </h3>
                  <p className='mt-1.5 font-inter text-[0.875rem] leading-[1.25rem] font-medium text-[#C4C6D1] uppercase xsm:text-[0.72rem] xsm:leading-snug'>
                    {unit.description}
                  </p>
                  <p className='mt-auto pt-4 font-inter text-[0.875rem] leading-[1.65] text-white/80 xsm:pt-3 xsm:text-[0.75rem]'>
                    {unit.detail}
                  </p>
                </div>

                <div className='flex min-h-0 items-center justify-center gap-4 xsm:justify-between'>
                  <ul className='min-w-0 space-y-3.5 xsm:space-y-2.5'>
                    <li className='flex items-center gap-2.5 font-inter text-[0.75rem] text-white/90 xsm:text-[0.72rem]'>
                      <CalendarDays
                        className='size-3.5 shrink-0 text-[#FFDF9F]'
                        strokeWidth={1.5}
                      />
                      Thành lập: {unit.founded}
                    </li>
                    <li className='flex items-center gap-2.5 font-inter text-[0.75rem] text-white/90 xsm:text-[0.72rem]'>
                      <Leaf
                        className='size-3.5 shrink-0 text-[#FFDF9F]'
                        strokeWidth={1.5}
                      />
                      Lĩnh vực: {unit.field}
                    </li>
                    <li className='flex items-center gap-2.5 font-inter text-[0.75rem] text-white/90 xsm:text-[0.72rem]'>
                      <Globe
                        className='size-3.5 shrink-0 text-[#FFDF9F]'
                        strokeWidth={1.5}
                      />
                      Website: {unit.website}
                    </li>
                  </ul>

                  <span className='flex size-10 shrink-0 items-center justify-center rounded-[0.75rem] border border-[#FFDF9F]/50 text-[#FFDF9F] xsm:size-9'>
                    <ArrowUpRight
                      className='size-4'
                      strokeWidth={1.75}
                    />
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key='collapsed'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease }}
                className='flex h-full w-full items-center gap-8 px-6 py-4 xsm:min-h-[5.5rem] xsm:gap-3 xsm:px-3.5'
              >
                <span className='font-playfair text-[2.5rem] leading-[1.5] font-medium text-[#FFDF9F]/50 xsm:text-[1.4rem]'>
                  {unit.index}
                </span>

                <span className='flex size-12 shrink-0 bg-[#121414] items-center justify-center rounded-[0.25rem] border border-[#444650]/20 text-[#B1C6FF] xsm:size-9'>
                  <MemberUnitIcon
                    name={unit.icon}
                    className='size-5 xsm:size-4'
                  />
                </span>

                <span className='min-w-0 flex-1'>
                  <span className='block font-arial text-[2rem] leading-[2.5rem] font-bold text-[#E2E2E2] xsm:text-[0.95rem] xsm:leading-snug'>
                    {unit.name}
                  </span>
                  <span className='block font-inter text-[0.875rem] font-medium text-[#C4C6D1] xsm:mt-1 xsm:text-[0.72rem] xsm:leading-snug'>
                    {unit.description}
                  </span>
                </span>

                <span className='flex shrink-0 items-center justify-center'>
                  <ArrowRight
                    className='size-4 text-[#C4C6D1]'
                    strokeWidth={1.75}
                  />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </motion.div>
  )
}
