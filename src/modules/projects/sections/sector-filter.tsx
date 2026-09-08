import { cn } from '@/lib/utils'
import { PROJECT_SECTORS, type SectorFilterValue } from '@/modules/projects/data/filters-data'

type SectorFilterProps = {
  value: SectorFilterValue
  onChange: (value: SectorFilterValue) => void
}

export function SectorFilter({ value, onChange }: SectorFilterProps) {
  return (
    <section
      data-figma='64:2384'
      className='flex w-full flex-col gap-[1rem] px-[2rem] pt-[0.5rem] pb-[3rem] xsm:px-0 xsm:pt-1 xsm:pb-6'
    >
      <h2 className='font-work-sans text-[0.875rem] leading-[1.25rem] font-semibold tracking-[0.175rem] text-gold-on-light uppercase'>
        Phân loại lĩnh vực
      </h2>

      <div
        role='tablist'
        aria-label='Phân loại lĩnh vực dự án'
        className='flex flex-wrap gap-[0.5rem] xsm:snap-x xsm:flex-nowrap xsm:overflow-x-auto xsm:pb-2'
      >
        {PROJECT_SECTORS.map((sector) => {
          const isActive = sector.value === value

          return (
            <button
              key={sector.value}
              type='button'
              role='tab'
              aria-selected={isActive}
              onClick={() => onChange(sector.value)}
              className={cn(
                'shrink-0 cursor-pointer snap-start rounded-[0.25rem] px-[1.5rem] py-[0.625rem] xsm:py-[0.75rem] font-manrope text-[0.875rem] leading-[1.25rem] tracking-[-0.021875rem] whitespace-nowrap transition-colors',
                isActive
                  ? 'bg-[#062B68] font-bold text-white shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]'
                  : 'border border-[#D1D5DB] bg-white font-medium text-[#4C6078] hover:border-[#062B68]/40 hover:text-[#062B68]',
              )}
            >
              {sector.label}
            </button>
          )
        })}
      </div>
    </section>
  )
}
