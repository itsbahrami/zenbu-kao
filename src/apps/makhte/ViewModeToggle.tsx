import { KanbanIcon, TableIcon } from '@phosphor-icons/react'
import { ButtonGroup } from '#/common/ui/button-group'
import { makhteActions, useViewMode } from './store'
import { ViewModeToggleBtn } from './ViewModeToggleBtn'

export const ViewModeToggle = () => (
  <ButtonGroup>
    <ViewModeToggleBtn
      icon={TableIcon}
      tooltip='نمای جدولی'
      isActive={useViewMode() === 'table'}
      onClick={() => makhteActions.setViewMode('table')}
    />

    <ViewModeToggleBtn
      icon={KanbanIcon}
      tooltip='نمای کانبان'
      isActive={useViewMode() === 'kanban'}
      onClick={() => makhteActions.setViewMode('kanban')}
    />
  </ButtonGroup>
)
