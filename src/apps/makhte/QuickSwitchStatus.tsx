import { DotsThreeVerticalIcon } from '@phosphor-icons/react'
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
import { Button } from '@/common/ui/button'
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
}) => {
  const handleStatusChange = (newStatus: TaskStatus) => {
    makhteActions.updateTaskStatus(p.taskId, newStatus)
  }

  return (
    <DropdownMenu>
      <RenderTooltip tooltip='تعویض سریع وضعیت'>
        <DropdownMenuTrigger
          render={
            <Button variant='outline' size='icon-xs'>
              <DotsThreeVerticalIcon />
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
