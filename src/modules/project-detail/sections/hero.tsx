'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

import { HERO_DELAY, HERO_DURATION, HERO_EASE } from '@/components/site/hero-motion'
import type { ProjectDetail } from '@/modules/project-detail/data/project-details-data'

export function ProjectDetailHero({ detail }: { detail: ProjectDetail }) {
  const reduce = useReducedMotion()
  const dur = (seconds: number) => (reduce ? 0 : seconds)

  return (
    <section className='relative w-full overflow-hidden bg-[#111827] pt-[4.6rem]'>
      <motion.div
        className='absolute inset-0 opacity-40'
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: dur(HERO_DURATION.image), ease: HERO_EASE }}
      >
        <Image
          src={detail.heroImage}
          alt={detail.heroImageAlt}
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
      </motion.div>

      <div
        data-figma='64:2718'
        className='relative flex h-[31.25rem] w-full flex-col justify-center px-[5rem] pt-[4rem] xlg:px-[2rem] xsm:h-auto xsm:min-h-[26rem] xsm:px-4 xsm:pt-12 xsm:pb-12'
      >
        <motion.span
          className='mb-[1.5rem] w-fit rounded-full bg-[#FFC107] px-[1rem] py-[0.5rem] font-inter text-[0.75rem] leading-[1rem] font-bold tracking-[0.0375rem] text-[#111827] uppercase'
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: dur(HERO_DURATION.badge),
            ease: HERO_EASE,
            delay: dur(HERO_DELAY.badge),
          }}
        >
          {detail.badge}
        </motion.span>

        <motion.h1
          className='mb-[1.5rem] w-[56rem] max-w-full font-playfair text-[3.75rem] leading-[3.75rem] font-normal text-white xlg:text-[2.75rem] xlg:leading-[3rem] xsm:text-[2rem] xsm:leading-[2.5rem]'
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: dur(HERO_DURATION.title),
            ease: HERO_EASE,
            delay: dur(HERO_DELAY.title),
          }}
        >
          {detail.title}
        </motion.h1>

        <div className='mt-[1rem] flex w-[48rem] max-w-full xsm:flex-col xsm:gap-3'>
          <motion.span
            aria-hidden
            className='mr-[1.5rem] mt-[0.75rem] h-px w-[4rem] shrink-0 bg-white xsm:mt-0 xsm:mr-0'
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: dur(HERO_DURATION.divider),
              ease: HERO_EASE,
              delay: dur(HERO_DELAY.divider),
            }}
          />
          <motion.p
            className='w-[42.5rem] max-w-full font-inter text-[1rem] leading-[1.5rem] font-medium text-white'
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: dur(HERO_DURATION.subtitle),
              ease: HERO_EASE,
              delay: dur(HERO_DELAY.subtitle),
            }}
          >
            {detail.description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
