export const DOCUMENT_CATEGORIES = ['annual', 'financial', 'agm'] as const

export type DocumentCategory = (typeof DOCUMENT_CATEGORIES)[number]

export type ShareholderDocument = {
  id: string
  category: DocumentCategory
  title: string
  publishedAt: string
  fileUrl: string
}

export const DOCUMENTS_PER_PAGE = 3

export const SHAREHOLDER_DOCUMENTS: ShareholderDocument[] = [
  {
    id: 'bctn-2026',
    category: 'annual',
    title: 'Báo cáo thường niên 2026',
    publishedAt: '2026-08-14',
    fileUrl: '#',
  },
  {
    id: 'bctc-q2-2026',
    category: 'financial',
    title: 'Báo cáo tài chính quý II/2026',
    publishedAt: '2026-07-30',
    fileUrl: '#',
  },
  {
    id: 'nq-dhdcd-2026',
    category: 'agm',
    title: 'Nghị quyết Đại hội đồng cổ đông thường niên 2026',
    publishedAt: '2026-04-25',
    fileUrl: '#',
  },
  {
    id: 'bctc-q1-2026',
    category: 'financial',
    title: 'Báo cáo tài chính quý I/2026',
    publishedAt: '2026-04-18',
    fileUrl: '#',
  },
  {
    id: 'tl-dhdcd-2026',
    category: 'agm',
    title: 'Tài liệu họp Đại hội đồng cổ đông thường niên 2026',
    publishedAt: '2026-04-03',
    fileUrl: '#',
  },
  {
    id: 'bctn-2025',
    category: 'annual',
    title: 'Báo cáo thường niên 2025',
    publishedAt: '2025-08-12',
    fileUrl: '#',
  },
  {
    id: 'bctc-nam-2025',
    category: 'financial',
    title: 'Báo cáo tài chính kiểm toán năm 2025',
    publishedAt: '2025-03-28',
    fileUrl: '#',
  },
  {
    id: 'bb-dhdcd-2025',
    category: 'agm',
    title: 'Biên bản họp Đại hội đồng cổ đông thường niên 2025',
    publishedAt: '2025-04-22',
    fileUrl: '#',
  },
  {
    id: 'bctn-2024',
    category: 'annual',
    title: 'Báo cáo thường niên 2024',
    publishedAt: '2024-08-09',
    fileUrl: '#',
  },
]
