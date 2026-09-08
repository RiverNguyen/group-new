import { format, parseISO } from 'date-fns'

import {
  CATEGORY_LABELS,
  type ArticleCategory,
} from '@/modules/social-activities/data/filters-data'

export type Article = {
  id: string
  title: string
  excerpt: string
  category: ArticleCategory
  categoryLabel: string
  publishedAt: string
  image: string
  imageAlt: string
  href: string
}

export const ARTICLES_PER_PAGE = 9

export function formatArticleDate(publishedAt: string): string {
  return format(parseISO(publishedAt), 'dd/MM/yyyy')
}

type ArticleSeed = Omit<Article, 'categoryLabel' | 'href'>

const toArticle = (seed: ArticleSeed): Article => ({
  ...seed,
  categoryLabel: CATEGORY_LABELS[seed.category],
  href: '#',
})

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export const FEATURED_ARTICLE: Article = toArticle({
  id: 'dien-dan-doanh-nghiep-va-cong-dong-2026',
  title: 'Diễn đàn “Doanh nghiệp và cộng đồng 2026” quy tụ hơn 800 đại biểu',
  excerpt:
    'Bateco Group đồng tổ chức diễn đàn thường niên về trách nhiệm xã hội của doanh nghiệp, với ba phiên thảo luận xoay quanh giáo dục nghề, an toàn lao động và giảm phát thải. Các cam kết đưa ra tại diễn đàn sẽ được công bố tiến độ theo từng quý.',
  category: 'su-kien',
  publishedAt: '2026-05-21',
  image: unsplash('1560523159-94c9d18bcf27', 1600),
  imageAlt: 'Khán phòng đông đại biểu hướng về sân khấu diễn đàn',
})

