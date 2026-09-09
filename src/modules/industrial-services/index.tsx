import { INDUSTRIAL_SERVICES_CONTENT } from '@/modules/industrial-services/data/industrial-services-data'
import { IndustrialBrands } from '@/modules/industrial-services/sections/brands'
import { FeaturedProjects } from '@/modules/industrial-services/sections/featured-projects'
import { IndustrialHero } from '@/modules/industrial-services/sections/hero'
import { IndustrialIntro } from '@/modules/industrial-services/sections/intro'

const IndustrialServicesModule = () => {
  const content = INDUSTRIAL_SERVICES_CONTENT

  return (
    <main id='top'>
      <IndustrialHero content={content.hero} />
      <IndustrialIntro content={content.intro} />
      <FeaturedProjects content={content.featuredProjects} />
      <IndustrialBrands content={content.brands} />
    </main>
  )
}

export default IndustrialServicesModule
