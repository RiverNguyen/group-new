import { normalizeVietnamese, paginate } from '@/lib/list-filters'
import type { ShareholderDocument } from '@/modules/shareholder-relations/data/documents-data'
import type { DocumentTab, SortValue } from '@/modules/shareholder-relations/data/filters-data'

export { normalizeVietnamese, paginate }
export type { Paginated } from '@/lib/list-filters'

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
