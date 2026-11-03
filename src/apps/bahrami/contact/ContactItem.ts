import type { Icon } from '@phosphor-icons/react'

export type ContactItem = {
  id: string
  title: string
  url: string

  /** ImageUrl (string) or Phosphor Icon */
  IconOrPath: string | Icon
}
