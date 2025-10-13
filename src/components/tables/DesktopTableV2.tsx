import { FlexBox } from "components/layout/FlexBox"
import { Checkbox } from "components/forms/Checkbox"
import { SortButton } from "components/tables/blocks/SortButton"
import {
  Item,
  TableProps,
  ColumnConfig,
  SortDirection,
} from "components/tables/Table"
import React, { UIEvent, useCallback, useEffect, useRef, useState } from "react"
import { css } from "styled-components"
import { isLastItem, isNotEmpty } from "utils/arrayHelpers"
import { SPACINGS } from "styles/spacings"
import {
  CHECKBOX_WIDTH,
  ACTIONS_WIDTH,
} from "components/tables/DesktopTableV2/constants"
import {
  TableWrapper,
  HeaderScrollContainer,
  HeaderContainer,
  HeaderCell,
  HeaderText,
  BodyScrollContainer,
  EmptyStateWrapper,
} from "components/tables/DesktopTableV2/styles"
import { GridRow } from "components/tables/DesktopTableV2/GridRow"
import { getColumnWidth } from "components/tables/DesktopTableV2/utils"

/**
 * Extended props for DesktopTableV2 component
 */
type Props = TableProps & {
  hasRowActions: boolean
  showStickyShadow?: boolean
  showStickyBorder?: boolean
  onSelectAllToggle?: (b: boolean) => void
}

/**
 * DesktopTableV2 is an advanced table component using CSS Grid layout.
 *
 * Features:
 * - CSS Grid-based layout for better column control
 * - Sticky columns (both left and right) with optional shadows and borders
 * - Horizontal scroll synchronization between header and body
 * - Checkbox selection with select-all functionality
 * - Sortable columns
 * - Filterable columns
 * - Row actions via overflow menu
 * - Flexible columns that expand to fill available space
 * - Empty state support
 *
 * @param props - The component props
 * @returns A feature-rich data table component
 */
