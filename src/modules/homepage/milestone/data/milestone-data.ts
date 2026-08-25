export type MilestoneContent = {
  years: number
  fillImage: string
  title: string
  yearRange: string
  paragraphs: [string, string]
  cta: { label: string; href: string }
  watermark: string
}

export const MILESTONE_CONTENT: MilestoneContent = {
  years: 14,
  fillImage: '/home/img/journey.png',
  title: 'NĂM PHÁT TRIỂN BỀN VỮNG',
  yearRange: '2012 — 2026',
  paragraphs: [
    'Khởi nguồn từ khát vọng kiến tạo những công trình mang dấu ấn vượt thời gian, Bateco Group không ngừng vươn mình trở thành tập đoàn phát triển bất động sản và cơ sở hạ tầng hàng đầu khu vực. Xuyên suốt chặng đường gần hai thập kỷ, chúng tôi kiên định với triết lý "Chất lượng làm nên di sản", đặt tiêu chuẩn thẩm mỹ, kỹ thuật và tính bền vững lên vị trí độc tôn trong mọi dự án.',
    'Từ những siêu dự án cầu đường thay đổi diện mạo giao thông đô thị, đến các tổ hợp nghỉ dưỡng xa hoa, Bateco Group cam kết mang lại giá trị thực, nâng tầm chất lượng sống cho cộng đồng và đóng góp vào sự phát triển thịnh vượng của quốc gia. Tương lai của chúng tôi được xây đắp trên nền tảng vững chắc của niềm tin, sự minh bạch và khát khao tiên phong.',
  ],
  cta: { label: 'TÌM HIỂU THÊM', href: '/gioi-thieu' },
  watermark: 'BATECO',
}
