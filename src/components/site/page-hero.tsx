'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

import { HERO_DELAY, HERO_DURATION, HERO_EASE } from '@/components/site/hero-motion'
import { cn } from '@/lib/utils'

export type PageHeroContent = {
  badge: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

type PageHeroProps = PageHeroContent & {
  align?: 'start' | 'center'
  heightClassName?: string
  divider?: boolean
  figmaNode?: string
}

export function PageHero({
  badge,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  align = 'start',
  heightClassName = 'h-[31.25rem] xsm:h-auto xsm:min-h-[26rem] xsm:py-12',
  divider = false,
  figmaNode,
}: PageHeroProps) {
  const reduce = useReducedMotion()
  const dur = (seconds: number) => (reduce ? 0 : seconds)

  const centered = align === 'center'

  return (
    <section className='relative w-full overflow-hidden pt-[4.6rem]'>
      <motion.div
        className='absolute inset-0'
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: dur(HERO_DURATION.image), ease: HERO_EASE }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
      </motion.div>
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,43,104,0.95)_0%,rgba(6,43,104,0.7)_50%,rgba(6,43,104,0.4)_100%)]' />

      <div
        data-figma={figmaNode}
        className={cn('relative flex w-full items-center', heightClassName)}
      >
        <div className='relative mx-auto w-[80rem] max-w-full px-[1.5rem]'>
          <div
            className={cn(
              'flex w-[42rem] max-w-full flex-col gap-[1.5rem]',
              centered && 'mx-auto items-center text-center',
            )}
          >
            <motion.span
              className='w-fit rounded-full border border-white/30 bg-white/10 px-[1rem] py-[0.375rem] font-inter text-[0.875rem] leading-[1.25rem] font-medium tracking-[0.04375rem] text-white/90 uppercase backdrop-blur-sm'
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: dur(HERO_DURATION.badge),
                ease: HERO_EASE,
                delay: dur(HERO_DELAY.badge),
              }}
            >
              {badge}
            </motion.span>

            <motion.h1
              className='font-playfair text-[3.75rem] leading-[3.75rem] font-bold tracking-[-0.09375rem] text-white xlg:text-[2.75rem] xlg:leading-[3rem] xsm:text-[2rem] xsm:leading-[2.5rem] xsm:tracking-normal'
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: dur(HERO_DURATION.title),
                ease: HERO_EASE,
                delay: dur(HERO_DELAY.title),
              }}
            >
              {title}
            </motion.h1>

            <motion.p
              className='font-inter text-[1.125rem] leading-[1.828125rem] text-white/90 xsm:text-[0.9375rem] xsm:leading-[1.625rem]'
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: dur(HERO_DURATION.subtitle),
                ease: HERO_EASE,
                delay: dur(HERO_DELAY.subtitle),
              }}
            >
              {subtitle}
            </motion.p>

            {divider ? (
              <motion.div
                aria-hidden
                className='h-px w-[6rem] bg-[linear-gradient(90deg,rgba(255,216,135,0)_0%,#FFD887_50%,rgba(255,216,135,0)_100%)]'
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: dur(HERO_DURATION.divider),
                  ease: HERO_EASE,
                  delay: dur(HERO_DELAY.divider),
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
