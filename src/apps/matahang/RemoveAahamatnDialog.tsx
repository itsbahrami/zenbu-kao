import { useMutation } from '@tanstack/react-query'
import { Button } from '#/common/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '#/common/ui/dialog'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { deleteAahamatnMutation } from '#/features/api/client'
import { matahangActions, useIdOfAahamatnToRemove } from './store'

export function RemoveAahamatnDialog() {
  const close = matahangActions.closeRemoveAahamatnDialog
  const id = useIdOfAahamatnToRemove()
  const deleteM = useMutation({
    ...deleteAahamatnMutation(),
    onSuccess: (_d, _v, _o, ctx) =>
      void ctx.client.invalidateQueries().finally(close),
    onError: err =>
      toast.add({
        type: 'error',
        title: 'خطا',
        description: extractErrorMessage(err),
      }),
  })

  const handleRemove = () => deleteM.mutate({ path: { id: id || '' } })

  return (
    <Dialog open={id != null} onOpenChange={close}>
      <DialogContent className='sm:max-w-120'>
        <DialogHeader>
          <DialogTitle>حذف آهمتن</DialogTitle>
          <DialogDescription>
            آیا از حذف این آهمتن اطمینان دارید؟ این عمل غیرقابل بازگشت است.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='gap-2'>
          <Button variant='outline' onClick={close}>
            لغو
          </Button>

          <Button
            variant='destructive'
            onClick={handleRemove}
            disabled={deleteM.isPending}
          >
            {deleteM.isPending ? 'در حال حذف...' : 'حذف کن'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
