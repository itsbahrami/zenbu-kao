import { cn } from 'cn'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Badge } from '#/common/ui/badge'
import {
  getTaskStatusTextClassName,
  getTaskStatusTitle,
  type TaskStatus,
} from './TaskStatus'

export const TaskStatusBadge = (p: { status: TaskStatus }) => (
  <RenderTooltip tooltip={`وضعیت: ${getTaskStatusTitle(p.status)}`}>
    <Badge
      variant='secondary'
      className={cn(getTaskStatusTextClassName(p.status))}
    >
      {getTaskStatusTitle(p.status)}
    </Badge>
  </RenderTooltip>
)
