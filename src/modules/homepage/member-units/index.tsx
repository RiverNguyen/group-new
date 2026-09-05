'use client'

import { useState } from 'react'

import { Container } from '@/components/site/container'
import { MemberFeaturedCard } from '@/modules/homepage/member-units/components/member-featured-card'
import { MemberUnitItem } from '@/modules/homepage/member-units/components/member-unit-item'
import { MemberUnitsHeader } from '@/modules/homepage/member-units/components/member-units-header'
import { MEMBER_UNITS_CONTENT } from '@/modules/homepage/member-units/data/member-units-data'

export function MemberUnitsSection() {
  const { eyebrow, title, featured, units } = MEMBER_UNITS_CONTENT
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className='bg-white py-[5.5rem] xsm:py-10'>
      <Container>
        <MemberUnitsHeader
          eyebrow={eyebrow}
          title={title}
        />

        <div className='grid grid-cols-2 gap-6 xsm:grid-cols-1 xsm:gap-4 tablet:gap-5'>
          <div className='h-[45.5rem] xsm:h-[30rem]'>
            <MemberFeaturedCard featured={featured} />
          </div>

          <div className='flex h-[45.5rem] flex-col gap-3 overflow-hidden xsm:h-auto xsm:gap-3 xsm:overflow-visible'>
            {units.map((unit, index) => (
              <MemberUnitItem
                key={unit.id}
                unit={unit}
                index={index}
                isExpanded={hoveredId === unit.id}
                onHoverStart={() => setHoveredId(unit.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
