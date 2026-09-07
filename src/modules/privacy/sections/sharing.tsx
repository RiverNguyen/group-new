import { GitBranch, Scale } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { PRIVACY_SECTIONS, type PrivacyCard } from '@/modules/privacy/data/privacy-data'
import { Reveal, RevealItem, RevealStagger } from '@/modules/termsofuse/components/reveal'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

const SHARING_ICONS = [GitBranch, Scale] as const

export function SharingSection() {
  const t = useTranslations('PrivacyPolicy')
  const items = t.raw('sharing.items') as PrivacyCard[]

  return (
    <Reveal>
      <article
        id='sharing'
        className='scroll-mt-[6.5rem] xlg:scroll-mt-[9.5rem] xsm:scroll-mt-[9rem]'
      >
        <SectionHeading
          number={PRIVACY_SECTIONS[2].number}
          title={t('sharing.title')}
        />
        <p className='mt-5 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
          {t('sharing.text')}
        </p>
        <RevealStagger className='mt-5 flex flex-col gap-4 tablet:gap-3.5'>
          {items.map((item, index) => {
            const Icon = SHARING_ICONS[index] ?? GitBranch

            return (
              <RevealItem key={item.title}>
                <div className='flex items-start gap-3.5'>
                  <Icon
                    aria-hidden='true'
                    className='mt-0.5 size-5 shrink-0 text-[#C4782A] tablet:size-5'
                    strokeWidth={1.6}
                  />
                  <p className='min-w-0 text-[0.88rem] leading-[1.75] text-[#555] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem] xsm:leading-[1.7]'>
                    <span className='font-semibold text-[#001E40]'>{item.title}:</span> {item.text}
                  </p>
                </div>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </article>
    </Reveal>
  )
}
