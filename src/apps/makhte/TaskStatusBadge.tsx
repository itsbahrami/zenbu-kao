import { cn } from 'cn'
import { Badge } from '#/common/ui/badge'
import {
  getTaskStatusTextClassName,
  getTaskStatusTitle,
  type TaskStatus,
} from './TaskStatus'

export const TaskStatusBadge = (p: { status: TaskStatus }) => (
  <Badge
    variant='secondary'
    className={cn(getTaskStatusTextClassName(p.status))}
  >
    {getTaskStatusTitle(p.status)}
  </Badge>
)
