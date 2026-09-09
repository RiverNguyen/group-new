'use client'

import { useState } from 'react'

import { ChartPeriodTabs } from '@/modules/shareholder-relations/components/chart-period-tabs'
import { StockChart } from '@/modules/shareholder-relations/components/stock-chart'
import { StockStatRow } from '@/modules/shareholder-relations/components/stock-stat-row'
import type { DocumentTab } from '@/modules/shareholder-relations/data/filters-data'
import type { ChartPeriod, StockQuote } from '@/modules/shareholder-relations/data/stock-data'

type StockQuotePanelProps = {
  quote: StockQuote
  categoryTab: DocumentTab
}

export function StockQuotePanel({ quote, categoryTab }: StockQuotePanelProps) {
  const [period, setPeriod] = useState<ChartPeriod>('1d')
  const changeColor = quote.changeTone === 'up' ? 'text-[#16A34A]' : 'text-[#DC2626]'

  return (
    <section
      data-figma='64:2104'
      className='flex flex-col gap-[0.5rem] bg-white p-[1.5rem]'
    >
      <h2 className='font-inter text-[1.25rem] leading-[1.75rem] font-bold text-[#111827] uppercase'>
        {quote.companyName} ({quote.exchange}: {quote.symbol})
      </h2>
      <span
        aria-hidden
        className='h-[0.125rem] w-full border-t border-[#DC2626]'
      />

      {/* Container [878×223] row gap=32 pad=16/0/24/0 — 3 cột 271.33 */}
      <div
        data-figma='64:2108'
        className='flex gap-[2rem] pt-[1rem] pb-[1.5rem] xlg:flex-col xlg:gap-6'
      >
        {/* Current Price [271.33×183] */}
        <div
          data-figma='64:2109'
          className='flex min-w-0 flex-1 flex-col'
        >
          <div className='flex items-baseline gap-[1.21875rem]'>
            <span className={`font-inter text-[3rem] leading-[3rem] font-bold ${changeColor}`}>
              {quote.price}
            </span>
            <span className='font-inter text-[1.25rem] leading-[1.75rem] text-[#4B5563]'>
              {quote.currency}
            </span>
          </div>
          <span
            className={`mt-[0.5rem] font-inter text-[1rem] leading-[1.5rem] font-bold ${changeColor}`}
          >
            {quote.change}
          </span>
          <span className='mt-[0.25rem] font-inter text-[0.875rem] leading-[1.25rem] text-[#6B7280]'>
            {quote.updatedAt}
          </span>
          <span className='mt-[0.25rem] font-inter text-[0.875rem] leading-[1.25rem] text-[#6B7280]'>
            {quote.sessionStatus}
          </span>
        </div>

        {/* Stock Details Table [271.33×183] */}
        <div
          data-figma='64:2120'
          className='flex min-w-0 flex-1 flex-col'
        >
          {quote.stats.map((stat) => (
            <StockStatRow
              key={stat.label}
              stat={stat}
            />
          ))}
        </div>

        {/* Chart Area [271.33×183] */}
        <div
          data-figma='64:2147'
          className='flex min-w-0 flex-1 flex-col'
        >
          <div className='pb-[0.5rem]'>
            <ChartPeriodTabs
              value={period}
              onChange={setPeriod}
            />
          </div>

          <div className='flex items-center justify-between pb-[0.5rem]'>
            <span className='font-inter text-[0.75rem] leading-4 text-[#6B7280]'>
              {quote.symbol} (Giá điều chỉnh)
            </span>
            <span className='font-inter text-[0.75rem] leading-4 text-[#6B7280]'>
              Dữ liệu mô phỏng
            </span>
          </div>

          {/* Placeholder for Chart [271.33×119] */}
          <div data-figma='64:2170'>
            <StockChart
              period={period}
              categoryTab={categoryTab}
            />
          </div>
        </div>
      </div>

      <p className='border-t border-[#E5E7EB] pt-[1rem] font-inter text-[0.875rem] leading-[1.25rem] text-[#6B7280]'>
        {quote.disclaimer}
      </p>
    </section>
  )
}
