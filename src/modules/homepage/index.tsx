import { BusinessSectorsSection } from '@/modules/homepage/business-sectors'
import { HeroBanner } from '@/modules/homepage/hero-banner'
import { JourneySection } from '@/modules/homepage/journey'
import { MilestoneSection } from '@/modules/homepage/milestone'

export default function HomepageModule() {
  return (
    <main>
      <HeroBanner />
      <JourneySection />
      <MilestoneSection />
      <BusinessSectorsSection />
    </main>
  )
}
