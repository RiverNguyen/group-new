import { ArticleCard } from '@/modules/social-activities/components/article-card'
import { ArticleToolbar } from '@/modules/social-activities/components/article-toolbar'
import { ListPagination } from '@/modules/social-activities/components/list-pagination'
import type { Article } from '@/modules/social-activities/data/articles-data'
import type { ArticleFilter, SortValue } from '@/modules/social-activities/data/filters-data'

type RelatedArticlesProps = {
  articles: Article[]
  category: ArticleFilter
  q: string
  sort: SortValue
  page: number
  totalPages: number
  onCategoryChange: (category: ArticleFilter) => void
  onSearchChange: (q: string) => void
  onSortChange: (sort: SortValue) => void
  onPageChange: (page: number) => void
}

export function RelatedArticles({
  articles,
  category,
  q,
  sort,
  page,
  totalPages,
  onCategoryChange,
  onSearchChange,
  onSortChange,
  onPageChange,
}: RelatedArticlesProps) {
  return (
    <>
      <section
        data-figma='64:3354'
        className='flex flex-col gap-[2rem] px-[2rem] py-[3rem] xsm:px-4 xsm:py-[2rem]'
      >
        <div
          data-figma='64:3355'
          className='relative flex items-center px-[8rem] xlg:px-0'
        >
          <span
            aria-hidden
            className='absolute top-1/2 left-[8rem] h-[2.5rem] w-[0.25rem] -translate-y-1/2 bg-[#F4B700] xlg:left-0'
          />
          <h2 className='pl-[1.5rem] font-arial text-[3rem] leading-[3.5rem] font-bold tracking-[-0.075rem] text-[#062B68] uppercase xlg:text-[2.25rem] xlg:leading-[2.75rem] xsm:text-[1.75rem] xsm:leading-[2.25rem] xsm:tracking-normal'>
            Các bài viết khác
          </h2>
        </div>

        <div
          data-figma='64:3359'
          className='px-[8rem] xlg:px-0'
        >
          <ArticleToolbar
            category={category}
            q={q}
            sort={sort}
            onCategoryChange={onCategoryChange}
            onSearchChange={onSearchChange}
            onSortChange={onSortChange}
          />
        </div>

        {articles.length > 0 ? (
          <div
            data-figma='64:3387'
            className='grid grid-cols-3 gap-[2rem] px-[3.125rem] xlg:grid-cols-2 xlg:px-0 xsm:grid-cols-1'
          >
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <p
            role='status'
            className='px-[3.125rem] py-[4rem] text-center font-inter text-[1rem] leading-[1.625rem] text-[#6B7280] xlg:px-0'
          >
            Không tìm thấy bài viết phù hợp. Thử đổi danh mục hoặc từ khoá khác.
          </p>
        )}
      </section>

      <div data-figma='64:3480'>
        <ListPagination
          page={page}
          totalPages={totalPages}
          onChange={onPageChange}
        />
      </div>
    </>
  )
}
