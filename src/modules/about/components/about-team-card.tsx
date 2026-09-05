import Image from 'next/image'

export function AboutTeamCard() {
  return (
    <div className='relative mx-auto w-full max-w-[32rem] bg-[#F0F3F6] p-4 pb-16 shadow-[0_24px_45px_rgba(6,43,104,0.14)] xsm:p-3 xsm:pb-10'>
      <div className='relative aspect-[1.18/1] overflow-hidden'>
        <Image
          src='/home/img/journey.png'
          alt='Đội ngũ Bateco Group tại sự kiện'
          fill
          sizes='(max-width: 639px) 90vw, 35vw'
          className='object-cover'
        />
      </div>
      <div className='absolute bottom-5 left-8 h-px w-20 bg-[#D2A34D] xsm:bottom-4 xsm:left-6' />
      <p className='absolute right-8 bottom-5 font-playfair text-[1.15rem] font-bold text-[#062B68] xsm:right-6 xsm:bottom-4 xsm:text-base'>
        Cùng kiến tạo tương lai
      </p>
    </div>
  )
}
