import { Globe, Youtube } from 'lucide-react'
import Image from 'next/image'

import { Container } from '@/components/site/container'
import { Link } from '@/i18n/navigation'
import { ContactBar } from '@/layouts/footer/components/contact-bar'
import {
  FOOTER_ABOUT,
  FOOTER_COPYRIGHT,
  FOOTER_NEWSLETTER,
  FOOTER_SOCIAL,
  FOOTER_TAGLINE,
  FOOTER_TERMS,
  type FooterLinkGroup,
} from '@/layouts/footer/components/footer-data'
import { NewsletterForm } from '@/layouts/footer/components/newsletter-form'

function FooterLinkColumns({ group }: { group: FooterLinkGroup }) {
  return (
    <div>
      <h3 className='font-inter text-[1.5rem] font-semibold text-[#E2B570]'>{group.title}</h3>
      <div
        className={
          group.columns.length > 1
            ? 'mt-5 grid grid-cols-2 gap-x-8 gap-y-2.5'
            : 'mt-5 flex flex-col gap-2.5'
        }
      >
        {group.columns.map((column, columnIndex) => (
          <ul
            key={columnIndex}
            className='flex flex-col gap-2.5'
          >
            {column.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href as '/'}
                  className='font-inter text-[0.875rem] text-white/75 transition-colors hover:text-[#E2B570]'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className='w-full'>
      <ContactBar />

      <div
        style={{
          background: 'linear-gradient(84deg, #001E40 0%, #036 100%), #062B68',
        }}
      >
        <Container className='grid grid-cols-4 gap-10 py-12 tablet:grid-cols-2 tablet:gap-8 xsm:grid-cols-1 xsm:gap-4 xsm:py-10'>
          <div className='max-w-xs xsm:max-w-none'>
            <Image
              src='/footer/logo.svg'
              alt='Bateco Group'
              width={136}
              height={137}
              className='h-[7.5rem] w-auto xsm:mx-auto'
            />
            <p className='mt-5 font-inter text-[0.7rem] leading-relaxed font-semibold tracking-[0.04em] text-white/80 uppercase xsm:text-center'>
              {FOOTER_TAGLINE}
            </p>
            <div className='mt-5 flex items-center gap-3 xsm:justify-center'>
              {FOOTER_SOCIAL.map((item) => (
                <Link
                  key={item.id}
                  href={item.href as '/'}
                  aria-label={item.label}
                  className='inline-flex size-8 items-center justify-center text-white/80 transition-colors hover:text-[#E2B570]'
                >
                  {item.id === 'website' ? (
                    <Globe
                      className='size-4'
                      strokeWidth={1.75}
                    />
                  ) : (
                    <Youtube
                      className='size-4'
                      strokeWidth={1.75}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <FooterLinkColumns group={FOOTER_ABOUT} />
          <FooterLinkColumns group={FOOTER_TERMS} />

          <div>
            <h3 className='font-inter text-[1.5rem] font-semibold text-[#E2B570]'>
              {FOOTER_NEWSLETTER.title}
            </h3>
            <p className='mt-5 font-inter text-[0.875rem] leading-relaxed text-white/75'>
              {FOOTER_NEWSLETTER.description}
            </p>
            <NewsletterForm />
          </div>
        </Container>
      </div>

      <div className='bg-[#2A2A2A]'>
        <Container className='flex items-center justify-between gap-4 py-3.5 xsm:flex-col xsm:text-center'>
          <p className='font-inter text-[0.75rem] font-semibold tracking-[0.06em] text-white/70 uppercase'>
            {FOOTER_COPYRIGHT.left}
          </p>
          <p className='font-inter text-[0.75rem] font-semibold tracking-[0.06em] text-white/70 uppercase'>
            {FOOTER_COPYRIGHT.right}
          </p>
        </Container>
      </div>
    </footer>
  )
}
