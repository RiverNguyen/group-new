import { Scale } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Card } from '@/components/ui/card'
import { Reveal } from '@/modules/termsofuse/components/reveal'
import { TERMS_SECTION_NUMBERS } from '@/modules/termsofuse/data/terms-data'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function ApplicableLawSection() {
  const t = useTranslations('TermsOfUse')

  return (
    <Reveal>
      <article>
        <SectionHeading
          number={TERMS_SECTION_NUMBERS.law}
          title={t('law.title')}
        />
        <div className='m-4 grid grid-cols-[1.15fr_0.85fr] items-center gap-8 border-l-3 border-[#BB9650] pl-5 [&>p]:py-5 xsm:grid-cols-1 xsm:gap-5'>
          <p className='text-[0.88rem] leading-[1.75] text-[#555] xsm:text-[0.8rem]'>
            {t('law.text')}
          </p>
          <Card className='flex aspect-square max-h-[16.5rem] w-full flex-col items-center justify-center gap-0 rounded-xl bg-white py-0 px-6 text-center text-inherit ring-0 shadow-[0_8px_28px_rgba(0,30,64,0.06)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform hover:-translate-y-1 xsm:aspect-auto xsm:min-h-[12rem] xsm:py-8'>
            <Scale
              aria-hidden='true'
              className='size-12 text-[#C4782A] xsm:size-10'
              strokeWidth={1.4}
            />
            <p className='mt-5 font-arial text-[0.78rem] leading-[1.45] font-bold tracking-[0.04em] text-[#001E40] uppercase xsm:text-[0.72rem]'>
              {t('law.viacTitle')}
            </p>
          </Card>
        </div>
      </article>
    </Reveal>
  )
}
