export type NewsArticle = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  imageAlt: string
  href: string
}

export const FEATURED_NEWS: NewsArticle = {
  id: 'sun-phuquoc-airways',
  title: 'Bức tranh về Sun PhuQuoc Airways sau gần 1 năm hoạt động',
  excerpt:
    'Hãng triệu lượt khách, đội bay mở rộng lên 32 tàu đến hết năm 2026, mạng bay liên tục mở rộng từ Phú Quốc tới các trung tâm du lịch – kinh tế lớn của Việt Nam.',
  category: 'Tin hoạt động',
  date: '25/08/2026',
  image: '/home/news/image-1.png',
  imageAlt: 'Máy bay Sun PhuQuoc Airways trên bầu trời',
  href: '#',
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'ban-do-phao-hoa',
    title: 'Bật mí “bản đồ” pháo hoa dịp Quốc khánh 2/9 trên cả nước',
    excerpt:
      'Dưới đây là bản đồ các điểm trình diễn pháo hoa mừng Quốc khánh tại các điểm đến du lịch trên khắp cả nước.',
    category: 'Du lịch',
    date: '25/08/2026',
    image: '/home/news/image-1.png',
    imageAlt: 'Màn trình diễn pháo hoa rực rỡ',
    href: '#',
  },
  {
    id: 'travel-off-path',
    title: 'Travel Off Path gọi tên Việt Nam trong nhóm điểm đến hấp dẫn',
    excerpt:
      'Giữa lúc chi phí du lịch tại nhiều quốc gia tăng cao, Việt Nam vẫn nằm trong danh sách những điểm đến giàu trải nghiệm.',
    category: 'Yêu Việt Nam',
    date: '25/08/2026',
    image: '/home/news/image-2.png',
    imageAlt: 'Du khách ngắm biển từ ban công',
    href: '#',
  },
  {
    id: 'diem-den-mua-thu',
    title: 'Những điểm đến không thể bỏ lỡ trong mùa thu này',
    excerpt:
      'Khám phá những hành trình mới, nơi cảnh sắc thiên nhiên và trải nghiệm bản địa cùng tạo nên kỳ nghỉ đáng nhớ.',
    category: 'Khám phá',
    date: '24/08/2026',
    image: '/home/news/image-3.png',
    imageAlt: 'Hành trình khám phá trên bầu trời',
    href: '#',
  },
]
