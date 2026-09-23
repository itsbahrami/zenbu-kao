import { SignInIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { AppVersion } from '#/features/versioning/AppVersion'
import { CardItemCardsSection } from './CardItem/CardItemCardsSection'

export function BahramiPage() {
  return (
    <div className='py-8 px-4 gap-4 min-h-dvh flex flex-col items-center justify-center text-center relative'>
      <Link
        to='/login'
        className={buttonVariants({
          size: 'icon',
          variant: 'outline',
          class: 'absolute top-4 inset-s-4',
        })}
      >
        <SignInIcon />
      </Link>

      <img alt='' src='/Spec.png' className='size-40 rounded-full' />

      <h1 className='text-3xl font-bold font-heading'>بهرامی‌ام! 👋🏻</h1>

      <div className='flex flex-wrap items-center justify-center gap-2'>
        <span>برنامه‌نویس فول‌استک</span>
        <span className='text-muted-foreground'>و</span>
        <span>خوره‌ی زبان</span>
      </div>

      <CardItemCardsSection />

      <footer dir='ltr' className='text-muted-foreground text-xs'>
        <span className='font-fa'>۱۴۰۵</span>
        <span className='font-code'> - </span>
        <span className='font-code'>
          <AppVersion />
        </span>
      </footer>
    </div>
  )
}
