import { ArrowUpIcon, MusicNotesPlusIcon } from '@phosphor-icons/react'
import { Link, Outlet } from '@tanstack/react-router'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { useFavicon } from '#/common/helpers/useFavicon'
import { Button } from '#/common/ui/button'
import { useIsLoggedIn } from '#/features/auth/store'
import { RemoveAahamatnDialog } from './RemoveAahamatnDialog'

const FAVICON = '/apps/Matahang.png'

export function MatahangLayout() {
  useFavicon(FAVICON)
  const isLoggedIn = useIsLoggedIn()

  return (
    <div data-layout className='flex h-dvh max-h-dvh flex-col bg-background'>
      <div data-nav className='flex items-center py-2 px-4 gap-2'>
        <div data-logo className='flex items-center gap-1'>
          <img alt='' src={FAVICON} className='size-8' />

          <Link
            to='/apps/matahang'
            className='font-bold text-lg hover:text-rose-400 hover:underline'
          >
            متهنگ
          </Link>
        </div>

        <div className='mx-auto' />

        {isLoggedIn && (
          <RenderTooltip data-create_btn tooltip='آهمتن جدید'>
            <Button
              size='icon'
              variant='outline'
              nativeButton={false}
              className='text-rose-400'
              render={
                <Link to='/apps/matahang/new'>
                  <MusicNotesPlusIcon weight='fill' />
                </Link>
              }
            />
          </RenderTooltip>
        )}

        <RenderTooltip data-up_btn tooltip='بازگشت به صفحه برنامک‌ها'>
          <Button
            size='icon'
            variant='outline'
            nativeButton={false}
            render={
              <Link to='/apps'>
                <ArrowUpIcon />
              </Link>
            }
          />
        </RenderTooltip>
      </div>

      <div data-body className='flex flex-1 px-4 py-2 flex-col overflow-y-auto'>
        <Outlet />
      </div>

      <RemoveAahamatnDialog />
    </div>
  )
}
