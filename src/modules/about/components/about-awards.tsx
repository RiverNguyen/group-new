'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

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

const CAROUSEL_REPEAT = 7
const LOOP_BASE_INDEX = AWARDS.length * 3
const LOOPED_AWARDS = Array.from({ length: CAROUSEL_REPEAT }, () => AWARDS).flat()
const smoothEase = [0.22, 1, 0.36, 1] as const
const exitEase = [0.4, 0, 1, 1] as const

const contentSlideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: `${direction * 1.15}rem`,
  }),
  center: {
    opacity: 1,
    x: '0rem',
    transition: {
      duration: 0.26,
      ease: smoothEase,
      staggerChildren: 0.045,
      delayChildren: 0.02,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: `${direction * -0.75}rem`,
    transition: { duration: 0.16, ease: exitEase },
  }),
}

const contentItemVariants: Variants = {
  enter: {
    opacity: 0,
    y: 12,
    scale: 0.985,
    filter: 'blur(7px)',
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.3, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 1.01,
    filter: 'blur(5px)',
    transition: { duration: 0.14, ease: exitEase },
  },
}

const lineVariants: Variants = {
  enter: { scaleX: 0, opacity: 0 },
  center: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.34, ease: smoothEase },
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: { duration: 0.14, ease: exitEase },
  },
}

function getLinearTargetIndex(currentIndex: number, targetRealIndex: number, direction: number) {
  const currentRealIndex = currentIndex % AWARDS.length
  const forwardDistance = (targetRealIndex - currentRealIndex + AWARDS.length) % AWARDS.length
  const backwardDistance = (currentRealIndex - targetRealIndex + AWARDS.length) % AWARDS.length

  return currentIndex + (direction > 0 ? forwardDistance : -backwardDistance)
}

function resetLoopedSwiper(
  swiper: SwiperType,
  nextIndex: number,
  realIndex: number,
  callback?: (resetIndex: number) => void,
) {
  if (nextIndex >= AWARDS.length && nextIndex < AWARDS.length * (CAROUSEL_REPEAT - 1)) {
    return null
  }

  const resetIndex = LOOP_BASE_INDEX + realIndex

  return setTimeout(() => {
    callback?.(resetIndex)
    swiper.slideTo(resetIndex, 0)
  }, 820)
}

