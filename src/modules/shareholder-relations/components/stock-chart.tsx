'use client'

import { useMemo } from 'react'
import { Bar, ComposedChart, Line, YAxis } from 'recharts'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import type { DocumentTab } from '@/modules/shareholder-relations/data/filters-data'
import { getStockSeries, type ChartPeriod } from '@/modules/shareholder-relations/data/stock-data'

const CHART_CONFIG = {
  price: { label: 'Giá điều chỉnh', color: '#EF4444' },
  volume: { label: 'Khối lượng', color: '#60A5FA' },
} satisfies ChartConfig

type StockChartProps = {
  period: ChartPeriod
  categoryTab: DocumentTab
}

export function StockChart({ period, categoryTab }: StockChartProps) {
  const data = useMemo(() => getStockSeries(period, categoryTab), [period, categoryTab])

  return (
    <ChartContainer
      config={CHART_CONFIG}
      className='aspect-auto h-[7.4375rem] w-full xlg:h-[12rem]'
    >
      <ComposedChart
        data={data}
        margin={{ top: 2, right: 0, bottom: 0, left: 0 }}
      >
        {/* Hai trục ẩn, chỉ để tách miền giá trị của cột và đường ra hai thang riêng */}
        <YAxis
          yAxisId='volume'
          hide
          domain={[0, (max: number) => max * 3.2]}
        />
        <YAxis
          yAxisId='price'
          hide
          domain={['dataMin - 2000', 'dataMax + 1000']}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        <Bar
          yAxisId='volume'
          dataKey='volume'
          fill='var(--color-volume)'
          radius={1}
          isAnimationActive={false}
        />
        <Line
          yAxisId='price'
          dataKey='price'
          stroke='var(--color-price)'
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      </ComposedChart>
    </ChartContainer>
  )
}
