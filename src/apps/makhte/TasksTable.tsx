import { createColumnHelper } from '@tanstack/react-table'
import { DataTable, type DataTableFeatures } from '#/features/DataTable'
import { DataTableColumnHeader } from '#/features/DataTable/DataTableColumnHeader'
import type { ITask } from './ITask'
import { TaskRowActions } from './TaskRowActions'

const columnHelper = createColumnHelper<DataTableFeatures, ITask>()

const columns = columnHelper.columns([
  columnHelper.accessor('title', {
    header: p => <DataTableColumnHeader column={p.column} title='عنوان'  />,
  }),
  columnHelper.accessor('status', {
    header: p => <DataTableColumnHeader column={p.column} title='وضعیت'  />,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'عملیات',
    cell: p => <TaskRowActions task={p.row.original} />,
  }),
])

export const TasksTable = (p: { tasks: ITask[] }) => (
  <div className='w-full'>
    <DataTable columns={columns} data={p.tasks} />
  </div>
)
