import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['vi', 'en', 'cn'],
  defaultLocale: 'vi',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/gioi-thieu': {
      vi: '/gioi-thieu',
      en: '/about',
      cn: '/about',
    },
    '/dieu-khoan-su-dung': {
      vi: '/dieu-khoan-su-dung',
      en: '/terms-of-use',
      cn: '/使用条款',
    },
    '/chinh-sach-bao-mat': {
      vi: '/chinh-sach-bao-mat',
      en: '/privacy-policy',
      cn: '/隐私政策',
    },
  },
})
