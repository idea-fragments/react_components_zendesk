import { ComputersOnly } from "components/layout/ComputersOnly"
import { FlexBox } from "components/layout/FlexBox"
import { PhonesAndTabletsOnly } from "components/layout/PhonesAndTabletsOnly"
import { SelectionCount } from "components/tables/blocks/SelectionCount"
import { TableActions } from "components/tables/blocks/TableActions"
import {
  ColumnConfig,
  FilterState,
  SortState,
  TableAction,
} from "components/tables/Table"
import React from "react"
import { SPACINGS } from "styles/spacings"

type Props = {
  actions?: TableAction[]
  checkable?: boolean
  columnConfigs: ColumnConfig[]
  filterState?: FilterState
  selectedCount: number
  sortState?: SortState
  totalPageCount: number
  useDropdownFilters?: boolean
  onFiltersChange?: (changes: FilterState) => void
  onColumnSort?: (s: SortState) => void
  onSelectAllToggle?: (isChecked: boolean) => void
}

/**
 * TableHeader displays selection count and table actions with responsive behavior.
 * - Desktop: Shows selection count text and standard table actions
 * - Mobile: Shows "Select All/Deselect All" button and compact table actions
 */
export const TableHeader = ({
  actions,
  columnConfigs,
  filterState,
  selectedCount,
  sortState,
  totalPageCount,
  onFiltersChange,
  onColumnSort,
}: Props) => {
  return (
    <>
      <ComputersOnly>
        <FlexBox
          fluid
          alignItems={"center"}
          gap={SPACINGS.SM}>
          <SelectionCount
            selectedCount={selectedCount}
            totalPageCount={totalPageCount}
          />
          <TableActions
            actions={actions}
            columnConfigs={columnConfigs}
            filterState={filterState}
            onFiltersChange={onFiltersChange}
          />
        </FlexBox>
      </ComputersOnly>

      <PhonesAndTabletsOnly>
        <FlexBox
          alignItems={"center"}
          gap={SPACINGS.SM}>
          <SelectionCount
            selectedCount={selectedCount}
            totalPageCount={totalPageCount}
          />

          <TableActions
            actions={actions}
            columnConfigs={columnConfigs}
            compact
            filterState={filterState}
            onColumnSort={onColumnSort}
            onFiltersChange={onFiltersChange}
            sortState={sortState}
          />
        </FlexBox>
      </PhonesAndTabletsOnly>
    </>
  )
}
