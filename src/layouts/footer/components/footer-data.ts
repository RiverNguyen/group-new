import ROUTES from '@/configs/routes'

export type FooterContact = {
  id: 'hotline' | 'email' | 'address'
  label: string
  value: string
  href: string
}

export type FooterLink = {
  label: string
  href: string
}

export type FooterLinkGroup = {
  title: string
  columns: FooterLink[][]
}

export const FOOTER_CONTACT_TITLE = 'Kết nối cùng Bateco Group'

export const FOOTER_CONTACTS: FooterContact[] = [
  {
    id: 'hotline',
    label: 'Hotline',
    value: '0986488855',
    href: 'tel:0986488855',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'info@bateco.com.vn',
    href: 'mailto:info@bateco.com.vn',
  },
  {
    id: 'address',
    label: 'Địa chỉ',
    value: 'Hà Nội, Việt Nam',
    href: '#',
  },
]

export const FOOTER_TAGLINE = 'TIÊN PHONG TRONG LĨNH VỰC XÂY DỰNG VÀ ĐẦU TƯ BỀN VỮNG TẠI VIỆT NAM.'

export const FOOTER_ABOUT: FooterLinkGroup = {
  title: 'Về Bateco Group',
  columns: [
    [
      { label: 'Giới thiệu', href: '/gioi-thieu' },
      { label: 'Lịch sử hình thành', href: '#' },
      { label: 'Tầm nhìn - Sứ mệnh', href: '#' },
    ],
    [
      { label: 'Giá trị cốt lõi', href: '#' },
      { label: 'Giải thưởng', href: '#' },
      { label: 'Tuyển dụng', href: '/co-hoi-nghe-nghiep' },
    ],
  ],
}

export const FOOTER_TERMS: FooterLinkGroup = {
  title: 'Điều khoản',
  columns: [
    [
      { label: 'Chính sách bảo mật', href: ROUTES.privacyPolicy },
      { label: 'Điều khoản sử dụng', href: ROUTES.termsOfUse },
      { label: 'Quy tắc ứng xử', href: '#' },
    ],
  ],
}

export const FOOTER_NEWSLETTER = {
  title: 'Đăng ký bản tin',
  description: 'Nhận những cập nhật mới nhất từ Bateco Group',
  placeholder: 'Email của bạn',
  submit: 'GỬI',
} as const

export const FOOTER_SOCIAL = [
  { id: 'website', label: 'Website', href: '#' },
  { id: 'youtube', label: 'YouTube', href: '#' },
] as const

export const FOOTER_COPYRIGHT = {
  left: '© 2024 BATECO GROUP. ALL RIGHTS RESERVED.',
  right: 'PHÁT TRIỂN BỞI CNTT BATECO',
} as const
