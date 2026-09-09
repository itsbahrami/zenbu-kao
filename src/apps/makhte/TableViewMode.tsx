import { useTableViewTasks } from './store'
import { TasksTable } from './TasksTable'

export const TableViewMode = () => <TasksTable tasks={useTableViewTasks()} />
