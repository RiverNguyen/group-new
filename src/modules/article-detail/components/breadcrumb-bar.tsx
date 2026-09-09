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

const itemClassName = 'font-inter text-[0.875rem] leading-5'

const separatorClassName = `${itemClassName} px-[0.75rem] text-[#6B7280]`

type BreadcrumbBarProps = {
  title: string
}

export function BreadcrumbBar({ title }: BreadcrumbBarProps) {
  return (
    <div
      data-figma='64:3308'
      className='w-full bg-[#F8F8F8] px-[2rem] py-[1rem] xsm:overflow-x-auto xsm:px-4'
    >
      <Breadcrumb
        aria-label='Đường dẫn trang'
        data-figma='64:3309'
      >
        <BreadcrumbList className='flex-nowrap items-center gap-0 whitespace-nowrap'>
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className={`${itemClassName} text-[#6B7280] hover:text-[#062B68]`}
            >
              <Link href={ROUTES.home}>Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={separatorClassName}>/</BreadcrumbSeparator>

          <BreadcrumbItem className={`${itemClassName} text-[#6B7280]`}>Tin tức</BreadcrumbItem>

          <BreadcrumbSeparator className={separatorClassName}>/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage className={`${itemClassName} font-medium text-[#111827]`}>
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
