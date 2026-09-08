import { NavAppLogo } from './NavAppLogo'
import { NavOptions } from './NavOptions'
import { ProjectTitle } from './ProjectTitle'

export const AppNav = () => (
  <div className='flex items-center py-2 px-4 gap-4'>
    <NavAppLogo />

    <div className='mx-auto' />

    <ProjectTitle />

    <div className='mx-auto' />

    <NavOptions />
  </div>
)
