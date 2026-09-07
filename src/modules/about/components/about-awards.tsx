'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useMemo, useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '@/components/site/container'

import 'swiper/css'

const AWARDS = [
  {
    id: 'partner-award',
    number: '01',
    title: 'Bằng khen của Chủ tịch UBND thành phố Hà Nội',
    meta: 'Số 4986/QĐ-UBND ngày 24/09/2024 của Chủ tịch UBND TP.Hà Nội',
    description:
      'Tại Thượng Hải (Trung Quốc), trong khuôn khổ Hội nghị Đối tác Toàn cầu Envision 2026, Sun World đã vinh dự nhận giải thưởng cao quý nhất từ đối tác chiến lược Trip.com, khẳng định vị thế dẫn đầu trong việc kiến tạo những trải nghiệm du lịch đẳng cấp.',
    image: '/home/img/journey.png',
    imageAlt: 'Cúp và chứng nhận giải thưởng đối tác chiến lược',
  },
  {
    id: 'top-500',
    number: '02',
    title: 'Top 500 doanh nghiệp tăng trưởng nhanh nhất Việt Nam',
    meta: 'Ghi nhận năng lực phát triển và hiệu quả vận hành bền vững.',
    description:
      'Bateco Group tiếp tục khẳng định dấu ấn trên thị trường bằng tốc độ tăng trưởng ổn định, năng lực triển khai dự án và hệ thống quản trị ngày càng chuyên nghiệp.',
    image: '/home/news/image-1.png',
    imageAlt: 'Bateco Group nhận chứng nhận tại lễ công bố Top 500',
  },
  {
    id: 'growth-team',
    number: '03',
    title: 'Ghi nhận đội ngũ phát triển',
    meta: 'Tôn vinh tinh thần đồng hành, sáng tạo và trách nhiệm.',
    description:
      'Đội ngũ Bateco là nền tảng cho các bước tiến mới, góp phần xây dựng hệ sinh thái đa ngành bằng tư duy chuyên nghiệp, trách nhiệm và bền bỉ.',
    image: '/home/news/image-2.png',
    imageAlt: 'Đội ngũ Bateco Group trong buổi gặp mặt',
  },
  {
    id: 'project-mark',
    number: '04',
    title: 'Dấu ấn dự án tiêu biểu',
    meta: 'Các dự án trọng điểm tạo giá trị dài hạn cho cộng đồng.',
    description:
      'Những công trình do Bateco phát triển hướng tới chuẩn mực mới về hạ tầng, không gian sống và giá trị bền vững cho địa phương, đối tác và khách hàng.',
    image: '/home/news/image-3.png',
    imageAlt: 'Dự án tiêu biểu của Bateco Group nhìn từ trên cao',
  },
] as const

