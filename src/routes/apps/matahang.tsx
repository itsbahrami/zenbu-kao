import { createFileRoute } from '@tanstack/react-router'
import { MatahangPage } from '#/apps/matahang/MatahangPage'

export const Route = createFileRoute('/apps/matahang')({
  ssr: false,
  component: MatahangPage,
  head: () => ({
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/apps/Matahang.png',
        sizes: '512x512',
      },
    ],
    meta: [{ title: 'متهنگ - بهرامی' }],
  }),
})
