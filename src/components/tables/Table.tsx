import { FlexBox }     from "components/layout/FlexBox"
import { Pagination }  from "components/tables/blocks/Pagination"
import { MobileTable } from "components/tables/MobileTable"
import { NiceTable }   from "components/tables/NiceTable"
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useState
}                      from "react"
import styled          from "styled-components"
import {
  DeviceSize,
  DeviceSizeChangeListener,
  deviceSizeWatcher,
}                      from "styles/DeviceSizeWatcher"
import { CSS }         from "styles/types"
import { isNotEmpty }  from "utils/arrayHelpers"

export type ItemKey = number | string
export type ItemContainerStyles = string
export type ItemAction = {
  action: () => void,
  label: string,
}

export type ItemFilterOptions = { fieldName: string, label: string } &
                                ({
                                   options: { label: string, value: string }[],
                                   type: "multi-select" | "select" | "searchable-select",
                                 } | { options?: undefined, type: "text" })

export type FilterState = Record<string, string | string[] | undefined>

export type Item = { [key: string]: ReactNode } & {
  actions?: Array<ItemAction>,
  checkDisabled?: boolean,
  clickDisabled?: boolean,
  containerStyles?: ItemContainerStyles,
  key: ItemKey,
}

export type ColumnConfig = {
  collapsible: boolean,
  css?: CSS,
  filter?: ItemFilterOptions,
  important: boolean,
  name: string,
  width?: string,
}

export type PaginationData = {
  page: number,
  pageSize: number,
  totalCount: number,
}

export type TableProps = {
  actions?: ReactNode,
  checkable?: boolean,
  checkedItems?: Set<ItemKey>,
  columnConfigs: Array<ColumnConfig>,
  emptyState?: ReactNode,
  filterState?: FilterState,
  helpText?: ReactNode,
  items: Array<Item>,
  maxHeight?: string,
  title?: string,
  onFiltersChange?: (changes: FilterState) => void,
  onItemChecked?: (key: ItemKey, isChecked: boolean) => void,
  onItemsChecked?: (rows: Set<ItemKey>) => void,
  onItemClick?: (key: ItemKey) => void,
  onItemHoverEnd?: (key: ItemKey) => void,
  onItemHoverStart?: (key: ItemKey) => void,
}

type Props = TableProps & {
  className?: string,
  pagination?: PaginationData,
  onPageChange?: (p: number) => void,
}

export type FinalizedTableProps = Props

const {
        getSize,
        isLargeComputer,
        isSmallComputer,
        subscribe,
        unsubscribe,
      } = deviceSizeWatcher

export let Table = ({
                      actions,
                      className,
                      pagination,
                      onItemsChecked,
                      onPageChange,
                      ...props
                    }: Props) => {

  const [, setDeviseSize] = useState<DeviceSize>(getSize())

  const handleDeviseSizeChange = useCallback<DeviceSizeChangeListener>(
    (s: DeviceSize) => { setDeviseSize(s) },
    [],
  )

  const setAllRowsSelectedTo = (isChecked: boolean) => {
    const rows = isChecked ? props.items.map((i) => i.key) : []
    onItemsChecked?.(new Set([...rows]))
  }

  useEffect(() => {
    const subId = subscribe(handleDeviseSizeChange)
    return () => { unsubscribe(subId) }
  }, [handleDeviseSizeChange])

  const hasRowActions = props.items.some(
    (i: Item) => i.actions && isNotEmpty(i.actions),
  )

  return (
    <FlexBox withRows className={className}>
      {
        isSmallComputer() || isLargeComputer()
        ? <NiceTable actions={actions}
                     hasRowActions={hasRowActions}
                     onSelectAllToggle={setAllRowsSelectedTo}
                     {...props}
        />
        : <MobileTable actions={actions}
                       hasRowActions={hasRowActions}
                       onSelectAllToggle={setAllRowsSelectedTo}
                       {...props} />
      }
      {
        pagination
        ? <Pagination {...pagination} onPageChange={onPageChange!!} />
        : null
      }
    </FlexBox>
  )
}

Table = styled(Table)``
