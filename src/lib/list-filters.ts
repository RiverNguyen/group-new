export function normalizeVietnamese(input: string): string {
  return input
    .toLowerCase()
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export type Paginated<T> = {
  items: T[]
  page: number
  totalPages: number
}

export function paginate<T>(items: T[], page: number, perPage: number): Paginated<T> {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * perPage

  return { items: items.slice(start, start + perPage), page: safePage, totalPages }
}
