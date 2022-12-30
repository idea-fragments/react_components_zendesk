import { FlexBox }         from "components/layout/FlexBox"
import { Header }          from "components/tables/blocks/Header"
import { HelpText }        from "components/tables/blocks/HelpText"
import { Title }           from "components/tables/blocks/Title"
import { Filters }         from "components/tables/Filters"
import {
  Body,
  Table
}                          from "components/tables/index"
import { Row }             from "components/tables/Row"
import {
  Item,
  TableProps
}                          from "components/tables/Table"
import React, { Fragment } from "react"
import styled              from "styled-components"
import { isNotEmpty }      from "utils/arrayHelpers"

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
                            filterState,
                            hasRowActions,
                            helpText,
                            items,
                            title,
                            onFiltersChange,
                            onItemChecked,
                            onItemClick,
                            onItemHoverEnd,
                            onItemHoverStart,
                            onSelectAllToggle,
                          }: Props) => {
  return (
    <FlexBox withRows>
      <FlexBox _css={`margin-bottom: 1rem`}
               justifyContent={"space-between"} withRows>
        {title ? <Title>{title}</Title> : null}
        {helpText ? <HelpText>{helpText}</HelpText> : null}
        <FlexBox _css={`flex: 1`} justifyContent={"flex-end"}>
          {actions}

          {
            onFiltersChange
            ? <Filters columnConfigs={columnConfigs}
                       filterState={filterState!}
                       onFiltersChange={onFiltersChange} />
            : null
          }

        </FlexBox>
      </FlexBox>
      <HorizontalScroll>
        <Table>
          <Header checkable={checkable}
                  checkedItems={checkedItems}
                  columnConfigs={columnConfigs}
                  hasRowActions={hasRowActions}
                  items={items}
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
      </HorizontalScroll>
    </FlexBox>
  )
}

const HorizontalScroll = styled.div`
  overflow-x: auto;
  border: 2px solid ${({ theme }) => theme.styles.table.borderColor};
`

NiceTable.COMPONENT_NAME = "NiceTable"
