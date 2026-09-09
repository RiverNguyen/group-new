import { ArrowUp, Mail } from 'lucide-react'

import { FacebookIcon } from '@/layouts/header/components/icons'

/** lucide-react đã deprecate icon thương hiệu, nên vẽ tay glyph YouTube cho gọn */
function YoutubeGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
      className={className}
    >
      <path d='M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z' />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { id: 'facebook', href: 'https://facebook.com', label: 'Facebook', icon: FacebookIcon },
  { id: 'youtube', href: 'https://youtube.com', label: 'YouTube', icon: YoutubeGlyph },
  { id: 'email', href: 'mailto:info@batecogroup.vn', label: 'Gửi email', icon: Mail },
] as const

export function FloatingSocialBar() {
  return (
    <div className='flex h-[3.625rem] items-center gap-[0.5rem] rounded-[0.5rem] bg-white/80 p-[0.5rem] shadow-[0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-md'>
      <a
        href='https://zalo.me'
        aria-label='Zalo'
        className='flex size-[2.5rem] items-center justify-center rounded-[0.25rem] font-inter text-[0.75rem] leading-4 font-bold text-[#C5A059] transition-colors hover:bg-[#C5A059]/10'
      >
        Zalo
      </a>

      {SOCIAL_LINKS.map(({ id, href, label, icon: Icon }) => (
        <a
          key={id}
          href={href}
          aria-label={label}
          className='flex size-[2.5rem] items-center justify-center rounded-[0.25rem] transition-colors hover:bg-[#C5A059]/10'
        >
          <Icon className='size-4 text-[#C5A059]' />
        </a>
      ))}

      <a
        href='#top'
        aria-label='Lên đầu trang'
        className='ml-[0.5rem] flex size-[2.5rem] items-center justify-center rounded-[0.25rem] bg-[linear-gradient(180deg,#D4AF37_0%,#AA8035_100%)] shadow-[0_2px_8px_rgba(170,128,53,0.4)] transition-opacity hover:opacity-90'
      >
        <ArrowUp className='size-3.5 text-white' />
      </a>
    </div>
  )
}
