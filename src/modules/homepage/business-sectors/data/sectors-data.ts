export type BusinessSector = {
  id: string
  index: string
  title: string
  image: string
  imageAlt: string
  href: string
}

export type BusinessSectorsContent = {
  eyebrow: string
  title: string
  ctaLabel: string
  sectors: BusinessSector[]
}

export const BUSINESS_SECTORS_CONTENT: BusinessSectorsContent = {
  eyebrow: 'KHÁM PHÁ',
  title: 'Lĩnh Vực Kinh Doanh',
  ctaLabel: 'XEM CHI TIẾT',
  sectors: [
    {
      id: 'industrial-services',
      index: '01',
      title: 'DỊCH VỤ CÔNG NGHIỆP',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Dịch vụ công nghiệp',
      href: '#',
    },
    {
      id: 'industrial-real-estate',
      index: '02',
      title: 'BĐS CÔNG NGHIỆP',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Bất động sản công nghiệp',
      href: '#',
    },
    {
      id: 'bateco-land',
      index: '03',
      title: 'BATECO LAND',
      image:
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Bateco Land',
      href: '#',
    },
    {
      id: 'defense',
      index: '04',
      title: 'AN NINH QUỐC PHÒNG',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'An ninh quốc phòng',
      href: '#',
    },
    {
      id: 'green-economy',
      index: '05',
      title: 'KINH TẾ XANH',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Kinh tế xanh',
      href: '#',
    },
    {
      id: 'green-economy',
      index: '06',
      title: 'KINH TẾ XANH',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Kinh tế xanh',
      href: '#',
    },
  ],
}
