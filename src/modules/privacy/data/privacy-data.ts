export type PrivacyLabeledItem = {
  label: string
  text: string
}

export type PrivacyCard = {
  title: string
  text: string
}

export const PRIVACY_HERO_IMAGE = '/termsofuse/banner.png'

export const PRIVACY_SECTIONS = [
  { id: 'collection', number: '01', labelKey: 'collection.tocLabel' },
  { id: 'purpose', number: '02', labelKey: 'purpose.tocLabel' },
  { id: 'sharing', number: '03', labelKey: 'sharing.tocLabel' },
  { id: 'storage', number: '04', labelKey: 'storage.tocLabel' },
  { id: 'rights', number: '05', labelKey: 'rights.tocLabel' },
  { id: 'validity', number: '06', labelKey: 'validity.tocLabel' },
] as const

export const PRIVACY_SUPPORT_EMAIL = 'info@bateco.com.vn'
