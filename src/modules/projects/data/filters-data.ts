import type { ProjectSector } from '@/modules/projects/data/projects-data'

export const SECTOR_FILTER_VALUES = [
  'all',
  'dich-vu-cong-nghiep',
  'bat-dong-san-cong-nghiep',
  'bateco-land',
  'quoc-phong-an-ninh',
  'rnd',
] as const satisfies readonly ('all' | ProjectSector)[]

export type SectorFilterValue = (typeof SECTOR_FILTER_VALUES)[number]

export type SectorOption = {
  value: SectorFilterValue
  label: string
}

export const PROJECT_SECTORS: SectorOption[] = [
  { value: 'all', label: 'Tất cả dự án' },
  { value: 'dich-vu-cong-nghiep', label: 'Dịch vụ công nghiệp' },
  { value: 'bat-dong-san-cong-nghiep', label: 'Bất động sản công nghiệp' },
  { value: 'bateco-land', label: 'Bateco Land' },
  { value: 'quoc-phong-an-ninh', label: 'Quốc phòng - An ninh' },
  { value: 'rnd', label: 'R & D' },
]
