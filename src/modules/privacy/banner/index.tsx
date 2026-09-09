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
  // `initial` phải giống nhau giữa server và lần render đầu trên client. useReducedMotion()
  // đọc media query nên trả null khi render trên server (không có media query) nhưng có thể
  // trả true ngay ở lần render đầu trên client — nếu để `initial` phụ thuộc vào nó thì inline
  // style lệch nhau và React báo hydration mismatch. Vì vậy chỉ tắt animation qua `duration`:
  // `transition` không sinh ra inline style nên khác nhau giữa hai bên là vô hại.
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
          src={PRIVACY_HERO_IMAGE}
          alt={t('hero.imageAlt')}
          fill
          priority
          sizes='100vw'
          className='object-cover object-[center_20%] tablet:object-center'
        />
      </motion.div>
      {/* Cùng lớp phủ navy với hero /quan-he-co-dong và /linh-vuc-kinh-doanh/dich-vu-cong-nghiep,
          không phải lớp gradient trắng như trước. Chữ trong banner vì vậy phải là chữ sáng. */}
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,43,104,0.95)_0%,rgba(6,43,104,0.7)_50%,rgba(6,43,104,0.4)_100%)]' />

      <Container className='relative z-[1] px-[5rem] py-[5.5rem] tablet:px-[40px] tablet:py-16 xsm:px-4 xsm:py-12'>
        <div className='max-w-[42rem] tablet:max-w-[34rem] xsm:max-w-none'>
          <motion.p
            className='mb-4 font-semibold tracking-[0.16em] text-[0.72rem] text-[#FFD887] uppercase tablet:mb-3 tablet:text-[12px] xsm:mb-3 xsm:text-[0.64rem]'
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.6), ease, delay: dur(0.12) }}
          >
            {t('hero.eyebrow')}
          </motion.p>
          <motion.h1
            className='text-[3.35rem] leading-[1.12] font-extrabold text-white tablet:text-[42px] tablet:leading-[1.15] xsm:text-[2.05rem] xsm:leading-tight'
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.75), ease, delay: dur(0.2) }}
          >
            <PrivacyTitle
              lead={t('hero.titleLead')}
              accent={t('hero.titleAccent')}
              end={t('hero.titleEnd')}
            />
          </motion.h1>
          <motion.p
            className='mt-5 max-w-[36rem] font-work-sans text-[0.92rem] leading-[1.75] text-white/90 tablet:mt-4 tablet:max-w-[32rem] tablet:text-[15px] tablet:leading-7 xsm:mt-4 xsm:max-w-none xsm:text-[0.82rem]'
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur(0.7), ease, delay: dur(0.34) }}
          >
            {t('hero.description')}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
