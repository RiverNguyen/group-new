'use client'

import { Check, ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useState } from 'react'

import DrawerProvider from '@/components/providers/drawer-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link, usePathname } from '@/i18n/navigation'
import { HEADER_LANGUAGES, type LanguageOption } from '@/layouts/header/components/header-data'
import { ChinaFlag, UsFlag, VietnamFlag } from '@/layouts/header/components/icons'
import { cn } from '@/lib/utils'

function LanguageFlag({ locale }: { locale: LanguageOption['locale'] }) {
  if (locale === 'en') return <UsFlag className='size-5' />
  if (locale === 'cn') return <ChinaFlag className='size-5' />
  return <VietnamFlag className='size-5' />
}

function LanguageTrigger({
  code,
  locale,
  onClick,
}: {
  code: string
  locale: LanguageOption['locale']
  onClick?: () => void
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='inline-flex items-center gap-1.5 rounded-full px-1.5 py-1 text-white outline-none transition-colors hover:bg-white/10'
    >
      <LanguageFlag locale={locale} />
      <span className='font-manrope text-xs font-semibold tracking-wide'>{code}</span>
      <ChevronDown className='size-3.5 opacity-80' />
    </button>
  )
}

function LanguageOptions({ onSelect }: { onSelect?: () => void }) {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <ul className='flex flex-col'>
      {HEADER_LANGUAGES.map((language) => (
        <li key={language.code}>
          <Link
            href={pathname}
            locale={language.locale}
            onClick={onSelect}
            className={cn(
              'flex w-full items-center justify-between px-4 py-3 font-manrope text-sm text-white transition-colors hover:text-[#F4B700]',
              language.locale === locale && 'text-[#F4B700]',
            )}
          >
            <span className='inline-flex items-center gap-2.5'>
              <LanguageFlag locale={language.locale} />
              {language.label}
            </span>
            {language.locale === locale ? (
              <Check className='size-4 shrink-0 text-[#F4B700]' />
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function DesktopLanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const currentLanguage =
    HEADER_LANGUAGES.find((item) => item.locale === locale) ?? HEADER_LANGUAGES[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='inline-flex items-center gap-1.5 rounded-full px-1.5 py-1 text-white outline-none transition-colors hover:bg-white/10'>
        <LanguageFlag locale={currentLanguage.locale} />
        <span className='font-manrope text-xs font-semibold tracking-wide'>
          {currentLanguage.code}
        </span>
        <ChevronDown className='size-3.5 opacity-80' />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='min-w-36 rounded-none border-none p-0 text-white shadow-xl'
        style={{
          background: 'linear-gradient(84deg, #001E40 0%, #036 100%)',
        }}
      >
        {HEADER_LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={cn(
              'cursor-pointer rounded-none p-0 font-manrope text-sm text-white transition-all duration-300',
              'focus:bg-transparent focus:text-[#F4B700]',
              'not-data-[variant=destructive]:focus:**:text-[#F4B700]',
              language.locale === locale && 'text-[#F4B700]',
            )}
          >
            <Link
              href={pathname}
              locale={language.locale}
              className='flex w-full items-center justify-between py-[0.3125rem] pr-2 pl-4'
            >
              <span className='inline-flex items-center gap-2'>
                <LanguageFlag locale={language.locale} />
                {language.label}
              </span>
              {language.locale === locale ? (
                <Check className='size-4 shrink-0 text-[#F4B700]' />
              ) : null}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MobileLanguageSwitcher() {
  const locale = useLocale()
  const [open, setOpen] = useState(false)
  const currentLanguage =
    HEADER_LANGUAGES.find((item) => item.locale === locale) ?? HEADER_LANGUAGES[0]

  return (
    <>
      <LanguageTrigger
        code={currentLanguage.code}
        locale={currentLanguage.locale}
        onClick={() => setOpen(true)}
      />
      <DrawerProvider
        open={open}
        setOpen={setOpen}
        className='border-none bg-[#0B2148] text-white'
      >
        <div className='px-1 pb-8'>
          <p className='px-4 pt-1 pb-2 font-manrope text-sm font-semibold text-[#D4AF37]'>
            Ngôn ngữ
          </p>
          <LanguageOptions onSelect={() => setOpen(false)} />
        </div>
      </DrawerProvider>
    </>
  )
}

export function LanguageSwitcher() {
  return (
    <>
      <div className='xsm:hidden'>
        <DesktopLanguageSwitcher />
      </div>
      <div className='hidden xsm:block'>
        <MobileLanguageSwitcher />
      </div>
    </>
  )
}
