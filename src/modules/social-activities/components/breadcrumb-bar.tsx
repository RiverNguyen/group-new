import { ChevronRight } from 'lucide-react'

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

const itemClassName =
  'font-inter text-[0.75rem] leading-4 font-semibold tracking-[0.0375rem] uppercase'

const separatorClassName = 'px-[0.25rem] text-[#8E909B]/50 [&>svg]:size-2'

export function BreadcrumbBar() {
  return (
    <div
      data-figma='64:3052'
      className='w-full bg-white px-[5rem] shadow-[0_1px_2px_rgba(0,0,0,0.05)] xlg:px-[2rem] xsm:overflow-x-auto xsm:px-4'
    >
      <Breadcrumb
        aria-label='Đường dẫn trang'
        className='flex h-[4rem] items-center'
      >
        <BreadcrumbList className='flex-nowrap gap-[0.5rem] whitespace-nowrap'>
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className={`${itemClassName} text-[#6B7280] hover:text-[#062B68]`}
            >
              <Link href={ROUTES.home}>Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className={separatorClassName}>
            <ChevronRight />
          </BreadcrumbSeparator>

          <BreadcrumbItem className={`${itemClassName} text-[#6B7280]`}>Tin tức</BreadcrumbItem>

          <BreadcrumbSeparator className={separatorClassName}>
            <ChevronRight />
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage className={`${itemClassName} text-[#946E0E]`}>
              Hoạt động xã hội
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
