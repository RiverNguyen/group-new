import Image from 'next/image'

import { CountingNumber } from '@/components/shared/counting-number'
import { Container } from '@/components/site/container'

export function AboutHero() {
  return (
    <section className='relative flex h-[100vh] items-end overflow-hidden bg-[#001E40] pt-[4.6rem] text-white xsm:min-h-[39rem]'>
      <Image
        src='/home/img/banner.png'
        alt='Không gian đô thị và công trình hiện đại'
        fill
        priority
        sizes='100vw'
        className='object-cover object-center'
      />
      <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(0,30,64,0.9)_0%,rgba(0,30,64,0.48)_48%,rgba(0,30,64,0.35)_100%)]' />
      <div className='absolute inset-0 bg-[linear-gradient(0deg,rgba(0,17,37,0.85)_0%,transparent_56%)]' />

      <Container className='relative z-[1] grid w-full grid-cols-[1fr_auto] items-end gap-10 pb-12 xsm:grid-cols-1 xsm:gap-8 xsm:pb-8'>
        <div className='max-w-[36rem]'>
          <h1 className='max-w-[34rem] text-white font-libertinus-serif text-[4.5rem] leading-[1.05] font-bold xsm:text-[2.75rem]'>
            Dấu Ấn Vượt
            <br />
            Thời Gian
          </h1>
          <div className='mt-6 xsm:mt-4 xsm:text-[0.78rem] flex items-center gap-6'>
            <div className='w-[9.18375rem] h-[0.125rem] bg-white/80' />
            <p className='text-white/80 max-w-[27.75rem] font-work-sans text-[0.85rem] leading-[1.7]'>
              Bateco Group tự hào là Tập đoàn Việt Nam có những công trình đáng nhớ, kiến tạo giá
              trị bền vững cho cộng đồng.
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center h-[10.625rem] w-[28.69125rem] bg-[#121518]/90 backdrop-blur-sm xsm:min-w-0 xsm:w-full xsm:px-5 xsm:py-5'>
          <div className='text-center xsm:pr-4'>
            <p className='text-[#F4B700] font-libertinus-serif text-[3.5rem] leading-none font-bold xsm:text-[2rem]'>
              <CountingNumber
                number={19}
                inView
                delay={150}
              />
            </p>
            <p className='font-work-sans text-[0.75rem] tracking-[0.075rem] text-[#C4C6D1]/80 uppercase'>
              Năm kinh nghiệm
            </p>
          </div>
          <div className='w-[0.0625rem] h-[4rem] bg-white/20 mx-[4rem]' />
          <div className='text-center xsm:pl-4'>
            <p className='text-[#F4B700] font-libertinus-serif text-[3.5rem] leading-none font-bold xsm:text-[2rem]'>
              0
              <CountingNumber
                number={6}
                inView
                delay={250}
              />
            </p>
            <p className='font-work-sans text-[0.75rem] tracking-[0.075rem] text-[#C4C6D1]/80 uppercase'>
              Lĩnh vực chính
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
