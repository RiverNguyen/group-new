import { PageHero } from '@/components/site/page-hero'
import type { HeroContent } from '@/modules/shareholder-relations/data/hero-data'

export function ShareholderHero({ content }: { content: HeroContent }) {
  return (
    <PageHero
      {...content}
      heightClassName='h-[31.25rem] xsm:h-auto xsm:min-h-[26rem] xsm:py-12'
      figmaNode='64:1976'
    />
  )
}
