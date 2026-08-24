import { Mail, MapPin, Phone } from 'lucide-react'

import { Container } from '@/components/site/container'
import { Link } from '@/i18n/navigation'
import {
  FOOTER_CONTACT_TITLE,
  FOOTER_CONTACTS,
  type FooterContact,
} from '@/layouts/footer/components/footer-data'

function ContactIcon({ id }: { id: FooterContact['id'] }) {
  const iconClass = 'size-5 text-[#3B82F6]'

  if (id === 'hotline')
    return (
      <Phone
        className={iconClass}
        strokeWidth={1.75}
      />
    )
  if (id === 'email')
    return (
      <Mail
        className={iconClass}
        strokeWidth={1.75}
      />
    )
  return (
    <MapPin
      className={iconClass}
      strokeWidth={1.75}
    />
  )
}

export function ContactBar() {
  return (
    <div className='bg-white'>
      <Container className='flex items-center justify-between gap-8 py-7 xsm:flex-col xsm:items-start xsm:gap-6'>
        <div className='flex items-center gap-3'>
          <span
            className='h-8 w-1 shrink-0 bg-[#001E40]'
            aria-hidden
          />
          <h2 className='font-arial text-lg font-bold text-[#001E40] xsm:text-base'>
            {FOOTER_CONTACT_TITLE}
          </h2>
        </div>

        <ul className='flex items-center gap-[8rem] xsm:w-full xsm:flex-col xsm:items-start xsm:gap-4'>
          {FOOTER_CONTACTS.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href as '/'}
                className='group flex items-center gap-3'
              >
                <span className='inline-flex size-[3rem] shrink-0 items-center justify-center rounded-full border border-[#BFDBFE]'>
                  <ContactIcon id={item.id} />
                </span>
                <span className='flex flex-col'>
                  <span className='font-inter text-[0.75rem] text-[#8A93A3]'>{item.label}</span>
                  <span className='font-inter text-[0.875rem] font-semibold text-[#062B68] transition-colors group-hover:text-[#1B6CA8]'>
                    {item.value}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
