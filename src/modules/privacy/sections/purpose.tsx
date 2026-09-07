import { useTranslations } from 'next-intl'

import { Card } from '@/components/ui/card'
import { PRIVACY_SECTIONS, type PrivacyCard } from '@/modules/privacy/data/privacy-data'
import { Reveal, RevealItem, RevealStagger } from '@/modules/termsofuse/components/reveal'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function PurposeSection() {
  const t = useTranslations('PrivacyPolicy')
  const cards = t.raw('purpose.cards') as PrivacyCard[]

  return (
    <Reveal>
      <article
        id='purpose'
        className='scroll-mt-[6.5rem] xlg:scroll-mt-[9.5rem] xsm:scroll-mt-[9rem]'
      >
        <SectionHeading
          number={PRIVACY_SECTIONS[1].number}
          title={t('purpose.title')}
        />
        <p className='mt-5 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
          {t('purpose.text')}
        </p>
        <RevealStagger className='mt-6 grid grid-cols-2 gap-5 tablet:gap-4 xsm:grid-cols-1 xsm:gap-3'>
          {cards.map((card) => (
            <RevealItem
              key={card.title}
              className='min-w-0'
            >
              <Card className='h-full gap-0 rounded-xl bg-[#F4F6F8] px-6 py-6 text-inherit ring-0 shadow-none tablet:px-5 tablet:py-5 xsm:px-4'>
                <h3 className='font-arial text-[1.05rem] font-bold text-[#001E40] tablet:text-[18px] xsm:text-[0.98rem]'>
                  {card.title}
                </h3>
                <p className='mt-3 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
                  {card.text}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </article>
    </Reveal>
  )
}
