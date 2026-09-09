import {
  ArrowDownIcon,
  ArrowsDownUpIcon,
  ArrowUpIcon,
} from '@phosphor-icons/react'
import type { Column, RowData } from '@tanstack/react-table'
import { cn } from 'cn'
import { Button } from '@/common/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/common/ui/dropdown-menu'
import type { DataTableFeatures } from './dataTableFeatures'

interface DataTableColumnHeaderProps<TData extends RowData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<DataTableFeatures, TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData extends RowData, TValue>(
  p: DataTableColumnHeaderProps<TData, TValue>,
) {
  if (!p.column.getCanSort()) {
    return <div className={cn(p.className)}>{p.title}</div>
  }

  return (
    <div className={cn('flex items-center gap-2', p.className)}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant='ghost'
              size='sm'
              className='-ml-3 h-8 data-[state=open]:bg-accent'
            >
              <span>{p.title}</span>

              {p.column.getIsSorted() === 'desc' ? (
                <ArrowDownIcon />
              ) : p.column.getIsSorted() === 'asc' ? (
                <ArrowUpIcon />
              ) : (
                <ArrowsDownUpIcon />
              )}
            </Button>
          }
        />

        <DropdownMenuContent align='start'>
          <DropdownMenuItem onClick={() => p.column.toggleSorting(false)}>
            <ArrowUpIcon />
            <span>صعودی</span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => p.column.toggleSorting(true)}>
            <ArrowDownIcon />
            <span>نزولی </span>
          </DropdownMenuItem>

          {/* <DropdownMenuSeparator /> */}

          {/* <DropdownMenuItem onClick={() => p.column.toggleVisibility(false)}>
            <EyeClosedIcon />
            <span>مخفی کن</span>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
