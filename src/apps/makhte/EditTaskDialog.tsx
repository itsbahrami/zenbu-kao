import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '#/common/ui/dialog'
import { makhteActions, useTaskToEdit } from './store'
import { Task } from './Task'
import { TaskForm, type TaskFormHandler } from './TaskForm'

const editTaskHandler: TaskFormHandler = async (values) => {
  makhteActions.replaceTask(values.id, Task.fromITask(values))
  makhteActions.closeEditTaskDialog()
}

export function EditTaskDialog() {
  const taskToEdit = useTaskToEdit()

  return (
    <Dialog
      open={taskToEdit != null}
      onOpenChange={makhteActions.closeEditTaskDialog}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ویرایش تسک</DialogTitle>
        </DialogHeader>

        <div className=''>
          <TaskForm isEditMode={true} defaultValues={taskToEdit} handler={editTaskHandler} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
