import { cn } from 'cn'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Badge } from '#/common/ui/badge'
import {
  getTaskStatusIcon,
  getTaskStatusTextClassName,
  getTaskStatusTitle,
  type TaskStatus,
} from './TaskStatus'

export function TaskStatusBadge(p: { status: TaskStatus }) {
  const Icon = getTaskStatusIcon(p.status)
  const title = getTaskStatusTitle(p.status)
  const className = cn(getTaskStatusTextClassName(p.status))

  return (
    <RenderTooltip tooltip={`وضعیت: ${title}`}>
      <Badge variant='secondary' className={className}>
        <Icon />
        <span>{title}</span>
      </Badge>
    </RenderTooltip>
  )
}
