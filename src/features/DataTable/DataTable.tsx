import {
  type ColumnDef,
  type ColumnFiltersState,
  type RowData,
  type SortingState,
  useTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { Input } from '#/common/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/ui/table'
import { type DataTableFeatures, dataTableFeatures } from '@/features/DataTable'

type Filter = {
  id: string
  columnName: string
  placeholder: string
}

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
  filters?: Filter[]
}

export function DataTable<TData extends RowData>(p: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useTable({
    features: dataTableFeatures,
    data: p.data,
    columns: p.columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    state: { sorting, columnFilters },
  })

  return (
    <div className=''>
      {p.filters?.length ? (
        <div className='flex items-center py-4 flex-col sm:flex-row gap-2'>
          {p.filters.map(filter => (
            <FilterInput
              key={filter.id}
              filter={filter}
              value={
                (table
                  .getColumn(filter.columnName)
                  ?.getFilterValue() as string) || ''
              }
              onChange={value =>
                table.getColumn(filter.columnName)?.setFilterValue(value)
              }
            />
          ))}
        </div>
      ) : null}

      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={p.columns.length}
                  className='h-24 text-center'
                >
                  (خالی)
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const FilterInput = (p: {
  filter: Filter
  value: string
  onChange: (value: string) => void
}) => (
  <Input
    dir='auto'
    placeholder={p.filter.placeholder}
    value={p.value}
    onChange={e => p.onChange(e.target.value)}
  />
)
