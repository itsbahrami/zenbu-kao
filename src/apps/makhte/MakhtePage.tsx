import { useFavicon } from '#/common/helpers/useFavicon'
import { AppBody } from './AppBody'
import { AppNav } from './AppNav'
import { CreateTaskDialog } from './CreateTaskDialog'
import { FAVICON } from './FAVICON'

export function MakhtePage() {
  useFavicon(FAVICON)

  return (
    <div className='flex h-dvh max-h-dvh flex-col bg-background'>
      <AppNav />
      <AppBody />
      <CreateTaskDialog />
    </div>
  )
}
