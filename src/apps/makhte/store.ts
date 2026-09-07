import { createStore, useSelector } from '@tanstack/react-store'

export type ViewMode = 'table' | 'kanban'

interface MakhteStoreShape {
  projectTitle: string
  viewMode: ViewMode
  isFileLoaded: boolean
}

const emptyState: MakhteStoreShape = {
  projectTitle: '',
  viewMode: 'kanban',
  isFileLoaded: false,
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

  reset: () => a.setState(() => emptyState),
}))

export const makhteActions = makhteStore.actions

// ====================

export const useProjectTitle = () =>
  useSelector(makhteStore, s => s.projectTitle)
export const useViewMode = () => useSelector(makhteStore, s => s.viewMode)
export const useFileLoaded = () => useSelector(makhteStore, s => s.isFileLoaded)
