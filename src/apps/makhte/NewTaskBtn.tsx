import { PlusIcon } from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { makhteActions } from './store'

export const NewTaskBtn = () => (
  <RenderTooltip tooltip='تسک جدید'>
    <Button size='icon' onClick={makhteActions.openCreateTaskDialog}>
      <PlusIcon />
    </Button>
  </RenderTooltip>
)
