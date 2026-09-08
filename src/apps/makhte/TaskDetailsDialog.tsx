import { PencilSimpleIcon, TrashSimpleIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '#/common/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/common/ui/dialog'
import { makhteActions, useTaskToView } from './store'
import { TaskStatusBadge } from './TaskStatusBadge'

export function TaskDetailsDialog() {
  const task = useTaskToView()

  const handleClose = () => {
    if (!task) return
    makhteActions.closeViewTaskDialog()
  }

  const handleEdit = () => {
    if (!task) return
    handleClose()
    makhteActions.openEditTaskDialog(task)
  }

  const handleRemove = () => {
    if (!task) return
    handleClose()
    makhteActions.openRemoveTaskDialog(task)
  }

  return (
    <Dialog open={task != null} onOpenChange={handleClose}>
      {task && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>جزئیات تسک</DialogTitle>
          </DialogHeader>

          <div className='flex flex-col gap-2'>
            <h3 dir='auto' className='text-lg font-bold'>{task.title}</h3>

            <TaskStatusBadge status={task.status} />

            <p dir='auto' className='text-sm text-muted-foreground'>
              {task.description || '(بدون توضیحات)'}
            </p>
          </div>

          <DialogFooter className='flex justify-end'>
            <Button variant='destructive' onClick={handleRemove}>
              <TrashSimpleIcon />
              <span>حذف</span>
            </Button>

            <Button variant='outline' onClick={handleEdit}>
              <PencilSimpleIcon />
              <span>ویرایش</span>
            </Button>

            <Button variant='outline' onClick={handleClose}>
              <XIcon />
              <span>بستن</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}
