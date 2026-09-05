'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import type { MemberUnitsContent } from '@/modules/homepage/member-units/data/member-units-data'

const ease = [0.32, 0.72, 0, 1] as const
const slide = 'duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]'

const PARA_DELAYS = [
  'group-hover:delay-150',
  'group-hover:delay-250',
  'group-hover:delay-350',
] as const

type MemberFeaturedCardProps = {
  featured: MemberUnitsContent['featured']
}

export function MemberFeaturedCard({ featured }: MemberFeaturedCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
      className='group relative h-full overflow-hidden rounded-[0.75rem]'
    >
      <Image
        src={featured.image}
        alt={featured.imageAlt}
        fill
        sizes='(max-width: 639px) 100vw, 50vw'
        className='object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-110'
      />

      <div
        className='absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0'
        style={{
          background:
            'linear-gradient(180deg, rgba(0,30,64,0.15) 0%, rgba(0,30,64,0.45) 45%, rgba(0,30,64,0.88) 100%)',
        }}
      />

      <div
        className='absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 xsm:opacity-100'
        style={{
          background: 'rgba(6, 21, 44, 0.82)',
        }}
      />

      <div className='absolute inset-0 z-[1] p-8 xsm:p-5'>
        {/* 1 title — absolute, trôi từ dưới lên trên */}
        <h3
          className={`absolute left-12 right-12 top-[calc(100%-12.5rem)] font-arial text-[3rem] leading-[1.5rem] font-bold tracking-[-0.03rem] text-[#E2E2E2] uppercase duration-300 transition-[top,color] ${slide} group-hover:top-12 group-hover:text-[#E2B570] xsm:left-5 xsm:right-5 xsm:top-5 xsm:text-[1.5rem] xsm:leading-tight xsm:text-[#E2B570]`}
        >
          {featured.brand}
        </h3>

        {/* Slogans — dưới title, ẩn khi hover */}
        <div
          className={`absolute left-12 right-12 top-[calc(100%-9.75rem)] space-y-1 transition-all ${slide} group-hover:translate-y-3 group-hover:opacity-0 xsm:left-5 xsm:right-5 xsm:top-[4.5rem] xsm:opacity-100`}
        >
          {featured.slogans.map((line) => (
            <p
              key={line}
              className='font-inter text-[1.125rem] text-[#FABD0D] uppercase xsm:text-[0.72rem] xsm:leading-snug'
            >
              {line}
            </p>
          ))}
        </div>

        {/* Paragraphs — hiện giữa title & CTA */}
        <div className='absolute inset-x-12 top-[6.5rem] bottom-[4.5rem] flex flex-col gap-5 overflow-hidden xsm:inset-x-5 xsm:top-[7rem] xsm:bottom-[4rem] xsm:gap-2.5'>
          {featured.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 28)}
              className={`translate-y-8 font-inter text-[1.125rem] leading-[1.7] tracking-[0.02em] duration-300 text-white uppercase opacity-0 transition-all ${slide} delay-0 group-hover:translate-y-0 group-hover:opacity-100 xsm:translate-y-0 xsm:text-[0.66rem] xsm:leading-[1.5] xsm:opacity-100 ${PARA_DELAYS[index] ?? 'group-hover:delay-350'}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA — cố định đáy, chỉ đổi màu */}
        <Link
          href={featured.cta.href as '/'}
          className={`absolute bottom-12 left-12 inline-flex items-center gap-2 font-manrope text-[0.75rem] font-semibold tracking-[0.14em] text-white uppercase transition-colors ${slide} group-hover:text-[#E2B570] hover:opacity-80 xsm:bottom-5 xsm:left-5`}
        >
          {featured.cta.label}
          <ArrowRight
            className='size-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1'
            strokeWidth={2}
          />
        </Link>
      </div>
    </motion.article>
  )
}
