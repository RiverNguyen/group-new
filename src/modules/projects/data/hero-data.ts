export type HeroContent = {
  badge: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

// Frame Figma của trang này dán nhầm nội dung của trang Quan hệ cổ đông (badge "QUAN HỆ CỔ
// ĐÔNG", tiêu đề "Công bố thông tin"). Copy dưới đây là bản tiếng Việt đã được chủ dự án
// duyệt cho trang Dự án — sửa nội dung hero thì sửa đúng ở đây.
export const PROJECTS_HERO: HeroContent = {
  badge: 'DỰ ÁN',
  title: 'Dấu ấn Bateco trên mỗi công trình',
  subtitle:
    'Danh mục dự án hạ tầng, bất động sản công nghiệp và đô thị mà Bateco Group đầu tư, phát triển và vận hành trên khắp Việt Nam.',
  imageSrc:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
  imageAlt: 'Kỹ sư đọc bản vẽ thiết kế công trình',
}

export type PageTitleContent = {
  title: string
  /** Số nền cỡ lớn, thuần trang trí — xem `sections/page-title.tsx` */
  watermark: string
}

export const PROJECTS_PAGE_TITLE: PageTitleContent = {
  title: 'Tất cả dự án',
  watermark: '79',
}
