import { BusinessSectorsSection } from '@/modules/homepage/business-sectors'
import { HeroBanner } from '@/modules/homepage/hero-banner'
import { JourneySection } from '@/modules/homepage/journey'
import { MemberUnitsSection } from '@/modules/homepage/member-units'
import { MilestoneSection } from '@/modules/homepage/milestone'
import { NewsSection } from '@/modules/homepage/news'

export default function HomepageModule() {
  return (
    <main>
      <HeroBanner />
      <JourneySection />
      <MilestoneSection />
      <BusinessSectorsSection />
      <MemberUnitsSection />
      <NewsSection />
    </main>
  )
}
