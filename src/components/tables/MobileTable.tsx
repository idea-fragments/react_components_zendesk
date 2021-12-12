// @flow

import { Button, BUTTON_SIZES } from "components/forms/Button"
import { FlexBox }              from "components/layout/FlexBox"
import { HelpText }             from "components/tables/blocks/HelpText"
import { Title }                from "components/tables/blocks/Title"
import { Row }                  from "components/tables/MobileTable/Row"
import type { Item }            from "components/tables/Table"
import { TableProps }           from "components/tables/Table"
import React          from "react"
import { FONT_SIZES } from "styles/typography"

type Props = TableProps & {
  hasRowActions: boolean,
  onSelectAllToggle?: (b: boolean) => void,
}

export const MobileTable = ({
                              actions,
                              checkable,
                              checkedItems,
                              columnConfigs,
                              hasRowActions,
                              helpText,
                              items,
                              title,
                              onItemClick,
                              onItemChecked,
                              onSelectAllToggle,
                            }: Props) => {
  const allSelected = checkedItems?.size === items.length

  return (
    // @ts-ignore
    <FlexBox data-component-name={`${MobileTable.COMPONENT_NAME}`} withRows>
      <FlexBox css={`flex-wrap: wrap;`}
               justifyContent={"space-between"}
               withRows
      >
        <Title>
          {title}
          <HelpText size={FONT_SIZES.XS}>{helpText}</HelpText>
        </Title>


        <FlexBox justifyContent={"space-between"} wrap>
          {checkable ?
           <Button compact
                   neutral
                   size={BUTTON_SIZES.SMALL}
                   onClick={() => { onSelectAllToggle?.(!allSelected) }}>
             {allSelected ? "Deselect" : "Select"} All
           </Button> : undefined}

          {actions?.({ checkedItems })?.map((a) => a)}
        </FlexBox>
      </FlexBox>

      {items.map((item: Item) => (
        <Row item={item}
             key={item.key}
             columnConfigs={columnConfigs}
             onClick={onItemClick}
             checkable={checkable}
             checked={checkedItems?.has(item.key)}
             onCheck={onItemChecked} />
      ))}
    </FlexBox>
  )
}
