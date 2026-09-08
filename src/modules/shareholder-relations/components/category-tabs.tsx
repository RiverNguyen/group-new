import { cn } from '@/lib/utils'
import { DOCUMENT_TABS, type DocumentTab } from '@/modules/shareholder-relations/data/filters-data'

type CategoryTabsProps = {
  value: DocumentTab
  onChange: (tab: DocumentTab) => void
}

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <div
      role='tablist'
      aria-label='Danh mục tài liệu'
      data-figma='64:1988'
      className='flex w-fit gap-[0.5rem] rounded-[0.75rem] bg-[#F9FAFB] p-[0.375rem] xsm:w-full xsm:overflow-x-auto'
    >
      {DOCUMENT_TABS.map((tab) => {
        const isActive = tab.value === value

        return (
          <button
            key={tab.value}
            type='button'
            role='tab'
            aria-selected={isActive}
            onClick={() => onChange(tab.value)}
            className={cn(
              'shrink-0 cursor-pointer rounded-[0.5rem] px-[1.5rem] py-[0.625rem] font-inter text-[0.875rem] leading-[1.25rem] font-medium whitespace-nowrap transition-colors',
              isActive ? 'bg-[#062B68] text-white' : 'text-[#4B5563] hover:bg-white',
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
