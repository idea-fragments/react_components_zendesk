import { Checkbox } from "components/forms/Checkbox"
import { Card } from "components/layout/Card"
import { FlexBox } from "components/layout/FlexBox"
import { Row } from "components/tables/blocks/MobileTable/RowV2"
import { Item, TableProps } from "components/tables/Table"
import { Text } from "components/text/Text"
import React, { useCallback } from "react"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { FONT_SIZES } from "styles/typography"
import { isLastItem, isNotEmpty } from "utils/arrayHelpers"

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

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      onSelectAllToggle?.(checked)
    },
    [onSelectAllToggle],
  )

  const selectAllCheckbox = useCallback(() => {
    return (
      <Checkbox
        checked={allSelected}
        indeterminate={someSelected}
        onChange={handleSelectAll}
      />
    )
  }, [allSelected, handleSelectAll, someSelected])

  return (
    <Container
      $listviewMode={!!mobileListview}
      gap={mobileListview ? SPACINGS.SM : "1px"}
      withRows>
      {checkable ? (
        mobileListview ? (
          <Card
            compact
            shadowed>
            <FlexBox
              alignItems={"center"}
              gap={SPACINGS.XS}>
              {selectAllCheckbox()}
              <Text
                _css={css`
                  flex: 1;
                `}>
                Select all
              </Text>
              {isNotEmpty([...(checkedItems ?? [])]) ? (
                <Text>{`${checkedItems?.size} selected`}</Text>
              ) : null}
            </FlexBox>
          </Card>
        ) : (
          <Header>{selectAllCheckbox()}</Header>
        )
      ) : null}

      {items.map((item: Item, index: number) => (
        <Row
          checkable={checkable}
          checked={checkedItems?.has(item.key)}
          columnConfigs={columnConfigs}
          isLastRow={isLastItem(items, item)}
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

const Container = styled(FlexBox)<{ $listviewMode: boolean }>`
  ${({ $listviewMode }) =>
    !$listviewMode
      ? css`
          border-color: ${({ theme }) => theme.styles.table.borderColor};
          border-style: solid;
          border-width: ${({ theme }) => theme.styles.table.borderSize};
          border-radius: ${FONT_SIZES.SM};
        `
      : ""}

  overflow: hidden;
`

const Header = styled(FlexBox)`
  align-items: center;
  background: ${({ theme }) => theme.styles.colors.grey["100"]};
  border-bottom: 1px solid ${({ theme }) => theme.styles.table.borderColor};
  padding: ${SPACINGS.XS} ${SPACINGS.SM};
`
