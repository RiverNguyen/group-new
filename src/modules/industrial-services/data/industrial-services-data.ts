export type HeroSlide = {
  id: string
  titleTop: string
  titleBottom: string
  imageSrc: string
  imageAlt: string
}

export type HeroContent = {
  verticalBrand: string
  verticalTagline: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel: string
  secondaryHref: string
  slides: HeroSlide[]
}

export type IntroContent = {
  heading: string
  paragraphs: string[]
}

export type IndustrialProject = {
  id: string
  index: string
  category: string
  title: string
  image: string
  imageAlt: string
}

export type FeaturedProjectsContent = {
  heading: string
  ctaLabel: string
  ctaHref: string
  topRow: IndustrialProject[]
  bottomRow: IndustrialProject[]
}

export type BrandSlot = {
  id: string
  name: string
}

export type BrandsContent = {
  verticalLabel: string
  heading: string
  paragraphs: string[]
  slots: BrandSlot[]
}

export type IndustrialServicesContent = {
  hero: HeroContent
  intro: IntroContent
  featuredProjects: FeaturedProjectsContent
  brands: BrandsContent
}

const UNSPLASH = (id: string, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export const INDUSTRIAL_SERVICES_CONTENT: IndustrialServicesContent = {
  hero: {
    verticalBrand: 'bateco investment group',
    verticalTagline: 'DẤU ẤN VƯỢT THỜI GIAN',
    ctaLabel: 'KHÁM PHÁ NGAY',
    ctaHref: '#du-an-tieu-bieu',
    secondaryLabel: 'Chi tiết liên hệ',
    secondaryHref: '#thuong-hieu',
    slides: [
      {
        id: 'industrial-plant',
        titleTop: 'Dịch vụ công nghiệp',
        titleBottom: 'Bateco',
        imageSrc: '/industrial-services/hero-industrial-plant.jpg',
        imageAlt: 'Kỹ sư Bateco tại tổ hợp nhà máy công nghiệp',
      },
      {
        id: 'refinery-om',
        titleTop: 'Vận hành & bảo trì',
        titleBottom: 'Tổ hợp lọc hóa dầu',
        imageSrc: UNSPLASH('1516937941344-00b4e0337589', 1920),
        imageAlt: 'Tổ hợp lọc hóa dầu về đêm',
      },
      {
        id: 'power-me',
        titleTop: 'Lắp đặt cơ điện',
        titleBottom: 'Nhà máy & khu công nghiệp',
        imageSrc: UNSPLASH('1509390288171-ce2088f7d08e', 1920),
        imageAlt: 'Nhà máy điện vận hành ban đêm',
      },
    ],
  },

  intro: {
    heading: 'Vận hành và bảo trì công nghiệp theo chuẩn mực quốc tế.',
    paragraphs: [
      'Bateco Group cung cấp trọn gói dịch vụ kỹ thuật công nghiệp cho nhà máy, khu công nghiệp và tổ hợp năng lượng: từ lắp đặt cơ điện, vận hành – bảo trì, đến quản lý an toàn và tối ưu hiệu suất thiết bị. Chúng tôi không chỉ bàn giao công trình, mà đồng hành suốt vòng đời vận hành của nó.',
      'Từ các tổ hợp lọc hóa dầu, nhà máy điện, đến dây chuyền sản xuất và hạ tầng kho vận, mỗi hợp đồng của Bateco Group đều được chuẩn hóa theo quy trình HSE quốc tế, thực hiện bởi đội ngũ kỹ sư có chứng chỉ chuyên ngành và giám sát bằng hệ thống theo dõi vận hành thời gian thực. Chúng tôi tự hào góp phần nâng năng lực công nghiệp Việt Nam lên chuẩn khu vực, và giữ cho từng nhà máy chạy ổn định mỗi ngày.',
    ],
  },

  featuredProjects: {
    heading: 'Dự án tiêu biểu',
    ctaLabel: 'XEM TẤT CẢ',
    ctaHref: '#',
    topRow: [
      {
        id: 'refinery-mo',
        index: '01.',
        category: 'VẬN HÀNH & BẢO TRÌ',
        title: 'Tổ hợp lọc hóa dầu — Hợp đồng O&M dài hạn',
        image: UNSPLASH('1516937941344-00b4e0337589'),
        imageAlt: 'Tổ hợp lọc hóa dầu về đêm',
      },
      {
        id: 'power-plant-me',
        index: '02.',
        category: 'CƠ ĐIỆN CÔNG NGHIỆP',
        title: 'Nhà máy nhiệt điện — Lắp đặt hệ thống cơ điện',
        image: UNSPLASH('1509390288171-ce2088f7d08e'),
        imageAlt: 'Nhà máy điện vận hành ban đêm',
      },
      {
        id: 'steel-line',
        index: '03.',
        category: 'DÂY CHUYỀN SẢN XUẤT',
        title: 'Nhà máy thép — Nâng cấp dây chuyền cán nóng',
        image: UNSPLASH('1496247749665-49cf5b1022e9'),
        imageAlt: 'Dây chuyền sản xuất thép',
      },
    ],
    bottomRow: [
      {
        id: 'warehouse-automation',
        index: '04.',
        category: 'HẠ TẦNG KHO VẬN',
        title: 'Trung tâm kho vận — Tự động hóa nội bộ',
        image: UNSPLASH('1553413077-190dd305871c'),
        imageAlt: 'Kho vận công nghiệp tự động hóa',
      },
      {
        id: 'industrial-park',
        index: '05.',
        category: 'KHU CÔNG NGHIỆP',
        title: 'Khu công nghiệp Bateco — Hạ tầng kỹ thuật toàn khu',
        image: UNSPLASH('1783393216245-71cf0fa3c690'),
        imageAlt: 'Toàn cảnh khu công nghiệp',
      },
      {
        id: 'solar-farm',
        index: '06.',
        category: 'NĂNG LƯỢNG TÁI TẠO',
        title: 'Trang trại điện mặt trời — Vận hành & giám sát',
        image: UNSPLASH('1497435334941-8c899ee9e8e9'),
        imageAlt: 'Trang trại điện mặt trời nhìn từ trên cao',
      },
    ],
  },

  brands: {
    verticalLabel: 'Bateco',
    heading: 'Thương hiệu',
    paragraphs: [
      'Bateco Group là đối tác kỹ thuật của nhiều tổ hợp công nghiệp trọng điểm trên cả nước, mang tới năng lực thi công, vận hành và bảo trì đạt chuẩn quốc tế cho từng dự án, từ giai đoạn lắp đặt cho tới suốt vòng đời khai thác.',
      'Hệ sinh thái thương hiệu của chúng tôi trải trên bốn mảng: dịch vụ công nghiệp, bất động sản công nghiệp, an ninh quốc phòng và kinh tế xanh. Bốn mảng cùng chia sẻ một chuẩn mực kỹ thuật, một quy trình an toàn và một đội ngũ kiểm định nội bộ, nên khách hàng làm việc với bất kỳ thương hiệu nào cũng nhận được cùng một mức cam kết.',
    ],
    slots: [
      { id: 'bateco-industrial', name: 'Bateco Industrial' },
      { id: 'bateco-land', name: 'Bateco Land' },
      { id: 'bateco-defense', name: 'Bateco Defense' },
      { id: 'bateco-green', name: 'Bateco Green' },
      { id: 'bateco-energy', name: 'Bateco Energy' },
      { id: 'bateco-logistics', name: 'Bateco Logistics' },
      { id: 'bateco-tech', name: 'Bateco Tech' },
      { id: 'bateco-marine', name: 'Bateco Marine' },
    ],
  },
}
