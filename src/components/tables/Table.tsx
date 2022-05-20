import { FlexBox }                                            from "components/layout/FlexBox"
import { Pagination }                                         from "components/tables/blocks/Pagination"
import { MobileTable }                                        from "components/tables/MobileTable"
import { NiceTable }                                          from "components/tables/NiceTable"
import { SimpleTable }                                        from "components/tables/SimpleTable"
import React, { ReactNode, useCallback, useEffect, useState } from "react"
import styled, { CSSProp }                                    from "styled-components"
import type {
  DeviceSize,
  DeviceSizeChangeListener,
}                                                             from "styles/DeviceSizeWatcher"
import { deviceSizeWatcher }                                  from "styles/DeviceSizeWatcher"
import { isNotEmpty }                                         from "utils/arrayHelpers"

export type ItemKey = number | string
export type ItemContainerStyles = string
export type ItemAction = {
  action: () => void,
  label: string,
}

export type ItemFilterOptions = { name: string } &
  ({
    options: { label: string, value: string }[],
    type: "select",
  } | { options: undefined, type: "text" })

export type Item = { [key: string]: ReactNode } & {
  actions?: Array<ItemAction>,
  checkDisabled?: boolean,
  clickDisabled?: boolean,
  containerStyles?: ItemContainerStyles,
  key: ItemKey,
}

export type ColumnConfig = {
  collapsible: boolean,
  css?: CSSProp,
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

type ActionsCreatorParams = {
  checkedItems: Set<ItemKey>
}

export type TableProps = {
  actions?: (p: ActionsCreatorParams) => ReactNode[],
  checkable?: boolean,
  checkedItems?: Set<ItemKey>,
  columnConfigs: Array<ColumnConfig>,
  emptyState?: ReactNode,
  helpText?: ReactNode,
  initialFilterValues?: { [key: string]: string },
  items: Array<Item>,
  title?: string,
  onFilterChange?: (name: string, value: any) => void,
  onItemChecked?: (key: ItemKey, isChecked: boolean) => void,
  onItemsChecked?: (rows: Set<ItemKey>) => void,
  onItemClick?: (key: ItemKey) => void,
  onItemHoverEnd?: (key: ItemKey) => void,
  onItemHoverStart?: (key: ItemKey) => void,
}

type Props = TableProps & {
  className?: string,
  nice?: boolean,
  pagination?: PaginationData,
  onPageChange?: (p: number) => void,
}

const {
        getSize,
        isLargeComputer,
        isSmallComputer,
        subscribe,
        unsubscribe,
      } = deviceSizeWatcher

export let Table = ({
// @ts-ignore
                      action,
                      actions,
                      className,
                      nice = true,
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

  if (action && !actions) { actions = () => [action] }

  const largeTable = () => nice
                           ? <NiceTable actions={actions}
                                        hasRowActions={hasRowActions}
                                        onSelectAllToggle={setAllRowsSelectedTo}
                                        {...props}
                           />
                           : <SimpleTable actions={actions}
                                          hasRowActions={hasRowActions}
                                          onSelectAllToggle={setAllRowsSelectedTo}
                                          {...props}
                           />
  return (
    <FlexBox withRows className={className}>
      {
        isSmallComputer() || isLargeComputer()
        ? largeTable()
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
