import { CalendarIcon, MicrophoneStageIcon, PrinterIcon, TranslateIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { cn } from 'cn'
import { ErrorSection } from '#/common/components/ErrorSection'
import { LoadingSection } from '#/common/components/LoadingSection'
import { RenderQuery } from '#/common/utils/RenderQuery'
import type { AahamatnFullResponse } from '#/features/api/client'
import { getAahamatnOptions } from '#/features/api/client'
import { languageValueToMeta } from './Language'

export function PrintPage(p: { id: string }) {
  const aahamatnQ = useQuery(getAahamatnOptions({ path: p }))

  return (
    <RenderQuery
      isList={false}
      // biome-ignore lint/style/noNonNullAssertion: SAFE!
      data={aahamatnQ.data!}
      status={aahamatnQ.status}
      loadingView={<LoadingSection />}
      successView={aahamatn => <AahamatnPrintView aahamatn={aahamatn} />}
      errorView={
        <ErrorSection error={aahamatnQ.error} onRetry={aahamatnQ.refetch} />
      }
    />
  )
}

const dateFmt = new Intl.DateTimeFormat('fa-IR', {
  dateStyle: 'short',
  timeStyle: 'short',
})

function AahamatnPrintView(p: { aahamatn: AahamatnFullResponse }) {
  const { language, lyrics, title, artist, updatedAt } = p.aahamatn
  const lang = languageValueToMeta(language)

  return (
    <div
      dir={lang.dir}
      lang={lang.lang}
      className={cn(
        'flex flex-col gap-4 py-4 items-center text-center text-black! bg-white!',
        lang.fontClass,
      )}
    >
      <p className='font-bold text-3xl'>{title}</p>

      <div className='grid grid-cols-2 gap-4 text-xs'>
        <p className='inline-flex items-center gap-1'>
          <MicrophoneStageIcon />
          <span className='font-bold'>{artist || '---'}</span>
        </p>

        <p className='inline-flex items-center gap-1'>
          <TranslateIcon />
          <span>{lang.label}</span>
        </p>

        <p className='inline-flex items-center gap-1 font-fa' lang='fa'>
          <CalendarIcon />
          <span>{updatedAt ? dateFmt.format(new Date(updatedAt)) : '---'}</span>
        </p>

        <p className='inline-flex items-center gap-1 font-fa' lang='fa'>
          <PrinterIcon />
          <span>{dateFmt.format(new Date())}</span>
        </p>
      </div>

      <p className={cn('whitespace-pre-wrap text-2xl', lang.fontClass)}>
        {lyrics}
      </p>
    </div>
  )
}
