import { ButtonProps } from "components/forms/Button"
import { ItemProps } from "components/forms/selectors/Dropdown/Item"
import { FlexBox } from "components/layout/FlexBox"
import { ModalManager } from "components/modals/ModalManager"
import { ModalStateProvider } from "components/stateProviders/ModalStateProvider"
import { Pagination } from "components/tables/blocks/Pagination"
import { Title } from "components/tables/blocks/Title"
import { HelpText } from "components/tables/blocks/HelpText"
import { TableHeader } from "components/tables/blocks/TableHeader"
import { DesktopTable } from "components/tables/DesktopTable"
import { DesktopTableV2 } from "components/tables/DesktopTableV2"
import { MobileTable } from "components/tables/MobileTable"
import { MobileTableV2 } from "components/tables/MobileTableV2"
import { useDeviceSizeWatcher } from "hooks/useDeviceSizeWatcher"
import React, { ComponentType, PropsWithChildren, ReactNode } from "react"
import styled, { css } from "styled-components"
import { CSS } from "styles/types"
import { SPACINGS } from "styles/spacings"
import { isNotEmpty } from "utils/arrayHelpers"

export type TableAction = {
  buttonProps?: Partial<ButtonProps>
  Component?: ComponentType<PropsWithChildren<Record<string, any>>>
  componentProps?: Record<string, any>
  label: string
  notCompactable?: boolean
  onClick: () => void
  dropdownItemProps?: Partial<ItemProps>
}

export type ItemKey = number | string
export type ItemContainerStyles = string
export type ItemAction = {
  action: () => void
  label: string
}

export type ItemFilterOptions = { fieldName: string; label: string } & (
  | {
      options: { label: string; value: string }[]
      type: "multi-select" | "select" | "searchable-select"
    }
  | { options?: undefined; type: "text" }
)

export type FilterState = Record<string, string | string[] | undefined>

export type Item = { [key: string]: ReactNode } & {
  actions?: Array<ItemAction>
  checkDisabled?: boolean
  clickDisabled?: boolean
  containerStyles?: ItemContainerStyles
  key: ItemKey
}

export type SortConfig = {
  fieldName: string
  label: string
}

export type ColumnConfig = {
  collapsible: boolean
  css?: CSS
  filter?: ItemFilterOptions
  // Allows column to expand to fill available space while respecting min-width
  flexible?: boolean
  important: boolean
  name: string
  sort?: SortConfig
  width?: string
}

export type PaginationData = {
  page: number
  pageSize: number
  totalCount: number
}

export type SortDirection = "asc" | "desc" | undefined

export type SortState = Record<string, SortDirection>

export type DesktopTableV2Props = {
  showStickyShadow?: boolean
  showStickyBorder?: boolean
}

export type TableProps = {
  actions?: TableAction[]
  checkable?: boolean
  checkedItems?: Set<ItemKey>
  columnConfigs: Array<ColumnConfig>
  desktopTableProps?: DesktopTableV2Props
  emptyState?: ReactNode
  filterState?: FilterState
  helpText?: ReactNode
  items: Array<Item>
  maxHeight?: string
  mobileListview?: boolean
  mobileListviewNodes?: ReactNode[]
  onColumnSort?: (s: SortState) => void
  onFiltersChange?: (changes: FilterState) => void
  onItemChecked?: (key: ItemKey, isChecked: boolean) => void
  onItemClick?: (key: ItemKey) => void
  onItemHoverEnd?: (key: ItemKey) => void
  onItemHoverStart?: (key: ItemKey) => void
  onItemsChecked?: (rows: Set<ItemKey>) => void
  sortState?: SortState
  title?: string
  useLegacyDesktopTable?: boolean
  useLegacyMobileTable?: boolean
}

type Props = TableProps & {
  className?: string
  pagination?: PaginationData
  onPageChange?: (p: number) => void
  onPageSizeChange?: (size: number) => void
}

export type FinalizedTableProps = Props

export let Table = ({
  actions,
  className,
  desktopTableProps,
  onItemsChecked,
  onPageChange,
  onPageSizeChange,
  pagination,
  useLegacyDesktopTable = false,
  useLegacyMobileTable = false,
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
      <FlexBox
        withRows
        className={className}>
        <FlexBox
          _css={css`
            margin-bottom: ${SPACINGS.SM};
          `}
          justifyContent={"space-between"}
          withRows>
          {props.title ? <Title>{props.title}</Title> : null}
          {props.helpText ? <HelpText>{props.helpText}</HelpText> : null}
          <TableHeader
            actions={actions}
            checkable={props.checkable}
            columnConfigs={props.columnConfigs}
            filterState={props.filterState}
            selectedCount={props.checkedItems?.size || 0}
            sortState={props.sortState}
            totalPageCount={props.items.length}
            onFiltersChange={props.onFiltersChange}
            onColumnSort={props.onColumnSort}
            onSelectAllToggle={setAllRowsSelectedTo}
          />
        </FlexBox>
        {isSmallComputerOrLarger ? (
          useLegacyDesktopTable ? (
            <DesktopTable
              actions={actions}
              hasRowActions={hasRowActions}
              onSelectAllToggle={setAllRowsSelectedTo}
              {...props}
            />
          ) : (
            <DesktopTableV2
              actions={actions}
              hasRowActions={hasRowActions}
              onSelectAllToggle={setAllRowsSelectedTo}
              {...desktopTableProps}
              {...props}
            />
          )
        ) : useLegacyMobileTable ? (
          <MobileTable
            actions={actions}
            hasRowActions={hasRowActions}
            onSelectAllToggle={setAllRowsSelectedTo}
            {...props}
          />
        ) : (
          <MobileTableV2
            actions={actions}
            hasRowActions={hasRowActions}
            onSelectAllToggle={setAllRowsSelectedTo}
            {...props}
          />
        )}
        {pagination ? (
          <Pagination
            {...pagination}
            onPageChange={onPageChange!!}
            onPageSizeChange={onPageSizeChange}
          />
        ) : null}
      </FlexBox>
    </ModalStateProvider>
  )
}

Table = styled(Table)``
