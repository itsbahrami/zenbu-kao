import { FileOption } from './FileOption'
import { NewTaskBtn } from './NewTaskBtn'
import { OptionsBtns } from './OptionsBtns'
import { ViewModeToggle } from './ViewModeToggle'

export const NavOptions = () => (
  <div className='flex items-center gap-2'>
    <NewTaskBtn />
    <FileOption />
    <ViewModeToggle />
    <OptionsBtns />
  </div>
)
