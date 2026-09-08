'use client'

import {
  parseAsInteger,
  useQueryStates,
  type UseQueryStatesKeysMap,
  type inferParserType,
} from 'nuqs'
import { useCallback, useMemo } from 'react'

import { paginate } from '@/lib/list-filters'

type FiltersOf<TKeyMap extends UseQueryStatesKeysMap> = {
  [K in keyof TKeyMap]: inferParserType<TKeyMap[K]>
}

type ListState<TKeyMap extends UseQueryStatesKeysMap> = FiltersOf<TKeyMap> & { page: number }

const pageParser = parseAsInteger.withDefault(1).withOptions({ history: 'push' })

type ListFiltersOptions<TItem, TKeyMap extends UseQueryStatesKeysMap> = {
  parsers: TKeyMap
  filter: (items: TItem[], filters: FiltersOf<TKeyMap>) => TItem[]
  perPage: number
}

export function useListFilters<TItem, TKeyMap extends UseQueryStatesKeysMap>(
  items: TItem[],
  { parsers, filter, perPage }: ListFiltersOptions<TItem, TKeyMap>,
) {
  const keyMap = useMemo(() => ({ ...parsers, page: pageParser }), [parsers])
  const [state, setState] = useQueryStates(keyMap)

  const filters = state as ListState<TKeyMap>
  const setFilters = setState as unknown as (
    values: Partial<ListState<TKeyMap>>,
    options?: { history: 'push' | 'replace' },
  ) => void

  const {
    items: pageItems,
    page,
    totalPages,
  } = useMemo(() => {
    const matched = filter(items, filters)
    return paginate(matched, filters.page, perPage)
  }, [items, filters, filter, perPage])

  const setFilter = useCallback(
    (patch: Partial<FiltersOf<TKeyMap>>, historyOverride?: 'push' | 'replace') => {
      setFilters(
        { ...patch, page: 1 } as Partial<ListState<TKeyMap>>,
        historyOverride ? { history: historyOverride } : undefined,
      )
    },
    [setFilters],
  )

  const setPage = useCallback(
    (next: number) => {
      setFilters({ page: next } as Partial<ListState<TKeyMap>>)
    },
    [setFilters],
  )

  return { filters, items: pageItems, page, totalPages, setFilter, setPage }
}
