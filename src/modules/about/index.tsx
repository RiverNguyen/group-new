import { AboutHero } from '@/modules/about/banner'
import { AboutOverview } from '@/modules/about/components/about-overview'

export default function AboutModule() {
  return (
    <main>
      <AboutHero />
      <AboutOverview />
    </main>
  )
}
