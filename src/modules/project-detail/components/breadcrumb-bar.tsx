import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import ROUTES from '@/configs/routes'
import { Link } from '@/i18n/navigation'

const baseClassName = 'font-inter text-[0.875rem] leading-[1.25rem]'

const linkClassName = `${baseClassName} font-medium text-[#6B7280] hover:text-[#062B68]`

const separatorClassName = `${baseClassName} font-medium px-[0.5rem] text-[#6B7280]`

const currentClassName = `${baseClassName} font-semibold text-[#111827]`

export function BreadcrumbBar({ current }: { current: string }) {
  return (
    <div
      data-figma='64:2734'
      className='w-full bg-[#F3F4F6] px-[5rem] py-[0.75rem] xlg:px-[2rem] xsm:overflow-x-auto xsm:px-4'
    >
      <Breadcrumb
        aria-label='Đường dẫn trang'
        data-figma='64:2735'
      >
        <BreadcrumbList className='flex-nowrap gap-0 whitespace-nowrap'>
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className={linkClassName}
            >
              <Link href={ROUTES.home}>Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={separatorClassName}>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className={linkClassName}
            >
              <Link href={ROUTES.projects}>Dự án</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={separatorClassName}>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage className={currentClassName}>{current}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
