import { createStore, useSelector } from '@tanstack/react-store'
import { SAMPLE_TASKS } from './SAMPLE_TASKS'
import type { Task } from './Task'
import type { TaskStatus } from './TaskStatus'

export type ViewMode = 'table' | 'kanban'

interface MakhteStoreShape {
  projectTitle: string
  viewMode: ViewMode
  isFileLoaded: boolean
  tasks: Task[]
}

const emptyState: MakhteStoreShape = {
  projectTitle: '',
  viewMode: 'table',
  isFileLoaded: false,
  tasks: SAMPLE_TASKS,
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

  addTask: (task: Task) =>
    a.setState(p => ({ ...p, tasks: [...p.tasks, task] })),

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
export const useTableViewTasks = () => useSelector(makhteStore, s => s.tasks)
export const useKanbanViewTasks = (): Record<TaskStatus, Task[]> =>
  useSelector(makhteStore, s => ({
    Backlog: s.tasks.filter(t => t.status === 'Backlog'),
    Todo: s.tasks.filter(t => t.status === 'Todo'),
    Doing: s.tasks.filter(t => t.status === 'Doing'),
    Waiting: s.tasks.filter(t => t.status === 'Waiting'),
    Done: s.tasks.filter(t => t.status === 'Done'),
  }))
