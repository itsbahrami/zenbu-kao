import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const SPA_PATHS = ['/dashboard', '/apps', '/login', '/register', '/contact']

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
        filter: p =>
          !SPA_PATHS.some(
            spaPath => spaPath === p.path || p.path.startsWith(spaPath),
          ),
      },
    }),
    nitro(),
    viteReact(),
  ],
})

export default config
