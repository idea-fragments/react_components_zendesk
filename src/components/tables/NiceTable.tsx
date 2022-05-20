import { FlexBox }               from "components/layout/FlexBox"
import { Header }                from "components/tables/blocks/Header"
import { HelpText }              from "components/tables/blocks/HelpText"
import { Title }                 from "components/tables/blocks/Title"
import { Body, Table }           from "components/tables/index"
import { Row }                   from "components/tables/Row"
import type { Item, TableProps } from "components/tables/Table"
import React                     from "react"
import { isNotEmpty }            from "utils/arrayHelpers"

type Props = TableProps & {
  hasRowActions: boolean,
  onSelectAllToggle?: (b: boolean) => void,
}

export const NiceTable = ({
                            actions,
                            checkable = false,
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
                          }: Props) => {
  return (
    <FlexBox>
      <Table>
        <FlexBox css={`margin-bottom: 1rem`}
                 justifyContent={"space-between"} withRows>
          {title ? <Title>{title}</Title> : null}
          {helpText ? <HelpText>{helpText}</HelpText> : null}
          <FlexBox css={`flex: 1`} justifyContent={"flex-end"}>
            {/* @ts-ignore */}
            {actions?.({ checkedItems })?.map((a) => a)}
          </FlexBox>
        </FlexBox>

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
            ? items.map((item: Item) => (
              <Row
                checkable={checkable}
                checkDisabled={item.checkDisabled}
                checked={checkedItems?.has(item.key)}
                columnConfigs={columnConfigs}
                item={item}
                key={item.key}
                onCheck={onItemChecked}
                onClick={onItemClick}
                onHoverStart={onItemHoverStart}
                onHoverEnd={onItemHoverEnd}
              />
            ))
            : emptyState
          }
        </Body>
      </Table>
    </FlexBox>
  )
}

NiceTable.COMPONENT_NAME = "NiceTable"
