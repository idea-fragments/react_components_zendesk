import { Checkbox } from "components/forms/Checkbox"
import { OverflowMenu } from "components/layout/OverflowMenu"
import { Text } from "components/text/Text"
import { ColumnConfig, Item, ItemKey } from "components/tables/Table"
import React from "react"
import { FONT_WEIGHTS } from "styles/typography"
import { RowCell, RowContainer } from "components/tables/DesktopTableV2/styles"

/**
 * Props for the GridRow component
 */
export type GridRowProps = {
  item: Item
  checkable?: boolean
  checkedItems?: Set<ItemKey>
  columnConfigs: Array<ColumnConfig>
  hasRowActions?: boolean
  gridTemplateColumns: string
  getStickyLeft: (index: number) => string
  getColumnStickyProps: (
    index: number,
    isSticky: boolean,
  ) => {
    isSticky: boolean
    stickyLeft: string | undefined
    showStickyShadow: boolean
    showStickyBorder: boolean
  }
  isLastRow?: boolean
  lastLeftStickyIndex: number
  showStickyShadow?: boolean
  showStickyBorder?: boolean
  onItemChecked?: (key: ItemKey, isChecked: boolean) => void
  onItemClick?: (key: ItemKey) => void
  onItemHoverStart?: (key: ItemKey) => void
  onItemHoverEnd?: (key: ItemKey) => void
}

/**
 * GridRow component renders a single table row using CSS Grid layout.
 * Handles checkbox selection, sticky columns, and row actions.
 *
 * @param props - The GridRow component props
 * @returns A rendered table row
 */
export const GridRow = ({
  item,
  checkable = false,
  checkedItems,
  columnConfigs,
  hasRowActions = false,
  gridTemplateColumns,
  getStickyLeft,
  getColumnStickyProps,
  isLastRow = false,
  lastLeftStickyIndex,
  showStickyShadow = true,
  showStickyBorder = false,
  onItemChecked,
  onItemClick,
  onItemHoverStart,
  onItemHoverEnd,
}: GridRowProps) => {
  const handleCheckChange = (checked: boolean) => {
    onItemChecked?.(item.key, checked)
  }

  const { key, containerStyles, actions, checkDisabled = false }: Item = item
  const checked = checkedItems?.has(key)

  return (
    <RowContainer
      gridTemplateColumns={gridTemplateColumns}
      onClick={() => onItemClick?.(key)}
      onMouseEnter={() => onItemHoverStart?.(key)}
      onMouseLeave={() => onItemHoverEnd?.(key)}>
      {checkable ? (
        <RowCell
          _css={containerStyles || ""}
          isCheckbox
          isLastRow={isLastRow}
          isSticky
          stickyLeft={getStickyLeft(0)}
          showStickyShadow={showStickyShadow && lastLeftStickyIndex === 0}
          showStickyBorder={showStickyBorder && lastLeftStickyIndex === 0}>
          <Checkbox
            checked={!checkDisabled && !!checked}
            disabled={checkDisabled}
            onChange={handleCheckChange}
          />
        </RowCell>
      ) : null}

      {columnConfigs.map((c: ColumnConfig, index: number) => {
        const { name, important } = c
        const weight = important ? FONT_WEIGHTS.MEDIUM : FONT_WEIGHTS.REGULAR
        const stickyProps = getColumnStickyProps(index, important)

        return (
          <RowCell
            key={`${key}-${name}`}
            _css={containerStyles || ""}
            isLastRow={isLastRow}
            {...stickyProps}>
            <Text _css={`font-weight: ${weight}; width: 100%;`}>
              {item[name]}
            </Text>
          </RowCell>
        )
      })}

      {hasRowActions && (
        <RowCell
          _css={containerStyles || ""}
          isLastRow={isLastRow}
          isOverflowCell
          isSticky
          stickyRight="0px"
          showStickyShadow={showStickyShadow}
          showStickyBorder={showStickyBorder}>
          {actions && (
            <OverflowMenu
              actions={actions}
              appendToNode={document.body}
              placement={"bottom-end"}
            />
          )}
        </RowCell>
      )}
    </RowContainer>
  )
}
