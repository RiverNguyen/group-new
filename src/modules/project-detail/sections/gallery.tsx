import { GalleryCarousel } from '@/modules/project-detail/components/gallery-carousel'
import type { GalleryImage } from '@/modules/project-detail/data/project-details-data'

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  return (
    <section
      data-figma='64:2764'
      className='w-full bg-white pt-[3rem] xsm:pt-8'
    >
      <div
        data-figma='64:2765'
        className='flex items-center justify-center gap-[0.5rem] px-[1rem] pb-[2.5rem] xsm:px-4 xsm:pb-6'
      >
        <span
          aria-hidden
          className='font-inter text-[3rem] leading-[3rem] font-light text-[#D1D5DB] xsm:text-[2rem] xsm:leading-[2rem]'
        >
          02.
        </span>
        <h2 className='font-arial text-[2.25rem] leading-[2.5rem] font-bold tracking-[0.05625rem] text-[#1F2937] xsm:text-[1.5rem] xsm:leading-[2rem]'>
          Thư Viện Hình Ảnh
        </h2>
      </div>

      <GalleryCarousel images={images} />
    </section>
  )
}
