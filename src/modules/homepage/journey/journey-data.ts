export type JourneyStat = {
  value: string
  label: string
}

export type JourneyContent = {
  image: string
  imageAlt: string
  experience: {
    value: string
    label: string
  }
  title: string
  description: string
  stats: JourneyStat[]
}

export const JOURNEY_CONTENT: JourneyContent = {
  image:
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'Lễ trao giải và sự kiện của Bateco Group',
  experience: {
    value: '10+',
    label: 'Năm kinh nghiệm trong ngành xây dựng & đầu tư',
  },
  title: 'Hành trình khẳng định vị thế dẫn đầu',
  description:
    'Với nền tảng dịch vụ kỹ thuật công nghiệp vững chắc, Bateco không ngừng mở rộng hệ sinh thái và nâng cao năng lực triển khai, từng bước khẳng định vị thế trên thị trường. Doanh nghiệp ghi dấu ấn với tốc độ tăng trưởng ổn định, định hướng phát triển bền vững gắn với chuyển đổi số và kinh tế xanh.',
  stats: [
    { value: '5+', label: 'Công ty thành viên' },
    { value: '10+', label: 'Nhiều năm kinh nghiệm' },
    { value: '50+', label: 'Các dự án chính' },
    { value: '400+', label: 'Cán bộ nhân viên' },
  ],
}
