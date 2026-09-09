import { FileText } from 'lucide-react'

import type { ShareholderDocument } from '@/modules/shareholder-relations/data/documents-data'
import { CATEGORY_LABELS } from '@/modules/shareholder-relations/data/filters-data'

/** `14/08/2026` — không dùng `toLocaleDateString` để server và client không lệch nhau */
function formatPublishedDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

export function DocumentCard({
  document,
  isFirst = false,
}: {
  document: ShareholderDocument
  isFirst?: boolean
}) {
  return (
    <a
      href={document.fileUrl}
      data-figma={isFirst ? '64:2203' : undefined}
      className='flex w-full items-center rounded-[0.5rem] bg-white p-[1.5rem] shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_4px_12px_rgba(6,43,104,0.12)]'
    >
      <span className='flex size-[3.5rem] shrink-0 items-center justify-center rounded-[0.5rem] bg-[#EFF6FF]'>
        <FileText
          aria-hidden
          className='size-7 text-[#2563EB]'
        />
      </span>

      <span className='ml-[1.5rem] flex min-w-0 flex-col gap-[0.25rem]'>
        <span className='font-inter text-[0.75rem] leading-4 font-bold tracking-[0.0375rem] text-[#D4AF37] uppercase'>
          {CATEGORY_LABELS[document.category]}
        </span>
        <span className='font-playfair text-[1.25rem] leading-[1.75rem] font-bold text-[#062B68]'>
          {document.title}
        </span>
        <span className='font-inter text-[0.875rem] leading-[1.25rem] text-[#6B7280]'>
          Công bố {formatPublishedDate(document.publishedAt)}
        </span>
      </span>
    </a>
  )
}
