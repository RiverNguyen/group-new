import {
  DOCUMENT_CATEGORIES,
  SHAREHOLDER_DOCUMENTS,
  type DocumentCategory,
} from '@/modules/shareholder-relations/data/documents-data'

export const DOCUMENT_TAB_VALUES = ['all', ...DOCUMENT_CATEGORIES] as const

export type DocumentTab = (typeof DOCUMENT_TAB_VALUES)[number]

export type TabOption = {
  value: DocumentTab
  label: string
}

export const DOCUMENT_TABS: TabOption[] = [
  { value: 'all', label: 'Tất cả' },
  { value: 'annual', label: 'Báo cáo thường niên' },
  { value: 'financial', label: 'Báo cáo tài chính' },
  { value: 'agm', label: 'Đại hội đồng cổ đông' },
]

export const CATEGORY_LABELS: Record<DocumentCategory, string> = {
  annual: 'Báo cáo thường niên',
  financial: 'Báo cáo tài chính',
  agm: 'Đại hội đồng cổ đông',
}

export type SelectOption = {
  value: string
  label: string
}

export const YEAR_OPTIONS: SelectOption[] = [
  { value: 'all', label: 'Tất cả các năm' },
  ...[...new Set(SHAREHOLDER_DOCUMENTS.map((d) => d.publishedAt.slice(0, 4)))]
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({ value: year, label: year })),
]

export const SORT_VALUES = ['newest', 'oldest'] as const

export type SortValue = (typeof SORT_VALUES)[number]

export const SORT_OPTIONS: SelectOption[] = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'oldest', label: 'Cũ nhất' },
]
