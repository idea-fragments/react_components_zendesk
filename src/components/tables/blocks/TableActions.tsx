import { CompactTableActions } from "components/tables/blocks/CompactTableActions"
import { ExpandedTableActions } from "components/tables/blocks/ExpandedTableActions"
import { TableFilters } from "components/tables/blocks/TableFilters"
import { TableSorter } from "components/tables/blocks/TableSorter"
import {
  FilterState,
  SortState,
  TableAction,
  TableProps,
} from "components/tables/Table"
import { useModalState } from "hooks/useModalState"
import React, { FC, useCallback, useMemo } from "react"
import { isNotEmpty } from "utils/arrayHelpers"

export type TableActionsProps = { compact?: boolean } & Pick<
  TableProps,
  "columnConfigs"
> &
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
  const { openModalWith, closeModal } = useModalState()

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

  const defaultTableActions = useMemo((): TableAction[] => {
    const list = []

    if (onFiltersChange)
      list.push({
        label: "Filter",
        onClick: openFiltersModal,
        buttonProps: { primary: false },
      })
    if (onColumnSort)
      list.push({
        label: "Sort",
        onClick: openSorterModal,
        buttonProps: { primary: false },
      })

    return list
  }, [onColumnSort, onFiltersChange, openFiltersModal, openSorterModal])

  const addDefaultTableActions = useCallback(
    (compactables: TableAction[], nonCompactables: TableAction[]) => {
      compact
        ? compactables.push(...defaultTableActions)
        : nonCompactables.push(...defaultTableActions)
    },
    [compact, defaultTableActions],
  )

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

    addDefaultTableActions(...groupedActions)
    return groupedActions
  }, [actions, addDefaultTableActions, compact])

  return (
    <>
      {isNotEmpty(nonCompactableActions) ? (
        <ExpandedTableActions actions={nonCompactableActions} />
      ) : null}
      {isNotEmpty(compactableActions) ? (
        <CompactTableActions actions={compactableActions} />
      ) : null}
    </>
  )
}
