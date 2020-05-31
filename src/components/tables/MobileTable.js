// @flow

import { Button }                  from "components/forms/Button"
import { HelpText }                from "components/tables/blocks/HelpText"
import { Title }                   from "components/tables/blocks/Title"
import { Row }                     from "components/tables/MobileTable/Row"
import type { ColumnConfig, Item } from "components/tables/Table"
import * as React                  from "react"
import { FlexBlock }               from "components/layout/FlexBlock"
import { SPACINGS }                from "styles/spacings"
import { FONT_SIZES }              from "styles/typography"

type Props = {
    title :string,
    helpText :string,
    action :React.Node,
    columnConfigs :Array<ColumnConfig>,
    items :Array<Item>,
    onItemClick :(key :number) => void,
    checkable :boolean,
    hasRowActions :boolean,
    checkedItems :Set<number>,
    onItemChecked :(key :number, isChecked :boolean) => void,
    onSelectAllToggle :(boolean) => void,
}

export const MobileTable = ({
                                title,
                                helpText,
                                action,
                                columnConfigs,
                                items,
                                onItemClick,
                                checkable,
                                hasRowActions,
                                checkedItems,
                                onItemChecked,
                                onSelectAllToggle,
                            } :Props) => {
    const allSelected = checkedItems.size === items.length

    return (
        <FlexBlock data-component-name={`${MobileTable.COMPONENT_NAME}`}
                   withRows
                   spacing={SPACINGS.SM}>
            <FlexBlock alignAxis={"center"}
                       justify={"space-between"}
                       css={`flex-wrap: wrap;`}
                       spacing={SPACINGS.SM}>

                <Title>
                    {title}
                    <HelpText size={FONT_SIZES.XS}>{helpText}</HelpText>
                </Title>

                {checkable ?
                 <Button onClick={() => { onSelectAllToggle(!allSelected) }}>
                     {allSelected ? "Deselect" : "Select"} All
                 </Button> : undefined}

                {action}
            </FlexBlock>

            {items.map((item :Item) => (
                <Row item={item}
                     key={item.key}
                     columnConfigs={columnConfigs}
                     onClick={onItemClick}
                     checkable={checkable}
                     checked={checkedItems.has(item.key)}
                     onCheck={onItemChecked} />
            ))}
        </FlexBlock>
    )
}
