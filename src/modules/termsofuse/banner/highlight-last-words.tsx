const ACCENT_COUNT = 2

function TitleParts({
  lead,
  accent,
  gapClassName,
}: {
  lead: string[]
  accent: string[]
  gapClassName: string
}) {
  return (
    <span
      className={`inline-flex items-center ${gapClassName} ${lead.length > 0 ? 'xsm:flex-col xsm:items-start' : ''}`}
    >
      {lead.length > 0 ? (
        <span className={`inline-flex items-center ${gapClassName}`}>
          {lead.map((part, index) => (
            <span key={`${part}-${index}`}>{part}</span>
          ))}
        </span>
      ) : null}
      <span className={`inline-flex items-center text-[#BB9650] ${gapClassName}`}>
        {accent.map((part, index) => (
          <span key={`${part}-${index}`}>{part}</span>
        ))}
      </span>
    </span>
  )
}

export function highlightLastWords(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean)

  if (words.length > 1) {
    return (
      <TitleParts
        lead={words.slice(0, -ACCENT_COUNT)}
        accent={words.slice(-ACCENT_COUNT)}
        gapClassName='gap-[0.2em]'
      />
    )
  }

  const chars = [...text]
  if (chars.length <= ACCENT_COUNT) {
    return <span className='text-[#BB9650]'>{text}</span>
  }

  return (
    <TitleParts
      lead={[chars.slice(0, -ACCENT_COUNT).join('')]}
      accent={[chars.slice(-ACCENT_COUNT).join('')]}
      gapClassName='gap-[0.18em]'
    />
  )
}
