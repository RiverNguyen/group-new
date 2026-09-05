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
    <Link href={sector.href as '/'}>
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
              'linear-gradient(0deg, rgba(6, 43, 104, 0.80) 0%, rgba(6, 43, 104, 0.00) 50%, rgba(6, 43, 104, 0.00) 100%)',
          }}
        />

        <div className='absolute inset-x-0 bottom-0 z-[1] flex flex-col p-[2rem] xsm:p-4'>
          <p className='font-playfair text-[2.5rem] leading-none font-bold text-white xsm:text-[2rem]'>
            {sector.index}.
          </p>

          <span className='my-2 h-px w-[3rem] bg-[#F4B700]' />

          <h3 className='mt-2 font-playfair text-[1.625rem] leading-[1.5] font-bold text-white uppercase xsm:text-[0.85rem]'>
            {sector.title}
          </h3>

          <div className='mt-4 inline-flex items-center gap-2 font-inter text-[0.75rem] tracking-[0.075rem] text-[#F4B700] uppercase transition-opacity hover:opacity-80'>
            {ctaLabel}
            <span
              className='size-[0.4rem] rotate-45 bg-[#F4B700]'
              aria-hidden
            />
          </div>
        </div>
      </article>
    </Link>
  )
}
