import { KanbanColumn } from './KanbanColumn'
import { useKanbanViewTasks } from './store'
import { TaskStatus } from './TaskStatus'

export function KanbanViewMode() {
  const tasks = useKanbanViewTasks()

  return (
    <div className='flex overflow-x-auto w-full flex-1 gap-2'>
      {Object.values(TaskStatus).map(status => (
        <KanbanColumn key={status} status={status} tasks={tasks[status]} />
      ))}
    </div>
  )
}
