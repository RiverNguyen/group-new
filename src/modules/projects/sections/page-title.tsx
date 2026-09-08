import type { PageTitleContent } from '@/modules/projects/data/hero-data'

export function PageTitle({ content }: { content: PageTitleContent }) {
  return (
    <section
      data-figma='64:2377'
      className='relative flex h-[13.25rem] w-full items-center justify-center overflow-hidden xsm:h-auto xsm:py-8'
    >
      {/* Figma để số nền ở alpha 0.3 — ở cỡ 450px nó phủ kín H1 thành một vệt xám. Hạ xuống
          0.07 để giữ được ý đồ nền mà chữ vẫn đọc được. Số này vô nghĩa với trình đọc màn
          hình nên ẩn khỏi cây accessibility, và ẩn hẳn ở màn hẹp vì không đủ chỗ. */}
      <span
        aria-hidden
        className='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[28.125rem] leading-[28.125rem] font-bold tracking-[-1.40625rem] text-[#333535]/[0.07] select-none xsm:hidden'
      >
        {content.watermark}
      </span>

      {/* Figma đặt tên lớp này là "Main H1" nhưng hero phía trên đã là h1 của trang; hai h1
          trên cùng một trang làm trình đọc màn hình mất mốc điều hướng. Giữ nguyên thị giác,
          hạ xuống h2 cho đúng thứ bậc. */}
      <h2 className='relative text-center font-arial text-[4.5rem] leading-[5.25rem] font-bold tracking-[-0.09rem] text-black/50 uppercase drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] xlg:text-[3.25rem] xlg:leading-[4rem] xsm:text-[1.75rem] xsm:leading-[2.25rem] xsm:tracking-normal'>
        {content.title}
      </h2>
    </section>
  )
}
