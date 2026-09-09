import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  number: string
  title: string
  className?: string
}

export function SectionHeading({ number, title, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex items-center gap-4 xsm:gap-3', className)}>
      <Badge className='mt-0.5 size-[2.35rem] h-[2.35rem] w-[2.35rem] shrink-0 rounded-full border-transparent bg-[#001E40] px-0 py-0 font-manrope text-[0.78rem] font-bold tracking-[0.02em] text-white tablet:size-9 tablet:h-9 tablet:w-9 tablet:text-[13px] xsm:mt-0 xsm:size-[2.1rem] xsm:h-[2.1rem] xsm:w-[2.1rem] xsm:text-[0.72rem]'>
        {number}
      </Badge>
      <h2 className='min-w-0 font-arial text-[1.35rem] leading-tight font-bold text-[#001E40] tablet:text-[22px] xsm:text-[1.1rem]'>
        {title}
      </h2>
    </div>
  )
}
