import { createFileRoute } from '@tanstack/react-router'
import { MakhtePage } from '#/apps/makhte/MakhtePage'

export const Route = createFileRoute('/apps/makhte')({
  ssr: false,
  component: MakhtePage,
  head: () => ({
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/apps/Makhte.png',
        sizes: '512x512',
      },
    ],
    meta: [{ title: 'مختک - بهرامی' }],
  }),
})
