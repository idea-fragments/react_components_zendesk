import { ButtonProps }          from "components/forms/Button"
import { ItemProps }            from "components/forms/selectors/Dropdown/Item"
import { FlexBox }              from "components/layout/FlexBox"
import { ModalManager }         from "components/modals/ModalManager"
import { ModalStateProvider }   from "components/stateProviders/ModalStateProvider"
import { Pagination }           from "components/tables/blocks/Pagination"
import { DesktopTable }         from "components/tables/DesktopTable"
import { MobileTable }          from "components/tables/MobileTable"
import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import React, {
  ComponentType,
  PropsWithChildren,
  ReactNode
}                               from "react"
import styled                   from "styled-components"
import { CSS }                  from "styles/types"
import { isNotEmpty }           from "utils/arrayHelpers"

export type TableAction = {
  buttonProps?: Partial<ButtonProps>,
  Component?: ComponentType<PropsWithChildren<Record<string, any>>>,
  componentProps?: Record<string, any>,
  label: string,
  notCompactable?: boolean,
  onClick: () => void,
  dropdownItemProps?: Partial<ItemProps>
}

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

export type SortConfig = {
  fieldName: string,
  label: string,
}

export type ColumnConfig = {
  collapsible: boolean,
  css?: CSS,
  filter?: ItemFilterOptions,
  important: boolean,
  name: string,
  sort?: SortConfig,
  width?: string,
}

export type PaginationData = {
  page: number,
  pageSize: number,
  totalCount: number,
}

export type SortDirection = "asc" | "desc" | undefined

export type SortState = Record<string, SortDirection>

export type TableProps = {
  actions?: TableAction[],
  checkable?: boolean,
  checkedItems?: Set<ItemKey>,
  columnConfigs: Array<ColumnConfig>,
  emptyState?: ReactNode,
  filterState?: FilterState,
  helpText?: ReactNode,
  items: Array<Item>,
  mobileListview?: boolean,
  mobileListviewNodes?: ReactNode[],
  maxHeight?: string,
  sortState?: SortState,
  title?: string,
  onColumnSort?: (s: SortState) => void,
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

export let Table = ({
                      actions,
                      className,
                      pagination,
                      onItemsChecked,
                      onPageChange,
                      ...props
                    }: Props) => {
  const { isSmallComputerOrLarger } = useDeviceSizeWatcher()

  const setAllRowsSelectedTo = (isChecked: boolean) => {
    const rows = isChecked ? props.items.map((i) => i.key) : []
    onItemsChecked?.(new Set([...rows]))
  }

  const hasRowActions = props.items.some(
    (i: Item) => i.actions && isNotEmpty(i.actions),
  )

  return (
    <ModalStateProvider>
      <ModalManager />
      <FlexBox withRows className={className}>
        {
          isSmallComputerOrLarger
          ? <DesktopTable actions={actions}
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
    </ModalStateProvider>
  )
}

Table = styled(Table)``
