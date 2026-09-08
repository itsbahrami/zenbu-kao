import {
  CircleDashedIcon,
  FloppyDiskBackIcon,
  XIcon,
} from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'
import { toast } from '#/common/ui/toast'
import { openTakhteFile } from './openTakhteFile'
import { saveTakhteFile } from './saveTakhteFile'
import { makhteActions, useFileLoaded } from './store'

const showErrorToast = (title: string) => toast.add({ type: 'error', title })
const showSuccessToast = (title?: string) =>
  toast.add({ type: 'success', title: title || 'موفقیت بود.' })

const handleOpen = async () => (await openTakhteFile()).mapErr(showErrorToast)
const handleSave = async () =>
  (await saveTakhteFile()).match(
    () => showSuccessToast('با موفقیت ذخیره شد.'),
    err => showErrorToast(err),
  )

export const FileOption = () =>
  useFileLoaded() ? (
    <ButtonGroup>
      <RenderTooltip tooltip='بستن'>
        <Button variant='outline' size='icon' onClick={makhteActions.closeFile}>
          <XIcon />
        </Button>
      </RenderTooltip>

      <RenderTooltip tooltip='ذخیره'>
        <Button variant='outline' size='icon' onClick={handleSave}>
          <FloppyDiskBackIcon />
        </Button>
      </RenderTooltip>
    </ButtonGroup>
  ) : (
    <Button variant='outline' onClick={handleOpen}>
      <CircleDashedIcon />
      <span>انتخاب</span>
    </Button>
  )
