import Image from 'next/image'

import { Container } from '@/components/site/container'

const ECOSYSTEM_UNITS = [
  { label: 'Bateco Group', position: 'top-[2%] left-1/2 -translate-x-1/2' },
  { label: 'Bateco Land', position: 'top-1/2 right-[3%] -translate-y-1/2' },
  { label: 'Bateco Solar', position: 'bottom-[2%] left-1/2 -translate-x-1/2' },
  { label: 'Bateco E&C', position: 'top-1/2 left-[3%] -translate-y-1/2' },
] as const

export function AboutEcosystem() {
  return (
    <section className='bg-white py-[6.5rem] xsm:py-14'>
      <Container className='grid grid-cols-2 items-center gap-20 xsm:grid-cols-1 xsm:gap-12'>
        <div className='relative mx-auto aspect-square w-full max-w-[34rem]'>
          <span className='absolute inset-[6%] rounded-full border border-[#DADFE7]' />
          <span className='absolute inset-[22%] rounded-full border border-[#E7EAF0]' />
          <span className='absolute inset-[38%] rounded-full border border-[#F0F2F5]' />

          <div className='absolute top-1/2 left-1/2 z-10 flex size-[6.2rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_1rem_2.5rem_rgba(6,43,104,0.11)] xsm:size-[5.2rem]'>
            <Image
              src='/header/logo.svg'
              alt='Bateco Group'
              width={62}
              height={20}
              className='h-auto w-[3.9rem]'
            />
          </div>

          {ECOSYSTEM_UNITS.map((unit, index) => (
            <div
              key={unit.label}
              className={`absolute z-20 flex h-[4.9rem] w-[8.8rem] items-center justify-center bg-white shadow-[0_0.9rem_2rem_rgba(6,43,104,0.11)] ${unit.position} xsm:h-[4.2rem] xsm:w-[7.4rem]`}
            >
              <Image
                src='/header/logo.svg'
                alt={unit.label}
                width={86}
                height={27}
                className='h-auto w-[5.4rem] xsm:w-[4.7rem]'
              />
              <span className='absolute top-3 right-3 flex size-4 items-center justify-center rounded-full bg-[#F4B700] font-manrope text-[0.55rem] font-bold text-white xsm:top-2 xsm:right-2'>
                {index + 1}
              </span>
            </div>
          ))}
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
            thái chất lượng – đẳng cấp – khác biệt, gồm những thương hiệu dẫn đầu ở các lĩnh vực
            đầu tư trọng điểm. Với triết lý giá trị, kỹ thuật và con người đồng hành cùng nhau, hệ
            sinh thái Bateco tiếp tục phát triển bền vững cho Tập đoàn, các địa phương, khách hàng
            và đối tác.
          </p>
        </div>
      </Container>
    </section>
  )
}
