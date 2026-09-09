import { FileText } from 'lucide-react'
import Image from 'next/image'

export type FinancialReportLink = {
  id: string
  label: string
  href: string
}

export type FinancialSummaryContent = {
  heading: string
  imageSrc: string
  imageAlt: string
  reports: FinancialReportLink[]
  moreLabel: string
  moreHref: string
}

export function FinancialSummary({ content }: { content: FinancialSummaryContent }) {
  return (
    <section
      data-figma='64:2188'
      className='flex flex-col gap-[0.5rem] bg-white p-[1.5rem]'
    >
      <h2 className='font-inter text-[1.25rem] leading-[1.75rem] font-bold text-[#111827] uppercase'>
        {content.heading}
      </h2>
      <span
        aria-hidden
        className='h-[0.125rem] w-full border-t border-[#DC2626]'
      />

      {/* Container [878×240.67] row gap=24 pad-top=8 */}
      <div className='flex gap-[1.5rem] pt-[0.5rem] xsm:flex-col'>
        <div className='relative h-[14.541875rem] min-w-0 flex-1 overflow-hidden rounded-[0.25rem] bg-[#E5E7EB] xsm:h-[12rem] xsm:flex-none'>
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            fill
            sizes='(max-width: 639px) 90vw, 30vw'
            className='object-cover'
          />
        </div>

        <div className='flex min-w-0 flex-1 flex-col pt-[0.5rem] xsm:flex-none'>
          {content.reports.map((report) => (
            <a
              key={report.id}
              href={report.href}
              className='mb-[1rem] flex items-start gap-[0.5rem] font-inter text-[0.875rem] leading-[1.25rem] font-bold text-[#1F2937] transition-colors hover:text-[#062B68]'
            >
              <FileText
                aria-hidden
                className='mt-[0.125rem] size-4 shrink-0'
              />
              {report.label}
            </a>
          ))}

          <a
            href={content.moreHref}
            className='font-inter text-[0.875rem] leading-[1.25rem] font-bold text-[#DC2626] transition-opacity hover:opacity-80'
          >
            {content.moreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
