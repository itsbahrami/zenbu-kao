import { BugBeetleIcon } from '@phosphor-icons/react'
import { Button } from '#/common/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '#/common/ui/empty'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'

export const ErrorCard = (p: { error: unknown; onRetry?: () => void }) => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant='icon'>
        <BugBeetleIcon />
      </EmptyMedia>

      <EmptyTitle>خطا</EmptyTitle>

      <EmptyDescription>
        خطایی پیش آمده: <code>{extractErrorMessage(p.error)}</code>
      </EmptyDescription>
    </EmptyHeader>

    <EmptyContent className='flex-row justify-center gap-2'>
      {p.onRetry && (
        <Button onClick={p.onRetry} variant='outline'>
          امتحان دوباره
        </Button>
      )}
    </EmptyContent>
  </Empty>
)
