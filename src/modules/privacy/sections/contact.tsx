import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Container } from '@/components/site/container'
import { Button } from '@/components/ui/button'
import { PRIVACY_SUPPORT_EMAIL } from '@/modules/privacy/data/privacy-data'
import { Reveal } from '@/modules/termsofuse/components/reveal'

export function PrivacyContact() {
  const t = useTranslations('PrivacyPolicy')

  return (
    <Container className='px-[5rem] py-16 text-center tablet:px-[40px] tablet:py-14 xsm:px-4 xsm:py-12 bg-[#F4F6F8] md:mx-auto md:rounded-xl'>
      <Reveal>
        <h2 className='font-arial text-[2rem] font-bold text-[#001E40] tablet:text-[28px] xsm:text-[1.45rem]'>
          {t('contact.title')}
        </h2>
        <p className='mx-auto mt-3 max-w-[32rem] font-work-sans text-[0.9rem] leading-[1.7] text-[#555] tablet:mt-2.5 tablet:max-w-[28rem] tablet:text-[15px] tablet:leading-7 xsm:text-[0.8rem]'>
          {t('contact.text')}
        </p>
        <Button
          asChild
          className='mt-7 h-auto min-h-11 rounded-md bg-[#001E40] px-7 py-3.5 text-[0.88rem] font-semibold text-white hover:bg-[#001E40]/90 tablet:mt-6 tablet:text-[14px] xsm:mt-5 xsm:w-full'
        >
          <a href={`mailto:${PRIVACY_SUPPORT_EMAIL}`}>
            <Mail
              aria-hidden='true'
              className='size-4'
              strokeWidth={1.8}
            />
            {t('contact.button')}
          </a>
        </Button>
      </Reveal>
    </Container>
  )
}
