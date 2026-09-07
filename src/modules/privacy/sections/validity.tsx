import { useTranslations } from 'next-intl'

import { PRIVACY_SECTIONS } from '@/modules/privacy/data/privacy-data'
import { Reveal } from '@/modules/termsofuse/components/reveal'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function ValiditySection() {
  const t = useTranslations('PrivacyPolicy')

  return (
    <Reveal>
      <article
        id='validity'
        className='scroll-mt-[6.5rem] xlg:scroll-mt-[9.5rem] xsm:scroll-mt-[9rem]'
      >
        <SectionHeading
          number={PRIVACY_SECTIONS[5].number}
          title={t('validity.title')}
        />
        <p className='mt-5 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
          {t('validity.text')}
        </p>
      </article>
    </Reveal>
  )
}
