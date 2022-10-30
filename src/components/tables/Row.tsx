import { Checkbox }                     from "components/forms/Checkbox"
import { OverflowMenu }                 from "components/layout/OverflowMenu"
import { Cell, Row as MyRow }           from "components/tables/index"
import { ColumnConfig, Item, ItemKey, } from "components/tables/Table"
import { columnWidth }                  from "components/tables/utils"
import { Text }                         from "components/text/Text"
import React                            from "react"
import styled                           from "styled-components"
import { FONT_WEIGHTS }                 from "styles/typography"

type Props = {
  checkable?: boolean,
  checkDisabled?: boolean,
  checked?: boolean,
  columnConfigs: Array<ColumnConfig>,
  item: Item,
  onCheck?: (row: ItemKey, isChecked: boolean) => void,
  onClick?: (row: ItemKey) => void,
  onHoverEnd?: (row: ItemKey) => void,
  onHoverStart?: (row: ItemKey) => void,
}

export const Row = ({
                      checkable = false,
                      checkDisabled = false,
                      checked = false,
                      columnConfigs,
                      item,
                      onCheck,
                      onClick,
                      onHoverEnd,
                      onHoverStart,
                    }: Props) => {
  const colWidth          = columnWidth(columnConfigs.length)
  const handleCheckChange = (checked: boolean) => {
    onCheck?.(item.key, checked)
  }

  const { key, containerStyles, actions }: Item = item

  return (
    <MyRow _css={containerStyles || ""}
           onClick={() => onClick?.(key)}
           onMouseEnter={() => onHoverStart?.(key)}
           onMouseLeave={() => onHoverEnd?.(key)}
    >
      {checkable ? (
        <Cell isMinimum>
          <Checkbox checked={!checkDisabled && checked}
                    disabled={checkDisabled}
                    onChange={handleCheckChange} />
        </Cell>
      ) : null}
      {columnConfigs.map((c: ColumnConfig) => {
        const { css, name, important, width, } = c

        const weight = important
                       ? FONT_WEIGHTS.MEDIUM
                       : FONT_WEIGHTS.REGULAR

        return (
          <Cell key={`${key}-${name}`}
                _css={css}
                width={css ? undefined : width || colWidth}>
            <Text _css={`font-weight: ${weight}; width: 100%;`}>
              {item[name]}
            </Text>
          </Cell>
        )
      })}
      {actions ? <OverflowMenuCell hasOverflow>
        <OverflowMenu actions={actions} placement={"bottom-end"} />
      </OverflowMenuCell> : null}
    </MyRow>
  )
}

const OverflowMenuCell = styled(Cell)`
  && {}
`

Row.COMPONENT_NAME = "Row"
