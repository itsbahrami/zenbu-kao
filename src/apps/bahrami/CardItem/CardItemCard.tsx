/** biome-ignore-all lint/a11y/useAnchorContent: valid_reasons.shut_up! */
import { CaretRightIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { Badge } from '#/common/ui/badge'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '#/common/ui/item'
import type { CardItem } from './CardItem'

export function CardItemCard(p: { item: CardItem }) {
  const { isWip, linkOptions } = p.item

  const content = <CardItemCardContent item={p.item} />
  const render =
    typeof linkOptions === 'string' ? (
      <a href={linkOptions} target='_blank' />
    ) : (
      <Link {...linkOptions} />
    )

  return isWip ? (
    <Item variant='outline' className='opacity-60 cursor-not-allowed'>
      {content}
    </Item>
  ) : (
    <Item variant='outline' render={render}>
      {content}
    </Item>
  )
}

export const CardItemCardContent = (p: { item: CardItem }) => (
  <>
    <ItemMedia variant='icon' className='my-auto'>
      <p.item.icon className='size-6' />
    </ItemMedia>

    <ItemContent>
      <ItemTitle className='flex items-center gap-2'>
        <span>{p.item.title}</span>
        {p.item.isWip && <Badge variant='secondary'>به زودی</Badge>}
      </ItemTitle>
      <ItemDescription className='flex items-center gap-2'>
        <span>{p.item.description}</span>
      </ItemDescription>
    </ItemContent>

    <ItemActions>
      <CaretRightIcon mirrored className='size-4' />
    </ItemActions>
  </>
)
