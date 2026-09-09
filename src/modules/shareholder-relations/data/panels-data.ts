import type { CompanyIntroContent } from '@/modules/shareholder-relations/sections/company-intro-card'
import type { FinancialSummaryContent } from '@/modules/shareholder-relations/sections/financial-summary'

export const COMPANY_INTRO: CompanyIntroContent = {
  heading: 'Giới thiệu',
  imageSrc:
    'https://images.unsplash.com/photo-1623051786552-e46ef84e6c07?auto=format&fit=crop&w=800&q=80',
  imageAlt: 'Hồ sơ năng lực Bateco Group',
  linkLabel: 'Giới Thiệu Doanh Nghiệp',
  linkHref: '#',
}

export const EVENTS_HEADING = 'Lịch sự kiện'

export const FINANCIAL_SUMMARY: FinancialSummaryContent = {
  heading: 'Báo cáo tài chính & tóm tắt kết quả kinh doanh',
  imageSrc:
    'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=900&q=80',
  imageAlt: 'Dây chuyền sản xuất công nghiệp',
  reports: [
    {
      id: 'bctc-hn-q2-2026',
      label: 'Báo Cáo Tài Chính Hợp Nhất Giữa Niên Độ QII.2026',
      href: '#',
    },
  ],
  moreLabel: 'Xem thêm >',
  moreHref: '#',
}
