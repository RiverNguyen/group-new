import { useTranslations } from 'next-intl'

import { Card } from '@/components/ui/card'
import { Reveal, RevealItem, RevealStagger } from '@/modules/termsofuse/components/reveal'
import { TERMS_SECTION_NUMBERS, type TermsCard } from '@/modules/termsofuse/data/terms-data'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function UserRightsSection() {
  const t = useTranslations('TermsOfUse')
  const cards = t.raw('rights.cards') as TermsCard[]

  return (
    <Reveal>
      <article>
        <SectionHeading
          number={TERMS_SECTION_NUMBERS.rights}
          title={t('rights.title')}
        />
        <div className='m-4 border-l-3 border-[#BB9650] pl-5 [&>p]:py-5'>
          <RevealStagger className='grid grid-cols-2 gap-5 py-5 xsm:grid-cols-1 xsm:gap-3'>
            {cards.map((card) => (
              <RevealItem key={card.title}>
                <Card className='gap-0 rounded-xl bg-white py-6 px-6 text-inherit ring-0 shadow-[0_8px_28px_rgba(0,30,64,0.06)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform hover:-translate-y-1 xsm:px-4 xsm:py-5'>
                  <h3 className='font-arial text-[1.05rem] font-bold text-[#001E40] xsm:text-[0.98rem]'>
                    {card.title}
                  </h3>
                  <p className='mt-3 text-[0.86rem] leading-[1.75] text-[#555] xsm:text-[0.8rem]'>
                    {card.text}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </article>
    </Reveal>
  )
}
