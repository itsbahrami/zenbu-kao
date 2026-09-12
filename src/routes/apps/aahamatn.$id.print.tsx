import { createFileRoute } from '@tanstack/react-router'
import { PrintPage } from '#/apps/matahang/PrintPage'

export const Route = createFileRoute('/apps/aahamatn/$id/print')({
  ssr: false,
  component: RouteComponent,
  head: () => ({ meta: [{ title: 'پرینت آهمتن - متهنگ' }] }),
})

function RouteComponent() {
  return <PrintPage id={Route.useParams().id} />
}
