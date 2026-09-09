import {
  ARTICLES,
  FEATURED_ARTICLE,
  type Article,
} from '@/modules/social-activities/data/articles-data'
import type { ArticleCategory } from '@/modules/social-activities/data/filters-data'

export type ArticleBodyBlock =
  { kind: 'paragraph'; text: string } | { kind: 'figure'; image: string; imageAlt: string }

export type ArticleDetail = {
  slug: string
  lead: string
  blocks: ArticleBodyBlock[]
}

export type ArticleDetailEntry = {
  article: Article
  detail: ArticleDetail
}

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

const CATEGORY_FIGURES: Record<ArticleCategory, { image: string; imageAlt: string }> = {
  'su-kien': {
    image: unsplash('1505373877841-8d25f7d46678', 1200),
    imageAlt:
      'Người diễn giả đứng trên sân khấu bên màn hình chiếu lớn, khán phòng phía dưới kín người',
  },
  'tin-doanh-nghiep': {
    image: unsplash('1552664730-d307ca884978', 1200),
    imageAlt:
      'Người phụ nữ trình bày trước bức tường dán kín giấy ghi chú nhiều màu, đồng nghiệp ngồi nghe',
  },
  'du-an': {
    image: unsplash('1541888946425-d81bb19240f5', 1200),
    imageAlt:
      'Hàng công nhân áo phản quang và mũ bảo hộ đứng trên sàn bê tông đang thi công cốt thép',
  },
  'thi-truong': {
    image: unsplash('1543286386-713bdd548da4', 1200),
    imageAlt:
      'Biểu đồ đường đi lên vẽ tay trên giấy trắng, bên cạnh là bút và thước kẻ trên mặt bàn gỗ',
  },
}

type ArticleBody = {
  lead: string
  paragraphs: [string, string, string, string]
}

