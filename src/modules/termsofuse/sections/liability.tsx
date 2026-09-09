import { useTranslations } from 'next-intl'

import { Reveal } from '@/modules/termsofuse/components/reveal'
import { TERMS_SECTION_NUMBERS } from '@/modules/termsofuse/data/terms-data'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function LiabilitySection() {
  const t = useTranslations('TermsOfUse')

  return (
    <Reveal>
      <article>
        <SectionHeading
          number={TERMS_SECTION_NUMBERS.liability}
          title={t('liability.title')}
        />
        <div className='m-4 border-l-3 border-[#BB9650] pl-5 [&>p]:py-5'>
          <p className='text-[0.88rem] leading-[1.75] text-[#555] italic xsm:text-[0.8rem]'>
            {t('liability.highlight')}
          </p>
          <p className='text-[0.88rem] leading-[1.75] text-[#555] xsm:text-[0.8rem]'>
            {t('liability.text')}
          </p>
        </div>
      </article>
    </Reveal>
  )
}
