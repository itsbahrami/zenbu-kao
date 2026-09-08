import { createStore, useSelector } from '@tanstack/react-store'
import type { ITask } from './ITask'
import { SAMPLE_TASKS } from './SAMPLE_TASKS'
import { Task } from './Task'
import type { TaskStatus } from './TaskStatus'

export type ViewMode = 'table' | 'kanban'

interface MakhteStoreShape {
  projectTitle: string
  viewMode: ViewMode
  isFileLoaded: boolean
  tasks: Task[]
  isCreateTaskDialogOpen: boolean
  taskToView: ITask | null
  taskToEdit: ITask | null
  taskToRemove: ITask | null
}

const emptyState: MakhteStoreShape = {
  projectTitle: '',
  viewMode: 'table',
  isFileLoaded: false,
  tasks: SAMPLE_TASKS,
  isCreateTaskDialogOpen: false,
  taskToView: null,
  taskToEdit: null,
  taskToRemove: null,
}

const makhteStore = createStore(emptyState, a => ({
  setProjectTitle: (projectTitle: string) =>
    a.setState(p => ({
      ...p,
      projectTitle,
    })),

  setViewMode: (viewMode: ViewMode) => a.setState(p => ({ ...p, viewMode })),

  openFile: () => a.setState(p => ({ ...p, isFileLoaded: true })),

  closeFile: () => a.setState(p => ({ ...p, isFileLoaded: false })),

  openCreateTaskDialog: () =>
    a.setState(p => ({ ...p, isCreateTaskDialogOpen: true })),

  closeCreateTaskDialog: () =>
    a.setState(p => ({ ...p, isCreateTaskDialogOpen: false })),

  setCreateTaskDialog: (isCreateTaskDialogOpen: boolean) =>
    a.setState(p => ({ ...p, isCreateTaskDialogOpen })),

  openViewTaskDialog: (taskToView: ITask) =>
    a.setState(p => ({ ...p, taskToView })),

  closeViewTaskDialog: () => a.setState(p => ({ ...p, taskToView: null })),

  openEditTaskDialog: (taskToEdit: ITask) =>
    a.setState(p => ({ ...p, taskToEdit })),

  closeEditTaskDialog: () => a.setState(p => ({ ...p, taskToEdit: null })),

  openRemoveTaskDialog: (taskToRemove: ITask) =>
    a.setState(p => ({ ...p, taskToRemove })),

  closeRemoveTaskDialog: () => a.setState(p => ({ ...p, taskToRemove: null })),

  addTask: (task: ITask) =>
    a.setState(p => ({ ...p, tasks: [...p.tasks, Task.fromITask(task)] })),

  removeTask: (id: string) =>
    a.setState(p => ({ ...p, tasks: p.tasks.filter(t => t.id !== id) })),

  replaceTask: (id: string, task: Task) =>
    a.setState(p => ({
      ...p,
      tasks: p.tasks.map(t => (t.id === id ? task : t)),
    })),

  reset: () => a.setState(() => emptyState),
}))

export const makhteActions = makhteStore.actions

// ====================

export const useProjectTitle = () =>
  useSelector(makhteStore, s => s.projectTitle)

export const useViewMode = () => useSelector(makhteStore, s => s.viewMode)

export const useFileLoaded = () => useSelector(makhteStore, s => s.isFileLoaded)

export const useCreateTaskOpened = () =>
  useSelector(makhteStore, s => s.isCreateTaskDialogOpen)

export const useTaskToView = () => useSelector(makhteStore, s => s.taskToView)

export const useTaskToEdit = () => useSelector(makhteStore, s => s.taskToEdit)

export const useTaskToRemove = () =>
  useSelector(makhteStore, s => s.taskToRemove)

export const useTableViewTasks = () => useSelector(makhteStore, s => s.tasks)

export const useKanbanViewTasks = (): Record<TaskStatus, Task[]> =>
  useSelector(makhteStore, s => ({
    Backlog: s.tasks.filter(t => t.status === 'Backlog'),
    Todo: s.tasks.filter(t => t.status === 'Todo'),
    Doing: s.tasks.filter(t => t.status === 'Doing'),
    Waiting: s.tasks.filter(t => t.status === 'Waiting'),
    Done: s.tasks.filter(t => t.status === 'Done'),
  }))
