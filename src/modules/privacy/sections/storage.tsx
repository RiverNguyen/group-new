import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { PRIVACY_SECTIONS } from '@/modules/privacy/data/privacy-data'
import { Reveal } from '@/modules/termsofuse/components/reveal'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function StorageSection() {
  const t = useTranslations('PrivacyPolicy')
  const pills = t.raw('storage.pills') as string[]

  return (
    <Reveal>
      <article
        id='storage'
        className='scroll-mt-[6.5rem] xlg:scroll-mt-[9.5rem] xsm:scroll-mt-[9rem]'
      >
        <SectionHeading
          number={PRIVACY_SECTIONS[3].number}
          title={t('storage.title')}
        />
        <Card className='mt-6 gap-0 rounded-xl bg-[#001E40] px-7 py-7 text-inherit ring-0 shadow-none tablet:px-6 tablet:py-6 xsm:px-5 xsm:py-5'>
          <p className='text-[0.9rem] leading-[1.7] font-medium text-white tablet:text-[15px] tablet:leading-7 xsm:text-[0.82rem]'>
            {t('storage.highlight')}
          </p>
          <div className='mt-5 flex flex-wrap gap-2.5 xsm:flex-col xsm:gap-2'>
            {pills.map((pill) => (
              <Badge
                key={pill}
                className='h-auto rounded-full border-transparent bg-[#1A4A73] px-3.5 py-1.5 font-work-sans text-[0.72rem] font-medium whitespace-normal text-white tablet:text-[12px] xsm:w-full xsm:justify-center xsm:text-[0.72rem]'
              >
                {pill}
              </Badge>
            ))}
          </div>
        </Card>
      </article>
    </Reveal>
  )
}
