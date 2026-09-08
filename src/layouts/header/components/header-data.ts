export type NavChild = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

export type SocialLink = {
  id: 'facebook' | 'phone'
  href: string
  label: string
}

export type LanguageOption = {
  code: string
  label: string
  locale: 'vi' | 'en' | 'cn'
}

export const HEADER_NAV: NavItem[] = [
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  {
    label: 'Lĩnh vực kinh doanh',
    href: '/linh-vuc-kinh-doanh',
    children: [
      { label: 'Dịch vụ công nghiệp', href: '/linh-vuc-kinh-doanh/dich-vu-cong-nghiep' },
      { label: 'BĐS công nghiệp', href: '#' },
      { label: 'Bateco Land', href: '#' },
      { label: 'An ninh quốc phòng', href: '#' },
      { label: 'Kinh tế xanh', href: '#' },
    ],
  },
  { label: 'QH cổ đông', href: '/quan-he-co-dong' },
  { label: 'Dự án', href: '/du-an' },
  {
    label: 'Tin tức',
    href: '/tin-tuc',
    children: [
      { label: 'Hoạt động xã hội', href: '/tin-tuc/cong-ty' },
      { label: 'Văn hóa Bateco', href: '/tin-tuc/nganh' },
    ],
  },
  { label: 'Cơ hội nghề nghiệp', href: '/co-hoi-nghe-nghiep' },
]

export const HEADER_SOCIAL: SocialLink[] = [
  {
    id: 'facebook',
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    id: 'phone',
    href: 'tel:+84901234567',
    label: 'Gọi điện',
  },
]

export const HEADER_LANGUAGES: LanguageOption[] = [
  { code: 'VN', label: 'Tiếng Việt', locale: 'vi' },
  { code: 'EN', label: 'English', locale: 'en' },
  { code: 'CN', label: '中文', locale: 'cn' },
]

export const HEADER_BRAND = {
  name: 'BATECO GROUP',
  href: '/',
} as const
