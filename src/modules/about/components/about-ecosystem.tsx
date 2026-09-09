import Image from 'next/image'
import type { CSSProperties } from 'react'

import { Container } from '@/components/site/container'

const ECOSYSTEM_UNITS = [
  { label: 'Bateco Group', angle: '-90deg', counterAngle: '90deg', delay: '0s' },
  { label: 'Bateco Land', angle: '0deg', counterAngle: '0deg', delay: '-1.15s' },
  { label: 'Bateco Solar', angle: '90deg', counterAngle: '-90deg', delay: '-2.3s' },
  { label: 'Bateco E&C', angle: '180deg', counterAngle: '-180deg', delay: '-3.45s' },
] as const

type OrbitStyle = CSSProperties & {
  '--ecosystem-angle': string
  '--ecosystem-counter-angle': string
  '--ecosystem-delay': string
  '--ecosystem-radius': string
}

export function AboutEcosystem() {
  return (
    <section className='bg-white py-[6.5rem] xsm:py-14 xsm:overflow-hidden'>
      <Container className='grid grid-cols-2 items-center gap-20 xsm:grid-cols-1 xsm:gap-12'>
        <div className='group/ecosystem relative mx-auto aspect-square w-full max-w-[34rem]'>
          <span className='ecosystem-ring-spin absolute inset-[6%] rounded-full' />
          <span className='ecosystem-ring-spin ecosystem-ring-spin-reverse absolute inset-[22%] rounded-full' />

          <div className='ecosystem-center absolute inset-[38%] z-10 flex items-center justify-center rounded-full border border-[#F0F2F5]'>
            <span className='ecosystem-center-pulse absolute inset-0 rounded-full' />
            <div className='ecosystem-core relative z-10 flex size-[6.2rem] items-center justify-center rounded-full bg-white shadow-[0_1rem_2.5rem_rgba(6,43,104,0.11)] xsm:size-[5.2rem]'>
              <Image
                src='/header/logo.svg'
                alt='Bateco Group'
                width={62}
                height={20}
                className='h-auto w-[3.9rem]'
              />
            </div>
          </div>

          <div className='ecosystem-orbit-track absolute inset-0 z-20'>
            {ECOSYSTEM_UNITS.map((unit, index) => (
              <div
                key={unit.label}
                className='ecosystem-orbit-item absolute top-1/2 left-1/2 h-[4.9rem] w-[8.8rem] xsm:h-[4.2rem] xsm:w-[7.4rem]'
                style={
                  {
                    '--ecosystem-angle': unit.angle,
                    '--ecosystem-counter-angle': unit.counterAngle,
                    '--ecosystem-delay': unit.delay,
                    '--ecosystem-radius': 'min(12.55rem, calc(50vw - 4.6rem))',
                  } as OrbitStyle
                }
              >
                <div className='ecosystem-orbit-card-shell h-full w-full'>
                  <div className='ecosystem-orbit-card flex h-full w-full items-center justify-center bg-white shadow-[0_0.9rem_2rem_rgba(6,43,104,0.11)]'>
                    <Image
                      src='/header/logo.svg'
                      alt={unit.label}
                      width={86}
                      height={27}
                      className='relative z-10 h-auto w-[5.4rem] xsm:w-[4.7rem]'
                    />
                    <span className='absolute top-3 right-3 z-10 flex size-4 items-center justify-center rounded-full bg-[#F4B700] font-manrope text-[0.55rem] font-bold text-white xsm:top-2 xsm:right-2'>
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='max-w-[34rem] xsm:max-w-none'>
          <p className='font-work-sans text-[0.58rem] font-bold tracking-[0.45em] text-[#AEB5C0] uppercase'>
            Giới thiệu
          </p>
          <h2 className='mt-4 font-libertinus-serif text-[2.85rem] leading-tight font-bold text-[#262326] xsm:text-[2rem]'>
            Hệ Sinh Thái Bateco Group
          </h2>
          <h3 className='mt-3 font-libertinus-serif text-[1.2rem] leading-snug font-bold text-[#29272A] xsm:text-[1rem]'>
            Chất lượng – Đẳng cấp – Khác biệt
          </h3>
          <p className='mt-6 font-work-sans text-[0.88rem] leading-[1.8] text-[#5E626A]'>
            Tiên phong kiến tạo và dẫn dắt xu thế.
          </p>
          <p className='mt-5 font-work-sans text-[0.88rem] leading-[1.85] text-[#5E626A]'>
            Đi qua hành trình 10 năm hoạt động và phát triển, Bateco Group đã kiến tạo nên hệ sinh
            thái chất lượng – đẳng cấp – khác biệt, gồm những thương hiệu dẫn đầu ở các lĩnh vực đầu
            tư trọng điểm. Với triết lý giá trị, kỹ thuật và con người đồng hành cùng nhau, hệ sinh
            thái Bateco tiếp tục phát triển bền vững cho Tập đoàn, các địa phương, khách hàng và đối
            tác.
          </p>
        </div>
      </Container>
    </section>
  )
}
