import { FileOption } from './FileOption'
import { GettingStartedBtn } from './GettingStartedBtn'
import { NewTaskBtn } from './NewTaskBtn'
import { OptionsBtns } from './OptionsBtns'
import { ViewModeToggle } from './ViewModeToggle'

export const NavOptions = () => (
  <div className='flex items-center gap-2'>
    <GettingStartedBtn />
    <NewTaskBtn />
    <FileOption />
    <ViewModeToggle />
    <OptionsBtns />
  </div>
)
