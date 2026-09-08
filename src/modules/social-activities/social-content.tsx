'use client'

import { debounce, parseAsString, parseAsStringLiteral } from 'nuqs'

import { useListFilters } from '@/hooks/use-list-filters'
import { normalizeVietnamese } from '@/lib/list-filters'
import { ARTICLES_PER_PAGE, type Article } from '@/modules/social-activities/data/articles-data'
import {
  ARTICLE_FILTER_VALUES,
  SORT_VALUES,
  type ArticleFilter,
  type SortValue,
} from '@/modules/social-activities/data/filters-data'
import { ArticleList } from '@/modules/social-activities/sections/article-list'

// Khai ở cấp module để tham chiếu ổn định giữa các lần render — useListFilters ghi nhớ keymap
// theo tham chiếu, nếu dựng lại mỗi lần render thì nuqs đăng ký lại listener liên tục.
// `page` do hook tự giữ nên không khai ở đây.
const parsers = {
  cat: parseAsStringLiteral(ARTICLE_FILTER_VALUES).withDefault('all').withOptions({
    history: 'push',
  }),
  // Gõ phím nào cũng đẩy một entry vào history thì nút Back thành vô dụng: replace + debounce.
  q: parseAsString.withDefault('').withOptions({
    history: 'replace',
    limitUrlUpdates: debounce(300),
  }),
  sort: parseAsStringLiteral(SORT_VALUES).withDefault('newest').withOptions({
    history: 'push',
  }),
}

type ArticleFilters = {
  cat: ArticleFilter
  q: string
  sort: SortValue
}

const filterArticles = (articles: Article[], { cat, q, sort }: ArticleFilters): Article[] => {
  const keyword = normalizeVietnamese(q)

  // normalizeVietnamese bỏ dấu cả hai vế nên gõ "hoat dong" vẫn khớp "hoạt động".
  const matched = articles.filter((article) => {
    if (cat !== 'all' && article.category !== cat) return false
    if (!keyword) return true

    return normalizeVietnamese(
      `${article.title} ${article.excerpt} ${article.categoryLabel}`,
    ).includes(keyword)
  })

  // `matched` đã là mảng mới từ filter nên sort tại chỗ không đụng vào mảng gốc của props.
  return matched.sort((a, b) =>
    sort === 'newest'
      ? b.publishedAt.localeCompare(a.publishedAt)
      : a.publishedAt.localeCompare(b.publishedAt),
  )
}

type SocialContentProps = {
  articles: Article[]
}

export function SocialContent({ articles }: SocialContentProps) {
  const { filters, items, page, totalPages, setFilter, setPage } = useListFilters(articles, {
    parsers,
    filter: filterArticles,
    perPage: ARTICLES_PER_PAGE,
  })

  return (
    <ArticleList
      articles={items}
      category={filters.cat}
      q={filters.q}
      sort={filters.sort}
      page={page}
      totalPages={totalPages}
      onCategoryChange={(cat) => setFilter({ cat })}
      onSearchChange={(q) => setFilter({ q }, 'replace')}
      onSortChange={(sort) => setFilter({ sort })}
      onPageChange={setPage}
    />
  )
}
