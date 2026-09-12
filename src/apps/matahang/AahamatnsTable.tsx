import {
  PencilSimpleIcon,
  PlaylistIcon,
  TrashSimpleIcon,
} from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { createColumnHelper } from '@tanstack/react-table'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import type { AahamatnMinimalResponse } from '#/features/api/client'
import { useIsLoggedIn } from '#/features/auth/store'
import { DataTable, type DataTableFeatures } from '#/features/DataTable'
import { DataTableColumnHeader } from '#/features/DataTable/DataTableColumnHeader'
import { languageValueToMeta } from './Language'
import { matahangActions } from './store'

const columnHelper = createColumnHelper<
  DataTableFeatures,
  AahamatnMinimalResponse
>()

const columns = columnHelper.columns([
  columnHelper.accessor('title', {
    filterFn: 'includesString',
    header: p => <DataTableColumnHeader column={p.column} title='عنوان' />,
    cell: p => (
      <p dir='auto' className='whitespace-normal'>
        {p.row.original.title}
      </p>
    ),
  }),
  columnHelper.accessor('artist', {
    filterFn: 'includesString',
    header: p => <DataTableColumnHeader column={p.column} title='هنرمند' />,
    cell: p => (
      <p dir='auto' className='whitespace-normal'>
        {p.row.original.artist || '-'}
      </p>
    ),
  }),
  columnHelper.accessor('language', {
    header: p => <DataTableColumnHeader column={p.column} title='زبان' />,
    cell: p => (
      <p dir='auto' className='whitespace-normal'>
        {languageValueToMeta(p.row.original.language).label}
      </p>
    ),
  }),
  columnHelper.display({
    id: 'actions',
    header: 'عملیات',
    cell: p => <AahamatnRowActions aahamatn={p.row.original} />,
  }),
])

export const AahamatnsTable = (p: { aahamatns: AahamatnMinimalResponse[] }) => (
  <div className='w-full'>
    <DataTable
      columns={columns}
      data={p.aahamatns}
      filters={[
        { id: 'title', columnName: 'title', placeholder: 'جستجوی عناوین' },
        { id: 'artist', columnName: 'artist', placeholder: 'جستجوی هنرمندان' },
      ]}
    />
  </div>
)

function AahamatnRowActions(p: { aahamatn: AahamatnMinimalResponse }) {
  const isLoggedIn = useIsLoggedIn()

  return (
    <div className='flex items-center gap-1 max-w-max'>
      <RenderTooltip tooltip='جزئیات'>
        <Button size='icon-sm' variant='outline' disabled>
          <PlaylistIcon />
        </Button>
      </RenderTooltip>

      {isLoggedIn && (
        <RenderTooltip tooltip='ویرایش'>
          <Button
            size='icon-sm'
            variant='outline'
            nativeButton={false}
            render={
              <Link to='/apps/matahang/$id/edit' params={{ id: p.aahamatn.id }}>
                <PencilSimpleIcon />
              </Link>
            }
          />
        </RenderTooltip>
      )}

      {isLoggedIn && (
        <RenderTooltip tooltip='حذف'>
          <Button
            size='icon-sm'
            variant='outline'
            onClick={() =>
              matahangActions.openRemoveAahamatnDialog(p.aahamatn.id)
            }
          >
            <TrashSimpleIcon />
          </Button>
        </RenderTooltip>
      )}
    </div>
  )
}
