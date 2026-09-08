export type ShareholderEvent = {
  id: string
  /** ISO `YYYY-MM-DD` */
  date: string
  title: string
  location: string
}

export const SHAREHOLDER_EVENTS: ShareholderEvent[] = [
  {
    id: 'agm-2027',
    date: '2027-04-18',
    title: 'Đại hội đồng cổ đông thường niên 2027',
    location: 'Trụ sở Bateco Group, Hà Nội',
  },
  {
    id: 'q3-2026-call',
    date: '2026-10-24',
    title: 'Gặp gỡ nhà đầu tư — kết quả kinh doanh quý III/2026',
    location: 'Trực tuyến',
  },
  {
    id: 'record-date-2026',
    date: '2026-09-30',
    title: 'Ngày chốt danh sách cổ đông nhận cổ tức đợt 1/2026',
    location: 'VSDC',
  },
]
