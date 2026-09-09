import { Fragment } from 'react'

import { cn } from '@/lib/utils'
import {
  CHART_PERIOD_OPTIONS,
  type ChartPeriod,
} from '@/modules/shareholder-relations/data/stock-data'

type ChartPeriodTabsProps = {
  value: ChartPeriod
  onChange: (period: ChartPeriod) => void
}

export function ChartPeriodTabs({ value, onChange }: ChartPeriodTabsProps) {
  return (
    <div className='flex h-[2rem] items-center gap-[0.5rem] xsm:overflow-x-auto'>
      {CHART_PERIOD_OPTIONS.map((option, index) => (
        <Fragment key={option.value}>
          {index > 0 ? (
            <span
              aria-hidden
              className='font-inter text-[0.75rem] leading-4 text-[#2563EB]'
            >
              |
            </span>
          ) : null}
          <button
            type='button'
            onClick={() => onChange(option.value)}
            aria-pressed={option.value === value}
            className={cn(
              'shrink-0 cursor-pointer font-inter text-[0.75rem] leading-4 whitespace-nowrap text-[#2563EB] transition-opacity hover:opacity-70',
              option.value === value ? 'font-bold underline' : 'font-normal',
            )}
          >
            {option.label}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
