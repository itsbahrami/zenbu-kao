import { useFavicon } from '#/common/helpers/useFavicon'
import { AppBody } from './AppBody'
import { AppNav } from './AppNav'
import { FAVICON } from './FAVICON'

export function MakhtePage() {
  useFavicon(FAVICON)

  return (
    <div className='flex min-h-svh flex-col bg-background'>
      <AppNav />
      <AppBody />
    </div>
  )
}
