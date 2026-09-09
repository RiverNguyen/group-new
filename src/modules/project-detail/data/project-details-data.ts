import type { ProjectSector } from '@/modules/projects/data/projects-data'

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export type GalleryImage = {
  src: string
  alt: string
}

export type GalleryPoolKey = ProjectSector

export type ProjectDetail = {
  slug: string
  index: string
  badge: string
  title: string
  description: string
  heroImage: string
  heroImageAlt: string
  overviewImage: string
  overviewImageAlt: string
  overviewParagraphs: string[]
  galleryPool: GalleryPoolKey
}

export const GALLERY_POOLS: Record<GalleryPoolKey, GalleryImage[]> = {
  'dich-vu-cong-nghiep': [
    {
      src: unsplash('1504328345606-18bbc8c9d7d1', 1600),
      alt: 'Người thợ đeo găng tay cầm dụng cụ cầm tay, cận cảnh trên nền xưởng tối màu',
    },
    {
      src: unsplash('1504917595217-d4dc5ebe6122', 1600),
      alt: 'Tia lửa cam bắn thành chùm khi mài cắt kim loại, hai bàn tay thợ giữ chi tiết',
    },
    {
      src: unsplash('1513828583688-c52646db42da', 1600),
      alt: 'Động cơ điện màu xanh gắn giữa hệ đường ống thép không gỉ trong nhà máy',
    },
    {
      src: unsplash('1621905251189-08b45d6a269e', 1600),
      alt: 'Công nhân mũ bảo hộ vàng và kính an toàn dùng máy cầm tay thi công trên bề mặt tường',
    },
    {
      src: unsplash('1516216628859-9bccecab13ca', 1600),
      alt: 'Nhóm công nhân áo xanh, mũ bảo hộ trắng chụp từ dưới lên trên nền trời xanh',
    },
  ],
  'bat-dong-san-cong-nghiep': [
    {
      src: unsplash('1494412519320-aa613dfb7738', 1600),
      alt: 'Ảnh chụp thẳng từ trên cao bãi container xếp thành hàng nhiều màu',
    },
    {
      src: unsplash('1616401784845-180882ba9ba8', 1600),
      alt: 'Xe nâng màu cam đứng trong lối kho bên dãy giá kệ xếp đầy thùng hàng',
    },
    {
      src: unsplash('1586528116493-a029325540fa', 1600),
      alt: 'Lối đi trong kho với các khay nhựa vàng xếp kín giá kệ hai bên, một người ở cuối lối',
    },
    {
      src: unsplash('1601584115197-04ecc0da31d7', 1600),
      alt: 'Đầu kéo xe tải màu trắng chụp chính diện trên nền trời xanh',
    },
    {
      src: unsplash('1565793298595-6a879b1d9492', 1600),
      alt: 'Ảnh từ trên cao dãy xe đầu kéo và thùng xe đậu chếch nhau tại khu vực bốc xếp',
    },
  ],
  'bateco-land': [
    {
      src: unsplash('1460317442991-0ec209397118', 1600),
      alt: 'Cận cảnh mặt đứng chung cư với dãy ban công, ốp tấm xám và cam',
    },
    {
      src: unsplash('1496564203457-11bb12075d90', 1600),
      alt: 'Công trình hiện đại với mái kính cong khung thép, phía trước là cây lá đỏ và lối đi',
    },
    {
      src: unsplash('1512453979798-5ea266f8880c', 1600),
      alt: 'Đường chân trời thành phố nhiều tòa tháp cao lúc bình minh, phía dưới là tuyến đường trên cao',
    },
    {
      src: unsplash('1516156008625-3a9d6067fab5', 1600),
      alt: 'Ảnh từ trên cao khu dân cư thấp tầng với mái ngói liền kề và hàng cây cọ',
    },
    {
      src: unsplash('1517935706615-2717063c2225', 1600),
      alt: 'Ảnh từ trên cao thành phố ven biển với các cao ốc và mặt nước lúc hoàng hôn',
    },
  ],
  'quoc-phong-an-ninh': [
    {
      src: unsplash('1581092795360-fd1ca04f0952', 1600),
      alt: 'Phòng điều hành với nhiều nhân viên ngồi trước dãy màn hình giám sát',
    },
    {
      src: unsplash('1581092918056-0c4c3acd3789', 1600),
      alt: 'Đôi tay thao tác trên bảng mạch điện tử màu xanh gắn nhiều linh kiện',
    },
    {
      src: unsplash('1590247813693-5541d1c609fd', 1600),
      alt: 'Dãy giá kệ cao xếp kín các hộp lưu trữ có nhãn, chạy hút sâu về phía cuối phòng',
    },
    {
      src: unsplash('1524178232363-1fb2b075b655', 1600),
      alt: 'Người trình bày đứng bên bục nói trước hàng ghế người nghe, phía sau là màn hình chiếu',
    },
    {
      src: unsplash('1580582932707-520aed937b7b', 1600),
      alt: 'Phòng học trống với các hàng bàn ghế gỗ và bảng đen ở phía trước',
    },
  ],
  rnd: [
    {
      src: unsplash('1579154204601-01588f351e67', 1600),
      alt: 'Phòng thí nghiệm với hai dãy bàn thiết bị, một người mặc áo blouse trắng ở giữa lối đi',
    },
    {
      src: unsplash('1518152006812-edab29b069ac', 1600),
      alt: 'Dãy kính hiển vi đặt cạnh nhau trên bàn thí nghiệm',
    },
    {
      src: unsplash('1516110833967-0b5716ca1387', 1600),
      alt: 'Cận cảnh bàn tay robot cơ khí với nhiều dây dẫn, tông màu xanh ngọc',
    },
    {
      src: unsplash('1613665813446-82a78c468a1d', 1600),
      alt: 'Các dãy tấm pin mặt trời trên mái nhà chạy dài về phía chân trời lúc hoàng hôn',
    },
    {
      src: unsplash('1497440001374-f26997328c1b', 1600),
      alt: 'Các tấm pin mặt trời đặt trên thảm cỏ xanh, chụp chếch từ trên xuống',
    },
  ],
}

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: 'trung-tam-dich-vu-cong-nghiep-bac-ninh',
    index: '01',
    badge: 'Dịch vụ công nghiệp',
    title: 'Trung tâm dịch vụ công nghiệp Bắc Ninh',
    description:
      'Trung tâm cung cấp dịch vụ kỹ thuật trọn gói cho các nhà máy trong vùng công nghiệp Bắc Ninh, từ bảo trì thiết bị đến quản lý phụ tùng thay thế.',
    heroImage: unsplash('1587293852726-70cdb56c2866', 1600),
    heroImageAlt: 'Kho hàng công nghiệp với hệ thống giá kệ cao tầng',
    overviewImage: unsplash('1587293852726-70cdb56c2866', 1600),
    overviewImageAlt: 'Kho hàng công nghiệp với hệ thống giá kệ cao tầng',
    overviewParagraphs: [
      'Trung tâm dịch vụ công nghiệp Bắc Ninh được Bateco phát triển như một điểm tựa kỹ thuật cho các nhà máy đang vận hành trong vùng. Toàn bộ khu chức năng bố trí theo đúng tuyến công việc thực tế: tiếp nhận thiết bị, chẩn đoán, sửa chữa rồi trả về dây chuyền, nhằm rút ngắn thời gian dừng máy của khách hàng.',
      'Đội ngũ kỹ thuật tại chỗ phối hợp cùng kho phụ tùng đặt ngay trong khuôn viên, cho phép xử lý phần lớn yêu cầu phát sinh trong ngày. Đây cũng là nơi Bateco tổ chức các chương trình đào tạo vận hành và an toàn lao động cho nhân sự của đối tác.',
    ],
    galleryPool: 'dich-vu-cong-nghiep',
  },
  {
    slug: 'to-hop-bao-tri-thiet-bi-hai-phong',
    index: '02',
    badge: 'Dịch vụ công nghiệp',
    title: 'Tổ hợp bảo trì thiết bị Hải Phòng',
    description:
      'Tổ hợp bảo trì và đại tu thiết bị công nghiệp nặng, phục vụ các nhà máy và cụm cảng khu vực Hải Phòng.',
    heroImage: unsplash('1565610222536-ef125c59da2e', 1600),
    heroImageAlt: 'Nhà xưởng khung thép trước khi lắp đặt thiết bị',
    overviewImage: unsplash('1565610222536-ef125c59da2e', 1600),
    overviewImageAlt: 'Nhà xưởng khung thép trước khi lắp đặt thiết bị',
    overviewParagraphs: [
      'Tổ hợp bảo trì thiết bị Hải Phòng đảm nhận việc đại tu những cụm máy có tải trọng lớn mà xưởng tại chỗ của nhà máy khó xử lý. Nhà xưởng được thiết kế với khẩu độ rộng và hệ cầu trục chạy suốt chiều dài, đủ để tiếp nhận thiết bị nguyên khối thay vì phải tháo rời tại hiện trường.',
      'Vị trí gần cụm cảng giúp rút ngắn quãng vận chuyển thiết bị nhập khẩu về xưởng. Bateco vận hành tổ hợp theo hợp đồng dịch vụ dài hạn, gắn cam kết thời gian hoàn trả với kế hoạch sản xuất của từng khách hàng.',
    ],
    galleryPool: 'dich-vu-cong-nghiep',
  },
  {
    slug: 'nha-may-ket-cau-thep-dung-quat',
    index: '03',
    badge: 'Dịch vụ công nghiệp',
    title: 'Nhà máy chế tạo kết cấu thép Dung Quất',
    description:
      'Nhà máy chế tạo và tổ hợp kết cấu thép, cung cấp cấu kiện cho các công trình công nghiệp và hạ tầng miền Trung.',
    heroImage: unsplash('1496247749665-49cf5b1022e9', 1600),
    heroImageAlt: 'Dây chuyền và đường ống bên trong nhà máy',
    overviewImage: unsplash('1496247749665-49cf5b1022e9', 1600),
    overviewImageAlt: 'Dây chuyền và đường ống bên trong nhà máy',
    overviewParagraphs: [
      'Nhà máy chế tạo kết cấu thép Dung Quất khép kín chuỗi công việc từ cắt phôi, tổ hợp, hàn tự động cho tới làm sạch và sơn phủ bảo vệ. Cách bố trí dây chuyền theo một chiều giúp hạn chế việc vận chuyển ngược cấu kiện nặng trong nội bộ xưởng.',
      'Sản phẩm của nhà máy chủ yếu là khung nhà công nghiệp, dầm cầu trục và kết cấu dàn không gian cho các dự án tại miền Trung. Công tác kiểm tra mối hàn được thực hiện ngay trên chuyền, trước khi cấu kiện chuyển sang công đoạn hoàn thiện bề mặt.',
    ],
    galleryPool: 'dich-vu-cong-nghiep',
  },
  {
    slug: 'khu-cong-nghiep-yen-phong-mo-rong',
    index: '04',
    badge: 'Bất động sản công nghiệp',
    title: 'Khu công nghiệp Yên Phong mở rộng',
    description:
      'Phần mở rộng của khu công nghiệp Yên Phong, dành quỹ đất cho nhóm nhà đầu tư sản xuất linh kiện và công nghiệp hỗ trợ.',
    heroImage: unsplash('1516937941344-00b4e0337589', 1600),
    heroImageAlt: 'Tổ hợp nhà máy công nghiệp nhìn từ xa',
    overviewImage: unsplash('1516937941344-00b4e0337589', 1600),
    overviewImageAlt: 'Tổ hợp nhà máy công nghiệp nhìn từ xa',
    overviewParagraphs: [
      'Khu công nghiệp Yên Phong mở rộng tiếp nối hạ tầng sẵn có của giai đoạn trước, ưu tiên quỹ đất cho các nhà máy sản xuất linh kiện và công nghiệp hỗ trợ. Hệ thống đường nội khu, cấp điện và xử lý nước thải được đầu tư đồng bộ ngay từ đầu để nhà đầu tư khởi công mà không phải chờ hạ tầng.',
      'Bateco đảm nhận vai trò phát triển và vận hành hạ tầng, đồng thời hỗ trợ nhà đầu tư trong thủ tục cấp phép xây dựng và đấu nối kỹ thuật. Quy hoạch phân lô linh hoạt cho phép ghép thửa theo nhu cầu diện tích của từng doanh nghiệp.',
    ],
    galleryPool: 'bat-dong-san-cong-nghiep',
  },
  {
    slug: 'nha-xuong-xay-san-bateco-long-an',
    index: '05',
    badge: 'Bất động sản công nghiệp',
    title: 'Nhà xưởng xây sẵn Bateco Long An',
    description:
      'Chuỗi nhà xưởng xây sẵn cho thuê tại Long An, giúp doanh nghiệp rút ngắn thời gian đưa dây chuyền vào vận hành.',
    heroImage: unsplash('1553413077-190dd305871c', 1600),
    heroImageAlt: 'Lối đi giữa các giá kệ trong nhà xưởng',
    overviewImage: unsplash('1553413077-190dd305871c', 1600),
    overviewImageAlt: 'Lối đi giữa các giá kệ trong nhà xưởng',
    overviewParagraphs: [
      'Nhà xưởng xây sẵn Bateco Long An hướng tới nhóm khách hàng cần đưa dây chuyền vào sản xuất nhanh, không muốn dành nhiều tháng cho việc tự xây dựng. Các đơn nguyên được thiết kế theo module tiêu chuẩn, có thể thuê riêng lẻ hoặc ghép liền kề khi doanh nghiệp mở rộng.',
      'Mỗi đơn nguyên đi kèm khu văn phòng, sân bãi cho xe tải và hạ tầng đấu nối sẵn tới hàng rào. Ban quản lý dự án của Bateco đồng hành cùng khách thuê trong giai đoạn lắp đặt thiết bị và nghiệm thu phòng cháy chữa cháy.',
    ],
    galleryPool: 'bat-dong-san-cong-nghiep',
  },
  {
    slug: 'trung-tam-logistics-cai-mep',
    index: '06',
    badge: 'Bất động sản công nghiệp',
    title: 'Trung tâm logistics Cái Mép',
    description:
      'Trung tâm kho vận đặt cạnh cụm cảng nước sâu Cái Mép, phục vụ hàng xuất nhập khẩu và phân phối nội địa.',
    heroImage: unsplash('1578575437130-527eed3abbec', 1600),
    heroImageAlt: 'Tàu container cập cảng bên hệ thống cần cẩu',
    overviewImage: unsplash('1578575437130-527eed3abbec', 1600),
    overviewImageAlt: 'Tàu container cập cảng bên hệ thống cần cẩu',
    overviewParagraphs: [
      'Trung tâm logistics Cái Mép khai thác lợi thế nằm sát cụm cảng nước sâu, rút ngắn chặng vận chuyển giữa bãi container và kho hàng. Khu vực kho được chia thành các phân khu riêng cho hàng lưu giữ dài ngày, hàng trung chuyển và hàng cần xử lý gia tăng.',
      'Hệ thống cửa xuất nhập bố trí dọc hai mặt kho cho phép nhiều xe làm hàng cùng lúc trong giờ cao điểm. Bateco kết hợp vận hành kho với dịch vụ khai báo và điều phối phương tiện, giúp khách hàng theo dõi lô hàng trên một đầu mối duy nhất.',
    ],
    galleryPool: 'bat-dong-san-cong-nghiep',
  },
  {
    slug: 'sun-elite-city',
    index: '07',
    badge: 'Bateco Land',
    title: 'Sun Elite City',
    description:
      'Khu phức hợp căn hộ và dịch vụ thương mại, hình thành một tuyến sinh hoạt hoàn chỉnh ngay trong lòng đô thị.',
    heroImage: unsplash('1449157291145-7efd050a4d0e', 1600),
    heroImageAlt: 'Cụm toà tháp căn hộ nhìn từ dưới lên',
    overviewImage: unsplash('1449157291145-7efd050a4d0e', 1600),
    overviewImageAlt: 'Cụm toà tháp căn hộ nhìn từ dưới lên',
    overviewParagraphs: [
      'Sun Elite City được quy hoạch như một khu phức hợp khép kín, nơi khối căn hộ, khối thương mại và không gian sinh hoạt chung chia sẻ cùng một trục đi bộ. Cách tổ chức này giúp cư dân tiếp cận các tiện ích thiết yếu mà không cần rời khỏi khuôn viên dự án.',
      'Các tháp căn hộ được xoay hướng để tối ưu ánh sáng tự nhiên và hạn chế tầm nhìn đối diện giữa hai khối. Phần đế thương mại dành cho nhóm dịch vụ phục vụ đời sống hằng ngày, còn tầng mái bố trí khu cảnh quan và thể thao cho cư dân.',
    ],
    galleryPool: 'bateco-land',
  },
  {
    slug: 'bateco-riverside-da-nang',
    index: '08',
    badge: 'Bateco Land',
    title: 'Bateco Riverside Đà Nẵng',
    description:
      'Dự án căn hộ ven sông tại Đà Nẵng, lấy mặt nước và tuyến cảnh quan bờ sông làm trục tổ chức không gian.',
    heroImage: unsplash('1518005020951-eccb494ad742', 1600),
    heroImageAlt: 'Toà căn hộ mặt kính uốn cong',
    overviewImage: unsplash('1518005020951-eccb494ad742', 1600),
    overviewImageAlt: 'Toà căn hộ mặt kính uốn cong',
    overviewParagraphs: [
      'Bateco Riverside Đà Nẵng đặt trọng tâm vào quan hệ giữa công trình và mặt nước. Khối nhà được lùi khỏi bờ để nhường chỗ cho tuyến đi bộ và mảng cây xanh công cộng, đồng thời giữ tầm nhìn ra sông cho phần lớn căn hộ.',
      'Mặt đứng sử dụng hệ lam và ban công so le nhằm giảm bức xạ trực tiếp trong những tháng nắng gắt. Khu tiện ích được đưa lên cao độ nhìn ra sông, tách khỏi luồng giao thông của khối đế.',
    ],
    galleryPool: 'bateco-land',
  },
  {
    slug: 'khu-do-thi-bateco-green-ha-long',
    index: '09',
    badge: 'Bateco Land',
    title: 'Khu đô thị Bateco Green Hạ Long',
    description:
      'Khu đô thị mới tại Hạ Long, phát triển theo hướng mật độ xây dựng thấp và ưu tiên không gian xanh.',
    heroImage: unsplash('1487958449943-2429e8be8625', 1600),
    heroImageAlt: 'Công trình kiến trúc hiện đại trong khu đô thị',
    overviewImage: unsplash('1487958449943-2429e8be8625', 1600),
    overviewImageAlt: 'Công trình kiến trúc hiện đại trong khu đô thị',
    overviewParagraphs: [
      'Khu đô thị Bateco Green Hạ Long giữ mật độ xây dựng ở mức vừa phải, dành phần đáng kể diện tích cho công viên, mặt nước và đường dạo. Địa hình dốc tự nhiên của khu đất được giữ lại thay vì san phẳng, tạo nên các lớp cảnh quan nối tiếp nhau.',
      'Khu ở thấp tầng, trường học và khối dịch vụ được đặt trong bán kính đi bộ để hạn chế nhu cầu dùng xe cá nhân trong nội khu. Hạ tầng kỹ thuật đi ngầm toàn bộ, giữ cho tuyến phố không bị chia cắt bởi hệ thống dây nổi.',
    ],
    galleryPool: 'bateco-land',
  },
  {
    slug: 'trung-tam-huan-luyen-ky-thuat-hoa-lac',
    index: '10',
    badge: 'Quốc phòng - An ninh',
    title: 'Trung tâm huấn luyện kỹ thuật Hoà Lạc',
    description:
      'Trung tâm đào tạo và huấn luyện kỹ thuật, phục vụ công tác bồi dưỡng nghiệp vụ chuyên ngành theo từng đợt tập trung.',
    heroImage: unsplash('1519452575417-564c1401ecc0', 1600),
    heroImageAlt: 'Hội trường huấn luyện với hàng ghế xếp dãy',
    overviewImage: unsplash('1519452575417-564c1401ecc0', 1600),
    overviewImageAlt: 'Hội trường huấn luyện với hàng ghế xếp dãy',
    overviewParagraphs: [
      'Trung tâm huấn luyện kỹ thuật Hoà Lạc đặt khu giảng đường lý thuyết liền kề các xưởng thực hành, cho phép chuyển từ bài giảng sang thao tác trên thiết bị thật trong cùng một buổi học. Hội trường lớn được trang bị hệ trình chiếu và âm thanh phục vụ những đợt tập huấn tập trung.',
      'Khu ký túc và nhà ăn nằm tách khỏi khu học tập nhưng vẫn trong phạm vi đi bộ, thuận tiện cho các khoá huấn luyện dài ngày. Bateco tham gia từ khâu thi công tới lắp đặt hệ thống kỹ thuật và bàn giao vận hành.',
    ],
    galleryPool: 'quoc-phong-an-ninh',
  },
  {
    slug: 'to-hop-kho-van-an-ninh-phia-nam',
    index: '11',
    badge: 'Quốc phòng - An ninh',
    title: 'Tổ hợp kho vận an ninh phía Nam',
    description:
      'Tổ hợp kho lưu trữ và phân phối với yêu cầu kiểm soát ra vào nghiêm ngặt, đặt tại khu vực phía Nam.',
    heroImage: unsplash('1586528116311-ad8dd3c8310d', 1600),
    heroImageAlt: 'Kho vận quy mô lớn với hệ thống kệ chứa hàng',
    overviewImage: unsplash('1586528116311-ad8dd3c8310d', 1600),
    overviewImageAlt: 'Kho vận quy mô lớn với hệ thống kệ chứa hàng',
    overviewParagraphs: [
      'Tổ hợp kho vận an ninh phía Nam được thiết kế cho nhóm hàng hoá đòi hỏi kiểm soát chặt về ra vào và truy xuất. Luồng người, luồng xe và luồng hàng tách riêng ngay từ cổng, hạn chế các điểm giao cắt trong khuôn viên.',
      'Hệ giá kệ cao tầng cùng lối đi hẹp giúp tăng sức chứa trên cùng diện tích sàn, trong khi khu vực soạn hàng bố trí gần cửa xuất để rút ngắn quãng di chuyển. Hệ thống giám sát và kiểm soát truy cập được tích hợp trên một nền tảng quản lý duy nhất.',
    ],
    galleryPool: 'quoc-phong-an-ninh',
  },
  {
    slug: 'nha-may-khi-tai-quang-dien-tu',
    index: '12',
    badge: 'Quốc phòng - An ninh',
    title: 'Nhà máy khí tài quang điện tử',
    description:
      'Nhà máy lắp ráp và hiệu chỉnh khí tài quang điện tử, vận hành trong điều kiện môi trường được kiểm soát chặt.',
    heroImage: unsplash('1581091226825-a6a2a5aee158', 1600),
    heroImageAlt: 'Kỹ thuật viên vận hành dây chuyền lắp ráp thiết bị',
    overviewImage: unsplash('1581091226825-a6a2a5aee158', 1600),
    overviewImageAlt: 'Kỹ thuật viên vận hành dây chuyền lắp ráp thiết bị',
    overviewParagraphs: [
      'Nhà máy khí tài quang điện tử đòi hỏi môi trường ổn định về nhiệt độ, độ ẩm và độ sạch, nên phần lớn ngân sách kỹ thuật dồn cho hệ điều hoà, lọc khí và chống rung nền. Các gian lắp ráp được phân theo những cấp độ sạch khác nhau tuỳ công đoạn.',
      'Khu đo kiểm và hiệu chỉnh quang học đặt tách biệt khỏi khu gia công cơ khí để tránh nhiễu rung và bụi. Bateco đảm nhận phần xây dựng cùng hệ thống kỹ thuật, phối hợp với đơn vị chuyên ngành trong quá trình lắp đặt thiết bị đo.',
    ],
    galleryPool: 'quoc-phong-an-ninh',
  },
  {
    slug: 'vien-nghien-cuu-vat-lieu-bateco',
    index: '13',
    badge: 'R & D',
    title: 'Viện nghiên cứu vật liệu Bateco',
    description:
      'Viện nghiên cứu vật liệu của Bateco, tập trung vào thử nghiệm và đánh giá vật liệu dùng trong xây dựng công nghiệp.',
    heroImage: unsplash('1580982327559-c1202864eb05', 1600),
    heroImageAlt: 'Nhóm nghiên cứu làm việc trong phòng thí nghiệm',
    overviewImage: unsplash('1580982327559-c1202864eb05', 1600),
    overviewImageAlt: 'Nhóm nghiên cứu làm việc trong phòng thí nghiệm',
    overviewParagraphs: [
      'Viện nghiên cứu vật liệu Bateco tập hợp các phòng thí nghiệm phục vụ việc thử nghiệm, đánh giá và cải tiến vật liệu dùng trong công trình công nghiệp. Cách bố trí mặt bằng cho phép mở rộng từng nhóm phòng thí nghiệm mà không phải cải tạo toàn bộ toà nhà.',
      'Kết quả nghiên cứu được chuyển trực tiếp về các công trường và nhà máy trong hệ thống, rút ngắn khoảng cách giữa phòng thí nghiệm và ứng dụng thực tế. Viện cũng là nơi Bateco hợp tác cùng các trường kỹ thuật trong những đề tài dài hạn.',
    ],
    galleryPool: 'rnd',
  },
  {
    slug: 'trung-tam-rnd-tu-dong-hoa-binh-duong',
    index: '14',
    badge: 'R & D',
    title: 'Trung tâm R&D tự động hoá Bình Dương',
    description:
      'Trung tâm nghiên cứu và thử nghiệm giải pháp tự động hoá cho dây chuyền sản xuất công nghiệp.',
    heroImage: unsplash('1567789884554-0b844b597180', 1600),
    heroImageAlt: 'Cánh tay robot trên dây chuyền tự động hoá',
    overviewImage: unsplash('1567789884554-0b844b597180', 1600),
    overviewImageAlt: 'Cánh tay robot trên dây chuyền tự động hoá',
    overviewParagraphs: [
      'Trung tâm R&D tự động hoá Bình Dương dành cho việc dựng thử và hiệu chỉnh các cụm thiết bị tự động trước khi đưa vào dây chuyền thật. Không gian xưởng để trống linh hoạt, cho phép dựng lại cấu hình chuyền theo từng bài toán của khách hàng.',
      'Đội ngũ tại trung tâm làm việc song song trên phần cơ khí, phần điều khiển và phần mềm, nhờ đó phát hiện sớm những xung đột giữa ba khối. Mỗi phương án đều được chạy thử ở quy mô thu nhỏ trước khi triển khai tại nhà máy.',
    ],
    galleryPool: 'rnd',
  },
  {
    slug: 'phong-thi-nghiem-nang-luong-tai-tao-ninh-thuan',
    index: '15',
    badge: 'R & D',
    title: 'Phòng thí nghiệm năng lượng tái tạo Ninh Thuận',
    description:
      'Phòng thí nghiệm đánh giá hiệu năng thiết bị năng lượng tái tạo ngay trong điều kiện khí hậu Ninh Thuận.',
    heroImage: unsplash('1508514177221-188b1cf16e9d', 1600),
    heroImageAlt: 'Hàng tấm pin mặt trời tại khu thử nghiệm',
    overviewImage: unsplash('1508514177221-188b1cf16e9d', 1600),
    overviewImageAlt: 'Hàng tấm pin mặt trời tại khu thử nghiệm',
    overviewParagraphs: [
      'Phòng thí nghiệm năng lượng tái tạo Ninh Thuận kết hợp khu thí nghiệm trong nhà với bãi thử ngoài trời, nơi thiết bị vận hành trong chính điều kiện nắng gió đặc trưng của địa phương. Dữ liệu vận hành được ghi liên tục để so sánh giữa các cấu hình lắp đặt.',
      'Ngoài hiệu năng, phòng thí nghiệm còn theo dõi độ bền của vật liệu và kết cấu đỡ dưới tác động của bụi, hơi muối và gió mạnh. Những kết luận rút ra được dùng để hiệu chỉnh thiết kế cho các dự án điện mặt trời mà Bateco triển khai.',
    ],
    galleryPool: 'rnd',
  },
  {
    slug: 'apec-2027',
    index: '16',
    badge: 'Đầu tư hạ tầng',
    title: 'APEC 2027',
    description:
      'Nhóm hạng mục hạ tầng và công trình phục vụ chuỗi sự kiện APEC 2027, thi công theo tiến độ cố định của sự kiện.',
    heroImage: unsplash('1449824913935-59a10b8d2000', 1600),
    heroImageAlt: 'Đại lộ trung tâm thành phố với dòng xe lưu thông',
    overviewImage: unsplash('1449824913935-59a10b8d2000', 1600),
    overviewImageAlt: 'Đại lộ trung tâm thành phố với dòng xe lưu thông',
    overviewParagraphs: [
      'APEC 2027 gồm nhóm hạng mục hạ tầng và công trình phục vụ chuỗi sự kiện quốc tế, trong đó mốc thời gian là ràng buộc không thể dịch chuyển. Kế hoạch thi công vì vậy được lập ngược từ ngày bàn giao, với các mốc kiểm soát dày hơn thông lệ.',
      'Bateco tham gia ở phần công trình và hạ tầng kết nối, phối hợp cùng các đơn vị phụ trách cảnh quan và thiết bị chuyên dụng. Yêu cầu về an ninh và về chất lượng hoàn thiện được đưa vào hồ sơ thiết kế ngay từ giai đoạn đầu.',
    ],
    galleryPool: 'bateco-land',
  },
  {
    slug: 'cang-can-bateco-vinh-phuc',
    index: '17',
    badge: 'Logistics',
    title: 'Cảng cạn Bateco Vĩnh Phúc',
    description:
      'Cảng cạn kết nối các khu công nghiệp Vĩnh Phúc với cụm cảng biển, xử lý thủ tục hàng hoá ngay tại nội địa.',
    heroImage: unsplash('1494412574643-ff11b0a5c1c3', 1600),
    heroImageAlt: 'Bãi container và hệ thống cần cẩu nhìn từ trên cao',
    overviewImage: unsplash('1494412574643-ff11b0a5c1c3', 1600),
    overviewImageAlt: 'Bãi container và hệ thống cần cẩu nhìn từ trên cao',
    overviewParagraphs: [
      'Cảng cạn Bateco Vĩnh Phúc đóng vai trò điểm tập kết và làm thủ tục cho hàng hoá của các khu công nghiệp trong vùng, trước khi vận chuyển ra cảng biển. Đưa khâu thông quan về gần nhà máy giúp doanh nghiệp giảm thời gian chờ tại cửa khẩu cảng.',
      'Bãi container, khu kho và khu kiểm hoá được bố trí trên cùng một tuyến di chuyển, hạn chế việc đảo chuyển phương tiện trong nội bộ. Hạ tầng đường kết nối được đầu tư đồng bộ để phù hợp với lưu lượng xe đầu kéo ra vào liên tục.',
    ],
    galleryPool: 'bat-dong-san-cong-nghiep',
  },
  {
    slug: 'dien-mat-troi-ninh-thuan',
    index: '18',
    badge: 'Năng lượng',
    title: 'Nhà máy điện mặt trời Ninh Thuận',
    description:
      'Nhà máy điện mặt trời tại Ninh Thuận, khai thác nền bức xạ cao và số giờ nắng ổn định của khu vực.',
    heroImage: unsplash('1509391366360-2e959784a276', 1600),
    heroImageAlt: 'Cánh đồng tấm pin năng lượng mặt trời',
    overviewImage: unsplash('1509391366360-2e959784a276', 1600),
    overviewImageAlt: 'Cánh đồng tấm pin năng lượng mặt trời',
    overviewParagraphs: [
      'Nhà máy điện mặt trời Ninh Thuận khai thác nền bức xạ cao và số giờ nắng ổn định của khu vực. Cách bố trí các dãy tấm pin được tính toán để hạn chế bóng che lẫn nhau trong những khung giờ đầu và cuối ngày.',
      'Hệ kết cấu đỡ chọn theo hướng chịu được gió mạnh và môi trường nhiều bụi, giảm khối lượng bảo trì trong vòng đời khai thác. Công tác vận hành tập trung vào giám sát từ xa, kết hợp các đợt kiểm tra hiện trường theo chu kỳ.',
    ],
    galleryPool: 'rnd',
  },
]

export function getProjectDetail(slug: string) {
  return PROJECT_DETAILS.find((detail) => detail.slug === slug)
}

export function getOtherProjects(slug: string) {
  return PROJECT_DETAILS.filter((detail) => detail.slug !== slug)
}
