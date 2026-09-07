import { FileOption } from './FileOption'
import { OptionsBtns } from './OptionsBtns'
import { ViewModeToggle } from './ViewModeToggle'

export const NavOptions = () => (
  <div className='flex items-center gap-2'>
    <FileOption />
    <ViewModeToggle />
    <OptionsBtns />
  </div>
)