const ARTICLE_SEEDS: ArticleSeed[] = [
  {
    id: 'le-tong-ket-chuong-trinh-an-sinh-2025',
    title: 'Lễ tổng kết chương trình an sinh 2025 và phát động kế hoạch 2026',
    excerpt:
      'Chương trình an sinh năm 2025 đã giải ngân 28 tỷ đồng cho giáo dục và y tế cơ sở. Kế hoạch 2026 nâng ngân sách lên 35 tỷ đồng và mở rộng thêm bốn tỉnh.',
    category: 'su-kien',
    publishedAt: '2026-05-08',
    image: unsplash('1728003862444-c9214cdd6b8a', 900),
    imageAlt: 'Diễn giả trình bày trên sân khấu buổi lễ',
  },
  {
    id: 'hoi-thao-an-toan-lao-dong-nha-thau-phu',
    title: 'Hội thảo an toàn lao động cho nhà thầu phụ thu hút 300 học viên',
    excerpt:
      'Khoá đào tạo hai ngày tập trung vào quy trình làm việc trên cao và quản lý rủi ro điện, kết thúc bằng bài kiểm tra cấp chứng nhận nội bộ.',
    category: 'su-kien',
    publishedAt: '2026-04-19',
    image: unsplash('1542744173-8e7e53415bb0', 900),
    imageAlt: 'Nhiều người dự hội thảo quanh bàn dài với máy tính xách tay',
  },
  {
    id: 'ngay-hoi-sang-kien-vi-cong-dong',
    title: 'Ngày hội sáng kiến vì cộng đồng: 62 ý tưởng được đề xuất',
    excerpt:
      'Các nhóm dự thi trình bày ý tưởng cải thiện điều kiện sống quanh khu vực dự án. Sáu sáng kiến được chọn cấp vốn triển khai thí điểm trong năm nay.',
    category: 'su-kien',
    publishedAt: '2026-03-27',
    image: unsplash('1581092568395-d68050c2ab43', 900),
    imageAlt: 'Nhóm cùng thảo luận ý tưởng trước bảng trắng',
  },
  {
    id: 'khai-truong-thu-vien-cong-dong-bac-ninh',
    title: 'Khai trương thư viện cộng đồng Bateco tại Bắc Ninh',
    excerpt:
      'Thư viện rộng 320 m² với hơn 6.000 đầu sách và khu máy tính miễn phí, phục vụ con em công nhân các khu công nghiệp lân cận.',
    category: 'su-kien',
    publishedAt: '2026-02-14',
    image: unsplash('1544776193-32d404ae608a', 900),
    imageAlt: 'Học sinh ngồi đọc và viết bài bên bàn học',
  },
  {
    id: 'ngay-hoi-gan-ket-nhan-vien-bateco',
    title: 'Ngày hội gắn kết nhân viên Bateco quy tụ hơn 1.200 người',
    excerpt:
      'Chuỗi hoạt động thể thao và trò chơi tập thể diễn ra tại ba miền, đồng thời phát động quỹ tương trợ dành cho người lao động gặp khó khăn.',
    category: 'su-kien',
    publishedAt: '2026-01-09',
    image: unsplash('1600880292203-757bb62b4baf', 900),
    imageAlt: 'Hai đồng nghiệp đập tay chúc mừng nhau',
  },
  {
    id: 'toa-dam-ket-noi-doanh-nghiep-chinh-quyen',
    title: 'Toạ đàm kết nối doanh nghiệp và chính quyền địa phương',
    excerpt:
      'Đại diện bốn tỉnh cùng các nhà thầu bàn về thủ tục cấp phép và giải phóng mặt bằng, hướng tới rút ngắn thời gian chuẩn bị dự án.',
    category: 'su-kien',
    publishedAt: '2025-12-18',
    image: unsplash('1752159400890-d906038f1b35', 900),
    imageAlt: 'Đại diện hai bên bắt tay sau buổi toạ đàm',
  },
  {
    id: 'bateco-cong-bo-bao-cao-phat-trien-ben-vung',
    title: 'Bateco Group công bố Báo cáo phát triển bền vững năm 2025',
    excerpt:
      'Báo cáo lần đầu áp dụng khung GRI, ghi nhận mức giảm 18% cường độ phát thải trên mỗi đơn vị doanh thu so với năm trước.',
    category: 'tin-doanh-nghiep',
    publishedAt: '2026-05-02',
    image: unsplash('1631557777232-a2632ae3c67d', 900),
    imageAlt: 'Máy tính và tập tài liệu báo cáo trên bàn làm việc',
  },
  {
    id: 'bateco-nhan-giai-noi-lam-viec-tot-nhat',
    title: 'Bateco Group vào top 50 nơi làm việc tốt nhất ngành xây dựng',
    excerpt:
      'Kết quả dựa trên khảo sát độc lập với hơn 2.400 người lao động, trong đó điểm phúc lợi và an toàn lao động đạt mức cao nhất ngành.',
    category: 'tin-doanh-nghiep',
    publishedAt: '2026-03-11',
    image: unsplash('1556761175-b413da4baf72', 900),
    imageAlt: 'Văn phòng mở với nhân viên làm việc tại bàn',
  },
  {
    id: 'bateco-ky-hop-tac-dao-tao-nghe',
    title: 'Ký kết hợp tác đào tạo nghề với 4 trường cao đẳng kỹ thuật',
    excerpt:
      'Mỗi năm khoảng 400 sinh viên sẽ được thực tập hưởng lương tại công trường Bateco, trong đó 60% có cơ hội ở lại làm việc chính thức.',
    category: 'tin-doanh-nghiep',
    publishedAt: '2026-01-23',
    image: unsplash('1666018215872-b98ffea7e6ab', 900),
    imageAlt: 'Ký kết văn bản hợp tác trên bàn lễ',
  },
  {
    id: 'chan-dung-nguoi-bateco-nu-ky-su-cong-truong',
    title: 'Chân dung người Bateco: 12 năm gắn bó của một nữ kỹ sư công trường',
    excerpt:
      'Từ vị trí kỹ sư giám sát, chị trở thành người phụ nữ đầu tiên điều hành một gói thầu cơ điện quy mô lớn của Tập đoàn.',
    category: 'tin-doanh-nghiep',
    publishedAt: '2025-11-27',
    image: unsplash('1573497019940-1c28c88b4f3e', 900),
    imageAlt: 'Chân dung một nữ nhân viên đang mỉm cười',
  },
  {
    id: 'bateco-kien-toan-ban-dieu-hanh',
    title: 'Bateco Group kiện toàn Ban điều hành cho giai đoạn 2026 - 2030',
    excerpt:
      'Cơ cấu mới bổ sung vị trí Giám đốc phát triển bền vững, trực tiếp báo cáo Hội đồng quản trị về các chỉ tiêu môi trường và xã hội.',
    category: 'tin-doanh-nghiep',
    publishedAt: '2025-10-15',
    image: unsplash('1623051786552-e46ef84e6c07', 900),
    imageAlt: 'Toà nhà văn phòng hiện đại',
  },
  {
    id: 'du-an-dien-gio-thai-binh-phat-dien',
    title: 'Dự án điện gió ven biển Thái Bình chính thức phát điện thương mại',
    excerpt:
      'Mười hai tuabin với tổng công suất 48 MW hoà lưới đúng tiến độ, cung cấp điện cho khoảng 42.000 hộ dân mỗi năm.',
    category: 'du-an',
    publishedAt: '2026-04-06',
    image: unsplash('1466611653911-95081537e5b7', 900),
    imageAlt: 'Tuabin gió trên cánh đồng lúc hoàng hôn',
  },
  {
    id: 'trung-tam-kho-van-bac-ninh',
    title: 'Đưa vào vận hành trung tâm kho vận 12.000 m² tại Bắc Ninh',
    excerpt:
      'Trung tâm phục vụ các nhà máy điện tử trong khu công nghiệp lân cận, tạo thêm 260 việc làm cho lao động địa phương.',
    category: 'du-an',
    publishedAt: '2026-02-28',
    image: unsplash('1587293852726-70cdb56c2866', 900),
    imageAlt: 'Kho hàng với hệ thống giá kệ cao tầng',
  },
  {
    id: 'nang-cap-day-chuyen-nha-may-hung-yen',
    title: 'Hoàn thành nâng cấp dây chuyền nhà máy cơ khí Hưng Yên',
    excerpt:
      'Gói nâng cấp thay thế toàn bộ hệ thống hút bụi và cách âm, đưa mức ồn tại khu vực sản xuất về dưới ngưỡng quy định.',
    category: 'du-an',
    publishedAt: '2025-12-05',
    image: unsplash('1581091226825-a6a2a5aee158', 900),
    imageAlt: 'Kỹ thuật viên vận hành dây chuyền thiết bị',
  },
  {
    id: 'trung-tam-du-lieu-chuyen-doi-so',
    title: 'Trung tâm dữ liệu phục vụ chuyển đổi số toàn tập đoàn đi vào hoạt động',
    excerpt:
      'Hạ tầng mới gom dữ liệu vận hành của 42 công trường về một mối, rút thời gian lập báo cáo tiến độ từ ba ngày xuống còn vài giờ.',
    category: 'du-an',
    publishedAt: '2025-10-30',
    image: unsplash('1573164713988-8665fc963095', 900),
    imageAlt: 'Nhân viên trong hành lang trung tâm dữ liệu',
  },
  {
    id: 'du-an-phu-xanh-dat-bac-mau-son-la',
    title: 'Dự án phủ xanh 120 ha đất canh tác bạc màu tại Sơn La',
    excerpt:
      'Dự án kéo dài 5 năm, kết hợp cải tạo đất và giao khoán chăm sóc cho 240 hộ dân địa phương nhằm tạo sinh kế lâu dài.',
    category: 'du-an',
    publishedAt: '2025-09-16',
    image: unsplash('1500382017468-9049fed747ef', 900),
    imageAlt: 'Cánh đồng trải rộng lúc hoàng hôn',
  },
  {
    id: 'thi-truong-dong-von-fdi-dich-chuyen',
    title: 'Dòng vốn FDI toàn cầu dịch chuyển: cơ hội nào cho Việt Nam',
    excerpt:
      'Xu hướng đa dạng hoá chuỗi cung ứng tiếp tục đưa vốn vào khu vực Đông Nam Á, trong đó nhóm điện tử và linh kiện chiếm tỷ trọng lớn nhất.',
    category: 'thi-truong',
    publishedAt: '2026-04-30',
    image: unsplash('1516937941344-00b4e0337589', 900),
    imageAlt: 'Tổ hợp nhà máy công nghiệp nhìn từ xa',
  },
  {
    id: 'thi-truong-van-phong-cho-thue',
    title: 'Thị trường văn phòng cho thuê: giá thuê hạng A đi ngang quý II',
    excerpt:
      'Nguồn cung mới dồi dào giữ giá thuê ổn định, trong khi tỷ lệ lấp đầy khu vực trung tâm nhích nhẹ nhờ nhóm khách thuê công nghệ.',
    category: 'thi-truong',
    publishedAt: '2026-03-05',
    image: unsplash('1514565131-fce0801e5785', 900),
    imageAlt: 'Cụm cao ốc văn phòng ven sông',
  },
  {
    id: 'thi-truong-van-tai-bien-cuoc-container',
    title: 'Vận tải biển: cước container tăng trở lại sau mùa thấp điểm',
    excerpt:
      'Nhu cầu xuất khẩu hồi phục cùng lịch trình tàu bị siết chặt đẩy cước tuyến châu Á - châu Âu tăng 9% chỉ trong một tháng.',
    category: 'thi-truong',
    publishedAt: '2026-01-16',
    image: unsplash('1578575437130-527eed3abbec', 900),
    imageAlt: 'Tàu container cập cảng bên hệ thống cần cẩu',
  },
  {
    id: 'thi-truong-lao-dong-ky-thuat-cao',
    title: 'Thiếu hụt lao động kỹ thuật cao: bài toán của ngành xây dựng năm 2026',
    excerpt:
      'Khảo sát trên 320 nhà thầu cho thấy 61% gặp khó khi tuyển kỹ sư cơ điện, buộc phải nâng mức lương khởi điểm trung bình 14%.',
    category: 'thi-truong',
    publishedAt: '2025-11-11',
    image: unsplash('1503387762-592deb58ef4e', 900),
    imageAlt: 'Kỹ sư đọc bản vẽ thiết kế công trình',
  },
  {
    id: 'thi-truong-chi-phi-von-ha-nhiet',
    title: 'Chi phí vốn hạ nhiệt, doanh nghiệp xây dựng nối lại kế hoạch đầu tư',
    excerpt:
      'Mặt bằng lãi suất cho vay trung dài hạn giảm gần một điểm phần trăm so với đầu năm, mở lại dư địa cho các dự án bị hoãn từ 2025.',
    category: 'thi-truong',
    publishedAt: '2025-09-05',
    image: unsplash('1565610222536-ef125c59da2e', 900),
    imageAlt: 'Nhà xưởng khung thép đang hoàn thiện',
  },
]

export const ARTICLES: Article[] = ARTICLE_SEEDS.map(toArticle)
