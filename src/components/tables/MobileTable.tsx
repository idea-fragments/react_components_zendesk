import { Button }       from "components/forms/Button"
import { FlexBox }      from "components/layout/FlexBox"
import { HelpText }     from "components/tables/blocks/HelpText"
import { Row }          from "components/tables/blocks/MobileTable/Row"
import { TableActions } from "components/tables/blocks/TableActions"
import { Title }        from "components/tables/blocks/Title"
import {
  Item,
  TableProps
}                       from "components/tables/Table"
import React            from "react"
import styled, { css }  from "styled-components"
import { FONT_SIZES }   from "styles/typography"

type Props = TableProps & {
  hasRowActions: boolean,
  onSelectAllToggle?: (b: boolean) => void,
}

export const MobileTable = ({
                              actions,
                              checkable,
                              checkedItems,
                              columnConfigs,
                              filterState,
                              hasRowActions,
                              helpText,
                              items,
                              mobileListview,
                              mobileListviewNodes,
                              sortState,
                              title,
                              onColumnSort,
                              onFiltersChange,
                              onItemClick,
                              onItemChecked,
                              onSelectAllToggle,
                            }: Props) => {
  const allSelected = checkedItems?.size === items.length

  return (
    <FlexBox withRows>
      <FlexBox _css={css`flex-wrap: wrap;`}
               justifyContent={"space-between"}
               withRows>
        <Title>
          {title}
          <HelpText size={FONT_SIZES.XS}>{helpText}</HelpText>
        </Title>


        <FlexBox justifyContent={"space-between"} wrapped>
          {
            checkable
            ? <Button compact neutral onClick={() => { onSelectAllToggle?.(!allSelected) }}>
              {allSelected ? "Deselect All" : "Select All"}
            </Button>
            : undefined
          }

          <TableActions
            actions={actions}
            columnConfigs={columnConfigs}
            compact
            filterState={filterState}
            onColumnSort={onColumnSort}
            onFiltersChange={onFiltersChange}
            sortState={sortState}
          />
        </FlexBox>
      </FlexBox>

      <Container gap={"1px"} withRows>
        {items.map((item: Item, index: number) => (
          <Row item={item}
               key={item.key}
               columnConfigs={columnConfigs}
               listviewMode={mobileListview}
               listviewNode={mobileListviewNodes?.[index]}
               onClick={onItemClick}
               checkable={checkable}
               checked={checkedItems?.has(item.key)}
               onCheck={onItemChecked} />
        ))}
      </Container>
    </FlexBox>
  )
}

const Container = styled(FlexBox)`
  background: ${({ theme }) => theme.styles.table.borderColor};
  border-color: ${({ theme }) => theme.styles.table.borderColor};
  border-style: solid;
  border-width: ${({ theme }) => theme.styles.table.borderSize};
`
