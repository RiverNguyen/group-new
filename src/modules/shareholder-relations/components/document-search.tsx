import { Search } from 'lucide-react'

type DocumentSearchProps = {
  value: string
  onChange: (value: string) => void
}

export function DocumentSearch({ value, onChange }: DocumentSearchProps) {
  return (
    <div className='relative h-[2.875rem] w-[60.625rem] shrink-0 xlg:w-full'>
      <Search
        aria-hidden
        className='absolute top-1/2 left-[1rem] size-4 -translate-y-1/2 text-[#9CA3AF]'
      />
      <input
        type='search'
        defaultValue={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder='Tìm kiếm tài liệu...'
        aria-label='Tìm kiếm tài liệu'
        className='h-full w-full rounded-[0.75rem] border border-[#E5E7EB] bg-white pr-[1rem] pl-[2.75rem] font-inter text-[0.875rem] xsm:text-[max(0.875rem,16px)] leading-[1.25rem] text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#062B68]'
      />
    </div>
  )
}
