import { Compass, Cpu, DraftingCompass, Gauge, type LucideIcon } from 'lucide-react'

import type { MemberUnit } from '@/modules/homepage/member-units/data/member-units-data'

const ICON_MAP: Record<MemberUnit['icon'], LucideIcon> = {
  cpu: Cpu,
  compass: Compass,
  drafting: DraftingCompass,
  gauge: Gauge,
}

type MemberUnitIconProps = {
  name: MemberUnit['icon']
  className?: string
}

export function MemberUnitIcon({ name, className }: MemberUnitIconProps) {
  const Icon = ICON_MAP[name]
  return (
    <Icon
      className={className}
      strokeWidth={1.5}
    />
  )
}
