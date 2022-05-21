// @ts-ignore
import { Checkbox, Label } from "@zendeskgarden/react-forms"
import {
  Body,
  Head,
  HeaderCell,
  HeaderRow,
  Table as ZTable,
  /*@ts-ignore*/
}                          from "@zendeskgarden/react-tables"
import { FlexBlock }       from "components/layout/FlexBlock"
import { FlexBox }         from "components/layout/FlexBox"
import { HelpText }        from "components/tables/blocks/HelpText"
import { Title }           from "components/tables/blocks/Title"
import { Row }             from "components/tables/Row"
import {
  ColumnConfig,
  Item
}                          from "components/tables/Table"
import { TableProps }      from "components/tables/Table"
import { columnWidth }     from "components/tables/utils"
import { Text }            from "components/text/Text"
import * as React          from "react"
import { FONT_WEIGHTS }    from "styles/typography"

type Props = TableProps & {
  hasRowActions: boolean,
  onSelectAllToggle?: (b: boolean) => void,
}

export const SimpleTable = ({
                              title,
                              actions,
                              columnConfigs,
                              helpText,
                              items,
                              onItemClick,
                              checkable,
                              checkedItems,
                              onItemChecked,
                              onSelectAllToggle,
                            }: Props) => {

  const colWidth = columnWidth(columnConfigs.length)

  const allSelected = checkedItems?.size === items.length

  return (
    <FlexBlock>
      <ZTable>
        <FlexBox css={`margin-bottom: 1rem`}
                 justifyContent={"space-between"} withRows>
          {title ? <Title>{title}</Title> : null}
          {helpText ? <HelpText>{helpText}</HelpText> : null}
          <FlexBox css={`flex: 1`} justifyContent={"flex-end"}>
            {/*@ts-ignore*/}
            {actions?.({ checkedItems })?.map((a) => a)}
          </FlexBox>
        </FlexBox>

        <Head>
          <HeaderRow>
            {checkable ? (
              <HeaderCell minimum>
                <Checkbox checked={allSelected}
                          onChange={onSelectAllToggle}>
                  <Label hidden
                         indeterminate={checkedItems!.size > 0 && !allSelected}>
                    Select all Jobs
                  </Label>
                </Checkbox>
              </HeaderCell>
            ) : null}

            {columnConfigs.map(({ name }: ColumnConfig) => (
              <HeaderCell key={name} width={colWidth}>
                <Text weight={FONT_WEIGHTS.BOLD}>
                  {name}
                </Text>
              </HeaderCell>
            ))}
          </HeaderRow>
        </Head>

        <Body>
          {items.map((item: Item) => (
            <Row item={item}
                 key={item.key}
                 columnConfigs={columnConfigs}
                 onClick={onItemClick}
                 checkable={checkable}
                 checked={checkedItems?.has(item.key)}
                 onCheck={onItemChecked} />
          ))}
        </Body>
      </ZTable>
    </FlexBlock>
  )
}
