import { createFileRoute } from '@tanstack/react-router'
import { ViewPage } from '#/apps/matahang/ViewPage'

export const Route = createFileRoute('/apps/matahang/$id/')({
  ssr: false,
  component: RouteComponent,
  head: () => ({ meta: [{ title: 'مشاهده آهمتن - متهنگ' }] }),
})

function RouteComponent() {
  return <ViewPage id={Route.useParams().id} />
}
