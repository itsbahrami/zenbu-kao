import {
  PencilSimpleIcon,
  PlaylistIcon,
  TrashSimpleIcon,
} from '@phosphor-icons/react'
import { createColumnHelper } from '@tanstack/react-table'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import type { AahamatnResponse } from '#/features/api/client'
import { useIsLoggedIn } from '#/features/auth/store'
import { DataTable, type DataTableFeatures } from '#/features/DataTable'
import { DataTableColumnHeader } from '#/features/DataTable/DataTableColumnHeader'
import { languageValueToMeta } from './Language'
import { matahangActions } from './store'

const columnHelper = createColumnHelper<DataTableFeatures, AahamatnResponse>()

const columns = columnHelper.columns([
  columnHelper.accessor('title', {
    header: p => <DataTableColumnHeader column={p.column} title='عنوان' />,
    cell: p => (
      <p dir='auto' className='whitespace-normal'>
        {p.row.original.title}
      </p>
    ),
  }),
  columnHelper.accessor('artist', {
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

export const AahamatnsTable = (p: { aahamatns: AahamatnResponse[] }) => (
  <div className='w-full'>
    <DataTable
      columns={columns}
      data={p.aahamatns}
      filter={{ columnName: 'title', placeholder: 'جستجوی عناوین...' }}
    />
  </div>
)

function AahamatnRowActions(p: { aahamatn: AahamatnResponse }) {
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
          <Button size='icon-sm' variant='outline' disabled>
            <PencilSimpleIcon />
          </Button>
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
