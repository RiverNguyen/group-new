import { PageHero, type PageHeroContent } from '@/components/site/page-hero'

type SocialHeroProps = {
  content: PageHeroContent
}

export function SocialHero({ content }: SocialHeroProps) {
  return (
    <PageHero
      {...content}
      align='center'
      heightClassName='h-[37.5rem] xsm:h-auto xsm:min-h-[26rem] xsm:py-12'
      divider
      figmaNode='64:3002'
    />
  )
}
