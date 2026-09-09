import { Button } from '#/common/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/common/ui/dialog'
import { makhteActions, useTaskToRemove } from './store'

const handleRemove = (taskId: string) => {
  makhteActions.removeTask(taskId)
  makhteActions.closeRemoveTaskDialog()
}

const handleCancel = () => {
  makhteActions.closeRemoveTaskDialog()
}

const handleClose = (opened: boolean) => {
  if (opened) return
  makhteActions.closeRemoveTaskDialog()
}

export function RemoveTaskDialog() {
  const taskToRemove = useTaskToRemove()

  return (
    <Dialog open={taskToRemove != null} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-120'>
        <DialogHeader>
          <DialogTitle>حذف تسک</DialogTitle>
          <DialogDescription>
            آیا از حذف این تسک اطمینان دارید؟ این عمل غیرقابل بازگشت است.
          </DialogDescription>
        </DialogHeader>

        <div className='py-2 text-xs text-muted-foreground'>
          <p>تسک: </p>

          <p className='text-foreground' dir='auto'>
            {taskToRemove?.title || '-'}
          </p>
        </div>

        <DialogFooter className='gap-2'>
          <Button variant='outline' onClick={handleCancel}>
            لغو
          </Button>

          <Button
            variant='destructive'
            onClick={() => handleRemove(taskToRemove?.id ?? '')}
          >
            حذف کن
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
