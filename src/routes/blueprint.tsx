import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '#/apps/blueprint'

export const Route = createFileRoute('/blueprint')({
  component: LandingPage,
})
