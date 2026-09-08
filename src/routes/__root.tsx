import type { QueryClient } from '@tanstack/react-query'
import {
  ClientOnly,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import type { PropsWithChildren } from 'react'
import appCss from '#/common/styles.css?url'
import { Toaster } from '#/common/ui/toast'
import { TooltipProvider } from '#/common/ui/tooltip'
import { ClientConfigurator } from '#/features/api/ClientConfigurator'
import type { getIsLoggedIn } from '#/features/auth/store'
import { Devtools } from '#/features/devtools/Devtools'

interface MyRouterContext {
  queryClient: QueryClient
  getIsLoggedIn: typeof getIsLoggedIn
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  shellComponent: RootDocument,
  head: () => ({
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/Spec.png', sizes: '460x460' },
    ],
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'بهرامی' },
    ],
  }),
})

function RootDocument(p: PropsWithChildren) {
  return (
    <html lang='fa' dir='rtl' className='dark'>
      <head>
        <HeadContent />
      </head>

      <body>
        <TooltipProvider delay={500}>{p.children}</TooltipProvider>

        <ClientOnly>
          <ClientConfigurator />
          <Devtools />
          <Toaster />
        </ClientOnly>

        <Scripts />
      </body>
    </html>
  )
}
