import { useQuery } from '@tanstack/react-query'
import { ErrorSection } from '#/common/components/ErrorSection'
import { LoadingSection } from '#/common/components/LoadingSection'
import { RenderQuery } from '#/common/utils/RenderQuery'
import { getAllAahamatnsOptions } from '#/features/api/client'
import { AahamatnsGrid } from './AahamatnsGrid'
import { EmptySection } from './EmptySection'

export function HomePage() {
  const aahamatnsQ = useQuery(getAllAahamatnsOptions())

  return (
    <RenderQuery
      isList={true}
      items={aahamatnsQ.data?.items ?? []}
      emptyView={<EmptySection />}
      status={aahamatnsQ.status}
      loadingView={<LoadingSection />}
      fullView={aahamatns => <AahamatnsGrid aahamatns={aahamatns} />}
      errorView={
        <ErrorSection error={aahamatnsQ.error} onRetry={aahamatnsQ.refetch} />
      }
    />
  )
}
