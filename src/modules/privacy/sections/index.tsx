import { Container } from '@/components/site/container'
import { PrivacyToc } from '@/modules/privacy/components/toc'
import { CollectionSection } from '@/modules/privacy/sections/collection'
import { PurposeSection } from '@/modules/privacy/sections/purpose'
import { RightsSection } from '@/modules/privacy/sections/rights'
import { SharingSection } from '@/modules/privacy/sections/sharing'
import { StorageSection } from '@/modules/privacy/sections/storage'
import { ValiditySection } from '@/modules/privacy/sections/validity'

export function PrivacySections() {
  return (
    <Container className='px-[5rem] py-14 xlg:px-0 tablet:py-10 xsm:py-8'>
      <div className='grid grid-cols-1 items-start gap-0 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14'>
        <PrivacyToc />
        <div className='flex min-w-0 flex-col gap-14 xlg:pt-8 tablet:gap-12 tablet:px-[40px] xsm:gap-10 xsm:px-4 xsm:pt-6'>
          <CollectionSection />
          <PurposeSection />
          <SharingSection />
          <StorageSection />
          <RightsSection />
          <ValiditySection />
        </div>
      </div>
    </Container>
  )
}
