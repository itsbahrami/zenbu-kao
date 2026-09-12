import { useQuery } from '@tanstack/react-query'
import { ErrorSection } from '#/common/components/ErrorSection'
import { LoadingSection } from '#/common/components/LoadingSection'
import { RenderQuery } from '#/common/utils/RenderQuery'
import { getAahamatnOptions } from '#/features/api/client'
import { AahamatnDetails } from './AahamatnDetails'

export function ViewPage(p: { id: string }) {
  const aahamatnQ = useQuery(getAahamatnOptions({ path: p }))

  return (
    <RenderQuery
      isList={false}
      // biome-ignore lint/style/noNonNullAssertion: SAFE!
      data={aahamatnQ.data!}
      status={aahamatnQ.status}
      loadingView={<LoadingSection />}
      successView={aahamatn => <AahamatnDetails aahamatn={aahamatn} />}
      errorView={
        <ErrorSection error={aahamatnQ.error} onRetry={aahamatnQ.refetch} />
      }
    />
  )
}