export function AboutAwards() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState(1)
  const mainSwiperRef = useRef<SwiperType | null>(null)
  const previewSwiperRef = useRef<SwiperType | null>(null)
  const mainSlideIndexRef = useRef(LOOP_BASE_INDEX)
  const previewResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mainResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingDirectionRef = useRef<number | null>(null)
  const activeAward = AWARDS[activeIndex] ?? AWARDS[0]

  const progressWidth = `${((activeIndex + 1) / AWARDS.length) * 100}%`

  const syncPreviewSwiper = useCallback((nextIndex: number, direction: number) => {
    const previewSwiper = previewSwiperRef.current
    const nextThumbRealIndex = (nextIndex + 1) % AWARDS.length

    if (!previewSwiper) {
      return
    }

    if (previewResetTimerRef.current) {
      clearTimeout(previewResetTimerRef.current)
    }

    const nextThumbIndex = getLinearTargetIndex(
      previewSwiper.activeIndex,
      nextThumbRealIndex,
      direction,
    )

    previewSwiper.slideTo(nextThumbIndex)
    previewResetTimerRef.current = resetLoopedSwiper(
      previewSwiper,
      nextThumbIndex,
      nextThumbRealIndex,
    )
  }, [])

  const goToAward = useCallback(
    (index: number, direction?: number) => {
      const nextIndex = (index + AWARDS.length) % AWARDS.length
      const forwardDistance = (nextIndex - activeIndex + AWARDS.length) % AWARDS.length
      const backwardDistance = (activeIndex - nextIndex + AWARDS.length) % AWARDS.length

      if (nextIndex === activeIndex) {
        return
      }

      const resolvedDirection = direction ?? (forwardDistance <= backwardDistance ? 1 : -1)
      const mainSwiper = mainSwiperRef.current

      if (!mainSwiper) {
        return
      }

      if (mainResetTimerRef.current) {
        clearTimeout(mainResetTimerRef.current)
      }

      pendingDirectionRef.current = resolvedDirection
      setSlideDirection(resolvedDirection)
      mainSwiper.slideTo(getLinearTargetIndex(mainSwiper.activeIndex, nextIndex, resolvedDirection))
    },
    [activeIndex],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      goToAward(activeIndex + 1, 1)
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [activeIndex, goToAward])

  useEffect(
    () => () => {
      if (mainResetTimerRef.current) {
        clearTimeout(mainResetTimerRef.current)
      }

      if (previewResetTimerRef.current) {
        clearTimeout(previewResetTimerRef.current)
      }
    },
    [],
  )

  return (
    <section className='overflow-hidden border-t-[3px] border-[#F4B700] bg-[#F7F7F7] py-[8.25rem] xsm:py-14'>
      <div className='grid w-[min(90rem,calc(100vw-10rem))] grid-cols-[20rem_31.25rem_minmax(0,1fr)] gap-x-[2.35rem] [margin-left:max(5rem,calc((100vw-90rem)/2))] xlg:ml-0 xlg:w-full xlg:grid-cols-1 xlg:gap-y-8 xsm:gap-y-6 xsm:px-4'>
        <div className='self-center overflow-hidden pr-4 xlg:pr-0 xsm:order-2 xsm:overflow-visible'>
          <AnimatePresence
            mode='wait'
            custom={slideDirection}
            initial={false}
          >
            <motion.div
              key={activeAward.id}
              className='will-change-transform'
              custom={slideDirection}
              variants={contentSlideVariants}
              initial='enter'
              animate='center'
              exit='exit'
            >
              <motion.p
                variants={contentItemVariants}
                className='font-libertinus-serif text-[5.25rem] leading-none font-normal text-transparent [-webkit-text-stroke:1px_#D4DAE4] xsm:text-[3.25rem]'
              >
                {activeAward.number}
              </motion.p>
              <motion.div
                variants={lineVariants}
                className='mt-8 h-px w-[8.5rem] origin-left bg-[#AEB4BF] xsm:mt-5'
              />
              <motion.h3
                variants={contentItemVariants}
                className='mt-8 font-work-sans text-[1rem] leading-[1.55] font-bold text-[#4A4D53] xsm:mt-5'
              >
                {activeAward.title}
              </motion.h3>
              <motion.p
                variants={contentItemVariants}
                className='mt-2 font-work-sans text-[0.95rem] leading-[1.55] text-[#5E626A]'
              >
                {activeAward.meta}
              </motion.p>
              <motion.p
                variants={contentItemVariants}
                className='mt-6 font-work-sans text-[0.85rem] leading-[1.85] text-[#C2C6D1]'
              >
                {activeAward.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='relative col-span-2 h-[44rem] min-w-0 xlg:col-span-1 xlg:h-auto xsm:order-1'>
          <div className='absolute top-0 left-[33.6rem] z-40 flex w-[33rem] items-end justify-between gap-8 xlg:static xlg:mb-6 xlg:w-auto xsm:mb-5 xsm:flex xsm:items-end xsm:gap-4'>
            <div>
              <p className='font-work-sans text-[0.6rem] font-bold tracking-[0.46em] text-[#AEB5C2] uppercase'>
                Giới thiệu
              </p>
              <h2 className='mt-3 font-arial text-[2.75rem] leading-tight font-bold text-[#111] xsm:mt-2 xsm:text-[2rem]'>
                Giải Thưởng
              </h2>
            </div>

            <div className='mb-2 flex shrink-0 gap-2 xsm:mb-1 xsm:mt-0'>
              <DiamondButton
                label='Giải thưởng trước'
                onClick={() => goToAward(activeIndex - 1, -1)}
              >
                <ChevronLeft className='size-4 -rotate-45 text-[#B8BDC7]' />
              </DiamondButton>
              <DiamondButton
                label='Giải thưởng sau'
                onClick={() => goToAward(activeIndex + 1, 1)}
              >
                <ChevronRight className='size-4 -rotate-45 text-[#B8BDC7]' />
              </DiamondButton>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper
              mainSlideIndexRef.current = swiper.activeIndex
            }}
            initialSlide={LOOP_BASE_INDEX}
            onSlideChange={(swiper) => {
              const nextIndex = swiper.activeIndex % AWARDS.length
              const direction =
                pendingDirectionRef.current ??
                (swiper.activeIndex > mainSlideIndexRef.current ? 1 : -1)

              pendingDirectionRef.current = null
              mainSlideIndexRef.current = swiper.activeIndex
              setSlideDirection(direction)
              setActiveIndex(nextIndex)
              syncPreviewSwiper(nextIndex, direction)

              if (mainResetTimerRef.current) {
                clearTimeout(mainResetTimerRef.current)
              }

              mainResetTimerRef.current = resetLoopedSwiper(
                swiper,
                swiper.activeIndex,
                nextIndex,
                (resetIndex) => {
                  mainSlideIndexRef.current = resetIndex
                },
              )
            }}
            slidesPerView={1}
            speed={760}
            grabCursor
            className='!absolute !top-[4.65rem] !left-0 !h-[35.75rem] !w-[31.25rem] !overflow-hidden xlg:!relative xlg:!top-auto xlg:!h-[20rem] xlg:!w-full xsm:!h-[18.75rem]'
          >
            {LOOPED_AWARDS.map((award, index) => (
              <SwiperSlide
                key={`${award.id}-main-${index}`}
                className='relative !h-[35.75rem] xlg:!h-[20rem] xsm:!h-[18.75rem]'
              >
                <Image
                  src={award.image}
                  alt={award.imageAlt}
                  fill
                  sizes='100vw'
                  className='object-cover'
                  priority={index === LOOP_BASE_INDEX}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={(swiper) => {
              previewSwiperRef.current = swiper
              swiper.slideTo(LOOP_BASE_INDEX + 1, 0)
            }}
            initialSlide={LOOP_BASE_INDEX + 1}
            slidesPerView='auto'
            spaceBetween={32}
            speed={760}
            grabCursor
            watchSlidesProgress
            className='!absolute !top-[10.6rem] !left-[33.6rem] !h-[20.9rem] !w-[38rem] !overflow-hidden xlg:!relative xlg:!top-auto xlg:!left-auto xlg:!mt-5 xlg:!h-[12rem] xlg:!w-full xsm:!hidden'
          >
            {LOOPED_AWARDS.map((award, index) => {
              const originalIndex = index % AWARDS.length

              return (
                <SwiperSlide
                  key={`${award.id}-${index}`}
                  className='!h-[20.9rem] !w-[18rem] xlg:!h-[12rem] xlg:!w-[16rem]'
                >
                  <button
                    type='button'
                    aria-label={`Xem ${award.title}`}
                    className='group relative block h-full w-full overflow-hidden bg-white text-left outline-none'
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => goToAward(originalIndex)}
                  >
                    <Image
                      src={award.image}
                      alt={award.imageAlt}
                      fill
                      sizes='100vw'
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                    />
                  </button>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className='absolute bottom-0 left-[33.6rem] z-40 h-px w-[46rem] bg-[#DEE2E8] xlg:static xlg:mt-10 xlg:w-auto xsm:mt-5'>
            <div className='h-px w-full'>
              <div
                className='h-px bg-[#202633] transition-[width] duration-500 ease-out'
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </div>
      </div>
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
      onMouseDown={(event) => event.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
