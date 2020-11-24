// @flow

import { FlexBlock }               from "components/layout/FlexBlock"
import { Checkbox, Label }         from "@zendeskgarden/react-forms"
import { HelpText }                from "components/tables/blocks/HelpText"
import { Title }                   from "components/tables/blocks/Title"
import {
    Body,
    Head,
    HeaderCell,
    HeaderRow,
    Table,
}                                  from "components/tables/index"
import { Row }                     from "components/tables/Row"
import type { ColumnConfig, Item } from "components/tables/Table"
import { columnWidth }             from "components/tables/utils"
import { Text }                    from "components/text/Text"
import * as React                  from "react"
import { FONT_WEIGHTS }            from "styles/typography"

type Props = {
    title :string,
    helpText :string,
    action :React.Node,
    columnConfigs :Array<ColumnConfig>,
    items :Array<Item>,
    onItemClick :(key :number) => void,
    onItemHoverStart :(key :number) => void,
    onItemHoverEnd :(key :number) => void,
    checkable :boolean,
    hasRowActions :boolean,
    checkedItems :Set<number>,
    onItemChecked :(key :number, isChecked :boolean) => void,
    onSelectAllToggle :(boolean) => void,
}

export const NiceTable = ({
                              title,
                              helpText,
                              action,
                              columnConfigs,
                              items,
                              onItemClick,
                              onItemHoverStart,
                              onItemHoverEnd,
                              checkable,
                              hasRowActions,
                              checkedItems,
                              onItemChecked,
                              onSelectAllToggle,
                          } :Props) => {

    const colWidth    = columnWidth(columnConfigs.length)
    const allSelected = checkedItems.size === items.length

    const handleSelectAll = (e :SyntheticInputEvent<HTMLInputElement>) => {
        onSelectAllToggle(e.target.checked)
    }

    return (
        <FlexBlock data-component-name={`${NiceTable.COMPONENT_NAME}`}>
            <Table>
                {
                    title
                    ? <FlexBlock css={`margin-bottom: 3rem`}
                                 alignItems={"center"}
                                 justify={"space-between"}>
                        <Title>
                            {title}
                            <HelpText>{helpText}</HelpText>
                        </Title>
                        {action}
                    </FlexBlock>
                    : null
                }


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

                        {columnConfigs.map(({ name, width } :ColumnConfig) => (
                            <HeaderCell key={name} width={width || colWidth}>
                                <Text weight={FONT_WEIGHTS.BOLD}>
                                    {name}
                                </Text>
                            </HeaderCell>
                        ))}

                        {hasRowActions ? (
                            <HeaderCell menu />
                        ) : null}
                    </HeaderRow>
                </Head>

                <Body>
                    {items.map((item :Item) => (
                        <Row item={item}
                             key={item.key}
                             columnConfigs={columnConfigs}
                             onClick={onItemClick}
                             onHoverStart={onItemHoverStart}
                             onHoverEnd={onItemHoverEnd}
                             checkable={checkable}
                             checked={checkedItems.has(item.key)}
                             onCheck={onItemChecked} />
                    ))}
                </Body>
            </Table>
        </FlexBlock>
    )
}

NiceTable.COMPONENT_NAME = "NiceTable"
NiceTable.defaultProps   = {}
