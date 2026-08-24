import { Link } from '@/i18n/navigation'

export function SocialButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href as '/'}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className='inline-flex size-8 items-center justify-center rounded-[0.75rem] bg-white text-[#0B2148] transition-opacity hover:opacity-90 hover:cursor-pointer'
    >
      {children}
    </Link>
  )
}
