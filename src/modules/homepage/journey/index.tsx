'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

import { Container } from '@/components/site/container'
import { JOURNEY_CONTENT } from '@/modules/homepage/journey/journey-data'

const ease = [0.32, 0.72, 0, 1] as const

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease },
}

export function JourneySection() {
  const { image, imageAlt, experience, title, description, stats } = JOURNEY_CONTENT

  return (
    <section className='bg-[#F4F6F8] py-[6.5rem] xsm:py-12'>
      <Container>
        <div className='grid grid-cols-2 items-center gap-x-[4.5rem] gap-y-12 xsm:grid-cols-1 xsm:gap-y-10 tablet:gap-x-10'>
          <motion.div
            {...fadeUp}
            className='relative'
          >
            <div className='relative aspect-[4/5] overflow-hidden rounded-[1rem] xsm:aspect-[5/4]'>
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes='(max-width: 639px) 100vw, 45vw'
                className='object-cover'
              />
            </div>

            <div className='absolute right-[-1.25rem] bottom-10 z-10 w-[13.5rem] rounded-[0.75rem] bg-white px-5 py-5 shadow-[0_12px_40px_rgba(6,43,104,0.12)] xsm:right-4 xsm:bottom-4 xsm:w-[11.5rem] xsm:px-4 xsm:py-4'>
              <p className='font-manrope text-[2.75rem] leading-none font-bold text-[#001E40] xsm:text-[2.25rem]'>
                {experience.value}
              </p>
              <p className='mt-2 font-manrope text-[0.8rem] leading-snug text-[#6B7280] xsm:text-[0.72rem]'>
                {experience.label}
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className='flex flex-col'
          >
            <h2 className='font-manrope text-[2.35rem] leading-[1.25] font-bold text-[#001E40] xsm:text-[1.65rem]'>
              {title}
            </h2>

            <p className='mt-5 max-w-[34rem] font-manrope text-[0.95rem] leading-[1.75] text-[#6B7280] xsm:mt-4 xsm:text-[0.875rem] xsm:leading-[1.7]'>
              {description}
            </p>

            <div className='mt-10 grid grid-cols-2 gap-x-10 gap-y-8 xsm:mt-8 xsm:gap-x-6 xsm:gap-y-6'>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease, delay: 0.1 + index * 0.06 }}
                  className='border-l-[3px] border-[#F4B700] pl-4'
                >
                  <p className='font-manrope text-[2.15rem] leading-none font-bold text-[#001E40] xsm:text-[1.75rem]'>
                    {stat.value}
                  </p>
                  <p className='mt-2 font-manrope text-[0.875rem] leading-snug text-[#6B7280] xsm:text-[0.8rem]'>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
