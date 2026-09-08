'use client'

import type { ShareholderDocument } from '@/modules/shareholder-relations/data/documents-data'
import type { ShareholderEvent } from '@/modules/shareholder-relations/data/events-data'
import type { StockQuote } from '@/modules/shareholder-relations/data/stock-data'
import { useDocumentFilters } from '@/modules/shareholder-relations/hooks/use-document-filters'
import {
  CompanyIntroCard,
  type CompanyIntroContent,
} from '@/modules/shareholder-relations/sections/company-intro-card'
import { DocumentList } from '@/modules/shareholder-relations/sections/document-list'
import { EventsCard } from '@/modules/shareholder-relations/sections/events-card'
import { FilterNavCard } from '@/modules/shareholder-relations/sections/filter-nav-card'
import {
  FinancialSummary,
  type FinancialSummaryContent,
} from '@/modules/shareholder-relations/sections/financial-summary'
import { StockQuotePanel } from '@/modules/shareholder-relations/sections/stock-quote'

type ShareholderContentProps = {
  documents: ShareholderDocument[]
  events: ShareholderEvent[]
  eventsHeading: string
  companyIntro: CompanyIntroContent
  financialSummary: FinancialSummaryContent
  quote: StockQuote
}

export function ShareholderContent({
  documents,
  events,
  eventsHeading,
  companyIntro,
  financialSummary,
  quote,
}: ShareholderContentProps) {
  const { filters, items, page, totalPages, setFilter, setPage } = useDocumentFilters(documents)

  return (
    <>
      {/* Khối `main` của Figma: hero + thẻ lọc đè lên 64px */}
      <div className='flex w-full flex-col items-center'>
        <FilterNavCard
          tab={filters.tab}
          q={filters.q}
          year={filters.year}
          sort={filters.sort}
          onTabChange={(tab) => setFilter({ tab })}
          onSearchChange={(q) => setFilter({ q }, 'replace')}
          onYearChange={(year) => setFilter({ year })}
          onSortChange={(sort) => setFilter({ sort })}
        />
      </div>

      <section className='flex w-full flex-col items-center gap-[3rem] px-[6rem] pt-[3rem] pb-[2.8125rem] xsm:px-4'>
        <div className='flex w-[88rem] max-w-full flex-col gap-[1rem]'>
          <div className='flex gap-[2rem] xlg:flex-col'>
            {/* Left Column [448×763.52] gap=32 */}
            <div className='flex min-w-0 flex-[448_1_0%] flex-col gap-[2rem] xlg:flex-none'>
              <CompanyIntroCard content={companyIntro} />
              <EventsCard
                heading={eventsHeading}
                events={events}
              />
            </div>

            {/* Right Column [928×752.67] gap=32 */}
            <div className='flex min-w-0 flex-[928_1_0%] flex-col gap-[2rem] xlg:flex-none'>
              <StockQuotePanel
                quote={quote}
                categoryTab={filters.tab}
              />
              <FinancialSummary content={financialSummary} />
            </div>
          </div>

          <DocumentList
            items={items}
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </section>
    </>
  )
}
