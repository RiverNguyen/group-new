const ABOUT_STATS = [
  { value: '10+', label: 'Năm kinh nghiệm' },
  { value: '50+', label: 'Đối tác chiến lược' },
  { value: '05', label: 'Công ty thành viên' },
  { value: '400+', label: 'Nhân sự tâm huyết' },
]

export function AboutStats() {
  return (
    <div className='mt-9 grid grid-cols-4 gap-5 xsm:mt-7 xsm:grid-cols-2 xsm:gap-y-6'>
      {ABOUT_STATS.map((stat) => (
        <div
          key={stat.label}
          className='border-l-2 border-[#D2A34D] pl-3'
        >
          <p className='font-manrope text-[1.45rem] leading-none font-extrabold text-[#062B68] xsm:text-[1.25rem]'>
            {stat.value}
          </p>
          <p className='mt-2 font-work-sans text-[0.6rem] leading-tight text-[#777] xsm:text-[0.58rem]'>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
