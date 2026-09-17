import { CaretRightIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { cn } from 'cn'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '#/common/ui/item'
import type { AahamatnMinimalResponse } from '#/features/api/client'
import { colorValueToMeta } from './Color'
import { languageValueToMeta } from './Language'

export function AahamatnCard(p: { aahamatn: AahamatnMinimalResponse }) {
  const { id, language, title, artist, color } = p.aahamatn

  const langMeta = languageValueToMeta(language)
  const colorMeta = colorValueToMeta(color)

  const isRtl = langMeta.dir === 'rtl'

  return (
    <div key={id}>
      <Item
        variant='outline'
        size='sm'
        render={
          <Link to='/apps/matahang/$id' params={{ id }} dir={langMeta.dir}>
            <ItemMedia>
              <div className={cn('h-10 w-4 rounded', colorMeta.bgClass)} />
            </ItemMedia>

            <ItemContent>
              <ItemTitle
                className={cn(langMeta.fontClass, 'font-bold')}
                dir='auto'
              >
                {title}
              </ItemTitle>

              <ItemDescription className='inline-flex items-center gap-1'>
                {langMeta.countryCode?.trim() ? (
                  <img
                    className='w-4 h-3 rounded'
                    src={`https://flagcdn.com/${langMeta.countryCode}.svg`}
                    alt=''
                  />
                ) : (
                  <span className='w-4 h-3 inline-flex justify-center items-center rounded bg-mist-600'>
                    -
                  </span>
                )}

                <span>{artist}</span>
              </ItemDescription>
            </ItemContent>

            <ItemActions>
              <CaretRightIcon mirrored={isRtl} className='size-4' />
            </ItemActions>
          </Link>
        }
      />
    </div>
  )
}
