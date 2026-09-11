import { createFileRoute } from '@tanstack/react-router'
import { MatahangLayout } from '#/apps/matahang/MatahangLayout'

export const Route = createFileRoute('/apps/matahang')({
  ssr: false,
  component: MatahangLayout,
  head: () => ({ meta: [{ title: 'متهنگ - بهرامی' }] }),
})