const ARTICLE_BODIES: Record<string, ArticleBody> = {
  'dien-dan-doanh-nghiep-va-cong-dong-2026': {
    lead: 'Diễn đàn thường niên về trách nhiệm xã hội của doanh nghiệp trở lại với ba phiên thảo luận chuyên đề, quy tụ hơn 800 đại biểu đến từ cơ quan quản lý, hiệp hội nghề và khối doanh nghiệp sản xuất.',
    paragraphs: [
      'Ngày 21/5/2026, Diễn đàn “Doanh nghiệp và cộng đồng 2026” diễn ra trong một ngày tại Hà Nội với sự đồng tổ chức của Bateco Group. Hơn 800 đại biểu đăng ký tham dự, trong đó gần một nửa đến từ các doanh nghiệp sản xuất và nhà thầu xây lắp phía Bắc.',
      'Ba phiên thảo luận được thiết kế quanh những vấn đề mà doanh nghiệp phải trả lời hằng ngày: giáo dục nghề cho lao động trẻ, an toàn lao động tại công trường và lộ trình giảm phát thải trong chuỗi cung ứng. Mỗi phiên đều mở phần chất vấn trực tiếp thay vì chỉ trình bày tham luận.',
      'Tại phiên về giáo dục nghề, các đại biểu thống nhất rằng khoảng cách giữa chương trình đào tạo và yêu cầu thực tế của công trường chỉ thu hẹp được khi doanh nghiệp tham gia ngay từ khâu thiết kế môn học. Phiên về an toàn lao động dành phần lớn thời gian cho nhóm nhà thầu phụ, mắt xích thường nằm ngoài tầm kiểm soát trực tiếp của chủ đầu tư.',
      'Điểm khác biệt của diễn đàn năm nay nằm ở cơ chế theo dõi sau sự kiện: mọi cam kết đưa ra tại ba phiên đều được đưa vào một bảng tiến độ công bố theo quý. Ban tổ chức cho biết bản cập nhật đầu tiên sẽ được phát hành vào cuối quý III/2026.',
    ],
  },
  'le-tong-ket-chuong-trinh-an-sinh-2025': {
    lead: 'Chương trình an sinh 2025 khép lại với 28 tỷ đồng đã giải ngân cho giáo dục và y tế cơ sở; kế hoạch 2026 nâng ngân sách lên 35 tỷ đồng và mở rộng địa bàn thêm bốn tỉnh.',
    paragraphs: [
      'Lễ tổng kết chương trình an sinh 2025 được Bateco Group tổ chức ngày 8/5/2026, đồng thời phát động kế hoạch cho năm mới trước đại diện chính quyền và các đơn vị thụ hưởng.',
      'Trong năm 2025, 28 tỷ đồng đã được giải ngân, tập trung vào hai nhóm: sửa chữa phòng học cùng nhà bán trú tại vùng khó khăn, và trang bị thiết bị cơ bản cho trạm y tế xã. Cách phân bổ này được giữ nguyên từ năm 2023 vì hai lĩnh vực đó cho kết quả đo đếm được rõ nhất.',
      'Kế hoạch 2026 nâng ngân sách lên 35 tỷ đồng, tăng 25% so với năm trước, và mở rộng thêm bốn tỉnh. Danh sách địa bàn mới được chọn dựa trên khảo sát nhu cầu do chính quyền địa phương cung cấp chứ không theo đề xuất từ nội bộ tập đoàn.',
      'Ban điều hành chương trình nhìn nhận điểm cần cải thiện của năm 2025 là tiến độ: gần một phần ba công trình hoàn thành chậm hơn kế hoạch do vướng thủ tục bàn giao mặt bằng. Từ năm 2026, mỗi hạng mục sẽ có mốc nghiệm thu ràng buộc ngay khi ký thỏa thuận.',
    ],
  },
  'hoi-thao-an-toan-lao-dong-nha-thau-phu': {
    lead: 'Khoá đào tạo hai ngày dành riêng cho nhà thầu phụ thu hút 300 học viên, tập trung vào quy trình làm việc trên cao và quản lý rủi ro điện, kết thúc bằng bài kiểm tra cấp chứng nhận nội bộ.',
    paragraphs: [
      'Trong hai ngày 18 và 19/4/2026, hội thảo an toàn lao động dành cho các nhà thầu phụ đang thi công tại công trường Bateco đã thu hút 300 học viên, con số cao nhất kể từ khi chương trình được tổ chức lần đầu.',
      'Khác với những khoá phổ biến quy định trước đây, chương trình lần này chỉ tập trung vào hai nhóm rủi ro chiếm phần lớn số vụ việc ghi nhận trong ngành: làm việc trên cao và thao tác với hệ thống điện thi công.',
      'Mỗi buổi học bắt đầu bằng một tình huống có thật đã xảy ra trên công trường, sau đó học viên tự phân tích chuỗi quyết định dẫn tới sự cố. Cách tiếp cận này thay cho việc đọc lại quy trình, vốn cho tỷ lệ ghi nhớ thấp trong các kỳ đánh giá trước.',
      'Kết thúc khoá học, học viên làm bài kiểm tra để được cấp chứng nhận nội bộ, có giá trị như điều kiện vào công trường trong 12 tháng. Những trường hợp chưa đạt được bố trí học lại trước khi tiếp tục làm việc.',
    ],
  },
  'ngay-hoi-sang-kien-vi-cong-dong': {
    lead: '62 ý tưởng cải thiện điều kiện sống quanh khu vực dự án được gửi tới ngày hội sáng kiến; sáu đề xuất được chọn cấp vốn triển khai thí điểm ngay trong năm nay.',
    paragraphs: [
      'Ngày hội sáng kiến vì cộng đồng năm 2026 khép lại ngày 27/3 với 62 ý tưởng được đề xuất, đến từ các nhóm cán bộ nhân viên, đối tác thi công và cả người dân sống quanh khu vực dự án.',
      'Chủ đề năm nay được giới hạn trong bán kính 5 km quanh những công trường đang hoạt động. Đây là thay đổi so với các năm trước, khi đề tài mở rộng khiến nhiều sáng kiến hay nhưng không thể triển khai.',
      'Hội đồng chấm chọn đánh giá theo ba tiêu chí: mức độ ảnh hưởng tới người dân, khả năng hoàn thành trong 12 tháng và chi phí vận hành sau khi bàn giao. Sáu sáng kiến vượt qua cả ba vòng, trong đó có hệ thống lọc nước cho hai điểm trường và tuyến đèn chiếu sáng cho đoạn đường công vụ dùng chung với dân cư.',
      'Mỗi sáng kiến được chọn nhận ngân sách thí điểm và một người phụ trách từ ban dự án gần nhất. Kết quả sẽ được báo cáo tại ngày hội năm sau để quyết định nhân rộng hay dừng lại.',
    ],
  },
  'khai-truong-thu-vien-cong-dong-bac-ninh': {
    lead: 'Thư viện cộng đồng Bateco rộng 320 m² tại Bắc Ninh mở cửa với hơn 6.000 đầu sách và khu máy tính miễn phí, phục vụ con em công nhân các khu công nghiệp lân cận.',
    paragraphs: [
      'Ngày 14/2/2026, thư viện cộng đồng Bateco chính thức mở cửa tại Bắc Ninh sau bảy tháng cải tạo từ một nhà kho cũ nằm giữa hai khu công nghiệp.',
      'Công trình rộng 320 m², chia thành ba khu: kho sách hơn 6.000 đầu sách, phòng đọc cho trẻ em và khu máy tính nối mạng miễn phí. Giờ mở cửa được đặt lệch ca sản xuất để phụ huynh có thể đưa đón con sau giờ làm.',
      'Phần lớn đầu sách thuộc nhóm thiếu nhi và kỹ năng nghề, chọn theo khảo sát với 400 hộ gia đình công nhân trong bán kính 3 km. Khu máy tính có 12 máy, ưu tiên cho học sinh cần làm bài tập trực tuyến.',
      'Thư viện do một tổ ba người vận hành, trong đó hai người được tuyển tại địa phương. Kinh phí duy trì đã được cam kết cho ba năm đầu, sau đó chuyển dần sang mô hình phối hợp với chính quyền phường.',
    ],
  },
  'ngay-hoi-gan-ket-nhan-vien-bateco': {
    lead: 'Hơn 1.200 người tham gia chuỗi hoạt động thể thao và trò chơi tập thể tổ chức tại ba miền, đồng thời chứng kiến lễ phát động quỹ tương trợ dành cho người lao động gặp khó khăn.',
    paragraphs: [
      'Ngày hội gắn kết nhân viên Bateco 2026 diễn ra đồng thời tại ba điểm cầu Hà Nội, Đà Nẵng và TP.HCM ngày 9/1, quy tụ hơn 1.200 người lao động của tập đoàn cùng các công ty thành viên.',
      'Việc tách thành ba điểm thay vì gom về một nơi như mọi năm giúp giảm chi phí đi lại và cho phép nhiều đồng nghiệp ở công trường xa tham dự, nhóm thường vắng mặt trong các kỳ trước.',
      'Chuỗi hoạt động gồm giải bóng đá bảy người, kéo co và các trò chơi tập thể theo đội hỗn hợp giữa những phòng ban khác nhau. Cách chia đội ngẫu nhiên được giữ lại từ năm ngoái vì đây là phần được đánh giá cao nhất trong khảo sát sau sự kiện.',
      'Điểm nhấn của ngày hội là lễ phát động quỹ tương trợ dành cho người lao động gặp khó khăn đột xuất, vận hành bằng đóng góp tự nguyện theo tháng cùng phần đối ứng từ tập đoàn. Quỹ bắt đầu nhận hồ sơ từ tháng 2/2026.',
    ],
  },
  'toa-dam-ket-noi-doanh-nghiep-chinh-quyen': {
    lead: 'Đại diện bốn tỉnh cùng các nhà thầu ngồi lại bàn về thủ tục cấp phép và giải phóng mặt bằng, hướng tới rút ngắn thời gian chuẩn bị dự án.',
    paragraphs: [
      'Toạ đàm kết nối doanh nghiệp và chính quyền địa phương tổ chức ngày 18/12/2025 có sự tham dự của đại diện bốn tỉnh cùng lãnh đạo các nhà thầu đang triển khai dự án trên địa bàn.',
      'Chủ đề được đặt hẹp ngay từ đầu: thủ tục cấp phép xây dựng và tiến độ giải phóng mặt bằng. Đây là hai khâu chiếm phần lớn thời gian chuẩn bị của một dự án hạ tầng công nghiệp, đôi khi dài hơn cả thời gian thi công.',
      'Phía doanh nghiệp nêu vướng mắc phổ biến nhất là hồ sơ phải nộp lặp ở nhiều đầu mối với yêu cầu khác nhau. Phía chính quyền chỉ ra chiều ngược lại: nhiều hồ sơ nộp lên thiếu tài liệu hiện trạng, buộc phải trả lại và làm lại từ đầu.',
      'Kết thúc toạ đàm, các bên thống nhất thử nghiệm một danh mục hồ sơ chuẩn dùng chung cho bốn tỉnh, áp dụng trước với nhóm dự án nhà xưởng xây sẵn. Kết quả thử nghiệm sẽ được rà soát sau sáu tháng.',
    ],
  },
  'bateco-cong-bo-bao-cao-phat-trien-ben-vung': {
    lead: 'Báo cáo phát triển bền vững 2025 lần đầu áp dụng khung GRI, ghi nhận mức giảm 18% cường độ phát thải trên mỗi đơn vị doanh thu so với năm trước.',
    paragraphs: [
      'Bateco Group công bố Báo cáo phát triển bền vững năm 2025 vào ngày 2/5/2026. Đây là kỳ báo cáo đầu tiên tập đoàn áp dụng khung GRI thay cho bản tổng hợp nội bộ trước đây.',
      'Việc chuyển sang GRI kéo theo thay đổi về cách thu thập số liệu: dữ liệu tiêu thụ năng lượng và nhiên liệu được lấy trực tiếp từ hệ thống vận hành của từng công trường thay vì tổng hợp thủ công theo quý.',
      'Kết quả nổi bật là cường độ phát thải trên mỗi đơn vị doanh thu giảm 18% so với năm 2024. Phần lớn mức giảm đến từ việc thay máy phát điện diesel bằng nguồn điện lưới tại các công trường dài hạn và tối ưu lộ trình vận chuyển vật liệu.',
      'Báo cáo cũng nêu rõ những chỉ tiêu chưa đạt, gồm tỷ lệ tái sử dụng nước thi công và mức độ hoàn thiện dữ liệu phát thải từ nhà cung cấp. Hai nhóm này được đặt làm trọng tâm cho kỳ báo cáo 2026.',
    ],
  },
  'bateco-nhan-giai-noi-lam-viec-tot-nhat': {
    lead: 'Bateco Group vào top 50 nơi làm việc tốt nhất ngành xây dựng theo khảo sát độc lập với hơn 2.400 người lao động, trong đó điểm phúc lợi và an toàn lao động đạt mức cao nhất ngành.',
    paragraphs: [
      'Kết quả xếp hạng công bố ngày 11/3/2026 đưa Bateco Group vào nhóm 50 nơi làm việc tốt nhất ngành xây dựng, dựa trên khảo sát độc lập thực hiện với hơn 2.400 người lao động.',
      'Khảo sát chấm điểm trên sáu nhóm tiêu chí, từ thu nhập và phúc lợi tới cơ hội thăng tiến và môi trường làm việc. Người trả lời được chọn ngẫu nhiên, không đi qua kênh nội bộ của doanh nghiệp.',
      'Hai nhóm đạt điểm cao nhất ngành là phúc lợi và an toàn lao động. Ở chiều ngược lại, nhóm cơ hội đào tạo chuyên sâu dành cho kỹ sư có trên năm năm kinh nghiệm nhận điểm thấp hơn mặt bằng chung, phản hồi lặp lại so với kỳ khảo sát 2024.',
      'Ban nhân sự cho biết phần điểm thấp sẽ được xử lý bằng một chương trình luân chuyển giữa các khối kỹ thuật, dự kiến chạy thử với 40 kỹ sư trong nửa cuối năm 2026.',
    ],
  },
  'bateco-ky-hop-tac-dao-tao-nghe': {
    lead: 'Bốn trường cao đẳng kỹ thuật ký hợp tác đào tạo nghề với Bateco Group; mỗi năm khoảng 400 sinh viên sẽ thực tập hưởng lương tại công trường, trong đó 60% có cơ hội ở lại làm việc chính thức.',
    paragraphs: [
      'Lễ ký kết hợp tác đào tạo nghề giữa Bateco Group và bốn trường cao đẳng kỹ thuật diễn ra ngày 23/1/2026, mở đường cho khoảng 400 lượt thực tập hưởng lương mỗi năm.',
      'Thỏa thuận không dừng ở việc nhận sinh viên thực tập. Đại diện tập đoàn sẽ tham gia rà soát chương trình môn học của bốn nhóm nghề gồm cơ điện, kết cấu thép, vận hành thiết bị nâng và an toàn lao động.',
      'Sinh viên tham gia được trả lương theo mức học việc và bố trí một người kèm cặp trực tiếp tại công trường. Theo thống kê từ các kỳ thực tập tự phát trước đây, khoảng 60% thực tập sinh nhận được lời mời làm việc chính thức sau khi tốt nghiệp.',
      'Bốn trường tham gia đều nằm tại những tỉnh đang có dự án triển khai, giúp rút ngắn quãng đường đi lại và giữ được lao động ở địa phương sau khi ra trường.',
    ],
  },
  'chan-dung-nguoi-bateco-nu-ky-su-cong-truong': {
    lead: 'Sau 12 năm đi từ vị trí kỹ sư giám sát, chị trở thành người phụ nữ đầu tiên điều hành một gói thầu cơ điện quy mô lớn của Bateco Group.',
    paragraphs: [
      'Mười hai năm trước, chị bắt đầu tại Bateco với vị trí kỹ sư giám sát trên một công trường nhà xưởng ở Hưng Yên. Hôm nay, chị là người phụ nữ đầu tiên của tập đoàn điều hành một gói thầu cơ điện quy mô lớn.',
      'Quãng đường đó không thẳng. Bốn năm đầu chị làm giám sát hiện trường, hai năm tiếp theo chuyển sang bộ phận thiết kế kỹ thuật, rồi quay lại công trường ở vai trò chỉ huy phó, lộ trình mà chính chị gọi là “đi vòng nhưng cần thiết”.',
      'Gói thầu chị đang phụ trách có hơn 200 người tham gia ở giai đoạn cao điểm, phối hợp với năm nhà thầu phụ. Phần khó nhất, theo chị, không nằm ở kỹ thuật mà ở việc giữ cho tiến độ của các đội không đá nhau trong cùng một không gian thi công.',
      'Khi được hỏi về lời khuyên cho các nữ kỹ sư mới ra trường, chị trả lời ngắn: đừng chọn công trường vì muốn chứng minh điều gì, hãy chọn vì thích nhìn thấy thứ mình vẽ được dựng lên thật.',
    ],
  },
  'bateco-kien-toan-ban-dieu-hanh': {
    lead: 'Cơ cấu điều hành giai đoạn 2026 - 2030 bổ sung vị trí Giám đốc phát triển bền vững, trực tiếp báo cáo Hội đồng quản trị về các chỉ tiêu môi trường và xã hội.',
    paragraphs: [
      'Bateco Group công bố kiện toàn Ban điều hành cho giai đoạn 2026 - 2030 vào ngày 15/10/2025, với thay đổi đáng chú ý nhất là lập vị trí Giám đốc phát triển bền vững.',
      'Vị trí mới báo cáo trực tiếp Hội đồng quản trị thay vì trực thuộc khối vận hành. Cấu trúc này nhằm tránh tình huống các chỉ tiêu môi trường và xã hội bị xếp sau chỉ tiêu tiến độ mỗi khi hai bên xung đột.',
      'Cùng đợt kiện toàn, phạm vi phụ trách của khối kỹ thuật được tách làm hai mảng: hạ tầng công nghiệp và bất động sản. Việc tách xuất phát từ khác biệt về chu kỳ dự án cũng như cơ cấu khách hàng giữa hai mảng.',
      'Ban điều hành mới bắt đầu vận hành từ quý I/2026. Các chỉ tiêu của nhiệm kỳ, gồm cả nhóm phi tài chính, sẽ được công bố cùng kế hoạch kinh doanh đầu năm.',
    ],
  },
  'du-an-dien-gio-thai-binh-phat-dien': {
    lead: 'Mười hai tuabin với tổng công suất 48 MW tại dự án điện gió ven biển Thái Bình đã hoà lưới đúng tiến độ, cung cấp điện cho khoảng 42.000 hộ dân mỗi năm.',
    paragraphs: [
      'Ngày 6/4/2026, dự án điện gió ven biển Thái Bình chính thức phát điện thương mại sau 26 tháng thi công, đúng mốc tiến độ đặt ra từ khi khởi công.',
      'Dự án gồm 12 tuabin với tổng công suất 48 MW, đặt trên dải đất ven biển đã được quy hoạch cho năng lượng tái tạo. Sản lượng dự kiến đủ cung cấp cho khoảng 42.000 hộ dân mỗi năm.',
      'Khâu phức tạp nhất là vận chuyển cánh quạt dài hơn 70 m qua các tuyến đường địa phương. Đội thi công phải khảo sát và gia cố sáu vị trí cầu, đồng thời tổ chức vận chuyển vào ban đêm để hạn chế ảnh hưởng tới giao thông.',
      'Sau khi hoà lưới, dự án chuyển sang giai đoạn vận hành với đội kỹ thuật thường trực 18 người, trong đó 11 người được tuyển và đào tạo tại địa phương từ trước khi công trình hoàn thành.',
    ],
  },
  'trung-tam-kho-van-bac-ninh': {
    lead: 'Trung tâm kho vận 12.000 m² tại Bắc Ninh đi vào vận hành, phục vụ các nhà máy điện tử trong khu công nghiệp lân cận và tạo thêm 260 việc làm cho lao động địa phương.',
    paragraphs: [
      'Trung tâm kho vận rộng 12.000 m² tại Bắc Ninh được đưa vào vận hành ngày 28/2/2026, sau 14 tháng thi công.',
      'Công trình phục vụ trực tiếp các nhà máy điện tử trong những khu công nghiệp lân cận, nhóm khách hàng có yêu cầu khắt khe về thời gian giao nhận và điều kiện bảo quản linh kiện.',
      'Thiết kế kho đặt trọng tâm vào tốc độ luân chuyển: 18 cửa xuất nhập bố trí hai phía, hệ giá kệ cao 11 m và khu vực kiểm đếm tách riêng khỏi luồng xe nâng. Toàn bộ khu lưu trữ linh kiện nhạy cảm được kiểm soát độ ẩm.',
      'Giai đoạn vận hành đầy đủ cần 260 nhân sự, phần lớn tuyển tại các xã lân cận. Đợt tuyển dụng đầu tiên hoàn tất trước lễ khánh thành hai tháng để kịp huấn luyện vận hành thiết bị.',
    ],
  },
  'nang-cap-day-chuyen-nha-may-hung-yen': {
    lead: 'Gói nâng cấp nhà máy cơ khí Hưng Yên thay thế toàn bộ hệ thống hút bụi và cách âm, đưa mức ồn tại khu vực sản xuất về dưới ngưỡng quy định.',
    paragraphs: [
      'Gói nâng cấp dây chuyền nhà máy cơ khí Hưng Yên hoàn thành ngày 5/12/2025, khép lại chín tháng thi công xen kẽ với hoạt động sản xuất.',
      'Điểm khó của dự án là nhà máy không được dừng hoạt động. Toàn bộ khối lượng phải chia thành 11 đợt, mỗi đợt gói gọn trong hai ngày cuối tuần và bàn giao lại dây chuyền vận hành bình thường vào sáng thứ Hai.',
      'Hạng mục chính gồm thay mới toàn bộ hệ thống hút bụi cục bộ tại các vị trí cắt và mài, cùng lớp cách âm cho khu vực máy dập. Kết quả đo sau nghiệm thu cho thấy mức ồn tại khu vực sản xuất đã về dưới ngưỡng quy định.',
      'Nhà máy tiếp tục theo dõi bằng các điểm đo cố định đặt tại năm vị trí, số liệu được ghi tự động theo ca. Đây là điều kiện để duy trì chứng nhận điều kiện làm việc trong những kỳ đánh giá tiếp theo.',
    ],
  },
  'trung-tam-du-lieu-chuyen-doi-so': {
    lead: 'Trung tâm dữ liệu phục vụ chuyển đổi số toàn tập đoàn đi vào hoạt động, gom dữ liệu vận hành của 42 công trường về một mối và rút thời gian lập báo cáo tiến độ từ ba ngày xuống còn vài giờ.',
    paragraphs: [
      'Trung tâm dữ liệu phục vụ chuyển đổi số của Bateco Group chính thức hoạt động từ ngày 30/10/2025, sau giai đoạn chạy song song kéo dài bốn tháng với hệ thống cũ.',
      'Trước đây, mỗi công trường gửi báo cáo tiến độ theo mẫu riêng và phòng tổng hợp phải đối chiếu thủ công. Quy trình đó khiến một bản báo cáo toàn tập đoàn mất khoảng ba ngày, lại thường lệch số giữa các đầu mối.',
      'Hệ thống mới nhận dữ liệu vận hành từ 42 công trường theo một chuẩn duy nhất, cập nhật theo ca làm việc. Thời gian lập báo cáo tiến độ rút xuống còn vài giờ, và quan trọng hơn, các con số ở mọi cấp đều truy về cùng một nguồn.',
      'Giai đoạn tiếp theo tập trung vào dữ liệu vật tư và thiết bị, dự kiến triển khai trong năm 2026. Đây là điều kiện để tiến tới dự báo nhu cầu vật tư thay vì chỉ ghi nhận sau khi phát sinh.',
    ],
  },
  'du-an-phu-xanh-dat-bac-mau-son-la': {
    lead: 'Dự án phủ xanh 120 ha đất canh tác bạc màu tại Sơn La kéo dài 5 năm, kết hợp cải tạo đất và giao khoán chăm sóc cho 240 hộ dân địa phương nhằm tạo sinh kế lâu dài.',
    paragraphs: [
      'Dự án phủ xanh 120 ha đất canh tác bạc màu tại Sơn La khởi động ngày 16/9/2025, với thời gian thực hiện dự kiến 5 năm.',
      'Diện tích được chọn là phần đất đã qua nhiều vụ canh tác ngô liên tục, tầng mặt mỏng và giữ nước kém. Nếu chỉ trồng phủ mà không xử lý đất, cây khó sống qua hai mùa khô đầu tiên.',
      'Vì vậy hai năm đầu dành cho cải tạo đất: trồng cây họ đậu che phủ, bổ sung hữu cơ tại chỗ và làm băng chống xói theo đường đồng mức. Từ năm thứ ba mới chuyển sang cây lâu năm cho thu hoạch.',
      'Toàn bộ diện tích được giao khoán chăm sóc cho 240 hộ dân địa phương, có chi trả theo năm và cam kết bao tiêu sản phẩm khi bắt đầu thu hoạch. Đây là phần quyết định việc rừng trồng có được giữ lại sau khi dự án kết thúc hay không.',
    ],
  },
  'thi-truong-dong-von-fdi-dich-chuyen': {
    lead: 'Xu hướng đa dạng hoá chuỗi cung ứng tiếp tục đưa vốn đầu tư vào khu vực Đông Nam Á, trong đó nhóm điện tử và linh kiện chiếm tỷ trọng lớn nhất.',
    paragraphs: [
      'Dòng vốn đầu tư trực tiếp nước ngoài toàn cầu tiếp tục dịch chuyển trong quý I/2026, với Đông Nam Á là một trong số ít khu vực ghi nhận mức tăng so với cùng kỳ.',
      'Động lực chính vẫn là chiến lược đa dạng hoá chuỗi cung ứng của các tập đoàn sản xuất. Thay vì dồn năng lực vào một quốc gia, xu hướng phổ biến là giữ cụm nhà máy chính và bổ sung một cơ sở thứ hai ở thị trường khác.',
      'Tại Việt Nam, nhóm điện tử và linh kiện chiếm tỷ trọng lớn nhất trong vốn đăng ký mới, tiếp đến là dệt may kỹ thuật và cơ khí chính xác. Điểm đáng chú ý là quy mô trung bình mỗi dự án tăng lên, cho thấy nhà đầu tư đặt cược dài hạn hơn.',
      'Cơ hội đi kèm điều kiện. Nhà đầu tư ngày càng hỏi kỹ về hạ tầng điện ổn định, nguồn lao động kỹ thuật và khả năng bàn giao nhà xưởng đúng hẹn; ba yếu tố này đang trở thành tiêu chí sàng lọc trước cả ưu đãi thuế.',
    ],
  },
  'thi-truong-van-phong-cho-thue': {
    lead: 'Nguồn cung mới dồi dào giữ giá thuê văn phòng hạng A đi ngang trong quý II, trong khi tỷ lệ lấp đầy khu vực trung tâm nhích nhẹ nhờ nhóm khách thuê công nghệ.',
    paragraphs: [
      'Thị trường văn phòng cho thuê ghi nhận giá thuê hạng A đi ngang trong quý gần nhất, chấm dứt chuỗi tăng kéo dài từ giữa năm 2025.',
      'Nguyên nhân trực tiếp là nguồn cung mới. Một loạt toà nhà hoàn thiện trong 12 tháng qua đưa thêm diện tích đáng kể ra thị trường, đủ để cân lại áp lực tăng giá ở khu vực trung tâm.',
      'Tỷ lệ lấp đầy khu trung tâm vẫn nhích nhẹ, chủ yếu nhờ nhóm khách thuê công nghệ mở rộng diện tích. Ở chiều ngược lại, nhóm tài chính và bảo hiểm có xu hướng giữ nguyên hoặc thu gọn khi hết hạn hợp đồng.',
      'Với chủ đầu tư, dư địa cạnh tranh đang chuyển từ giá sang điều khoản: thời gian miễn phí thuê, hỗ trợ chi phí hoàn thiện và tính linh hoạt khi khách cần điều chỉnh diện tích giữa kỳ hợp đồng.',
    ],
  },
  'thi-truong-van-tai-bien-cuoc-container': {
    lead: 'Nhu cầu xuất khẩu hồi phục cùng lịch trình tàu bị siết chặt đẩy cước container tuyến châu Á - châu Âu tăng 9% chỉ trong một tháng.',
    paragraphs: [
      'Cước vận tải container tăng trở lại sau mùa thấp điểm, với tuyến châu Á - châu Âu ghi nhận mức tăng 9% chỉ trong tháng đầu năm 2026.',
      'Hai yếu tố cộng hưởng. Nhu cầu xuất khẩu hồi phục sớm hơn dự kiến sau kỳ nghỉ lễ, trong khi các hãng tàu tiếp tục siết lịch trình và cắt bớt chuyến để giữ hệ số lấp đầy.',
      'Với doanh nghiệp sản xuất, tác động không dừng ở chi phí. Lịch tàu thưa hơn đồng nghĩa cửa sổ giao hàng hẹp lại, buộc kế hoạch sản xuất phải bám sát lịch cắt máng thay vì ngược lại.',
      'Các nhà xuất khẩu có hợp đồng dài hạn ít chịu ảnh hưởng hơn nhóm mua cước giao ngay. Đây là lý do nhiều doanh nghiệp đang cân nhắc quay lại hình thức ký cước theo năm, dù mức cam kết sản lượng khắt khe hơn.',
    ],
  },
  'thi-truong-lao-dong-ky-thuat-cao': {
    lead: 'Khảo sát trên 320 nhà thầu cho thấy 61% gặp khó khi tuyển kỹ sư cơ điện, buộc phải nâng mức lương khởi điểm trung bình 14%.',
    paragraphs: [
      'Thiếu hụt lao động kỹ thuật cao tiếp tục là điểm nghẽn của ngành xây dựng khi bước vào năm 2026, theo khảo sát thực hiện trên 320 nhà thầu.',
      '61% doanh nghiệp được hỏi cho biết gặp khó khi tuyển kỹ sư cơ điện, vị trí có nhu cầu tăng nhanh cùng làn sóng nhà xưởng và trung tâm dữ liệu. Nhóm vận hành thiết bị nâng và giám sát an toàn cũng nằm trong danh sách khó tuyển.',
      'Phản ứng phổ biến nhất là nâng lương: mức khởi điểm cho kỹ sư cơ điện mới ra trường tăng trung bình 14% so với năm trước. Tuy nhiên, hơn một nửa số doanh nghiệp thừa nhận tăng lương chỉ giúp giành người từ đối thủ chứ không tạo thêm nguồn cung.',
      'Hướng đi bền hơn được nhắc tới nhiều trong khảo sát là hợp tác với trường nghề ngay từ khâu thiết kế chương trình, kèm thực tập hưởng lương. Cách này cho kết quả chậm nhưng giữ được người lâu hơn.',
    ],
  },
  'thi-truong-chi-phi-von-ha-nhiet': {
    lead: 'Mặt bằng lãi suất cho vay trung dài hạn giảm gần một điểm phần trăm so với đầu năm, mở lại dư địa cho các dự án xây dựng bị hoãn từ 2025.',
    paragraphs: [
      'Chi phí vốn hạ nhiệt đang giúp nhiều doanh nghiệp xây dựng nối lại kế hoạch đầu tư từng bị gác lại, khi lãi suất cho vay trung dài hạn giảm gần một điểm phần trăm so với đầu năm.',
      'Với các dự án hạ tầng công nghiệp có vòng đời 10 - 15 năm, một điểm phần trăm không phải con số nhỏ. Nó đủ để một số phương án đầu tư từ chỗ không đạt ngưỡng hiệu quả chuyển sang khả thi.',
      'Nhóm hưởng lợi rõ nhất là các dự án nhà xưởng xây sẵn và kho vận, vốn có dòng tiền cho thuê tương đối ổn định và dễ chứng minh với bên cho vay. Nhóm bất động sản nhà ở vẫn thận trọng hơn do phụ thuộc vào tốc độ bán hàng.',
      'Dù vậy, các doanh nghiệp được hỏi đều nhấn mạnh yếu tố quyết định vẫn là tiến độ pháp lý. Vốn rẻ không bù được cho một dự án phải chờ thủ tục thêm hai năm.',
    ],
  },
}

export const ARTICLE_POOL: Article[] = [FEATURED_ARTICLE, ...ARTICLES]

const buildDetail = (article: Article, body: ArticleBody): ArticleDetail => {
  const secondFigure = CATEGORY_FIGURES[article.category]

  return {
    slug: article.id,
    lead: body.lead,
    blocks: [
      { kind: 'paragraph', text: body.paragraphs[0] },
      { kind: 'paragraph', text: body.paragraphs[1] },
      { kind: 'figure', image: article.image, imageAlt: article.imageAlt },
      { kind: 'paragraph', text: body.paragraphs[2] },
      { kind: 'paragraph', text: body.paragraphs[3] },
      { kind: 'figure', image: secondFigure.image, imageAlt: secondFigure.imageAlt },
    ],
  }
}

export function findArticleDetail(slug: string): ArticleDetailEntry | undefined {
  const article = ARTICLE_POOL.find((item) => item.id === slug)
  const body = article ? ARTICLE_BODIES[article.id] : undefined

  if (!article || !body) return undefined

  return { article, detail: buildDetail(article, body) }
}
