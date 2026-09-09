import type { BrandSlot as BrandSlotData } from '@/modules/industrial-services/data/industrial-services-data'

export function BrandSlot({ slot }: { slot: BrandSlotData }) {
  return (
    <div className='relative flex h-[7.625rem] w-full items-center justify-center rounded-[0.5rem] bg-[#0C0F0F]/50 p-[2rem] shadow-[0_4px_16px_rgba(0,0,0,0.2)] backdrop-blur-sm xsm:p-4'>
      <span className='text-center font-inter text-[0.75rem] leading-4 font-semibold tracking-[0.075rem] text-white/70 uppercase'>
        {slot.name}
      </span>
    </div>
  )
}
