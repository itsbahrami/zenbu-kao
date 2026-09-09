import { cn } from 'cn'
import { Card, CardContent, CardHeader, CardTitle } from '#/common/ui/card'
import { KanbanTaskCard } from './KanbanTaskCard'
import type { Task } from './Task'
import {
  getTaskStatusIcon,
  getTaskStatusTextClassName,
  getTaskStatusTitle,
  type TaskStatus,
} from './TaskStatus'

export function KanbanColumn(p: { status: TaskStatus; tasks: Task[] }) {
  const Icon = getTaskStatusIcon(p.status)
  const title = getTaskStatusTitle(p.status)
  const className = cn(
    'flex items-center gap-1 font-bold text-lg',
    getTaskStatusTextClassName(p.status),
  )
  const sortedTasks = [...p.tasks].sort((a, b) =>
    a.title.localeCompare(b.title),
  )

  return (
    <Card className='min-w-xs flex-1'>
      <CardHeader>
        <CardTitle className={className}>
          <Icon size={24} />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className='overflow-y-auto flex-1 gap-0'>
        {sortedTasks.map(task => (
          <KanbanTaskCard task={task} key={task.id} />
        ))}
      </CardContent>
    </Card>
  )
}
