import type { ShareholderDocument } from '@/modules/shareholder-relations/data/documents-data'
import type { DocumentTab, SortValue } from '@/modules/shareholder-relations/data/filters-data'

export function normalizeVietnamese(input: string): string {
  return input
    .toLowerCase()
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export type DocumentFilters = {
  tab: DocumentTab
  q: string
  year: string
  sort: SortValue
}

export function filterDocuments(
  documents: ShareholderDocument[],
  { tab, q, year, sort }: DocumentFilters,
): ShareholderDocument[] {
  const keyword = normalizeVietnamese(q)

  return documents
    .filter((doc) => tab === 'all' || doc.category === tab)
    .filter((doc) => year === 'all' || doc.publishedAt.startsWith(year))
    .filter((doc) => keyword === '' || normalizeVietnamese(doc.title).includes(keyword))
    .sort((a, b) =>
      sort === 'newest'
        ? b.publishedAt.localeCompare(a.publishedAt)
        : a.publishedAt.localeCompare(b.publishedAt),
    )
}

export type Paginated<T> = {
  items: T[]
  page: number
  totalPages: number
}

export function paginate<T>(items: T[], page: number, perPage: number): Paginated<T> {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * perPage

  return { items: items.slice(start, start + perPage), page: safePage, totalPages }
}
