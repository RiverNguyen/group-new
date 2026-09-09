import { SHAREHOLDER_DOCUMENTS } from '@/modules/shareholder-relations/data/documents-data'
import { SHAREHOLDER_EVENTS } from '@/modules/shareholder-relations/data/events-data'
import { SHAREHOLDER_HERO } from '@/modules/shareholder-relations/data/hero-data'
import {
  COMPANY_INTRO,
  EVENTS_HEADING,
  FINANCIAL_SUMMARY,
} from '@/modules/shareholder-relations/data/panels-data'
import { STOCK_QUOTE } from '@/modules/shareholder-relations/data/stock-data'
import { ShareholderHero } from '@/modules/shareholder-relations/sections/hero'
import { ShareholderContent } from '@/modules/shareholder-relations/shareholder-content'

const ShareholderRelationsModule = () => {
  return (
    <main className='bg-[#F3F4F6]'>
      <ShareholderHero content={SHAREHOLDER_HERO} />
      <ShareholderContent
        documents={SHAREHOLDER_DOCUMENTS}
        events={SHAREHOLDER_EVENTS}
        eventsHeading={EVENTS_HEADING}
        companyIntro={COMPANY_INTRO}
        financialSummary={FINANCIAL_SUMMARY}
        quote={STOCK_QUOTE}
      />
    </main>
  )
}

export default ShareholderRelationsModule
