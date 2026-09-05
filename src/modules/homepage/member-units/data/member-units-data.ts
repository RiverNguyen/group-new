export type MemberUnit = {
  id: string
  index: string
  name: string
  description: string
  detail: string
  founded: string
  field: string
  website: string
  href: string
  image: string
  icon: 'cpu' | 'compass' | 'drafting' | 'gauge'
}

export type MemberUnitsContent = {
  eyebrow: string
  title: string
  featured: {
    image: string
    imageAlt: string
    brand: string
    slogans: [string, string]
    paragraphs: [string, string, string]
    cta: { label: string; href: string }
  }
  units: MemberUnit[]
}

export const MEMBER_UNITS_CONTENT: MemberUnitsContent = {
  eyebrow: 'HỆ SINH THÁI BATECO',
  title: 'Đơn vị thành viên',
  featured: {
    image: '/home/img/member.png',
    imageAlt: 'Bateco Group headquarters',
    brand: 'BATECO GROUP',
    slogans: ['CHIA SẺ CÙNG PHÁT TRIỂN', 'HỢP TÁC CÙNG THÀNH CÔNG'],
    paragraphs: [
      'Được thành lập năm 2012, với giá trị cốt lõi “Khát vọng – Chia sẻ – Thấu hiểu” , trong chín năm qua chúng tôi không ngừng phát triển để trở thành một đối tác tin cậy.',
      'Với nền tảng kỹ thuật, chúng tôi không chỉ đem đến những sản phẩm tốt nhất mà còn đưa ra các giải pháp hiệu quả về cả mặt kỹ thuật lẫn kinh tế cho khách hàng trong lĩnh vực hóa chất, vật tư – thiết bị công nghiệp và các dịch vụ môi trường.',
      'Bateco chúng tôi là đối tác uy tin của một số nhà sản xuất nổi tiếng như: Ecolab, Brentwood, Jacobi, Petrolimex cũng như với các tập đoàn lớn: TKV, EVN, Samsung…',
    ],
    cta: { label: 'KHÁM PHÁ BATECO', href: '/gioi-thieu' },
  },
  units: [
    {
      id: 'quoc-an',
      index: '01',
      name: 'Bateco Quốc An',
      description: 'Công nghệ & kỹ thuật',
      detail:
        'Tập trung nghiên cứu, ứng dụng công nghệ và tối ưu quy trình vận hành nhằm nâng cao hiệu quả và độ tin cậy trong các dự án của tập đoàn.',
      founded: '2018',
      field: 'Công nghệ & Kỹ thuật',
      website: 'bqa.com',
      href: '#',
      image:
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
      icon: 'cpu',
    },
    {
      id: 'nghia-son',
      index: '02',
      name: 'Bateco Nghĩa Sơn',
      description: 'Đầu tư & tài chính',
      detail:
        'Định hướng chiến lược đầu tư dài hạn, tối ưu dòng vốn và đồng hành cùng các dự án trọng điểm trong hệ sinh thái Bateco.',
      founded: '2019',
      field: 'Đầu tư & Tài chính',
      website: 'bns.com',
      href: '#',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      icon: 'compass',
    },
    {
      id: 'lai-chau',
      index: '03',
      name: 'Bateco Lai Châu',
      description: 'Logistics & chuỗi cung ứng',
      detail:
        'Xây dựng mạng lưới logistics linh hoạt, kết nối chuỗi cung ứng và đảm bảo vận hành thông suốt cho toàn hệ thống.',
      founded: '2020',
      field: 'Logistics & Chuỗi cung ứng',
      website: 'blc.com',
      href: '#',
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: 'drafting',
    },
    {
      id: 'thang-cuong',
      index: '04',
      name: 'Bateco Thắng Cường',
      description: 'Nông nghiệp & thực phẩm',
      detail:
        'Phát triển nông nghiệp bền vững và chuỗi thực phẩm chất lượng cao, hướng tới giá trị xanh cho cộng đồng.',
      founded: '2021',
      field: 'Nông nghiệp & Thực phẩm',
      website: 'btc.com',
      href: '#',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      icon: 'gauge',
    },
  ],
}
