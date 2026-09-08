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

// Trang nào cũng phân trang giống nhau nên hook tự giữ parser `page`; người gọi chỉ khai
// tiêu chí lọc riêng của trang mình. Nhờ vậy không trang nào quên reset page khi đổi bộ lọc.
const pageParser = parseAsInteger.withDefault(1).withOptions({ history: 'push' })

type ListFiltersOptions<TItem, TKeyMap extends UseQueryStatesKeysMap> = {
  /** Khai ở cấp module để tham chiếu ổn định giữa các lần render. */
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

  // nuqs suy kiểu giá trị từ keymap bằng conditional type. Keymap ở đây là generic nên TS
  // không rút gọn được, `page` ra `number | null` dù parser đã có withDefault(1). Ép kiểu
  // đúng một lần tại ranh giới này; toàn bộ phần còn lại của hook và mọi nơi gọi vẫn có
  // kiểu thật suy ra từ parsers của trang.
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
    // paginate kẹp page vào khoảng hợp lệ nên URL bịa ?page=999 không làm trắng trang.
    return paginate(matched, filters.page, perPage)
  }, [items, filters, filter, perPage])

  const setFilter = useCallback(
    (patch: Partial<FiltersOf<TKeyMap>>, historyOverride?: 'push' | 'replace') => {
      // Đổi bất kỳ tiêu chí nào cũng đưa về trang 1, nếu không người dùng đang đứng ở trang 3
      // sẽ thấy danh sách trống khi kết quả lọc mới ngắn hơn.
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
