import { cn } from '@/lib/utils'

/** Desktop: max-w-[90rem] mx-auto — Mobile: px-4 */
export const containerClassName = 'mx-auto max-w-[90rem] xsm:px-4'

export function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(containerClassName, className)}
      {...props}
    />
  )
}
