import { FloatingSocialBar } from '@/modules/industrial-services/components/floating-social-bar'
import type { IntroContent } from '@/modules/industrial-services/data/industrial-services-data'

export function IndustrialIntro({ content }: { content: IntroContent }) {
  return (
    <section
      data-figma='64:5680'
      className='relative w-full bg-white pt-[1.875rem] pb-[6rem] xsm:px-4 xsm:pb-12'
    >
      {/* Floating Social & Top Button [258×58] @1318,1061 — cách mép trên section 60.83px */}
      <div className='absolute top-[3.802rem] right-[1.5rem] z-[1] xlg:hidden'>
        <FloatingSocialBar />
      </div>

      <div className='mx-auto flex w-full flex-col items-center gap-[2rem]'>
        <h2 className='max-w-[62.1225rem] px-[1.53rem] text-center font-arial text-[3rem] leading-[3.75rem] font-bold tracking-[-0.03rem] text-[#0D59A7] xlg:text-[2.25rem] xlg:leading-[3rem] xsm:px-0 xsm:text-[1.5rem] xsm:leading-[2rem]'>
          {content.heading}
        </h2>

        <div className='flex w-[50rem] max-w-full flex-col gap-[1.5rem]'>
          {content.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className='text-center font-inter text-[1.125rem] leading-[1.75rem] text-[#6B7280] xsm:text-[0.9375rem] xsm:leading-[1.5rem]'
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
