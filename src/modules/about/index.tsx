import { AboutHero } from '@/modules/about/banner'
import { AboutAwards } from '@/modules/about/components/about-awards'
import { AboutEcosystem } from '@/modules/about/components/about-ecosystem'
import { AboutOverview } from '@/modules/about/components/about-overview'
import { DevelopmentJourney } from '@/modules/about/components/development-journey'

export default function AboutModule() {
  return (
    <main>
      <AboutHero />
      <AboutOverview />
      <DevelopmentJourney />
      <AboutAwards />
      <AboutEcosystem />
    </main>
  )
}
