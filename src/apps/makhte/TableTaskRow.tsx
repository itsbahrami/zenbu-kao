import { TableCell, TableRow } from '#/common/ui/table'
import type { ITask } from './ITask'
import { QuickSwitchStatus } from './QuickSwitchStatus'
import { TaskRowActions } from './TaskRowActions'

export const TableTaskRow = (p: { task: ITask }) => (
  <TableRow>
    <TableCell className='text-muted-foreground' dir='auto'>
      {p.task.title}
    </TableCell>

    <TableCell>
      <QuickSwitchStatus currentStatus={p.task.status} taskId={p.task.id} />
    </TableCell>

    <TableCell>
      <TaskRowActions task={p.task} />
    </TableCell>
  </TableRow>
)
