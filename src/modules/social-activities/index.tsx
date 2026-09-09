import { BreadcrumbBar } from '@/modules/social-activities/components/breadcrumb-bar'
import { ARTICLES, FEATURED_ARTICLE } from '@/modules/social-activities/data/articles-data'
import { SOCIAL_HERO } from '@/modules/social-activities/data/hero-data'
import { FeaturedArticle } from '@/modules/social-activities/sections/featured-article'
import { SocialHero } from '@/modules/social-activities/sections/hero'
import { SocialContent } from '@/modules/social-activities/social-content'

const SocialActivitiesModule = () => {
  return (
    <main className='bg-[#F9FAFB]'>
      <SocialHero content={SOCIAL_HERO} />
      <BreadcrumbBar />
      <FeaturedArticle article={FEATURED_ARTICLE} />
      <SocialContent articles={ARTICLES} />
    </main>
  )
}

export default SocialActivitiesModule
