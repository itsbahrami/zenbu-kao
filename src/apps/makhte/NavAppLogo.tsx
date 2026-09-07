import { FAVICON } from './FAVICON'

export const NavAppLogo = () => (
  <div className='flex items-center gap-1'>
    <img alt='' src={FAVICON} className='size-8' />

    <span className='font-bold text-lg'>مخته</span>
  </div>
)
