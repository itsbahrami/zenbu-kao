import {
  HouseIcon,
  MagnifyingGlassIcon,
  MusicNotesPlusIcon,
  PlaylistIcon,
} from '@phosphor-icons/react'
import { Link, Outlet } from '@tanstack/react-router'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { useFavicon } from '#/common/helpers/useFavicon'
import { Button } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'
import { toast } from '#/common/ui/toast'
import { RemoveAahamatnDialog } from './RemoveAahamatnDialog'

const FAVICON = '/apps/Matahang.png'

export function MatahangLayout() {
  useFavicon(FAVICON)

  return (
    <div data-layout className='flex h-dvh max-h-dvh flex-col bg-background'>
      <div data-nav className='flex items-center py-2 px-4 gap-2'>
        <div data-logo className='flex items-center gap-1'>
          <img alt='' src={FAVICON} className='size-8' />

          <span className='font-bold text-lg'>متهنگ</span>
        </div>

        <div className='mx-auto' />

        <RenderTooltip data-search_btn tooltip='جستجو'>
          <Button
            size='icon'
            variant='outline'
            onClick={() => toast.add({ title: 'از F3 استفاده کن!' })}
          >
            <MagnifyingGlassIcon />
          </Button>
        </RenderTooltip>

        <ButtonGroup>
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

          <RenderTooltip data-list_btn tooltip='لیست آهمتن‌ها'>
            <Button
              size='icon'
              variant='outline'
              nativeButton={false}
              render={
                <Link to='/apps/matahang'>
                  <PlaylistIcon />
                </Link>
              }
            />
          </RenderTooltip>

          <RenderTooltip data-up_btn tooltip='بازگشت به صفحه برنامک‌ها'>
            <Button
              size='icon'
              variant='outline'
              nativeButton={false}
              render={
                <Link to='/apps'>
                  <HouseIcon />
                </Link>
              }
            />
          </RenderTooltip>
        </ButtonGroup>
      </div>

      <div data-body className='flex flex-1 px-4 py-2 flex-col overflow-y-auto'>
        <Outlet />
      </div>

      <RemoveAahamatnDialog />
    </div>
  )
}
