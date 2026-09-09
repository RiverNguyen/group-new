export type TermsBullet = {
  label: string
  text: string
}

export type TermsCard = {
  title: string
  text: string
}

export const TERMS_SECTION_NUMBERS = {
  general: '01',
  rights: '02',
  intellectual: '03',
  liability: '04',
  law: '05',
  changes: '06',
} as const

export const TERMS_IMAGES = {
  hero: {
    src: '/termsofuse/banner.png',
  },
  featured: {
    src: '/termsofuse/image.png',
  },
} as const
