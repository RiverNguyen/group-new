'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/site/container'
import { PrivacyTitle } from '@/modules/privacy/banner/title'
import { PRIVACY_HERO_IMAGE } from '@/modules/privacy/data/privacy-data'

const ease = [0.32, 0.72, 0, 1] as const

export function PrivacyHero() {
  const t = useTranslations('PrivacyPolicy')
  const reduce = useReducedMotion()

  return (
    <section className='relative overflow-hidden bg-[#F4F6F8] pt-[4.6rem]'>
      <motion.div
        className='absolute inset-0'
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.15, ease }}
      >
        <Image
          src={PRIVACY_HERO_IMAGE}
          alt={t('hero.imageAlt')}
          fill
          priority
          sizes='100vw'
          className='object-cover object-[center_20%] tablet:object-center'
        />
      </motion.div>
      <div className='absolute inset-0 bg-gradient-to-t from-white/92 via-white/78 to-white/12' />

      <Container className='relative z-[1] px-[5rem] py-[5.5rem] tablet:px-[40px] tablet:py-16 xsm:px-4 xsm:py-12'>
        <div className='max-w-[42rem] tablet:max-w-[34rem] xsm:max-w-none'>
          <motion.p
            className='mb-4 font-semibold tracking-[0.16em] text-[0.72rem] text-[#BB9650] uppercase tablet:mb-3 tablet:text-[12px] xsm:mb-3 xsm:text-[0.64rem]'
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
          >
            {t('hero.eyebrow')}
          </motion.p>
          <motion.h1
            className='text-[3.35rem] leading-[1.12] font-extrabold text-[#001E40] tablet:text-[42px] tablet:leading-[1.15] xsm:text-[2.05rem] xsm:leading-tight'
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
          >
            <PrivacyTitle
              lead={t('hero.titleLead')}
              accent={t('hero.titleAccent')}
              end={t('hero.titleEnd')}
            />
          </motion.h1>
          <motion.p
            className='mt-5 max-w-[36rem] font-work-sans text-[0.92rem] leading-[1.75] text-[#4B5563] tablet:mt-4 tablet:max-w-[32rem] tablet:text-[15px] tablet:leading-7 xsm:mt-4 xsm:max-w-none xsm:text-[0.82rem]'
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.34 }}
          >
            {t('hero.description')}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
