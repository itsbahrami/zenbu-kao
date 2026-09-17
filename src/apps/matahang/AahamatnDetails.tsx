import {
  ArrowSquareOutIcon,
  CalendarIcon,
  CopyIcon,
  LinkSimpleIcon,
  MusicNoteIcon,
  PencilSimpleIcon,
  PrinterIcon,
  TranslateIcon,
  TrashSimpleIcon,
} from '@phosphor-icons/react'
import { Link, useNavigate } from '@tanstack/react-router'
import { cn } from 'cn'
import type { ReactNode } from 'react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import type { AahamatnFullResponse } from '#/features/api/client'
import { colorValueToMeta } from './Color'
import { languageValueToMeta } from './Language'
import { matahangActions } from './store'

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
    color,
    updatedAt,
  } = p.aahamatn

  const nav = useNavigate()
  const langMeta = languageValueToMeta(language)
  const colorMeta = colorValueToMeta(color)
  const copyPageUrl = () => copy(window.location.href)
  const copyDataForPrompt = () => copy(JSON.stringify(p.aahamatn))
  const handleDelete = () =>
    matahangActions.openRemoveAahamatnDialog({
      id: p.aahamatn.id,
      callback: () => nav({ to: '/apps/matahang' }),
    })

  return (
    <div
      dir={langMeta.dir}
      lang={langMeta.lang}
      className={cn(
        'flex flex-col gap-4 py-8 items-center text-center text-muted-foreground',
        langMeta.fontClass,
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-4 items-center justify-center min-w-36 rounded-lg p-8',
          colorMeta.bgClass,
        )}
      >
        <p className='text-foreground font-bold text-3xl'>{title}</p>

        <p className='text-foreground'>{artist || '---'}</p>
      </div>

      <div className='flex items-center justify-center gap-4'>
        <p className='inline-flex items-center gap-1'>
          <TranslateIcon />
          <span>{langMeta.label}</span>
        </p>

        <p className='inline-flex items-center gap-1 font-fa' lang='fa'>
          <CalendarIcon />
          <span>{updatedAt ? dateFmt.format(new Date(updatedAt)) : '---'}</span>
        </p>
      </div>

      <div className='flex items-center justify-center gap-2 flex-wrap'>
        {(sourceUrl || audioUrl) && (
          <ButtonGroup>
            {sourceUrl && (
              <ExternalLink tooltip='منبع' href={sourceUrl}>
                <ArrowSquareOutIcon />
              </ExternalLink>
            )}

            {audioUrl && (
              <ExternalLink tooltip='نسخه صوتی' href={audioUrl}>
                <MusicNoteIcon />
              </ExternalLink>
            )}
          </ButtonGroup>
        )}

        <ButtonGroup>
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
        </ButtonGroup>

        <ButtonGroup>
          <RenderTooltip tooltip='ویرایش'>
            <Button
              variant='outline'
              size='icon'
              nativeButton={false}
              render={
                <Link to='/apps/matahang/$id/edit' params={{ id }}>
                  <PencilSimpleIcon />
                </Link>
              }
            />
          </RenderTooltip>

          <RenderTooltip tooltip='حذف'>
            <Button variant='outline' size='icon' onClick={handleDelete}>
              <TrashSimpleIcon />
            </Button>
          </RenderTooltip>
        </ButtonGroup>
      </div>

      <p
        className={cn(
          'whitespace-pre-wrap text-foreground text-2xl',
          langMeta.fontClass,
        )}
      >
        {lyrics}
      </p>
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
