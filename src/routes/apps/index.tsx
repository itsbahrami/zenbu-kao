import { HouseSimpleIcon } from '@phosphor-icons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'

export const Route = createFileRoute('/apps/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'برنامک‌ها - بهرامی' }],
  }),
})

function RouteComponent() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-4 md:p-8 relative'>
      <Link
        to='/'
        className={buttonVariants({
          size: 'icon',
          variant: 'outline',
          class: 'absolute top-4 inset-s-4',
        })}
      >
        <HouseSimpleIcon />
      </Link>

      <div className='flex flex-wrap gap-8 w-full max-w-2xl items-center text-center justify-center'>
        <Link
          to='/apps/azkhak'
          className='hover:bg-amber-950/50 hover:text-amber-300 transition-all p-4 rounded-md flex flex-col items-center gap-2'
        >
          <img className='size-16' alt='' src='/apps/Azkhak.png' />
          <span className=''>ازخک</span>
        </Link>

        <Link
          to='/apps/makhte'
          className='hover:bg-sky-950/50 hover:text-sky-300 transition-all p-4 rounded-md flex flex-col items-center gap-2'
        >
          <img className='size-16' alt='' src='/apps/Makhte.png' />
          <span className=''>مخته</span>
        </Link>
      </div>
    </div>
  )
}
