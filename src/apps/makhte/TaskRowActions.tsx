import {
  EyeIcon,
  PencilSimpleIcon,
  TrashSimpleIcon,
} from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import type { ITask } from './ITask'
import { makhteActions } from './store'

export const TaskRowActions = (p: { task: ITask }) => (
  <div className='flex items-center gap-1 max-w-max'>
    <RenderTooltip tooltip='جزئیات'>
      <Button
        size='icon-sm'
        variant='outline'
        onClick={() => makhteActions.openViewTaskDialog(p.task)}
      >
        <EyeIcon />
      </Button>
    </RenderTooltip>

    <RenderTooltip tooltip='ویرایش'>
      <Button
        size='icon-sm'
        variant='outline'
        onClick={() => makhteActions.openEditTaskDialog(p.task)}
      >
        <PencilSimpleIcon />
      </Button>
    </RenderTooltip>

    <RenderTooltip tooltip='حذف'>
      <Button
        size='icon-sm'
        variant='outline'
        onClick={() => makhteActions.openRemoveTaskDialog(p.task)}
      >
        <TrashSimpleIcon />
      </Button>
    </RenderTooltip>
  </div>
)
