export const PROJECT_SECTOR_VALUES = [
  'dich-vu-cong-nghiep',
  'bat-dong-san-cong-nghiep',
  'bateco-land',
  'quoc-phong-an-ninh',
  'rnd',
] as const

export type ProjectSector = (typeof PROJECT_SECTOR_VALUES)[number]

export type Project = {
  id: string
  /** Số thứ tự in lớn trên card, giữ dạng chuỗi vì thiết kế luôn có số 0 ở đầu */
  index: string
  title: string
  sector: ProjectSector
  sectorLabel: string
  image: string
  imageAlt: string
  href: string
}

export const PROJECTS_PER_PAGE = 6

// Dữ liệu mẫu: 15 dự án chia đều 5 lĩnh vực để bộ lọc và phân trang (3 trang) chạy thật.
// Đặt tên trường theo payload API dự kiến, đổi nguồn dữ liệu chỉ phải sửa lớp fetch.
export const PROJECTS: Project[] = [
  {
    id: 'trung-tam-dich-vu-cong-nghiep-bac-ninh',
    index: '01',
    title: 'Trung tâm dịch vụ công nghiệp Bắc Ninh',
    sector: 'dich-vu-cong-nghiep',
    sectorLabel: 'Dịch vụ công nghiệp',
    image:
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Kho hàng công nghiệp với hệ thống giá kệ cao tầng',
    href: '#',
  },
  {
    id: 'to-hop-bao-tri-thiet-bi-hai-phong',
    index: '02',
    title: 'Tổ hợp bảo trì thiết bị Hải Phòng',
    sector: 'dich-vu-cong-nghiep',
    sectorLabel: 'Dịch vụ công nghiệp',
    image:
      'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Nhà xưởng khung thép trước khi lắp đặt thiết bị',
    href: '#',
  },
  {
    id: 'nha-may-ket-cau-thep-dung-quat',
    index: '03',
    title: 'Nhà máy chế tạo kết cấu thép Dung Quất',
    sector: 'dich-vu-cong-nghiep',
    sectorLabel: 'Dịch vụ công nghiệp',
    image:
      'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Dây chuyền và đường ống bên trong nhà máy',
    href: '#',
  },
  {
    id: 'khu-cong-nghiep-yen-phong-mo-rong',
    index: '04',
    title: 'Khu công nghiệp Yên Phong mở rộng',
    sector: 'bat-dong-san-cong-nghiep',
    sectorLabel: 'Bất động sản công nghiệp',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Tổ hợp nhà máy công nghiệp nhìn từ xa',
    href: '#',
  },
  {
    id: 'nha-xuong-xay-san-bateco-long-an',
    index: '05',
    title: 'Nhà xưởng xây sẵn Bateco Long An',
    sector: 'bat-dong-san-cong-nghiep',
    sectorLabel: 'Bất động sản công nghiệp',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Lối đi giữa các giá kệ trong nhà xưởng',
    href: '#',
  },
  {
    id: 'trung-tam-logistics-cai-mep',
    index: '06',
    title: 'Trung tâm logistics Cái Mép',
    sector: 'bat-dong-san-cong-nghiep',
    sectorLabel: 'Bất động sản công nghiệp',
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Tàu container cập cảng bên hệ thống cần cẩu',
    href: '#',
  },
  {
    id: 'sun-elite-city',
    index: '07',
    title: 'Sun Elite City',
    sector: 'bateco-land',
    sectorLabel: 'Bateco Land',
    image:
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Cụm toà tháp căn hộ nhìn từ dưới lên',
    href: '#',
  },
  {
    id: 'bateco-riverside-da-nang',
    index: '08',
    title: 'Bateco Riverside Đà Nẵng',
    sector: 'bateco-land',
    sectorLabel: 'Bateco Land',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Toà căn hộ mặt kính uốn cong',
    href: '#',
  },
  {
    id: 'khu-do-thi-bateco-green-ha-long',
    index: '09',
    title: 'Khu đô thị Bateco Green Hạ Long',
    sector: 'bateco-land',
    sectorLabel: 'Bateco Land',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Công trình kiến trúc hiện đại trong khu đô thị',
    href: '#',
  },
  {
    id: 'trung-tam-huan-luyen-ky-thuat-hoa-lac',
    index: '10',
    title: 'Trung tâm huấn luyện kỹ thuật Hoà Lạc',
    sector: 'quoc-phong-an-ninh',
    sectorLabel: 'Quốc phòng - An ninh',
    image:
      'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Hội trường huấn luyện với hàng ghế xếp dãy',
    href: '#',
  },
  {
    id: 'to-hop-kho-van-an-ninh-phia-nam',
    index: '11',
    title: 'Tổ hợp kho vận an ninh phía Nam',
    sector: 'quoc-phong-an-ninh',
    sectorLabel: 'Quốc phòng - An ninh',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Kho vận quy mô lớn với hệ thống kệ chứa hàng',
    href: '#',
  },
  {
    id: 'nha-may-khi-tai-quang-dien-tu',
    index: '12',
    title: 'Nhà máy khí tài quang điện tử',
    sector: 'quoc-phong-an-ninh',
    sectorLabel: 'Quốc phòng - An ninh',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Kỹ thuật viên vận hành dây chuyền lắp ráp thiết bị',
    href: '#',
  },
  {
    id: 'vien-nghien-cuu-vat-lieu-bateco',
    index: '13',
    title: 'Viện nghiên cứu vật liệu Bateco',
    sector: 'rnd',
    sectorLabel: 'R & D',
    image:
      'https://images.unsplash.com/photo-1580982327559-c1202864eb05?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Nhóm nghiên cứu làm việc trong phòng thí nghiệm',
    href: '#',
  },
  {
    id: 'trung-tam-rnd-tu-dong-hoa-binh-duong',
    index: '14',
    title: 'Trung tâm R&D tự động hoá Bình Dương',
    sector: 'rnd',
    sectorLabel: 'R & D',
    image:
      'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Cánh tay robot trên dây chuyền tự động hoá',
    href: '#',
  },
  {
    id: 'phong-thi-nghiem-nang-luong-tai-tao-ninh-thuan',
    index: '15',
    title: 'Phòng thí nghiệm năng lượng tái tạo Ninh Thuận',
    sector: 'rnd',
    sectorLabel: 'R & D',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'Hàng tấm pin mặt trời tại khu thử nghiệm',
    href: '#',
  },
]
