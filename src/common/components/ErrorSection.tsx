import { ErrorCard } from './ErrorCard'

export const ErrorSection = (p: { error: unknown; onRetry?: () => void }) => (
  <div className='p-4 flex items-center justify-center'>
    <ErrorCard error={p.error} onRetry={p.onRetry} />
  </div>
)
