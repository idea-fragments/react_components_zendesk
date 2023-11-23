import { FlexBox } from "components/layout/FlexBox"
import { Row } from "components/tables/blocks/DesktopTable/Row"
import { Header } from "components/tables/blocks/Header"
import { HelpText } from "components/tables/blocks/HelpText"
import { TableActions } from "components/tables/blocks/TableActions"
import { Title } from "components/tables/blocks/Title"
import { Body, Table } from "components/tables/index"
import { Item, TableProps } from "components/tables/Table"
import React, { UIEvent, useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import { CSSProp } from "styles/types"
import { isNotEmpty } from "utils/arrayHelpers"

type Props = TableProps & {
  hasRowActions: boolean
  onSelectAllToggle?: (b: boolean) => void
}

export const DesktopTable = ({
  actions,
  checkable = false,
  checkedItems,
  columnConfigs,
  emptyState,
  filterState,
  hasRowActions,
  helpText,
  items,
  maxHeight,
  sortState,
  title,
  onColumnSort,
  onFiltersChange,
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
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!headerRef.current) return
    headerRef.current.scrollLeft = (e.target as HTMLDivElement).scrollLeft
  }

  useEffect(() => {
    if (!bodyRef.current || !headerRef.current) return

    const bodyWidth = bodyRef.current.clientWidth
    const headerWidth = headerRef.current.clientWidth
    const headerHeight = headerRef.current.clientHeight

    setVerticalScrollbarWidth(headerWidth - bodyWidth)
    setHeaderHeight(`${headerHeight}px`)
  }, [])

  return (
    <FlexBox withRows>
      <FlexBox
        _css={css`
          margin-bottom: 1rem;
        `}
        justifyContent={"space-between"}
        withRows>
        {title ? <Title>{title}</Title> : null}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
        <FlexBox
          _css={`flex: 1`}
          justifyContent={"flex-end"}>
          <TableActions
            actions={actions}
            columnConfigs={columnConfigs}
            filterState={filterState}
            onFiltersChange={onFiltersChange}
          />
        </FlexBox>
      </FlexBox>
      <TableWrapper>
        <Div
          _css={css`
            overflow: hidden;
          `}
          ref={headerRef}>
          <Table>
            <Header
              bodyScrollbarWidth={verticalScrollbarWidth}
              checkable={checkable}
              checkedItems={checkedItems}
              columnConfigs={columnConfigs}
              hasRowActions={hasRowActions}
              items={items}
              onColumnSort={onColumnSort}
              onSelectAllToggle={onSelectAllToggle}
              sortState={sortState}
            />
          </Table>
        </Div>

        <Div
          _css={css`
            overflow: auto ${maxHeight ? "scroll" : "auto"};
            max-height: calc(${maxHeight} - ${headerHeight});
          `}
          onScroll={handleScroll}
          ref={bodyRef}>
          <Table>
            <Body>
              {isNotEmpty(items)
                ? items.map((item: Item) => (
                    <Row
                      checkable={checkable}
                      checkDisabled={item.checkDisabled}
                      checked={checkedItems?.has(item.key)}
                      columnConfigs={columnConfigs}
                      item={item}
                      key={item.key}
                      onCheck={onItemChecked}
                      onClick={onItemClick}
                      onHoverStart={onItemHoverStart}
                      onHoverEnd={onItemHoverEnd}
                    />
                  ))
                : emptyState}
            </Body>
          </Table>
        </Div>
      </TableWrapper>
    </FlexBox>
  )
}

const TableWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.styles.table.borderColor};
`

const Div = styled.div<CSSProp>`
  ${({ _css }) => _css}
`

DesktopTable.COMPONENT_NAME = "NiceTable"