export const DesktopTableV2 = ({
  checkable = false,
  checkedItems,
  columnConfigs,
  emptyState,
  hasRowActions,
  items,
  maxHeight,
  showStickyShadow = false,
  showStickyBorder = true,
  sortState,
  onColumnSort,
  onItemChecked,
  onItemClick,
  onItemHoverEnd,
  onItemHoverStart,
  onSelectAllToggle,
}: Props) => {
  const [verticalScrollbarWidth, setVerticalScrollbarWidth] =
    useState<number>(0)
  const [headerHeight, setHeaderHeight] = useState("0px")

  const bodyRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const handleBodyScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!headerRef.current) return
    headerRef.current.scrollLeft = (e.target as HTMLDivElement).scrollLeft
  }

  const handleHeaderScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!bodyRef.current) return
    bodyRef.current.scrollLeft = (e.target as HTMLDivElement).scrollLeft
  }

  useEffect(() => {
    if (!bodyRef.current || !headerRef.current) return

    const updateDimensions = () => {
      if (!bodyRef.current || !headerRef.current) return

      const bodyClientWidth = bodyRef.current.clientWidth
      const bodyOffsetWidth = bodyRef.current.offsetWidth
      const headerHeight = headerRef.current.clientHeight

      const scrollbarWidth = bodyOffsetWidth - bodyClientWidth

      setVerticalScrollbarWidth(scrollbarWidth)
      setHeaderHeight(`${headerHeight}px`)
    }

    updateDimensions()

    const resizeObserver = new ResizeObserver(updateDimensions)
    resizeObserver.observe(bodyRef.current)

    return () => resizeObserver.disconnect()
  }, [items])

  const allSelected = checkedItems?.size === items.length
  const someSelected = !!checkedItems?.size && !allSelected

  const handleSelectAll = (checked: boolean) => {
    if (!!onSelectAllToggle) onSelectAllToggle(checked)
  }

  const trackSortFields = useCallback(
    (fieldName: string, direction: SortDirection) => {
      onColumnSort!(direction ? { [fieldName]: direction } : {})
    },
    [onColumnSort],
  )

  const columnWidths = [
    checkable ? CHECKBOX_WIDTH : null,
    ...columnConfigs.map(getColumnWidth),
    hasRowActions ? ACTIONS_WIDTH : null,
  ].filter(Boolean)

  const gridTemplateColumns = columnWidths.join(" ")

  const getStickyLeft = (index: number): string => {
    const leftWidths = columnWidths.slice(0, index)
    return leftWidths.length > 0 ? `calc(${leftWidths.join(" + ")})` : "0px"
  }

  const stickyColumns = [
    checkable ? true : false,
    ...columnConfigs.map((c) => c.important),
    false,
  ].filter((_, i) => i < columnWidths.length)

  const lastLeftStickyIndex = stickyColumns.lastIndexOf(true)

  const getColumnStickyProps = (index: number, isSticky: boolean) => {
    const columnIndex = checkable ? index + 1 : index
    const isLastLeftSticky = isSticky && columnIndex === lastLeftStickyIndex

    return {
      isSticky,
      stickyLeft: isSticky ? getStickyLeft(columnIndex) : undefined,
      showStickyShadow: showStickyShadow && isLastLeftSticky,
      showStickyBorder: showStickyBorder && isLastLeftSticky,
    }
  }

  return (
    <FlexBox withRows>
      <TableWrapper>
        <HeaderScrollContainer
          ref={headerRef}
          scrollbarWidth={verticalScrollbarWidth}
          onScroll={handleHeaderScroll}>
          <HeaderContainer gridTemplateColumns={gridTemplateColumns}>
            {checkable ? (
              <HeaderCell
                isCheckbox
                isSticky
                stickyLeft={getStickyLeft(0)}
                showStickyShadow={showStickyShadow && lastLeftStickyIndex === 0}
                showStickyBorder={
                  showStickyBorder && lastLeftStickyIndex === 0
                }>
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={handleSelectAll}
                />
              </HeaderCell>
            ) : null}

            {columnConfigs.map((c: ColumnConfig, index: number) => {
              const { important, name, sort } = c
              const stickyProps = getColumnStickyProps(index, important)

              return (
                <HeaderCell
                  key={name}
                  important={important}
                  {...stickyProps}>
                  <FlexBox
                    _css={css`
                      flex: 1;
                    `}
                    alignItems={"center"}
                    gap={SPACINGS.XS}>
                    <HeaderText important={important}>{name}</HeaderText>
                    {sort ? (
                      <SortButton
                        fieldName={sort.fieldName}
                        direction={sortState![sort.fieldName]}
                        onClick={trackSortFields!}
                      />
                    ) : null}
                  </FlexBox>
                </HeaderCell>
              )
            })}

            {hasRowActions ? (
              <HeaderCell
                isSticky
                isOverflowCell
                stickyRight="0px"
                scrollbarWidth={verticalScrollbarWidth}
                showStickyShadow={showStickyShadow}
                showStickyBorder={showStickyBorder}
              />
            ) : null}
          </HeaderContainer>
        </HeaderScrollContainer>

        <BodyScrollContainer
          ref={bodyRef}
          onScroll={handleBodyScroll}
          maxHeight={maxHeight}
          headerHeight={headerHeight}>
          {isNotEmpty(items)
            ? items.map((item: Item) => (
                <GridRow
                  key={item.key}
                  item={item}
                  checkable={checkable}
                  checkedItems={checkedItems}
                  columnConfigs={columnConfigs}
                  hasRowActions={hasRowActions}
                  gridTemplateColumns={gridTemplateColumns}
                  getStickyLeft={getStickyLeft}
                  getColumnStickyProps={getColumnStickyProps}
                  isLastRow={isLastItem(items, item)}
                  lastLeftStickyIndex={lastLeftStickyIndex}
                  showStickyShadow={showStickyShadow}
                  showStickyBorder={showStickyBorder}
                  onItemChecked={onItemChecked}
                  onItemClick={onItemClick}
                  onItemHoverStart={onItemHoverStart}
                  onItemHoverEnd={onItemHoverEnd}
                />
              ))
            : emptyState && <EmptyStateWrapper>{emptyState}</EmptyStateWrapper>}
        </BodyScrollContainer>
      </TableWrapper>
    </FlexBox>
  )
}

DesktopTableV2.COMPONENT_NAME = "DesktopTableV2"
