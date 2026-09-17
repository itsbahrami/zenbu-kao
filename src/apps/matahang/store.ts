import { createStore, useSelector } from '@tanstack/react-store'

type AahamatnToRemovePayload = { id: string; callback: () => void }

interface MakhteStoreShape {
  aahamatnToRemove: AahamatnToRemovePayload | null
}

const emptyState: MakhteStoreShape = {
  aahamatnToRemove: null,
}

const matahangStore = createStore(emptyState, a => ({
  openRemoveAahamatnDialog: (aahamatnToRemove: AahamatnToRemovePayload) =>
    a.setState(p => ({ ...p, aahamatnToRemove })),

  closeRemoveAahamatnDialog: () =>
    a.setState(p => ({ ...p, aahamatnToRemove: null })),

  reset: () => a.setState(() => emptyState),
}))

export const matahangActions = matahangStore.actions

export const useAahamatnToRemove = () =>
  useSelector(matahangStore, s => s.aahamatnToRemove)
