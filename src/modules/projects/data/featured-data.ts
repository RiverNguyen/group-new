export type FeaturedProject = {
  id: string
  /** Nhãn vàng trên ảnh — Figma viết hoa toàn bộ, dữ liệu giữ nguyên văn */
  chip: string
  title: string
  image: string
  imageAlt: string
  href: string
}

// Thanh progress trong Figma dài đúng 1/4 chiều rộng card nên thiết kế dành cho 4 slide.
export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'apec-2027',
    chip: 'Đầu tư hạ tầng',
    title: 'APEC 2027',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Đại lộ trung tâm thành phố với dòng xe lưu thông',
    href: '#',
  },
  {
    id: 'cang-can-bateco-vinh-phuc',
    chip: 'Logistics',
    title: 'Cảng cạn Bateco Vĩnh Phúc',
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Bãi container và hệ thống cần cẩu nhìn từ trên cao',
    href: '#',
  },
  {
    id: 'sun-elite-city',
    chip: 'Bất động sản',
    title: 'Sun Elite City',
    image:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Cụm cao ốc ven sông nhìn từ xa',
    href: '#',
  },
  {
    id: 'dien-mat-troi-ninh-thuan',
    chip: 'Năng lượng',
    title: 'Nhà máy điện mặt trời Ninh Thuận',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Cánh đồng tấm pin năng lượng mặt trời',
    href: '#',
  },
]
