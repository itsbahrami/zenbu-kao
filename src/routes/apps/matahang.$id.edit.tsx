import { createFileRoute } from '@tanstack/react-router'
import { EditPage } from '#/apps/matahang/EditPage'

export const Route = createFileRoute('/apps/matahang/$id/edit')({
  ssr: false,
  component: RouteComponent,
  head: () => ({ meta: [{ title: 'ویرایش آهمتن - متهنگ' }] }),
})

function RouteComponent() {
  return <EditPage id={Route.useParams().id} />
}
