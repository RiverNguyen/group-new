import { PrivacyHero } from '@/modules/privacy/banner'
import { PrivacySections } from '@/modules/privacy/sections'
import { PrivacyContact } from '@/modules/privacy/sections/contact'

export default function PrivacyPolicyModule() {
  return (
    <main className='overflow-x-clip'>
      <PrivacyHero />
      <PrivacySections />
      <PrivacyContact />
    </main>
  )
}
