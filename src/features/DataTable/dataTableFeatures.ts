import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createFilteredRowModel,
  createSortedRowModel,
  filterFn_includesString,
  filterFn_weakEquals,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
} from '@tanstack/react-table'

export const dataTableFeatures = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  sortedRowModel: createSortedRowModel(),
  filterFns: {
    includesString: filterFn_includesString,
    weakEquals: filterFn_weakEquals,
  },
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
})

/**
 * Pass this as the first generic argument to `ColumnDef`, `Column`, `Table`,
 * and `Row` so each type knows which feature APIs are available.
 */
export type DataTableFeatures = typeof dataTableFeatures
