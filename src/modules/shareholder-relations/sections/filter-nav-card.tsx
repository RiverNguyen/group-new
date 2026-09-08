import { ArrowDownWideNarrow, CalendarDays } from 'lucide-react'

import { CategoryTabs } from '@/modules/shareholder-relations/components/category-tabs'
import { DocumentSearch } from '@/modules/shareholder-relations/components/document-search'
import { SelectFilter } from '@/modules/shareholder-relations/components/select-filter'
import {
  SORT_OPTIONS,
  YEAR_OPTIONS,
  type DocumentTab,
  type SortValue,
} from '@/modules/shareholder-relations/data/filters-data'

type FilterNavCardProps = {
  tab: DocumentTab
  q: string
  year: string
  sort: SortValue
  onTabChange: (tab: DocumentTab) => void
  onSearchChange: (value: string) => void
  onYearChange: (value: string) => void
  onSortChange: (value: SortValue) => void
}

export function FilterNavCard({
  tab,
  q,
  year,
  sort,
  onTabChange,
  onSearchChange,
  onYearChange,
  onSortChange,
}: FilterNavCardProps) {
  return (
    <div
      data-figma='64:1986'
      className='relative z-[1] -mt-[4rem] flex w-[90.375rem] max-w-[calc(100%-2rem)] flex-col gap-[2rem] rounded-[1rem] bg-white p-[2rem] shadow-[0_10px_30px_rgba(6,43,104,0.12)] xsm:gap-4 xsm:p-4'
    >
      <CategoryTabs
        value={tab}
        onChange={onTabChange}
      />

      {/* Search & Sort Controls [1382×46] gap=16 — 970 + 16 + 200 + 16 + 180 = 1382 */}
      <div
        data-figma='64:2000'
        className='flex gap-[1rem] xlg:flex-col'
      >
        <DocumentSearch
          value={q}
          onChange={onSearchChange}
        />

        <SelectFilter
          value={year}
          options={YEAR_OPTIONS}
          onChange={onYearChange}
          icon={CalendarDays}
          label='Lọc theo năm'
          widthClassName='w-[12.5rem] xlg:w-full'
        />

        <SelectFilter
          value={sort}
          options={SORT_OPTIONS}
          onChange={(value) => onSortChange(value as SortValue)}
          icon={ArrowDownWideNarrow}
          label='Sắp xếp'
          widthClassName='w-[11.25rem] xlg:w-full'
        />
      </div>
    </div>
  )
}
