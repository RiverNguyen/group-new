export type HeroSlide = {
  id: string
  image: string
  imageAlt: string
  title: string
  caption: string
  cta: { label: string; href: string }
  detail: { label: string; href: string }
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'skyline',
    image: '/home/img/banner.png',
    imageAlt: 'Skyline Sanctuary Resort',
    title: 'Chia sẻ cùng phát triển\nHợp tác cùng thành công',
    caption: 'SKYLINE SANCTUARY RESORT - BEYOND THE CLOUDS',
    cta: { label: 'KHÁM PHÁ NGAY', href: '/gioi-thieu' },
    detail: { label: 'Chi tiết thể lệ', href: '#' },
  },
  {
    id: 'harbor',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Urban harbor skyline at dusk',
    title: 'Kiến tạo giá trị bền vững\nĐầu tư cho tương lai',
    caption: 'HARBOR GATEWAY - URBAN HORIZON',
    cta: { label: 'KHÁM PHÁ NGAY', href: '/gioi-thieu' },
    detail: { label: 'Chi tiết thể lệ', href: '#' },
  },
  {
    id: 'city',
    image:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'City lights over water',
    title: 'Tiên phong đổi mới\nVững bước vươn xa',
    caption: 'METRO LIGHTS - RISING TOGETHER',
    cta: { label: 'KHÁM PHÁ NGAY', href: '/gioi-thieu' },
    detail: { label: 'Chi tiết thể lệ', href: '#' },
  },
]
