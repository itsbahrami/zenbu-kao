import { useFavicon } from '#/common/helpers/useFavicon'
import { OptionsBtns } from './OptionsBtns'
import { RenderView } from './RenderView'
import { ViewModeToggle } from './ViewModeToggle'

const FAVICON = '/apps/Makhte.png'

export function MakhtePage() {
  useFavicon(FAVICON)

  return (
    <div className='flex min-h-svh flex-col bg-background'>
      <div className='flex items-center py-2 px-4 gap-4'>
        <div className='flex items-center gap-1'>
          <img alt='' src={FAVICON} className='size-8' />

          <span className='font-bold text-lg'>مخته</span>
        </div>

        <div className='mx-auto' />

        <div className='flex items-center gap-2'>
          <ViewModeToggle />
          <OptionsBtns />
        </div>
      </div>

      <div className='flex flex-1 p-4'>
        <RenderView />
      </div>
    </div>
  )
}
