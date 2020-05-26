// @flow

import { FlexBlock }               from "components/layout/FlexBlock"
import { Checkbox, Label }         from "@zendeskgarden/react-forms"
import { Row }                     from "components/tables/Row"
import type { ColumnConfig, Item } from "components/tables/Table"
import { columnWidth }             from "components/tables/utils"
import { XL }                      from "components/text/Paragraph"
import { Text }                    from "components/text/Text"
import * as React                  from "react"
import {
    Table as ZTable,
    Head,
    HeaderRow,
    HeaderCell,
    Body,
}                                  from "@zendeskgarden/react-tables"
import { FONT_WEIGHTS }            from "styles/typography"

type Props = {
    title :string,
    action :React.Node,
    columnConfigs :Array<ColumnConfig>,
    items :Array<Item>,
    onItemClick :(key :number) => void,
    checkable :boolean,
    checkedItems :{ [number] :boolean },
    onItemChecked :(key :number, isChecked :boolean) => void,
    onSelectAllToggle :(boolean) => void,
}

export const SimpleTable = ({
                                title,
                                action,
                                columnConfigs,
                                items,
                                onItemClick,
                                checkable,
                                checkedItems,
                                onItemChecked,
                                onSelectAllToggle,
                            } :Props) => {

    const colWidth = columnWidth(columnConfigs.length)

    const allSelected = checkedItems.size === items.length

    const handleSelectAll = (e :SyntheticInputEvent<HTMLInputElement>) => {
        onSelectAllToggle(e.target.checked)
    }

    return (
        <FlexBlock data-component-name={`${SimpleTable.COMPONENT_NAME}`}>
            <ZTable>
                <FlexBlock alignAxis={"center"} justify={"space-between"}>
                    <XL>{title}</XL>
                    {action}
                </FlexBlock>

                <Head>
                    <HeaderRow>
                        {checkable ? (
                            <HeaderCell minimum>
                                <Checkbox checked={allSelected}
                                          onChange={handleSelectAll}>
                                    <Label hidden
                                           indeterminate={checkedItems.size > 0 && !allSelected}>
                                        Select all Jobs
                                    </Label>
                                </Checkbox>
                            </HeaderCell>
                        ) : null}

                        {columnConfigs.map(({ name } :ColumnConfig) => (
                            <HeaderCell key={name} width={colWidth}>
                                <Text weight={FONT_WEIGHTS.BOLD}>
                                    {name}
                                </Text>
                            </HeaderCell>
                        ))}
                    </HeaderRow>
                </Head>

                <Body>
                    {items.map((item :Item) => (
                        <Row item={item}
                             key={item.key}
                             columnConfigs={columnConfigs}
                             onClick={onItemClick}
                             checkable={checkable}
                             checked={checkedItems.has(item.key)}
                             onCheck={onItemChecked} />
                    ))}
                </Body>
            </ZTable>
        </FlexBlock>
    )
}

SimpleTable.COMPONENT_NAME = "Table"
SimpleTable.defaultProps   = {}
