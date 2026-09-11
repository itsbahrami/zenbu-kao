import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { createAahamatnMutation } from '#/features/api/client'
import { AahamatnForm, type AahamatnFormHandler } from './AahamatnForm'
import { languages } from './Language'

export function CreatePage() {
  const queryClient = useQueryClient()
  const createM = useMutation(createAahamatnMutation())

  const handler: AahamatnFormHandler = async (values, resetForm) => {
    try {
      await createM.mutateAsync({
        body: {
          artist: values.artist.trim() || null,
          audioUrl: values.audioUrl.trim() || null,
          color: values.color.trim() || null,
          language: languages[values.language].value,
          lyrics: values.lyrics.trim(),
          sourceUrl: values.sourceUrl.trim() || null,
          title: values.title.trim(),
        },
      })

      void queryClient.invalidateQueries()
      resetForm()
      toast.add({ type: 'success', title: 'ثبت شد' })
    } catch (err) {
      toast.add({
        type: 'error',
        title: 'خطا',
        description: extractErrorMessage(err),
      })
    }
  }

  return (
    <AahamatnForm defaultValues={null} isEditMode={false} handler={handler} />
  )
}
