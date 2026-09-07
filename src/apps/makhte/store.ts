import { createStore, useSelector } from '@tanstack/react-store'
import type { Task } from './Task'

export type ViewMode = 'table' | 'kanban'

interface MakhteStoreShape {
  projectTitle: string
  viewMode: ViewMode
  isFileLoaded: boolean
  tasks: Task[]
}

const emptyState: MakhteStoreShape = {
  projectTitle: '',
  viewMode: 'kanban',
  isFileLoaded: false,
  tasks: [],
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
    a.setState(p => ({ ...p, tasks: p.tasks.map(t => t.id === id ? task : t) })),

  reset: () => a.setState(() => emptyState),
}))

export const makhteActions = makhteStore.actions

// ====================

export const useProjectTitle = () =>
  useSelector(makhteStore, s => s.projectTitle)
export const useViewMode = () => useSelector(makhteStore, s => s.viewMode)
export const useFileLoaded = () => useSelector(makhteStore, s => s.isFileLoaded)
