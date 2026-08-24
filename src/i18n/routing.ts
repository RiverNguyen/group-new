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
  },
})
