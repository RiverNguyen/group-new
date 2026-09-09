import { setRequestLocale } from 'next-intl/server'

import PrivacyPolicyModule from '@/modules/privacy'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <PrivacyPolicyModule />
}
