import { buttonVariants } from '#/common/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '#/common/ui/tooltip'
import type { ContactItem } from './ContactItem'

const className = buttonVariants({ variant: 'outline', size: 'icon-lg' })

export const ContactItemCard = (p: { item: ContactItem }) => {
  const { IconOrPath, title, url } = p.item

  return (
    <Tooltip>
      <TooltipTrigger>
        <a
          className={className}
          href={url}
          rel='noopener noreferrer'
          target='_blank'
          title={title}
        >
          {typeof IconOrPath === 'string' ? (
            <img alt='' src={IconOrPath} className='size-6' />
          ) : (
            <IconOrPath className='size-6' />
          )}
        </a>
      </TooltipTrigger>

      <TooltipContent side='bottom'>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
