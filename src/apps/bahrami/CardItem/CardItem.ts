import type { Icon } from '@phosphor-icons/react'
import type { LinkOptions } from '@tanstack/react-router'
import { generateShortId } from '#/common/utils/generateShortId'

export class CardItem {
  id: string = generateShortId()
  icon: Icon
  title: string
  description: string
  linkOptions: LinkOptions | string | null
  isWip: boolean

  constructor(
    icon: Icon,
    title: string,
    description: string,
    linkOptions: LinkOptions | string | null,
  ) {
    this.icon = icon
    this.title = title
    this.description = description
    this.linkOptions = linkOptions
    this.isWip = linkOptions == null
  }
}