export function AboutAwards() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)
  const activeAward = AWARDS[activeIndex] ?? AWARDS[0]

  const previewAwards = useMemo(
    () => AWARDS.map((_, index) => AWARDS[(activeIndex + index + 1) % AWARDS.length]),
    [activeIndex],
  )

  const progressWidth = `${((activeIndex + 1) / AWARDS.length) * 100}%`

  const goToAward = (index: number) => {
    setActiveIndex((index + AWARDS.length) % AWARDS.length)
    swiperRef.current?.slideTo(0)
  }

  return (
    <section className='overflow-hidden border-t-[3px] border-[#F4B700] bg-[#F7F7F7] py-[8.25rem] xsm:py-14'>
      <Container className='grid grid-cols-[20rem_31.25rem_minmax(0,1fr)] items-end gap-x-[2.35rem] xsm:grid-cols-1 xsm:gap-y-8'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeAward.id}
            className='self-center pr-4 xsm:pr-0'
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
          >
            <p className='font-libertinus-serif text-[5.25rem] leading-none font-normal text-transparent [-webkit-text-stroke:1px_#D4DAE4] xsm:text-[3.25rem]'>
              {activeAward.number}
            </p>
            <div className='mt-8 h-px w-[8.5rem] bg-[#AEB4BF] xsm:mt-5' />
            <h3 className='mt-8 font-work-sans text-[1rem] leading-[1.55] font-bold text-[#4A4D53] xsm:mt-5'>
              {activeAward.title}
            </h3>
            <p className='mt-2 font-work-sans text-[0.95rem] leading-[1.55] text-[#5E626A]'>
              {activeAward.meta}
            </p>
            <p className='mt-6 font-work-sans text-[0.85rem] leading-[1.85] text-[#C2C6D1]'>
              {activeAward.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className='relative h-[35.75rem] overflow-hidden bg-white shadow-[0_2.5rem_4.5rem_rgba(6,43,104,0.12)] xsm:h-[20rem]'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeAward.id}
              className='absolute inset-0'
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <Image
                src={activeAward.image}
                alt={activeAward.imageAlt}
                fill
                sizes='(max-width: 639px) 92vw, 31vw'
                className='object-cover'
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='min-w-0 self-start pt-1'>
          <div className='mb-10 flex items-end justify-between gap-8 xsm:mb-6 xsm:block'>
            <div>
              <p className='font-work-sans text-[0.6rem] font-bold tracking-[0.46em] text-[#AEB5C2] uppercase'>
                Giới thiệu
              </p>
              <h2 className='mt-3 font-arial text-[2.75rem] leading-tight font-bold text-[#111] xsm:text-[2rem]'>
                Giải Thưởng
              </h2>
            </div>

            <div className='mb-2 flex gap-2 xsm:mt-5'>
              <DiamondButton
                label='Giải thưởng trước'
                onClick={() => goToAward(activeIndex - 1)}
              >
                <ChevronLeft className='size-4 -rotate-45 text-[#B8BDC7]' />
              </DiamondButton>
              <DiamondButton
                label='Giải thưởng sau'
                onClick={() => goToAward(activeIndex + 1)}
              >
                <ChevronRight className='size-4 -rotate-45 text-[#B8BDC7]' />
              </DiamondButton>
            </div>
          </div>

          <Swiper
            key={activeIndex}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            slidesPerView='auto'
            spaceBetween={28}
            speed={650}
            grabCursor
            watchOverflow
            className='!-mr-[12rem] !overflow-visible xsm:!-mr-4'
          >
            {previewAwards.map((award) => {
              const originalIndex = AWARDS.findIndex((item) => item.id === award.id)

              return (
                <SwiperSlide
                  key={award.id}
                  className='!w-[22rem] xsm:!w-[82vw]'
                >
                  <button
                    type='button'
                    className='group block w-full text-left outline-none'
                    onClick={() => goToAward(originalIndex)}
                  >
                    <div className='relative h-[20.9rem] overflow-hidden bg-white shadow-[0_1.4rem_3rem_rgba(6,43,104,0.08)] transition-transform duration-500 group-hover:-translate-y-1 xsm:h-[17rem]'>
                      <Image
                        src={award.image}
                        alt={award.imageAlt}
                        fill
                        sizes='(max-width: 639px) 82vw, 22vw'
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                      />
                    </div>
                  </button>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className='mt-[8.65rem] flex items-center gap-7 xsm:mt-10'>
            <div className='h-px w-[14.75rem] bg-[#DDE2EA] xsm:w-28'>
              <div
                className='h-px bg-[#202633] transition-[width] duration-500 ease-out'
                style={{ width: progressWidth }}
              />
            </div>
            <span className='h-px flex-1 bg-[#DEE2E8]' />
          </div>
        </div>
      </Container>
    </section>
  )
}

function DiamondButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      type='button'
      aria-label={label}
      className='flex size-11 rotate-45 items-center justify-center border border-[#DDE1E8] bg-white/20 transition-colors hover:border-[#001E40] hover:bg-white'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
