import {
  ArrowSquareOutIcon,
  CalendarIcon,
  CopyIcon,
  LinkSimpleIcon,
  MusicNoteIcon,
  PrinterIcon,
  TranslateIcon,
} from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { cn } from 'cn'
import type { ReactNode } from 'react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import type { AahamatnFullResponse } from '#/features/api/client'
import { languageValueToMeta } from './Language'

const copy = (content: string) =>
  navigator.clipboard.writeText(content).catch(error =>
    toast.add({
      type: 'error',
      title: 'خطا در کپی',
      description: extractErrorMessage(error),
    }),
  )

export function AahamatnDetails(p: { aahamatn: AahamatnFullResponse }) {
  const {
    id,
    language,
    lyrics,
    title,
    artist,
    audioUrl,
    sourceUrl,
    updatedAt,
  } = p.aahamatn

  const lang = languageValueToMeta(language)
  const copyPageUrl = () => copy(window.location.href)
  const copyDataForPrompt = () => copy(JSON.stringify(p.aahamatn))

  return (
    <div
      dir={lang.dir}
      lang={lang.lang}
      className={cn(
        'flex flex-col gap-4 py-8 items-center text-center text-muted-foreground',
        lang.fontClass,
      )}
    >
      <p className='text-foreground font-bold text-3xl'>{title}</p>

      <p>{artist || '---'}</p>

      <div className='flex items-center justify-center gap-4'>
        <p className='inline-flex items-center gap-1'>
          <TranslateIcon />
          <span>{lang.label}</span>
        </p>

        <p className='inline-flex items-center gap-1 font-fa' lang='fa'>
          <CalendarIcon />
          <span>{updatedAt ? dateFmt.format(new Date(updatedAt)) : '---'}</span>
        </p>
      </div>

      <div className='flex items-center justify-center gap-2'>
        {audioUrl && (
          <ExternalLink tooltip='نسخه صوتی' href={audioUrl}>
            <MusicNoteIcon />
          </ExternalLink>
        )}

        {sourceUrl && (
          <ExternalLink tooltip='منبع' href={sourceUrl}>
            <ArrowSquareOutIcon />
          </ExternalLink>
        )}

        <RenderTooltip tooltip='پرینت'>
          <Button
            variant='outline'
            size='icon'
            nativeButton={false}
            render={
              <Link
                target='_blank'
                to='/apps/aahamatn/$id/print'
                params={{ id }}
              >
                <PrinterIcon />
              </Link>
            }
          />
        </RenderTooltip>

        <RenderTooltip tooltip='کپی لینک صفحه'>
          <Button variant='outline' size='icon' onClick={copyPageUrl}>
            <LinkSimpleIcon />
          </Button>
        </RenderTooltip>

        <RenderTooltip tooltip='کپی دیتا برای پرامپت'>
          <Button variant='outline' size='icon' onClick={copyDataForPrompt}>
            <CopyIcon />
          </Button>
        </RenderTooltip>
      </div>

      <pre className={cn('text-2xl text-foreground', lang.fontClass)}>
        {lyrics}
      </pre>
    </div>
  )
}

const dateFmt = new Intl.DateTimeFormat('fa-IR', {
  dateStyle: 'short',
  timeStyle: 'short',
})

const ExternalLink = (p: {
  href: string
  tooltip: string
  children: ReactNode
}) => (
  <RenderTooltip tooltip={p.tooltip}>
    <Button
      variant='outline'
      size='icon'
      nativeButton={false}
      render={
        <a href={p.href} lang='fa' target='_blank' rel='noopener noreferrer'>
          {p.children}
        </a>
      }
    />
  </RenderTooltip>
)
