import { ChevronDown, type LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { SelectOption } from '@/modules/shareholder-relations/data/filters-data'

type SelectFilterProps = {
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  icon: LucideIcon
  label: string
  widthClassName: string
}

export function SelectFilter({
  value,
  options,
  onChange,
  icon: Icon,
  label,
  widthClassName,
}: SelectFilterProps) {
  // Sàn font 16px ở nhánh xsm: globals.css đặt rem theo vw nên ở 320-428px (khổ iPhone)
  // 0.875rem chỉ còn 11.95-15.98px, dưới ngưỡng 16px khiến iOS Safari tự zoom khi focus
  // -> trang dịch đi và popup native trông như mở lệch chỗ. max() giữ nguyên mọi cỡ khác.
  return (
    <div className={cn('relative h-[2.875rem] shrink-0', widthClassName)}>
      <Icon
        aria-hidden
        className='pointer-events-none absolute top-1/2 left-[1rem] size-4 -translate-y-1/2 text-[#6B7280]'
      />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
        className='h-full w-full cursor-pointer appearance-none rounded-[0.75rem] border border-[#E5E7EB] bg-white pr-[2.5rem] pl-[2.75rem] font-inter text-[0.875rem] xsm:text-[max(0.875rem,16px)] leading-[1.25rem] text-[#374151] outline-none focus:border-[#062B68]'
      >
        {options.map((option) => (
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
        className='pointer-events-none absolute top-1/2 right-[1rem] size-[0.65625rem] -translate-y-1/2 text-[#6B7280]'
      />
    </div>
  )
}
