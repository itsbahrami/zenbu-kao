import { FileOption } from './FileOption'
import { GettingStartedBtn } from './GettingStartedBtn'
import { OptionsBtns } from './OptionsBtns'
import { TaskBtns } from './TaskBtns'
import { ViewModeToggle } from './ViewModeToggle'

export const NavOptions = () => (
  <div className='flex items-center gap-2'>
    <GettingStartedBtn />
    <TaskBtns />
    <FileOption />
    <ViewModeToggle />
    <OptionsBtns />
  </div>
)
