import { FlexBox } from "components/layout/FlexBox"
import { Row } from "components/tables/blocks/MobileTable/Row"
import { Item, TableProps } from "components/tables/Table"
import React from "react"
import styled from "styled-components"

type Props = TableProps & {
  hasRowActions: boolean
  onSelectAllToggle?: (b: boolean) => void
}

export const MobileTable = ({
  checkable,
  checkedItems,
  columnConfigs,
  items,
  mobileListview,
  mobileListviewNodes,
  onItemClick,
  onItemChecked,
}: Props) => {
  return (
    <Container
      gap={"1px"}
      withRows>
      {items.map((item: Item, index: number) => (
        <Row
          item={item}
          key={item.key}
          columnConfigs={columnConfigs}
          onClick={onItemClick}
          checkable={checkable}
          checked={checkedItems?.has(item.key)}
          onCheck={onItemChecked}
        />
      ))}
    </Container>
  )
}

const Container = styled(FlexBox)`
  background: ${({ theme }) => theme.styles.table.borderColor};
  border-color: ${({ theme }) => theme.styles.table.borderColor};
  border-style: solid;
  border-width: ${({ theme }) => theme.styles.table.borderSize};
`
