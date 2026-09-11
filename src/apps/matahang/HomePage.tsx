import { useQuery } from '@tanstack/react-query'
import { getAllAahamatnsOptions } from '#/features/api/client'
import { AahamatnsTable } from './AahamatnsTable'

export function HomePage() {
  const aahamatnsQ = useQuery(getAllAahamatnsOptions())

  return <AahamatnsTable aahamatns={aahamatnsQ.data?.items || []} />
}
