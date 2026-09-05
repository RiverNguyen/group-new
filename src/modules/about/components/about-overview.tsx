import { Container } from '@/components/site/container'
import { AboutStats } from '@/modules/about/components/about-stats'
import { AboutTeamCard } from '@/modules/about/components/about-team-card'

export function AboutOverview() {
  return (
    <section className='bg-white py-[5.5rem] xsm:py-12'>
      <Container className='grid grid-cols-[1.15fr_0.85fr] items-center gap-16 xsm:grid-cols-1 xsm:gap-10'>
        <div>
          <h2 className='mt-3 font-arial text-[2.2rem] leading-tight font-extrabold text-[#001E40] xsm:text-[1.8rem]'>
            Về Bateco Group
          </h2>
          <div className='mt-7 space-y-4 font-work-sans text-[0.88rem] leading-[1.75] text-[#555] xsm:mt-5 xsm:text-[0.8rem]'>
            <p>
              Công ty Cổ phần Bateco Việt Nam được thành lập năm 2012, hoạt động theo mô hình đa
              ngành với định hướng phát triển dựa trên bốn trụ cột: dịch vụ – kỹ thuật công nghiệp,
              bất động sản khu công nghiệp, nông nghiệp công nghệ cao và quốc phòng – an ninh.
            </p>
            <p>
              Xuất phát từ nền tảng kỹ thuật, Bateco từng bước mở rộng sang đầu tư hạ tầng khu công
              nghiệp, phát triển chuỗi giá trị khép kín từ thiết kế – thi công – vận hành – bảo trì,
              đồng thời thúc đẩy ứng dụng công nghệ trong quản lý và sản xuất.
            </p>
            <p>
              Doanh nghiệp kiên định theo đuổi chiến lược tăng trưởng xanh, chuyển đổi số và phát
              triển bền vững, góp phần nâng cao năng lực cạnh tranh và tạo giá trị lâu dài cho đối
              tác, khách hàng và xã hội.
            </p>
          </div>
          <AboutStats />
        </div>

        <AboutTeamCard />
      </Container>
    </section>
  )
}
