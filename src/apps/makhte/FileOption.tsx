import { CircleDashedIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '#/common/ui/button'
import { toast } from '#/common/ui/toast'
import { openTakhteFile } from './openTakhteFile'
import { makhteActions, useFileLoaded } from './store'

const showErrorToast = (title: string) => toast.add({ type: 'error', title })

const handleOpen = async () => (await openTakhteFile()).mapErr(showErrorToast)

export const FileOption = () =>
  useFileLoaded() ? (
    <Button variant='outline' onClick={makhteActions.closeFile}>
      <XIcon />
      <span>بستن</span>
    </Button>
  ) : (
    <Button variant='outline' onClick={handleOpen}>
      <CircleDashedIcon />
      <span>انتخاب</span>
    </Button>
  )
