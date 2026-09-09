import { type DevelopmentJourneyTextItem } from '@/modules/about/components/development-journey-texts'
import { DevelopmentJourneyTimeline } from '@/modules/about/components/development-journey-timeline'

const TIMELINE_ITEMS: readonly DevelopmentJourneyTextItem[] = [
  {
    year: '2018',
    text: 'Đa dạng hóa lĩnh vực chiến lược',
    cardTitle: ['Đa dạng hóa', 'lĩnh vực chiến lược'],
    className: 'top-[2.35rem] left-0',
    groupIndex: 2,
    order: '05 / 06',
    description:
      'Bateco từng bước đa dạng hóa năng lực triển khai, mở rộng nền tảng kỹ thuật và chuẩn hóa định hướng phát triển dài hạn.',
  },
  {
    year: '2014',
    text: 'Mở rộng quy mô & thương hiệu',
    cardTitle: ['Mở rộng quy mô', '& thương hiệu'],
    className: 'top-1/2 left-0 -translate-y-1/2',
    groupIndex: 1,
    order: '03 / 06',
    description:
      'Quy mô vận hành được mở rộng cùng hệ thống thương hiệu, tạo tiền đề cho các lĩnh vực đầu tư và dịch vụ chiến lược.',
  },
  {
    year: '2012',
    text: 'Phát triển 06 lĩnh vực cốt lõi',
    cardTitle: ['Phát triển', '06 lĩnh vực cốt lõi'],
    className: 'top-[18.3rem] left-0',
    groupIndex: 0,
    order: '01 / 06',
    description:
      'Khởi nguồn từ nền tảng kỹ thuật, Bateco đặt những viên gạch đầu tiên cho hệ sinh thái đa ngành và định hướng bền vững.',
  },
  {
    year: '2020',
    text: 'Đa dạng hóa lĩnh vực chiến lược',
    cardTitle: ['Đa dạng hóa', 'lĩnh vực chiến lược'],
    className: 'top-[2.35rem] right-[-5rem]',
    groupIndex: 2,
    order: '02 / 06',
    description:
      'Các lĩnh vực chiến lược được tái cấu trúc và phát triển đồng bộ, nâng cao khả năng thích ứng với thị trường.',
  },
  {
    year: '2023',
    text: 'Mở rộng quy mô & thương hiệu',
    cardTitle: ['Mở rộng quy mô', '& thương hiệu'],
    className: 'top-1/2 right-[-5rem] -translate-y-1/2',
    groupIndex: 1,
    order: '04 / 06',
    description:
      'Bateco tiếp tục mở rộng dấu ấn thương hiệu, củng cố quan hệ đối tác và năng lực thực thi các dự án trọng điểm.',
  },
  {
    year: '2026',
    text: 'Phát triển 06 lĩnh vực cốt lõi',
    cardTitle: ['Phát triển', '06 lĩnh vực cốt lõi'],
    className: 'top-[18.3rem] right-[-5rem]',
    groupIndex: 0,
    order: '06 / 06',
    description:
      'Hệ sinh thái được hoàn thiện quanh sáu lĩnh vực cốt lõi, hướng đến tăng trưởng xanh, chuyển đổi số và giá trị lâu dài.',
  },
]

export function DevelopmentJourney() {
  return (
    <section className='border-y-[3px] border-[#F4B700] bg-[linear-gradient(180deg,#B9D8F0_0%,#3D91DD_45%,#1164BA_100%)] py-[5.75rem] xsm:py-14'>
      <div className='mx-auto max-w-[76rem] px-6 xsm:px-4'>
        <div className='text-center'>
          <h2 className='font-libertinus-serif text-[2.55rem] leading-tight font-bold tracking-[0.09em] text-[#183E7A] uppercase xsm:text-[1.75rem]'>
            Chặng đường phát triển
          </h2>
          <div className='mx-auto mt-3 h-px w-16 bg-[#183E7A]' />
        </div>

        <div className='relative mx-auto mt-[8.5rem] h-[24rem] max-w-[70rem] xsm:mt-12 xsm:h-auto'>
          <DevelopmentJourneyTimeline items={TIMELINE_ITEMS} />

          <div className='hidden xsm:grid xsm:grid-cols-1 xsm:gap-4'>
            {TIMELINE_ITEMS.map((item) => (
              <MobileTimelineText
                key={item.year}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MobileTimelineText({ item }: { item: DevelopmentJourneyTextItem }) {
  return (
    <div className='border-l border-[#F4B700]/75 pl-4'>
      <p className='font-libertinus-serif text-[1.55rem] leading-none font-bold text-[#F4B700]'>
        {item.year}
      </p>
      <p className='mt-2 font-work-sans text-[0.62rem] leading-tight font-bold tracking-[0.04em] text-[#102F62] uppercase'>
        {item.text}
      </p>
    </div>
  )
}
