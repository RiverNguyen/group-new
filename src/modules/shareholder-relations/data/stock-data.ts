import type { DocumentTab } from '@/modules/shareholder-relations/data/filters-data'

export const STOCK_EXCHANGE = 'HOSE'
export const STOCK_SYMBOL = '—'

export const CHART_PERIODS = ['1d', '5d', '3m', '6m', '12m'] as const

export type ChartPeriod = (typeof CHART_PERIODS)[number]

export type ChartPeriodOption = {
  value: ChartPeriod
  label: string
}

export const CHART_PERIOD_OPTIONS: ChartPeriodOption[] = [
  { value: '1d', label: '1 ngày' },
  { value: '5d', label: '5 ngày' },
  { value: '3m', label: '3 tháng' },
  { value: '6m', label: '6 tháng' },
  { value: '12m', label: '12 tháng' },
]

export type StockStat = {
  label: string
  value: string
  /** `up` xanh `#16A34A`, `down` đỏ `#DC2626`, `neutral` xám đậm `#1F2937` */
  tone: 'up' | 'down' | 'neutral'
}

export type StockQuote = {
  companyName: string
  exchange: string
  symbol: string
  price: string
  currency: string
  change: string
  changeTone: 'up' | 'down'
  updatedAt: string
  sessionStatus: string
  stats: StockStat[]
  disclaimer: string
}

export const STOCK_QUOTE: StockQuote = {
  companyName: 'Tập đoàn Bateco Group - CTCP',
  exchange: STOCK_EXCHANGE,
  symbol: STOCK_SYMBOL,
  price: '204,900',
  currency: '(VNĐ)',
  change: '2,900 (1.44%)',
  changeTone: 'up',
  updatedAt: '21/08/2026 14:35',
  sessionStatus: 'Đang giao dịch',
  stats: [
    { label: 'Mở cửa (VNĐ)', value: '201,400', tone: 'down' },
    { label: 'Cao nhất (VNĐ)', value: '205,700', tone: 'up' },
    { label: 'Thấp nhất (VNĐ)', value: '199,900', tone: 'down' },
    { label: 'KLGD (CP)', value: '2,862,000', tone: 'neutral' },
    { label: 'Vốn hóa (Tỷ VNĐ)', value: '1,591,248.22', tone: 'neutral' },
  ],
  disclaimer:
    'Dữ liệu được thể hiện trên trang web này chỉ mang tính tham khảo và là dữ liệu mô phỏng. Bateco Group không chịu trách nhiệm với bất kỳ quyết định đầu tư nào dựa trên các số liệu này.',
}

export type StockPoint = {
  /** Nhãn trục X — chỉ dùng trong tooltip, biểu đồ ở kích thước này ẩn trục */
  label: string
  price: number
  volume: number
}

/** Sinh chuỗi số giả lập tất định từ `seed` — không dùng `Math.random()` để tránh lệch SSR/CSR */
function buildSeries(pointCount: number, base: number, spread: number, seed: number): StockPoint[] {
  return Array.from({ length: pointCount }, (_, i) => {
    const wave = Math.sin((i + seed) / 2.3) + Math.sin((i + seed) / 5.7) / 2
    return {
      label: `${i + 1}`,
      price: Math.round(base + wave * spread),
      volume: Math.round(1_200_000 + (Math.cos((i + seed) / 3.1) + 1.2) * 900_000),
    }
  })
}

/** Độ phân giải theo kỳ: 1 ngày là từng phút, 12 tháng là từng tuần */
const PERIOD_RESOLUTION: Record<ChartPeriod, { points: number; spread: number }> = {
  '1d': { points: 26, spread: 1_800 },
  '5d': { points: 30, spread: 4_200 },
  '3m': { points: 36, spread: 9_500 },
  '6m': { points: 42, spread: 14_000 },
  '12m': { points: 52, spread: 22_000 },
}

const TAB_SEED: Record<DocumentTab, number> = {
  all: 0,
  annual: 3,
  financial: 7,
  agm: 11,
}

export function getStockSeries(period: ChartPeriod, categoryTab: DocumentTab): StockPoint[] {
  const { points, spread } = PERIOD_RESOLUTION[period]
  return buildSeries(points, 204_900, spread, TAB_SEED[categoryTab])
}
