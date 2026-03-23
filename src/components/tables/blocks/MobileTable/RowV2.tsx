import { mdiChevronDown, mdiChevronUp } from "@mdi/js"
import { Button } from "components/forms/Button"
import { Checkbox } from "components/forms/Checkbox"
import { FlexBox } from "components/layout/FlexBox"
import { OverflowMenu } from "components/layout/OverflowMenu"
import { ColumnConfig, Item, ItemKey } from "components/tables/Table"
import { Text } from "components/text/Text"
import React, { FC, ReactNode, useState } from "react"
import styled, { css } from "styled-components"
import { mediaQueries } from "styles/mediaQueries"
import { SPACINGS } from "styles/spacings"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"
import { isNotEmpty } from "utils/arrayHelpers"

export type ListviewNodeRenderFunction = (
  params: ListviewNodeRenderParams,
) => ReactNode
export type ListviewNodeRenderParams = {
  checkbox: ReactNode
  isLastRow: boolean
  onClick: () => void
  overflowMenu: ReactNode
}

type Props = {
  checkable?: boolean
  checked?: boolean
  checkDisabled?: boolean
  columnConfigs: Array<ColumnConfig>
  isLastRow?: boolean
  item: Item
  listviewMode?: boolean
  listviewNode?: ListviewNodeRenderFunction
  onCheck?: (row: ItemKey, checked: boolean) => void
  onClick?: (row: ItemKey) => void
}

export const Row: FC<Props> = ({
  checkable,
  checked,
  checkDisabled,
  columnConfigs,
  isLastRow,
  item,
  listviewMode,
  listviewNode,
  onCheck,
  onClick,
}) => {
  const [isCollapsed, setCollapsedState] = useState(true)
  const { key, containerStyles, actions }: Item = item
  const firstColumn = columnConfigs[0]
  const firstColumnValue = firstColumn ? item[firstColumn.name] : null

  const handleCheckChange = (isChecked: boolean) => {
    onCheck?.(key, isChecked)
  }

  const handleClick = () => {
    onClick?.(key)
  }

  const checkboxNode = checkable ? (
    <Checkbox
      checked={!checkDisabled && checked}
      disabled={checkDisabled}
      onChange={handleCheckChange}
    />
  ) : null

  const overflowMenuNode = actions ? (
    <OverflowMenu
      actions={actions}
      placement={"bottom-end"}
    />
  ) : null

  // If listview mode is enabled, return only the render function result
  if (listviewMode && listviewNode) {
    return (
      <>
        {listviewNode({
          checkbox: checkboxNode,
          isLastRow: isLastRow || false,
          onClick: handleClick,
          overflowMenu: overflowMenuNode,
        })}
      </>
    )
  }

  // Standard table mode
  const createFieldRow = (
    { name, collapsible }: ColumnConfig,
    isFirst: boolean,
  ) => {
    if (isFirst) return null

    return (
      <FieldRow
        collapsible={collapsible}
        isCollapsed={isCollapsed}
        key={`${key}-${name}`}>
        <FieldLabel>
          <Text
            _css={css`
              font-weight: ${FONT_WEIGHTS.BOLD};
              font-size: ${FONT_SIZES.XS};
            `}>
            {name}:
          </Text>
        </FieldLabel>

        <FieldValue>
          <FlexBox
            alignItems={"center"}
            justifyContent={"flex-end"}>
            <Text
              _css={css`
                font-weight: ${FONT_WEIGHTS.REGULAR};
                font-size: ${FONT_SIZES.SM};
              `}>
              {item[name]}
            </Text>
          </FlexBox>
        </FieldValue>
      </FieldRow>
    )
  }

  const [nonCollapsibleColumns, collapsibleColumns] = columnConfigs.reduce(
    (acc, column) => {
      column.collapsible ? acc[1].push(column) : acc[0].push(column)
      return acc
    },
    [[] as ColumnConfig[], [] as ColumnConfig[]],
  )

  const toggleCollapse = () => {
    setCollapsedState(!isCollapsed)
  }

  return (
    <Container
      _css={containerStyles || ""}
      gap={SPACINGS.SM}
      isLastRow={isLastRow}
      onClick={handleClick}
      withRows>
      {/* Row Header with first column data and actions */}
      <FlexBox
        gap={SPACINGS.XS}
        withRows>
        <FlexBox
          alignItems={"center"}
          fluid
          gap={SPACINGS.SM}>
          {checkboxNode}

          <HeaderTitle fluid>
            <Text
              _css={css`
                font-weight: ${FONT_WEIGHTS.BOLD};
                font-size: ${FONT_SIZES.SM};
              `}>
              {firstColumnValue}
            </Text>
          </HeaderTitle>

          {overflowMenuNode}
        </FlexBox>

        <HeaderDivider />
      </FlexBox>

      {/* Row Content */}
      <FieldsGrid>
        {nonCollapsibleColumns.map((col, idx) =>
          createFieldRow(col, idx === 0),
        )}
        {collapsibleColumns.map((col, idx) =>
          createFieldRow(col, idx === 0 && nonCollapsibleColumns.length === 0),
        )}
      </FieldsGrid>

      {isNotEmpty(collapsibleColumns) ? (
        <Button
          fluid
          icon={isCollapsed ? mdiChevronDown : mdiChevronUp}
          onClick={toggleCollapse}
          primary={false}
          size={"small"}>
          Show {isCollapsed ? "More" : "Less"}
        </Button>
      ) : null}
    </Container>
  )
}

const Container = styled(FlexBox).attrs(() => ({
  alignItems: "stretch",
}))<{ isLastRow?: boolean }>`
  background: ${({ theme }) => theme.styles.colors.white};
  border-bottom: ${({ isLastRow, theme }) =>
    isLastRow ? "none" : `1px solid ${theme.styles.table.borderColor}`};
  padding: ${SPACINGS.SM};
`

const HeaderTitle = styled(FlexBox)`
  overflow: hidden;
  text-overflow: ellipsis;
`

const HeaderDivider = styled.div`
  height: 2px;
  width: 40px;
  background: ${({ theme }) => theme.styles.colors.grey["300"]};
`

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
`

const FieldRow = styled.div<{
  collapsible: boolean
  isCollapsed: boolean
}>`
  display: ${({ collapsible, isCollapsed }) =>
    collapsible && isCollapsed ? "none" : "grid"};
  grid-template-columns: 5fr 7fr;
  gap: ${SPACINGS.XS};
  padding: 0.1em;
  border-radius: 10px;

  ${mediaQueries().forTablets(css`
    grid-template-columns: 1fr 2fr;
  `)}
`

const FieldLabel = styled.div``

const FieldValue = styled.div`
  text-align: right;
`
