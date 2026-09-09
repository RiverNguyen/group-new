import { CalendarDays, MapPin } from 'lucide-react'

import type { ShareholderEvent } from '@/modules/shareholder-relations/data/events-data'

function formatEventDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

export function EventsCard({ heading, events }: { heading: string; events: ShareholderEvent[] }) {
  return (
    <section
      data-figma='64:2099'
      className='flex h-[22.390625rem] flex-col gap-[0.5rem] bg-white p-[1.5rem] xlg:h-auto'
    >
      <h2 className='font-inter text-[1.25rem] leading-[1.75rem] font-bold text-[#111827] uppercase'>
        {heading}
      </h2>
      <span
        aria-hidden
        className='h-[0.125rem] w-full border-t border-[#DC2626]'
      />

      <ul className='flex min-h-0 flex-1 flex-col gap-[0.75rem] overflow-y-auto pt-[0.5rem]'>
        {events.map((event) => (
          <li
            key={event.id}
            className='flex flex-col gap-[0.25rem] border-l-[0.125rem] border-[#D4AF37] pl-[0.75rem]'
          >
            <span className='flex items-center gap-[0.375rem] font-inter text-[0.75rem] leading-4 font-bold text-[#D4AF37]'>
              <CalendarDays
                aria-hidden
                className='size-3.5'
              />
              {formatEventDate(event.date)}
            </span>
            <span className='font-inter text-[0.875rem] leading-[1.25rem] font-medium text-[#1F2937]'>
              {event.title}
            </span>
            <span className='flex items-center gap-[0.375rem] font-inter text-[0.75rem] leading-4 text-[#6B7280]'>
              <MapPin
                aria-hidden
                className='size-3.5'
              />
              {event.location}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
