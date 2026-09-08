import { cn } from '@/lib/utils'
import type { StockStat } from '@/modules/shareholder-relations/data/stock-data'

const TONE_CLASS: Record<StockStat['tone'], string> = {
  up: 'text-[#16A34A]',
  down: 'text-[#DC2626]',
  neutral: 'text-[#1F2937]',
}

export function StockStatRow({ stat }: { stat: StockStat }) {
  return (
    <div className='flex items-center justify-between border-b border-[#F3F4F6] py-[0.5rem] last:border-b-0'>
      <span className='font-inter text-[0.875rem] leading-[1.25rem] text-[#4B5563]'>
        {stat.label}
      </span>
      <span
        className={cn(
          'font-inter text-[0.875rem] leading-[1.25rem] font-bold',
          TONE_CLASS[stat.tone],
        )}
      >
        {stat.value}
      </span>
    </div>
  )
}
