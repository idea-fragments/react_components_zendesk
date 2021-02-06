// @flow

import { OverflowMenu }       from "components/layout/OverflowMenu"
import { Row as MyRow, Cell } from "components/tables/index"
import { Checkbox, Label }    from "@zendeskgarden/react-forms"
import type {
    ColumnConfig,
    Item,
    ItemKey,
}                             from "components/tables/Table"
import { columnWidth }        from "components/tables/utils"
import { Text }               from "components/text/Text"
import * as React             from "react"
import { FONT_WEIGHTS }       from "styles/typography"
import styled                 from "styled-components"

type Props = {
    item :Item,
    columnConfigs :Array<ColumnConfig>,
    onClick :(number) => void,
    onHoverStart :(number) => void,
    checkable :boolean,
    checked :boolean,
    onCheck :(ItemKey, boolean) => void,
}

export const Row = ({
                        item,
                        columnConfigs,
                        onClick,
                        checkable,
                        checked,
                        onCheck,
                        onHoverStart,
                        onHoverEnd,
                    } :Props) => {

    const colWidth = columnWidth(columnConfigs.length)

    const handleCheckChange = (e :SyntheticInputEvent<HTMLInputElement>) => {
        onCheck(item.key, e.target.checked)
    }

    const { key, containerStyles, actions } :Item = item

    return (
        <MyRow css={containerStyles || {}}
               onClick={() => onClick(key)}
               onMouseEnter={() => onHoverStart(key)}
               onMouseLeave={() => onHoverEnd(key)}
        >
            {checkable ? (
                <Cell minimum>
                    <Checkbox checked={checked}
                              onChange={handleCheckChange}>
                        <Label hidden>Select Job to Apply</Label>
                    </Checkbox>
                </Cell>
            ) : null}
            {columnConfigs.map((c :ColumnConfig) => {
                const {
                          css,
                          name,
                          important,
                          width,
                      }                 = c
                const { BOLD, REGULAR } = FONT_WEIGHTS
                const weight            = important ? BOLD : REGULAR

                return (
                    <Cell key={`${key}-${name}`}
                          css={css}
                          width={css ? null : width || colWidth}>
                        <Text css={`font-weight: ${weight}; width: 100%;`}>
                            {item[name]}
                        </Text>
                    </Cell>
                )
            })}
            {actions ? <OverflowMenuCell menu>
                <OverflowMenu actions={actions} placement={"bottom-end"} />
            </OverflowMenuCell> : null}
        </MyRow>
    )
}

const OverflowMenuCell = styled(Cell)`
  && {
    padding: 1rem 0;
  }
`

Row.COMPONENT_NAME = "Row"
