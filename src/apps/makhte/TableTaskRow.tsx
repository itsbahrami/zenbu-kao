import {
  EyeIcon,
  PencilSimpleIcon,
  TrashSimpleIcon,
} from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { TableCell, TableRow } from '#/common/ui/table'
import type { ITask } from './ITask'
import { TaskStatusBadge } from './TaskStatusBadge'

export const TableTaskRow = (p: { task: ITask }) => (
  <TableRow>
    <TableCell className='text-muted-foreground'>{p.task.title}</TableCell>

    <TableCell>
      <TaskStatusBadge status={p.task.status} />
    </TableCell>

    <TableCell className='text-xs text-muted-foreground flex items-center gap-1 max-w-max'>
      <RenderTooltip tooltip='جزئیات'>
        <Button size='icon-sm' variant='outline' disabled>
          <EyeIcon />
        </Button>
      </RenderTooltip>

      <RenderTooltip tooltip='ویرایش'>
        <Button size='icon-sm' variant='outline' disabled>
          <PencilSimpleIcon />
        </Button>
      </RenderTooltip>

      <RenderTooltip tooltip='حذف'>
        <Button size='icon-sm' variant='outline' disabled>
          <TrashSimpleIcon />
        </Button>
      </RenderTooltip>
    </TableCell>
  </TableRow>
)
