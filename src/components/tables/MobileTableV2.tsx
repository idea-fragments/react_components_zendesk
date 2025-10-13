import { Checkbox } from "components/forms/Checkbox"
import { FlexBox } from "components/layout/FlexBox"
import { Row } from "components/tables/blocks/MobileTable/RowV2"
import { Item, TableProps } from "components/tables/Table"
import React from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { FONT_SIZES } from "styles/typography"

type Props = TableProps & {
  hasRowActions: boolean
  onSelectAllToggle?: (b: boolean) => void
}

/**
 * MobileTableV2 - Same as original MobileTable but uses CSS Grid instead of Grid component
 */
export const MobileTableV2 = ({
  checkable,
  checkedItems,
  columnConfigs,
  items,
  mobileListview,
  mobileListviewNodes,
  onItemChecked,
  onItemClick,
  onSelectAllToggle,
}: Props) => {
  const allSelected = checkedItems?.size === items.length
  const someSelected = !!checkedItems?.size && !allSelected

  const handleSelectAll = (checked: boolean) => {
    onSelectAllToggle?.(checked)
  }

  return (
    <Container
      gap={"1px"}
      withRows>
      {checkable ? (
        <Header>
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected}
            onChange={handleSelectAll}
          />
        </Header>
      ) : null}

      {items.map((item: Item, index: number) => (
        <Row
          checkable={checkable}
          checked={checkedItems?.has(item.key)}
          columnConfigs={columnConfigs}
          isLastRow={index === items.length - 1}
          item={item}
          key={item.key}
          listviewMode={mobileListview}
          listviewNode={mobileListviewNodes?.[index]}
          onCheck={onItemChecked}
          onClick={onItemClick}
        />
      ))}
    </Container>
  )
}

const Container = styled(FlexBox)`
  border-color: ${({ theme }) => theme.styles.table.borderColor};
  border-style: solid;
  border-width: ${({ theme }) => theme.styles.table.borderSize};
  border-radius: ${FONT_SIZES.SM};
  overflow: hidden;
`

const Header = styled(FlexBox)`
  align-items: center;
  background: ${({ theme }) => theme.styles.colors.grey["100"]};
  border-bottom: 1px solid ${({ theme }) => theme.styles.table.borderColor};
  padding: ${SPACINGS.XS} ${SPACINGS.SM};
`
