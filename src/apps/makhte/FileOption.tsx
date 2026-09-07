import { CircleDashedIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '#/common/ui/button'
import { useFileLoaded } from './store'

export const FileOption = () =>
  useFileLoaded() ? (
    <Button variant='outline' disabled>
      <XIcon />
      <span>بستن</span>
    </Button>
  ) : (
    <Button variant='outline' disabled>
      <CircleDashedIcon />
      <span>انتخاب</span>
    </Button>
  )
