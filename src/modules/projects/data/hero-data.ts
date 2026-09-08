export type HeroContent = {
  badge: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

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
}

export const PROJECTS_PAGE_TITLE: PageTitleContent = {
  title: 'Tất cả dự án',
}
