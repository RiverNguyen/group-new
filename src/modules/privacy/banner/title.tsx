type PrivacyTitleProps = {
  lead: string
  accent: string
  end: string
}

export function PrivacyTitle({ lead, accent, end }: PrivacyTitleProps) {
  return (
    <span className='inline-flex flex-wrap items-baseline gap-x-[0.28em]'>
      <span>{lead}</span>
      <span className='text-[#BB9650]'>{accent}</span>
      <span>{end}</span>
    </span>
  )
}
