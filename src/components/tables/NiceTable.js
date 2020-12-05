// @flow

import { FlexBlock }             from "components/layout/FlexBlock"
import { FlexBox }               from "components/layout/FlexBox"
import { Header }                from "components/tables/blocks/Header"
import { HelpText }              from "components/tables/blocks/HelpText"
import { Title }                 from "components/tables/blocks/Title"
import { Body, Table }           from "components/tables/index"
import { Row }                   from "components/tables/Row"
import type { Item, TableProps } from "components/tables/Table"
import React                     from "react"
import { isNotEmpty }            from "utils/arrayHelpers"

export const NiceTable = ({
                              action,
                              checkable,
                              checkedItems,
                              columnConfigs,
                              emptyState,
                              hasRowActions,
                              helpText,
                              initialFilterValues,
                              items,
                              title,
                              onFilterChange,
                              onItemChecked,
                              onItemClick,
                              onItemHoverEnd,
                              onItemHoverStart,
                              onSelectAllToggle,
                          } :TableProps) => {
    return (
        <FlexBox>
            <Table>
                {title ? (
                    <FlexBlock css={`margin-bottom: 3rem`}
                               alignItems={"center"}
                               justify={"space-between"}>
                        <Title>
                            {title}
                            <HelpText>{helpText}</HelpText>
                        </Title>
                        {action}
                    </FlexBlock>
                ) : null}

                <Header checkable={checkable}
                        checkedItems={checkedItems}
                        columnConfigs={columnConfigs}
                        hasRowActions={hasRowActions}
                        initialFilterValues={initialFilterValues}
                        items={items}
                        onFilterChange={onFilterChange}
                        onSelectAllToggle={onSelectAllToggle} />

                <Body>
                    {
                        isNotEmpty(items)
                        ? items.map((item :Item) => (
                            <Row item={item}
                                 key={item.key}
                                 columnConfigs={columnConfigs}
                                 onClick={onItemClick}
                                 onHoverStart={onItemHoverStart}
                                 onHoverEnd={onItemHoverEnd}
                                 checkable={checkable}
                                 checked={checkedItems.has(item.key)}
                                 onCheck={onItemChecked} />
                        ))
                        : emptyState
                    }
                </Body>
            </Table>
        </FlexBox>
    )
}

NiceTable.COMPONENT_NAME = "NiceTable"
NiceTable.defaultProps   = {}
