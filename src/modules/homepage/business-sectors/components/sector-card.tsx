'use client'

import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import type { BusinessSector } from '@/modules/homepage/business-sectors/data/sectors-data'

type SectorCardProps = {
  sector: BusinessSector
  ctaLabel: string
}

export function SectorCard({ sector, ctaLabel }: SectorCardProps) {
  return (
    <article className='group relative h-[32rem] w-full overflow-hidden xsm:h-[26rem]'>
      <Image
        src={sector.image}
        alt={sector.imageAlt}
        fill
        sizes='(max-width: 639px) 85vw, (max-width: 1024px) 33vw, 20vw'
        className='object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105'
      />

      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(180deg, rgba(0,30,64,0) 35%, rgba(0,30,64,0.55) 68%, rgba(0,30,64,0.88) 100%)',
        }}
      />

      <div className='absolute inset-x-0 bottom-0 z-[1] flex flex-col p-5 xsm:p-4'>
        <p className='font-manrope text-[2.5rem] leading-none font-bold text-white xsm:text-[2rem]'>
          {sector.index}.
        </p>

        <span className='mt-3 h-px w-10 bg-white/70' />

        <h3 className='mt-3 font-manrope text-[0.95rem] leading-snug font-bold tracking-[0.04em] text-white uppercase xsm:text-[0.85rem]'>
          {sector.title}
        </h3>

        <Link
          href={sector.href as '/'}
          className='mt-4 inline-flex items-center gap-2 font-manrope text-[0.7rem] font-bold tracking-[0.12em] text-[#F4B700] uppercase transition-opacity hover:opacity-80'
        >
          {ctaLabel}
          <span
            className='size-[0.4rem] rotate-45 bg-[#F4B700]'
            aria-hidden
          />
        </Link>
      </div>
    </article>
  )
}
