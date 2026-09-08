import { ArrowUpDown, ChevronDown, Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  ARTICLE_CATEGORIES,
  SORT_OPTIONS,
  SORT_VALUES,
  type ArticleFilter,
  type SortValue,
} from '@/modules/social-activities/data/filters-data'

type ArticleToolbarProps = {
  category: ArticleFilter
  q: string
  sort: SortValue
  onCategoryChange: (category: ArticleFilter) => void
  onSearchChange: (q: string) => void
  onSortChange: (sort: SortValue) => void
}

const isSortValue = (value: string): value is SortValue =>
  (SORT_VALUES as readonly string[]).includes(value)

export function ArticleToolbar({
  category,
  q,
  sort,
  onCategoryChange,
  onSearchChange,
  onSortChange,
}: ArticleToolbarProps) {
  return (
    <div
      data-figma='64:3072'
      className='flex items-center justify-between gap-[1.5rem] xlg:flex-col xlg:items-stretch xlg:gap-[1rem]'
    >
      <div
        role='tablist'
        aria-label='Danh mục tin tức'
        data-figma='64:3073'
        className='flex w-fit shrink-0 items-center rounded-full border border-[#E5E7EB] bg-white p-[0.25rem] shadow-[0_1px_2px_rgba(0,0,0,0.05)] xlg:w-full xlg:overflow-x-auto'
      >
        {ARTICLE_CATEGORIES.map((item) => {
          const isActive = item.value === category

          return (
            <button
              key={item.value}
              type='button'
              role='tab'
              aria-selected={isActive}
              onClick={() => onCategoryChange(item.value)}
              className={cn(
                'shrink-0 cursor-pointer rounded-full px-[1.5rem] py-[0.625rem] font-arial text-[0.875rem] leading-5 whitespace-nowrap transition-colors',
                isActive
                  ? 'bg-[#062B68] text-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'
                  : 'text-[#374151] hover:text-[#062B68]',
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {/* Ở xsm font input bị nâng lên 16px (chống auto-zoom iOS) nên 343px không đủ cho cả
          ô tìm kiếm lẫn dropdown trên một hàng — xuống dòng, mỗi thứ một hàng đủ rộng. */}
      <div className='flex shrink-0 items-center gap-[0.75rem] xlg:w-full xsm:flex-col xsm:items-stretch'>
        <div className='relative h-[2.4375rem] w-[16rem] xlg:w-auto xlg:flex-1 xsm:w-full xsm:flex-none'>
          <Search
            aria-hidden
            className='pointer-events-none absolute top-1/2 left-[0.75rem] size-[0.9375rem] -translate-y-1/2 text-[#9CA3AF]'
          />
          {/* Không kiểm soát giá trị: ô search debounce 300ms nên URL luôn chậm hơn phím gõ,
              nếu bind value theo URL thì con trỏ nhảy về cuối và mất chữ đang gõ. */}
          <input
            type='search'
            defaultValue={q}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder='Tìm kiếm tin tức...'
            aria-label='Tìm kiếm tin tức'
            className='h-full w-full rounded-full border border-[#D1D5DB] bg-white pr-[0.75rem] pl-[2.5rem] font-arial text-[0.875rem] leading-[1.00625rem] text-[#111827] shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline-none placeholder:text-[#6B7280] focus:border-[#062B68] xsm:text-[max(0.875rem,16px)]'
          />
        </div>

        {/* Sàn font 16px ở nhánh xsm: rem tính theo vw nên 0.875rem chỉ còn ~12-16px trên khổ
            iPhone, dưới ngưỡng 16px khiến iOS Safari tự zoom khi focus và trang dịch chỗ. */}
        <div className='relative h-[2.625rem] w-[8.625rem] shrink-0 xsm:w-full'>
          <ArrowUpDown
            aria-hidden
            className='pointer-events-none absolute top-1/2 left-[1rem] size-4 -translate-y-1/2 text-[#6B7280]'
          />
          <select
            value={sort}
            onChange={(event) => {
              if (isSortValue(event.target.value)) onSortChange(event.target.value)
            }}
            aria-label='Sắp xếp bài viết'
            className='h-full w-full cursor-pointer appearance-none rounded-full border border-[#D1D5DB] bg-white pr-[2.5rem] pl-[2.5rem] font-arial text-[0.875rem] leading-5 text-[#374151] shadow-[0_1px_2px_rgba(0,0,0,0.05)] outline-none focus:border-[#062B68] xsm:text-[max(0.875rem,16px)]'
          >
            {SORT_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className='pointer-events-none absolute top-1/2 right-[1rem] size-4 -translate-y-1/2 text-[#6B7280]'
          />
        </div>
      </div>
    </div>
  )
}
