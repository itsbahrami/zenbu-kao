import { SpinnerGapIcon } from '@phosphor-icons/react'

export const LoadingSection = () => (
  <div className='p-4 flex items-center justify-center'>
    <SpinnerGapIcon className='animate-spin' size={40} />
  </div>
)
