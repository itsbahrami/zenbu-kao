import { PlusIcon } from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { makhteActions, useFileLoaded } from './store'

export const NewTaskBtn = () =>
  useFileLoaded() ? (
    <RenderTooltip tooltip='تسک جدید'>
      <Button size='icon' onClick={makhteActions.openCreateTaskDialog}>
        <PlusIcon />
      </Button>
    </RenderTooltip>
  ) : null
