import { useTranslations } from 'next-intl'

import { Card } from '@/components/ui/card'
import { Reveal } from '@/modules/termsofuse/components/reveal'
import { TERMS_SECTION_NUMBERS } from '@/modules/termsofuse/data/terms-data'
import { FeaturedBanner } from '@/modules/termsofuse/sections/featured-banner'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function IntellectualPropertySection() {
  const t = useTranslations('TermsOfUse')

  return (
    <Reveal>
      <article>
        <SectionHeading
          number={TERMS_SECTION_NUMBERS.intellectual}
          title={t('intellectual.title')}
        />
        <div className='m-4 border-l-3 border-[#BB9650] pl-5 [&>p]:my-5 flex flex-col gap-10 py-5'>
          <Card className='gap-0 rounded-xl bg-white py-6 px-6 text-inherit ring-0 shadow-[0_8px_28px_rgba(0,30,64,0.06)] xsm:px-4 xsm:py-5'>
            <p className='text-[0.88rem] leading-[1.75] text-[#555] xsm:text-[0.8rem]'>
              {t('intellectual.text')}
            </p>
          </Card>
          <FeaturedBanner />
        </div>
      </article>
    </Reveal>
  )
}
