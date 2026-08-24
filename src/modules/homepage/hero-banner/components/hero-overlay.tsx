import { ArrowRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import type { RefObject } from 'react'

import { Container } from '@/components/site/container'
import { Link } from '@/i18n/navigation'
import { HeroPagination } from '@/modules/homepage/hero-banner/components/hero-pagination'
import { ease } from '@/modules/homepage/hero-banner/constants'
import type { HeroSlide } from '@/modules/homepage/hero-banner/data/hero-data'

export function HeroOverlay({
  slide,
  index,
  total,
  progressRef,
  onPrev,
  onNext,
}: {
  slide: HeroSlide
  index: number
  total: number
  progressRef: RefObject<HTMLDivElement | null>
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className='pointer-events-none absolute inset-0 z-10'>
      <Container className='flex h-full flex-col justify-between pt-10 pb-10 xsm:pt-[5.5rem] xsm:pb-6'>
        <h1 className='sr-only'>Bateco Group</h1>
        <div className='relative flex flex-1 items-center px-8 xsm:items-center xsm:justify-center xsm:px-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease }}
              className='absolute left-[5rem] xsm:static xsm:left-auto xsm:text-center'
            >
              <motion.h2
                key={slide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 0.08 }}
                className='w-fit max-w-full font-manrope text-[4.5rem] leading-[1.25] font-bold tracking-tight xsm:text-[1.85rem] xsm:leading-[1.3]'
                style={{
                  background: 'linear-gradient(90deg, #FFD887 0%, #FFDF9F 50%, #F4B700 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {slide.title.split('\n').map((line, lineIndex) => (
                  <span
                    key={line}
                    className={`block ${lineIndex === 1 ? 'pl-[5.5rem] xsm:pl-0' : ''}`}
                  >
                    {line}
                  </span>
                ))}
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className='pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-end gap-4 xsm:grid-cols-1 xsm:items-center xsm:gap-5'>
          <div className='flex flex-wrap items-center gap-5 xsm:justify-center xsm:gap-4'>
            <Link
              href={slide.cta.href as '/'}
              className='inline-flex items-center gap-2 bg-[#EBD08B] px-5 py-3 font-manrope text-xs font-bold tracking-[0.08em] text-[#111] uppercase transition-opacity hover:opacity-90 xsm:px-4 xsm:py-2.5 xsm:text-[0.7rem]'
            >
              {slide.cta.label}
              <ArrowRight className='size-3.5' />
            </Link>
            <Link
              href={slide.detail.href as '/'}
              className='font-manrope text-sm text-white/90 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white xsm:text-xs'
            >
              {slide.detail.label}
            </Link>
          </div>

          <div className='flex flex-col items-center gap-3 xsm:order-last xsm:gap-2'>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className='text-white/80 xsm:hidden'
            >
              <ChevronDown className='size-5' />
            </motion.div>
            <AnimatePresence mode='wait'>
              <motion.p
                key={slide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5, ease, delay: 0.12 }}
                className='max-w-[24rem] text-center font-manrope text-[0.6rem] tracking-[0.18em] text-white/55 uppercase xsm:max-w-[18rem] xsm:text-[0.55rem] xsm:tracking-[0.12em]'
              >
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className='inline-block'
                >
                  {slide.caption}
                </motion.span>
              </motion.p>
            </AnimatePresence>
          </div>

          <div className='flex justify-end xsm:justify-center'>
            <HeroPagination
              current={index + 1}
              total={total}
              progressRef={progressRef}
              onPrev={onPrev}
              onNext={onNext}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
