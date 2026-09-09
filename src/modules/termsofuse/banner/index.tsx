'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/site/container'
import { Separator } from '@/components/ui/separator'
import { highlightLastWords } from '@/modules/termsofuse/banner/highlight-last-words'
import { TERMS_IMAGES } from '@/modules/termsofuse/data/terms-data'

const ease = [0.32, 0.72, 0, 1] as const

export function TermsHero() {
  const t = useTranslations('TermsOfUse')
  const reduce = useReducedMotion()

  const dur = (seconds: number) => (reduce ? 0 : seconds)

  return (
    <section className='relative overflow-hidden bg-[#062B68] pt-[4.6rem]'>
      <motion.div
        className='absolute inset-0'
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: dur(1.15), ease }}
      >
        <Image
          src={TERMS_IMAGES.hero.src}
          alt={t('hero.imageAlt')}
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
      </motion.div>

      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,43,104,0.95)_0%,rgba(6,43,104,0.7)_50%,rgba(6,43,104,0.4)_100%)]' />

      <Container className='relative z-[1] px-[5rem] py-[5.5rem] tablet:px-8 xsm:px-4 xsm:py-12'>
        <div className='max-w-[41.5625rem]'>
          <motion.div
            className='mb-5 w-[3.25rem] origin-left xsm:mb-4'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: dur(0.7), ease, delay: dur(0.15) }}
          >
            <Separator className='h-[0.125rem] w-full bg-[#FFD887]' />
          </motion.div>
          <motion.h1
            className='flex h-[3.75rem] w-[41.5625rem] items-center text-[3.75rem] leading-[3.75rem] font-extrabold uppercase text-white xsm:h-auto xsm:w-full xsm:text-[2.15rem] xsm:leading-tight'
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.75), ease, delay: dur(0.22) }}
          >
            {highlightLastWords(t('hero.title'))}
          </motion.h1>
          <motion.p
            className='mt-5 flex h-[3.3333rem] w-[35rem] max-w-[35rem] flex-col font-work-sans text-[0.92rem] leading-[1.75] text-white/90 xsm:mt-4 xsm:h-auto xsm:w-full xsm:max-w-none xsm:text-[0.82rem]'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.7), ease, delay: dur(0.36) }}
          >
            {t('hero.description')}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
