import { KanbanViewMode } from './KanbanViewMode'
import { useViewMode } from './store'
import { TableViewMode } from './TableViewMode'

export const RenderView = () =>
  useViewMode() === 'kanban' ? <KanbanViewMode /> : <TableViewMode />
