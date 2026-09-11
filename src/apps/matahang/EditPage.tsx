import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { updateAahamatnMutation } from '#/features/api/client'
import { AahamatnForm, type AahamatnFormHandler } from './AahamatnForm'
import { languages } from './Language'

export function EditPage(p: { id: string }) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  // TODO: CONTINUE.
  const updateM = useMutation(updateAahamatnMutation())

  const handler: AahamatnFormHandler = async values => {
    try {
      await updateM.mutateAsync({
        path: { id: p.id },
        body: {
          id: p.id,
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
      toast.add({ type: 'success', title: 'آپدیت شد' })
      navigate({ to: '/apps/matahang' })
    } catch (err) {
      toast.add({
        type: 'error',
        title: 'خطا',
        description: extractErrorMessage(err),
      })
    }
  }

  // TODO: <RenderQuery />
  return (
    <AahamatnForm defaultValues={null} isEditMode={true} handler={handler} />
  )
}
