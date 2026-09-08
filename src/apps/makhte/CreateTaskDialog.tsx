import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '#/common/ui/dialog'
import { generateShortId } from '#/common/utils/generateShortId'
import { makhteActions, useCreateTaskOpened } from './store'
import { Task } from './Task'
import { TaskForm, type TaskFormHandler } from './TaskForm'

const newTaskHandler: TaskFormHandler = async (values, resetForm) => {
  const newTask = Task.fromITask(values).setId(generateShortId())
  makhteActions.addTask(newTask)
  resetForm()
}

export const CreateTaskDialog = () => (
  <Dialog
    open={useCreateTaskOpened()}
    onOpenChange={makhteActions.setCreateTaskDialog}
  >
    <DialogContent>
      <DialogHeader>
        <DialogTitle>تسک جدید</DialogTitle>
      </DialogHeader>

      <div className=''>
        <TaskForm defaultValues={null} handler={newTaskHandler} />
      </div>
    </DialogContent>
  </Dialog>
)
