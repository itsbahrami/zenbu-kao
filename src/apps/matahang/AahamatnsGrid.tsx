import type { AahamatnMinimalResponse } from '#/features/api/client'
import { AahamatnCard } from './AahamatnCard'

export const AahamatnsGrid = (p: { aahamatns: AahamatnMinimalResponse[] }) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-2'>
    {p.aahamatns.map(aahamatn => (
      <AahamatnCard key={aahamatn.id} aahamatn={aahamatn} />
    ))}
  </div>
)
