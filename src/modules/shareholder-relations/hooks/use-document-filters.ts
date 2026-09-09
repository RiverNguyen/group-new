'use client'

import { debounce, parseAsInteger, parseAsString, parseAsStringLiteral, useQueryStates } from 'nuqs'
import { useCallback, useMemo } from 'react'

import {
  DOCUMENTS_PER_PAGE,
  type ShareholderDocument,
} from '@/modules/shareholder-relations/data/documents-data'
import {
  DOCUMENT_TAB_VALUES,
  SORT_VALUES,
  type DocumentTab,
  type SortValue,
} from '@/modules/shareholder-relations/data/filters-data'
import { filterDocuments, paginate } from '@/modules/shareholder-relations/utils/filter-documents'

const filterParsers = {
  tab: parseAsStringLiteral(DOCUMENT_TAB_VALUES).withDefault('all').withOptions({
    history: 'push',
  }),
  q: parseAsString.withDefault('').withOptions({
    history: 'replace',
    limitUrlUpdates: debounce(300),
  }),
  year: parseAsString.withDefault('all').withOptions({ history: 'push' }),
  sort: parseAsStringLiteral(SORT_VALUES).withDefault('newest').withOptions({
    history: 'push',
  }),
  page: parseAsInteger.withDefault(1).withOptions({ history: 'push' }),
}

export type DocumentFiltersState = {
  tab: DocumentTab
  q: string
  year: string
  sort: SortValue
  page: number
}

export function useDocumentFilters(documents: ShareholderDocument[]) {
  const [filters, setFilters] = useQueryStates(filterParsers)

  const { items, page, totalPages } = useMemo(() => {
    const matched = filterDocuments(documents, filters)
    return paginate(matched, filters.page, DOCUMENTS_PER_PAGE)
  }, [documents, filters])

  const setFilter = useCallback(
    (patch: Partial<Omit<DocumentFiltersState, 'page'>>, historyOverride?: 'push' | 'replace') => {
      void setFilters(
        { ...patch, page: 1 },
        historyOverride ? { history: historyOverride } : undefined,
      )
    },
    [setFilters],
  )

  const setPage = useCallback(
    (next: number) => {
      void setFilters({ page: next })
    },
    [setFilters],
  )

  return { filters, items, page, totalPages, setFilter, setPage }
}
