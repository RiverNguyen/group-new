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
    '/quan-he-co-dong': {
      vi: '/quan-he-co-dong',
      en: '/investor-relations',
      cn: '/投资者关系',
    },
    '/linh-vuc-kinh-doanh/dich-vu-cong-nghiep': {
      vi: '/linh-vuc-kinh-doanh/dich-vu-cong-nghiep',
      en: '/business/industrial-services',
      cn: '/业务/工业服务',
    },
    '/du-an': {
      vi: '/du-an',
      en: '/projects',
      cn: '/项目',
    },
    '/tin-tuc/hoat-dong-xa-hoi': {
      vi: '/tin-tuc/hoat-dong-xa-hoi',
      en: '/news/social-activities',
      cn: '/新闻/社会活动',
    },
  },
})
