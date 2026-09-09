export const ARTICLE_CATEGORY_VALUES = [
  'su-kien',
  'tin-doanh-nghiep',
  'du-an',
  'thi-truong',
] as const

export type ArticleCategory = (typeof ARTICLE_CATEGORY_VALUES)[number]

export const ARTICLE_FILTER_VALUES = ['all', ...ARTICLE_CATEGORY_VALUES] as const

export type ArticleFilter = (typeof ARTICLE_FILTER_VALUES)[number]

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  'su-kien': 'Sự kiện',
  'tin-doanh-nghiep': 'Tin doanh nghiệp',
  'du-an': 'Dự án',
  'thi-truong': 'Thông tin thị trường',
}

export const ARTICLE_CATEGORIES: { value: ArticleFilter; label: string }[] = [
  { value: 'all', label: 'Tất cả' },
  ...ARTICLE_CATEGORY_VALUES.map((value) => ({ value, label: CATEGORY_LABELS[value] })),
]

export const SORT_VALUES = ['newest', 'oldest'] as const

export type SortValue = (typeof SORT_VALUES)[number]

export const SORT_OPTIONS: { value: SortValue; label: string }[] = [
  { value: 'newest', label: 'Mới nhất' },
  { value: 'oldest', label: 'Cũ nhất' },
]
