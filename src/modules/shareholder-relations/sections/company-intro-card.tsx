import { FileText } from 'lucide-react'
import Image from 'next/image'

export type CompanyIntroContent = {
  heading: string
  imageSrc: string
  imageAlt: string
  linkLabel: string
  linkHref: string
}

export function CompanyIntroCard({ content }: { content: CompanyIntroContent }) {
  return (
    <section
      data-figma='64:2089'
      className='flex flex-col gap-[0.5rem] bg-white p-[1.5rem]'
    >
      <h2 className='font-inter text-[1.25rem] leading-[1.75rem] font-bold text-[#111827] uppercase'>
        {content.heading}
      </h2>
      <span
        aria-hidden
        className='h-[0.125rem] w-full border-t border-[#DC2626]'
      />

      <div className='relative h-[15.079375rem] w-full bg-[#E5E7EB]'>
        <Image
          src={content.imageSrc}
          alt={content.imageAlt}
          fill
          sizes='(max-width: 1024px) 90vw, 25vw'
          className='object-contain p-[1rem]'
        />
      </div>

      <a
        href={content.linkHref}
        className='flex items-center gap-[0.5rem] pt-[0.5rem] font-inter text-[0.875rem] leading-[1.25rem] font-bold text-[#333333] transition-colors hover:text-[#062B68]'
      >
        <FileText
          aria-hidden
          className='size-4'
        />
        {content.linkLabel}
      </a>
    </section>
  )
}
