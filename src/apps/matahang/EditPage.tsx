import { SpinnerGapIcon } from '@phosphor-icons/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { ErrorCard } from '#/common/components/ErrorCard'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { RenderQuery } from '#/common/utils/RenderQuery'
import {
  getAahamatnOptions,
  updateAahamatnMutation,
} from '#/features/api/client'
import { AahamatnForm, type AahamatnFormHandler } from './AahamatnForm'
import { languages, languageValueToMeta } from './Language'

export function EditPage(p: { id: string }) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const aahamatnQ = useQuery(getAahamatnOptions({ path: { id: p.id } }))
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

  return (
    <RenderQuery
      isList={false}
      // biome-ignore lint/style/noNonNullAssertion: SAFE!
      data={aahamatnQ.data!}
      status={aahamatnQ.status}
      errorView={
        <div className='p-4 flex items-center justify-center'>
          <ErrorCard error={aahamatnQ.error} onRetry={aahamatnQ.refetch} />
        </div>
      }
      loadingView={
        <div className='p-4 flex items-center justify-center'>
          <SpinnerGapIcon className='animate-spin' size={40} />
        </div>
      }
      successView={aahamatn => (
        <AahamatnForm
          isEditMode={true}
          handler={handler}
          defaultValues={{
            artist: aahamatn.artist || '',
            audioUrl: aahamatn.audioUrl || '',
            color: aahamatn.color || '',
            language: languageValueToMeta(aahamatn.language).key,
            lyrics: aahamatn.lyrics,
            sourceUrl: aahamatn.sourceUrl || '',
            title: aahamatn.title,
          }}
        />
      )}
    />
  )
}
