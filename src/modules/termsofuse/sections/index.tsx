import { Container } from '@/components/site/container'
import { ApplicableLawSection } from '@/modules/termsofuse/sections/applicable-law'
import { GeneralTermsSection } from '@/modules/termsofuse/sections/general-terms'
import { IntellectualPropertySection } from '@/modules/termsofuse/sections/intellectual-property'
import { LiabilitySection } from '@/modules/termsofuse/sections/liability'
import { TermsChangesSection } from '@/modules/termsofuse/sections/terms-changes'
import { UserRightsSection } from '@/modules/termsofuse/sections/user-rights'

export function TermsSections() {
  return (
    <Container className='md:mt-10 rounded-none md:rounded-xl bg-[#F4F6F8] p-5 md:p-10'>
      <GeneralTermsSection />
      <UserRightsSection />
      <IntellectualPropertySection />
      <LiabilitySection />
      <ApplicableLawSection />
      <TermsChangesSection />
    </Container>
  )
}
