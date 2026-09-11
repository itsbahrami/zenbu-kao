import { ArrowUpIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useFavicon } from '#/common/helpers/useFavicon'
import { buttonVariants } from '#/common/ui/button'

export function MatahangPage() {
  useFavicon('/apps/Matahang.png')

  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-4 md:p-8 relative'>
      <div className='absolute top-4 inset-s-4'>
        <Link
          to='/apps'
          className={buttonVariants({
            size: 'icon',
            variant: 'outline',
          })}
        >
          <ArrowUpIcon />
        </Link>
      </div>

      <div className='absolute top-4 inset-s-1/2 flex gap-2 items-center translate-x-1/2'>
        <img alt='' src='/apps/Matahang.png' className='size-8' />

        <span className='font-bold'>متهنگ</span>
      </div>
    </div>
  )
}
