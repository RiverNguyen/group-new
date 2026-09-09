import { DocumentCard } from '@/modules/shareholder-relations/components/document-card'
import { DocumentPagination } from '@/modules/shareholder-relations/components/document-pagination'
import type { ShareholderDocument } from '@/modules/shareholder-relations/data/documents-data'

type DocumentListProps = {
  items: ShareholderDocument[]
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function DocumentList({ items, page, totalPages, onPageChange }: DocumentListProps) {
  return (
    <>
      {items.length === 0 ? (
        <p className='rounded-[0.5rem] bg-white p-[1.5rem] text-center font-inter text-[0.875rem] leading-[1.25rem] text-[#6B7280]'>
          Không tìm thấy tài liệu phù hợp với bộ lọc hiện tại.
        </p>
      ) : (
        items.map((document, i) => (
          <DocumentCard
            key={document.id}
            document={document}
            isFirst={i === 0}
          />
        ))
      )}

      <DocumentPagination
        page={page}
        totalPages={totalPages}
        onChange={onPageChange}
      />
    </>
  )
}
