import { createStore, useSelector } from '@tanstack/react-store'

interface MakhteStoreShape {
  idOfAahamatnToRemove: string | null
}

const emptyState: MakhteStoreShape = {
  idOfAahamatnToRemove: null,
}

const matahangStore = createStore(emptyState, a => ({
  openRemoveAahamatnDialog: (idOfAahamatnToRemove: string) =>
    a.setState(p => ({ ...p, idOfAahamatnToRemove })),

  closeRemoveAahamatnDialog: () =>
    a.setState(p => ({ ...p, idOfAahamatnToRemove: null })),

  reset: () => a.setState(() => emptyState),
}))

export const matahangActions = matahangStore.actions

export const useIdOfAahamatnToRemove = () =>
  useSelector(matahangStore, s => s.idOfAahamatnToRemove)
