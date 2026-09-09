import { cn } from '@/lib/utils'

type ListPaginationProps = {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

export function ListPagination({ page, totalPages, onChange }: ListPaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav
      aria-label='Phân trang bài viết'
      data-figma='64:3193'
      className='flex w-full items-center justify-center gap-[0.5rem] py-[1.875rem]'
    >
      <button
        type='button'
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className='cursor-pointer rounded-full border border-[#D1D5DB] bg-white px-[1rem] py-[0.5rem] xsm:py-[0.6875rem] font-inter text-[0.875rem] leading-5 font-medium text-[#6B7280] transition-colors enabled:hover:text-[#062B68] disabled:cursor-not-allowed disabled:opacity-50'
      >
        Trước
      </button>

      {pages.map((value) => {
        const isActive = value === page

        return (
          <button
            key={value}
            type='button'
            onClick={() => onChange(value)}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'size-[2.5rem] xsm:size-[2.75rem] cursor-pointer rounded-full font-inter text-[0.875rem] leading-5 font-bold transition-colors',
              isActive
                ? 'bg-[#062B68] text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                : 'border border-[#D1D5DB] bg-white text-[#062B68] hover:bg-[#EFF6FF]',
            )}
          >
            {value}
          </button>
        )
      })}

      <button
        type='button'
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className='cursor-pointer rounded-full border border-[#D1D5DB] bg-white px-[1rem] py-[0.5rem] xsm:py-[0.6875rem] font-inter text-[0.875rem] leading-5 font-medium text-[#062B68] transition-colors enabled:hover:bg-[#EFF6FF] disabled:cursor-not-allowed disabled:opacity-50'
      >
        Sau
      </button>
    </nav>
  )
}
