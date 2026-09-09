import { PlusIcon, TrashIcon } from '@phosphor-icons/react'
import { useRef } from 'react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/common/ui/dialog'
import { makhteActions, useFileLoaded } from './store'

export const TaskBtns = () =>
  useFileLoaded() ? (
    <ButtonGroup>
      <RenderTooltip tooltip='تسک جدید'>
        <Button size='icon' onClick={makhteActions.openCreateTaskDialog}>
          <PlusIcon />
        </Button>
      </RenderTooltip>

      <DeleteDoneTasksBtn />
    </ButtonGroup>
  ) : null

export function DeleteDoneTasksBtn() {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const handleRemoveAll = () => {
    if (!closeBtnRef.current) return

    makhteActions.removeDoneTasks()

    closeBtnRef.current.click()
  }

  return (
    <Dialog>
      <RenderTooltip tooltip='حذف تسک‌های انجام‌شده'>
        <DialogTrigger
          render={
            <Button size='icon' variant='outline'>
              <TrashIcon />
            </Button>
          }
        />
      </RenderTooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>حذف تسک‌های انجام‌شده</DialogTitle>
          <DialogDescription>
            آیا از حذف این تسک‌ها اطمینان دارید؟ این عمل غیرقابل بازگشت است.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='gap-2'>
          <DialogClose
            render={
              <Button variant='outline' ref={closeBtnRef}>
                لغو
              </Button>
            }
          />

          <Button variant='destructive' onClick={handleRemoveAll}>
            حذف کن
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
