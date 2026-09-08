import { useFavicon } from '#/common/helpers/useFavicon'
import { AppBody } from './AppBody'
import { AppNav } from './AppNav'
import { CreateTaskDialog } from './CreateTaskDialog'
import { EditTaskDialog } from './EditTaskDialog'
import { FAVICON } from './FAVICON'
import { RemoveTaskDialog } from './RemoveTaskDialog'
import { TaskDetailsDialog } from './TaskDetailsDialog'

export function MakhtePage() {
  useFavicon(FAVICON)

  return (
    <div className='flex h-dvh max-h-dvh flex-col bg-background'>
      <AppNav />
      <AppBody />
      <CreateTaskDialog />
      <TaskDetailsDialog />
      <EditTaskDialog />
      <RemoveTaskDialog />
    </div>
  )
}
