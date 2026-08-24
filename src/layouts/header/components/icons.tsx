import { cn } from '@/lib/utils'

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      aria-hidden
    >
      <path d='M14 8.2h2.1V5H14c-2.4 0-4 1.5-4 4.1V11H8v3.2h2v6.8h3.3v-6.8h2.3L16 11h-2.7V9.1c0-.6.3-.9.7-.9Z' />
    </svg>
  )
}

function FlagBadge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full',
        className,
      )}
      aria-hidden
    >
      {children}
    </span>
  )
}

export function VietnamFlag({ className }: { className?: string }) {
  return (
    <FlagBadge className={className}>
      <svg
        viewBox='0 0 24 24'
        className='size-full'
      >
        <rect
          width='24'
          height='24'
          fill='#DA251D'
        />
        <path
          d='M12 6.2l1.35 4.16h4.37l-3.53 2.57 1.35 4.16L12 14.52l-3.54 2.57 1.35-4.16-3.53-2.57h4.37L12 6.2z'
          fill='#FF0'
        />
      </svg>
    </FlagBadge>
  )
}

export function UsFlag({ className }: { className?: string }) {
  return (
    <FlagBadge className={className}>
      <svg
        viewBox='0 0 24 24'
        className='size-full'
      >
        <rect
          width='24'
          height='24'
          fill='#B22234'
        />
        <rect
          y='1.85'
          width='24'
          height='1.85'
          fill='#FFF'
        />
        <rect
          y='5.54'
          width='24'
          height='1.85'
          fill='#FFF'
        />
        <rect
          y='9.23'
          width='24'
          height='1.85'
          fill='#FFF'
        />
        <rect
          y='12.92'
          width='24'
          height='1.85'
          fill='#FFF'
        />
        <rect
          y='16.62'
          width='24'
          height='1.85'
          fill='#FFF'
        />
        <rect
          y='20.31'
          width='24'
          height='1.85'
          fill='#FFF'
        />
        <rect
          width='10'
          height='12.9'
          fill='#3C3B6E'
        />
        {[
          [2, 2.2],
          [5, 2.2],
          [8, 2.2],
          [3.5, 4.2],
          [6.5, 4.2],
          [2, 6.2],
          [5, 6.2],
          [8, 6.2],
          [3.5, 8.2],
          [6.5, 8.2],
          [2, 10.2],
          [5, 10.2],
          [8, 10.2],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r='0.55'
            fill='#FFF'
          />
        ))}
      </svg>
    </FlagBadge>
  )
}

export function ChinaFlag({ className }: { className?: string }) {
  return (
    <FlagBadge className={className}>
      <svg
        viewBox='0 0 24 24'
        className='size-full'
      >
        <rect
          width='24'
          height='24'
          fill='#DE2910'
        />
        <path
          d='M6.2 4.4l0.95 2.92h3.07l-2.48 1.8 0.95 2.92-2.49-1.81-2.48 1.81 0.94-2.92-2.48-1.8h3.07L6.2 4.4z'
          fill='#FFDE00'
        />
        <path
          d='M12.4 3.6l0.38 1.16h1.22l-.99.72.38 1.16-.99-.72-.98.72.37-1.16-.98-.72h1.22L12.4 3.6z'
          fill='#FFDE00'
        />
        <path
          d='M14.6 5.9l0.38 1.16h1.22l-.99.72.38 1.16-.99-.72-.98.72.37-1.16-.98-.72h1.22L14.6 5.9z'
          fill='#FFDE00'
        />
        <path
          d='M14.6 9.1l0.38 1.16h1.22l-.99.72.38 1.16-.99-.72-.98.72.37-1.16-.98-.72h1.22L14.6 9.1z'
          fill='#FFDE00'
        />
        <path
          d='M12.4 11.4l0.38 1.16h1.22l-.99.72.38 1.16-.99-.72-.98.72.37-1.16-.98-.72h1.22L12.4 11.4z'
          fill='#FFDE00'
        />
      </svg>
    </FlagBadge>
  )
}
