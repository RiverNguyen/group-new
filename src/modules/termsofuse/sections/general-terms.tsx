import { useTranslations } from 'next-intl'

import { Reveal, RevealItem, RevealStagger } from '@/modules/termsofuse/components/reveal'
import { TERMS_SECTION_NUMBERS, type TermsBullet } from '@/modules/termsofuse/data/terms-data'
import { SectionHeading } from '@/modules/termsofuse/sections/section-heading'

export function GeneralTermsSection() {
  const t = useTranslations('TermsOfUse')
  const paragraphs = t.raw('general.paragraphs') as string[]
  const bullets = t.raw('general.bullets') as TermsBullet[]

  return (
    <Reveal>
      <article>
        <SectionHeading
          number={TERMS_SECTION_NUMBERS.general}
          title={t('general.title')}
        />
        <div className='m-4 border-l-3 border-[#BB9650] pl-5 [&>p]:py-5'>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className='text-[0.88rem] leading-[1.75] text-[#555] xsm:text-[0.8rem]'
            >
              {paragraph}
            </p>
          ))}
          <RevealStagger className='space-y-3 py-5'>
            {bullets.map((item) => (
              <RevealItem key={item.label}>
                <div className='flex gap-3 text-[0.88rem] leading-[1.7] text-[#555] xsm:text-[0.8rem]'>
                  <span
                    aria-hidden='true'
                    className='mt-[0.45rem] size-[0.42rem] shrink-0 rounded-full bg-[#001E40]'
                  />
                  <p>
                    <span className='font-semibold text-[#001E40]'>{item.label}:</span> {item.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </article>
    </Reveal>
  )
}
