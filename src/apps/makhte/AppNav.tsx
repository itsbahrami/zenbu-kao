import { NavAppLogo } from './NavAppLogo'
import { NavOptions } from './NavOptions'

export const AppNav = () => (
  <div className='flex items-center py-2 px-4 gap-4'>
    <NavAppLogo />

    <div className='mx-auto' />

    <NavOptions />
  </div>
)
