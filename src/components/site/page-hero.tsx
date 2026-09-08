'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const ease = [0.32, 0.72, 0, 1] as const

export type PageHeroContent = {
  badge: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

type PageHeroProps = PageHeroContent & {
  /** 'start' = QH cổ đông, Dự án · 'center' = Hoạt động xã hội */
  align?: 'start' | 'center'
  /** Chiều cao khối nội dung. QH cổ đông/Dự án 500px · Tin tức 600px */
  heightClassName?: string
  /** Gạch vàng 96×1 dưới subtitle — chỉ /tin-tuc/hoat-dong-xa-hoi có */
  divider?: boolean
  /** Node Figma của khối nội dung, để lần sau dò ngược thiết kế */
  figmaNode?: string
}

export function PageHero({
  badge,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  align = 'start',
  heightClassName = 'h-[31.25rem] xsm:h-auto xsm:min-h-[26rem] xsm:py-12',
  divider = false,
  figmaNode,
}: PageHeroProps) {
  const reduce = useReducedMotion()
  // `initial` phải giống nhau giữa server và lần render đầu trên client. useReducedMotion()
  // đọc media query nên trả null khi render trên server (không có media query) nhưng có thể
  // trả true ngay ở lần render đầu trên client — nếu để `initial` phụ thuộc vào nó thì inline
  // style lệch nhau và React báo hydration mismatch. Vì vậy chỉ tắt animation qua `duration`:
  // `transition` không sinh ra inline style nên khác nhau giữa hai bên là vô hại.
  const dur = (seconds: number) => (reduce ? 0 : seconds)

  const centered = align === 'center'

  return (
    <section className='relative w-full overflow-hidden pt-[4.6rem]'>
      <motion.div
        className='absolute inset-0'
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: dur(1.15), ease }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes='100vw'
          className='object-cover object-center'
        />
      </motion.div>
      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,43,104,0.95)_0%,rgba(6,43,104,0.7)_50%,rgba(6,43,104,0.4)_100%)]' />

      <div
        data-figma={figmaNode}
        className={cn('relative flex w-full items-center', heightClassName)}
      >
        <div className='relative mx-auto w-[80rem] max-w-full px-[1.5rem]'>
          <div
            className={cn(
              'flex w-[42rem] max-w-full flex-col gap-[1.5rem]',
              centered && 'mx-auto items-center text-center',
            )}
          >
            <motion.span
              className='w-fit rounded-full border border-white/30 bg-white/10 px-[1rem] py-[0.375rem] font-inter text-[0.875rem] leading-[1.25rem] font-medium tracking-[0.04375rem] text-white/90 uppercase backdrop-blur-sm'
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur(0.7), ease, delay: dur(0.15) }}
            >
              {badge}
            </motion.span>

            <motion.h1
              className='font-playfair text-[3.75rem] leading-[3.75rem] font-bold tracking-[-0.09375rem] text-white xlg:text-[2.75rem] xlg:leading-[3rem] xsm:text-[2rem] xsm:leading-[2.5rem] xsm:tracking-normal'
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur(0.75), ease, delay: dur(0.22) }}
            >
              {title}
            </motion.h1>

            <motion.p
              className='font-inter text-[1.125rem] leading-[1.828125rem] text-white/90 xsm:text-[0.9375rem] xsm:leading-[1.625rem]'
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur(0.7), ease, delay: dur(0.36) }}
            >
              {subtitle}
            </motion.p>

            {divider ? (
              <motion.div
                aria-hidden
                className='h-px w-[6rem] bg-[linear-gradient(90deg,rgba(255,216,135,0)_0%,#FFD887_50%,rgba(255,216,135,0)_100%)]'
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: dur(0.7), ease, delay: dur(0.44) }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
