import type { VariantProps } from 'class-variance-authority'
import { cn } from 'cn'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '#/common/ui/dropdown-menu'
import { Button, type buttonVariants } from '@/common/ui/button'
import { makhteActions } from './store'
import {
  getTaskStatusIcon,
  getTaskStatusTextClassName,
  getTaskStatusTitle,
  TaskStatus,
} from './TaskStatus'

export const QuickSwitchStatus = (p: {
  taskId: string
  currentStatus: TaskStatus
  btnSize?: VariantProps<typeof buttonVariants>['size']
  iconClass?: string
  variant?: VariantProps<typeof buttonVariants>['variant']
  btnClass?: string
}) => {
  const Icon = getTaskStatusIcon(p.currentStatus)
  const title = getTaskStatusTitle(p.currentStatus)
  const className = cn(getTaskStatusTextClassName(p.currentStatus), p.btnClass)

  const handleStatusChange = (newStatus: TaskStatus) => {
    makhteActions.updateTaskStatus(p.taskId, newStatus)
  }

  return (
    <DropdownMenu>
      <RenderTooltip tooltip='وضعیت'>
        <DropdownMenuTrigger
          render={
            <Button
              variant={p.variant ?? 'outline'}
              size={p.btnSize ?? 'xs'}
              className={className}
            >
              <Icon className={p.iconClass} />

              {!p.btnSize?.includes('icon') && <span>{title}</span>}
            </Button>
          }
        />
      </RenderTooltip>

      <DropdownMenuContent className='min-w-48'>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
            value={p.currentStatus}
            onValueChange={handleStatusChange}
          >
            {Object.values(TaskStatus).map(status => (
              <QuickSwitchStatusItem status={status} key={status} />
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const QuickSwitchStatusItem = (p: { status: TaskStatus }) => {
  const Icon = getTaskStatusIcon(p.status)
  const title = getTaskStatusTitle(p.status)
  const textColor = getTaskStatusTextClassName(p.status)

  return (
    <DropdownMenuRadioItem
      closeOnClick
      value={p.status}
      className={cn('cursor-pointer', textColor)}
    >
      <Icon />
      <span>{title}</span>
    </DropdownMenuRadioItem>
  )
}
