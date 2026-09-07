import { setRequestLocale } from 'next-intl/server'

import TermsOfUseModule from '@/modules/termsofuse'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function TermsOfUsePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <TermsOfUseModule />
}
