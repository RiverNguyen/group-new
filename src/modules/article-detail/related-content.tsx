'use client'

import { debounce, parseAsString, parseAsStringLiteral } from 'nuqs'

import { useListFilters } from '@/hooks/use-list-filters'
import { normalizeVietnamese } from '@/lib/list-filters'
import { RelatedArticles } from '@/modules/article-detail/sections/related-articles'
import { ARTICLES_PER_PAGE, type Article } from '@/modules/social-activities/data/articles-data'
import {
  ARTICLE_FILTER_VALUES,
  SORT_VALUES,
  type ArticleFilter,
  type SortValue,
} from '@/modules/social-activities/data/filters-data'

const parsers = {
  cat: parseAsStringLiteral(ARTICLE_FILTER_VALUES).withDefault('all').withOptions({
    history: 'push',
  }),
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

  const matched = articles.filter((article) => {
    if (cat !== 'all' && article.category !== cat) return false
    if (!keyword) return true

    return normalizeVietnamese(
      `${article.title} ${article.excerpt} ${article.categoryLabel}`,
    ).includes(keyword)
  })

  return matched.sort((a, b) =>
    sort === 'newest'
      ? b.publishedAt.localeCompare(a.publishedAt)
      : a.publishedAt.localeCompare(b.publishedAt),
  )
}

type RelatedContentProps = {
  articles: Article[]
}

export function RelatedContent({ articles }: RelatedContentProps) {
  const { filters, items, page, totalPages, setFilter, setPage } = useListFilters(articles, {
    parsers,
    filter: filterArticles,
    perPage: ARTICLES_PER_PAGE,
  })

  return (
    <RelatedArticles
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
