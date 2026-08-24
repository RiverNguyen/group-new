'use client'

import { Phone, Search } from 'lucide-react'
import Image from 'next/image'

import { HEADER_SOCIAL } from '@/layouts/header/components/header-data'
import { LanguageSwitcher } from '@/layouts/header/components/language-switcher'
import { SocialButton } from '@/layouts/header/components/social-button'

export function HeaderActions() {
  return (
    <div className='flex items-center gap-3 xsm:hidden'>
      <div className='flex items-center gap-2'>
        {HEADER_SOCIAL.map((item) => (
          <SocialButton
            key={item.id}
            href={item.href}
            label={item.label}
          >
            {item.id === 'facebook' ? (
              <Image
                src='/header/fb.svg'
                alt='Facebook'
                width={16}
                height={16}
                className='size-4 object-cover'
              />
            ) : (
              <Phone className='size-3.5 fill-current' />
            )}
          </SocialButton>
        ))}
      </div>

      <span
        className='mx-1 h-6 w-px bg-white/35'
        aria-hidden
      />

      <button
        type='button'
        aria-label='Tìm kiếm'
        className='inline-flex size-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10'
      >
        <Search className='size-5' />
      </button>

      <LanguageSwitcher />
    </div>
  )
}
