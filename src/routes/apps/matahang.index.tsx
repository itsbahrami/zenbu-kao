import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '#/apps/matahang/HomePage'

export const Route = createFileRoute('/apps/matahang/')({
  ssr: false,
  component: HomePage,
  head: () => ({ meta: [{ title: 'متهنگ - بهرامی' }] }),
})
