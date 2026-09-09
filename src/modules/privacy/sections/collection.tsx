import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { PRIVACY_SECTIONS, type PrivacyLabeledItem } from '@/modules/privacy/data/privacy-data'
import { Reveal, RevealItem, RevealStagger } from '@/modules/termsofuse/components/reveal'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function CollectionSection() {
  const t = useTranslations('PrivacyPolicy')
  const items = t.raw('collection.items') as PrivacyLabeledItem[]

  return (
    <Reveal>
      <article
        id='collection'
        className='scroll-mt-[6.5rem] xlg:scroll-mt-[9.5rem] xsm:scroll-mt-[9rem]'
      >
        <SectionHeading
          number={PRIVACY_SECTIONS[0].number}
          title={t('collection.title')}
        />
        <p className='mt-5 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
          {t('collection.text')}
        </p>
        <RevealStagger className='mt-5 flex flex-col gap-3.5 tablet:gap-3'>
          {items.map((item) => (
            <RevealItem key={item.label}>
              <div className='flex items-start gap-3 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
                <Check
                  aria-hidden='true'
                  className='mt-1 size-4 shrink-0 text-[#C4782A] tablet:size-[18px]'
                  strokeWidth={2.4}
                />
                <p className='min-w-0'>
                  <span className='font-semibold text-[#001E40]'>{item.label}:</span> {item.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </article>
    </Reveal>
  )
}
