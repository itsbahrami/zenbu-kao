import { Button } from '#/common/ui/button'
import { QuickSwitchStatus } from './QuickSwitchStatus'
import { makhteActions } from './store'
import type { Task } from './Task'

export const KanbanTaskCard = (p: { task: Task }) => (
  <div className='flex items-center'>
    <QuickSwitchStatus
      currentStatus={p.task.status}
      taskId={p.task.id}
      btnSize='icon'
      btnClass='h-full'
      variant='ghost'
      iconClass='size-5'
    />

    <Button
      dir='auto'
      variant='ghost'
      className='flex-1 justify-start whitespace-normal text-start h-max py-2'
      onClick={() => makhteActions.openViewTaskDialog(p.task)}
    >
      {p.task.title}
    </Button>
  </div>
)
