import { createFileRoute } from '@tanstack/react-router'
import { CreatePage } from '#/apps/matahang/CreatePage'

export const Route = createFileRoute('/apps/matahang/new')({
  ssr: false,
  component: CreatePage,
  head: () => ({ meta: [{ title: 'آهمتن جدید - متهنگ' }] }),
})
