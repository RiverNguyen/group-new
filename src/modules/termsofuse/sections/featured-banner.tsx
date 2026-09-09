'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { TERMS_IMAGES } from '@/modules/termsofuse/data/terms-data'

const ease = [0.32, 0.72, 0, 1] as const

export function FeaturedBanner() {
  const t = useTranslations('TermsOfUse')
  const reduce = useReducedMotion()

  return (
    <motion.figure
      className='group relative overflow-hidden rounded-xl print:!opacity-100 print:!transform-none'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduce ? 0 : 0.75, ease }}
    >
      <Image
        src={TERMS_IMAGES.featured.src}
        alt={t('featured.imageAlt')}
        width={1536}
        height={1024}
        sizes='(max-width: 639px) 100vw, 75rem'
        className='h-auto w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform group-hover:scale-[1.03]'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-[#001E40]/78 via-[#001E40]/18 to-transparent' />
      <figcaption className='absolute bottom-6 left-7 max-w-[28rem] font-work-sans text-[0.95rem] leading-[1.55] font-medium text-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-[-2px] xsm:bottom-4 xsm:left-4 xsm:text-[0.78rem]'>
        {t('featured.caption')}
      </figcaption>
    </motion.figure>
  )
}
