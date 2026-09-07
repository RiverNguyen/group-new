import { useTranslations } from 'next-intl'

import { PRIVACY_SECTIONS, type PrivacyCard } from '@/modules/privacy/data/privacy-data'
import { Reveal } from '@/modules/termsofuse/components/reveal'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function RightsSection() {
  const t = useTranslations('PrivacyPolicy')
  const items = t.raw('rights.items') as PrivacyCard[]

  return (
    <Reveal>
      <article
        id='rights'
        className='scroll-mt-[6.5rem] xlg:scroll-mt-[9.5rem] xsm:scroll-mt-[9rem]'
      >
        <SectionHeading
          number={PRIVACY_SECTIONS[4].number}
          title={t('rights.title')}
        />
        <div className='mt-6 flex flex-col gap-6 tablet:gap-5'>
          {items.map((item) => (
            <div
              key={item.title}
              className='min-w-0'
            >
              <h3 className='font-arial text-[1.05rem] font-bold text-[#001E40] tablet:text-[18px] xsm:text-[0.98rem]'>
                {item.title}
              </h3>
              <p className='mt-2 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  )
}
