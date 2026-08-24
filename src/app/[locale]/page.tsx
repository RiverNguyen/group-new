import { setRequestLocale } from 'next-intl/server'

import HomepageModule from '@/modules/homepage'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomepageModule />
}
