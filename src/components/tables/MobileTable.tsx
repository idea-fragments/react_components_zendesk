import {
  mdiCheckboxBlank,
  mdiCheckboxBlankOutline,
  mdiCheckboxMarked,
  mdiCheckboxOutline
} from "@mdi/js"
import {
  Button,
  BUTTON_SIZES
}                          from "components/forms/Button"
import { FlexBox }         from "components/layout/FlexBox"
import { HelpText }        from "components/tables/blocks/HelpText"
import { Title }           from "components/tables/blocks/Title"
import { Filters }         from "components/tables/Filters"
import { Row }             from "components/tables/MobileTable/Row"
import { Item }            from "components/tables/Table"
import { TableProps }      from "components/tables/Table"
import React, { Fragment } from "react"
import styled              from "styled-components"
import { SPACINGS }        from "styles/spacings"
import { FONT_SIZES }      from "styles/typography"

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
                              title,
                              onFiltersChange,
                              onItemClick,
                              onItemChecked,
                              onSelectAllToggle,
                            }: Props) => {
  const allSelected = checkedItems?.size === items.length

  return (
    <FlexBox withRows>
      <FlexBox _css={`flex-wrap: wrap;`}
               justifyContent={"space-between"}
               withRows>
        <Title>
          {title}
          <HelpText size={FONT_SIZES.XS}>{helpText}</HelpText>
        </Title>


        <FlexBox justifyContent={"space-between"} wrapped>
          {
            checkable
            ? <Button compact
                      icon={allSelected ? mdiCheckboxMarked : mdiCheckboxBlankOutline}
                      neutral
                      onClick={() => { onSelectAllToggle?.(!allSelected) }} />
            : undefined
          }

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

      <Container gap={SPACINGS.XS} withRows>
        {items.map((item: Item) => (
          <Row item={item}
               key={item.key}
               columnConfigs={columnConfigs}
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
