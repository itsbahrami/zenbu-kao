import { createStore, useSelector } from '@tanstack/react-store'

export type ViewMode = 'table' | 'kanban'

interface MakhteStoreShape {
  projectTitle: string
  viewMode: ViewMode
}

const emptyState: MakhteStoreShape = {
  projectTitle: '',
  viewMode: 'kanban',
}

const makhteStore = createStore(emptyState, a => ({
  setProjectTitle: (projectTitle: string) =>
    a.setState(p => ({
      ...p,
      projectTitle,
    })),

  setViewMode: (viewMode: ViewMode) => a.setState(p => ({ ...p, viewMode })),

  reset: () => a.setState(() => emptyState),
}))

export const makhteActions = makhteStore.actions

// ====================

/** @returns {string} The current project title. */
export const useProjectTitle = (): string =>
  useSelector(makhteStore, s => s.projectTitle)

/** @returns {ViewMode} The current view mode. */
export const useViewMode = (): ViewMode =>
  useSelector(makhteStore, s => s.viewMode)
