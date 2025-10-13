import { mdiFilterOutline, mdiSwapVertical } from "@mdi/js"
import { Button, BUTTON_SIZES } from "components/forms/Button"
import { ComputersOnly } from "components/layout/ComputersOnly"
import { FlexBox } from "components/layout/FlexBox"
import { PhonesAndTabletsOnly } from "components/layout/PhonesAndTabletsOnly"
import { CompactTableActions } from "components/tables/blocks/CompactTableActions"
import { ExpandedTableActions } from "components/tables/blocks/ExpandedTableActions"
import { TableFilters } from "components/tables/blocks/TableFilters"
import { TableFiltersDropdown } from "components/tables/blocks/TableFiltersDropdown"
import { TableSorter } from "components/tables/blocks/TableSorter"
import {
  FilterState,
  SortState,
  TableAction,
  TableProps,
} from "components/tables/Table"
import { useModalState } from "hooks/useModalState"
import React, { FC, useCallback, useMemo } from "react"
import { useTheme } from "styles/theme/useTheme"
import { isNotEmpty } from "utils/arrayHelpers"

export type TableActionsProps = {
  compact?: boolean
} & Pick<TableProps, "columnConfigs"> &
  Partial<
    Pick<
      TableProps,
      | "actions"
      | "filterState"
      | "onColumnSort"
      | "onFiltersChange"
      | "sortState"
    >
  >

export const TableActions: FC<TableActionsProps> = ({
  actions,
  columnConfigs,
  compact,
  filterState,
  onColumnSort,
  onFiltersChange,
  sortState,
}) => {
  const { closeModal, openModalWith } = useModalState()
  const theme = useTheme()

  const submitFilters = useCallback(
    (fs: FilterState) => {
      onFiltersChange!(fs)
      closeModal()
    },
    [closeModal, onFiltersChange],
  )

  const submitSort = useCallback(
    (s: SortState) => {
      onColumnSort!(s)
      closeModal()
    },
    [closeModal, onColumnSort],
  )

  const openFiltersModal = useCallback(() => {
    openModalWith({
      body: (
        <TableFilters
          columnConfigs={columnConfigs}
          filterState={filterState!}
          onFiltersChange={submitFilters}
        />
      ),
      title: "Filter Records",
      withNoActions: true,
    })
  }, [columnConfigs, filterState, openModalWith, submitFilters])

  const openSorterModal = useCallback(() => {
    openModalWith({
      body: (
        <TableSorter
          columnConfigs={columnConfigs}
          onColumnSort={submitSort}
          sortState={sortState}
        />
      ),
      title: "Sort Records",
      withNoActions: true,
    })
  }, [columnConfigs, openModalWith, sortState, submitSort])

  let [compactableActions, nonCompactableActions] = useMemo((): [
    TableAction[],
    TableAction[],
  ] => {
    const list = actions ? [...actions] : []
    const groupedActions = list.reduce(
      (partitions, action) => {
        const [compactables, nonCompactables] = partitions
        const compactable = !action.notCompactable

        compact && compactable
          ? compactables.push(action)
          : nonCompactables.push(action)
        return partitions
      },
      [[], []] as [TableAction[], TableAction[]],
    )

    return groupedActions
  }, [actions, compact])

  const filterIcon = theme.styles.table.filterButtonIcon || mdiFilterOutline

  return (
    <FlexBox
      alignItems={"center"}
      justifyContent={"flex-end"}
      fluid>
      <ComputersOnly>
        {onFiltersChange ? (
          <TableFiltersDropdown
            columnConfigs={columnConfigs}
            filterState={filterState!}
            onFiltersChange={submitFilters}
          />
        ) : null}
      </ComputersOnly>

      <PhonesAndTabletsOnly>
        {onFiltersChange ? (
          <Button
            compact
            icon={filterIcon}
            onClick={openFiltersModal}
            primary={false}
            size={BUTTON_SIZES.SMALL}
          />
        ) : null}

        {onColumnSort ? (
          <Button
            compact
            icon={mdiSwapVertical}
            onClick={openSorterModal}
            primary={false}
            size={BUTTON_SIZES.SMALL}
          />
        ) : null}
      </PhonesAndTabletsOnly>

      {isNotEmpty(nonCompactableActions) ? (
        <ExpandedTableActions actions={nonCompactableActions} />
      ) : null}
      {isNotEmpty(compactableActions) ? (
        <CompactTableActions actions={compactableActions} />
      ) : null}
    </FlexBox>
  )
}
