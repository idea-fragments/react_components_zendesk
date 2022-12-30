import { Checkbox }    from "components/forms/Checkbox"
import { FlexBox }     from "components/layout/FlexBox"
import { StyledProps } from "components/StyledProps.type"
import {
  Head as TableHead,
  HeaderCell,
  HeaderRow,
}                      from "components/tables/index"
import {
  ColumnConfig,
  Item,
  ItemKey
}                      from "components/tables/Table"
import {
  columnContainerStyles,
  columnWidth
}                      from "components/tables/utils"
import { Text }        from "components/text/Text"
import React           from "react"
import { css }         from "styled-components"
import { SPACINGS }    from "styles/spacings"

type Props = {
  checkable?: boolean,
  checkedItems?: Set<ItemKey>,
  columnConfigs: Array<ColumnConfig>,
  hasRowActions?: boolean,
  items: Array<Item>,
  onSelectAllToggle?: (selected: boolean) => void,
}

export const Header = ({
                         checkable,
                         checkedItems,
                         columnConfigs,
                         hasRowActions,
                         items,
                         onSelectAllToggle,
                       }: Props) => {
  const colWidth     = columnWidth(columnConfigs.length)
  const allSelected  = checkedItems?.size === items.length
  const someSelected = !!checkedItems?.size && !allSelected

  const handleSelectAll = (checked: boolean) => {
    if (!!onSelectAllToggle) onSelectAllToggle(checked)
  }

  return <TableHead>
    <HeaderRow>
      {checkable ? (
        <HeaderCell
          _css={css`${columnContainerStyles({ important: true })}`}
          checkableRow={checkable}
          columnConfigs={columnConfigs}
          index={0}
          isMinimum>
          <Checkbox checked={allSelected}
                    indeterminate={someSelected}
                    onChange={handleSelectAll} />
        </HeaderCell>
      ) : null}

      {columnConfigs.map((c: ColumnConfig, index: number) => {
        const { css: _css = "", important, name, width } = c

        index          = checkable ? index + 1 : index
        const color    = (p: StyledProps) => important
                                             ? p.theme.styles.colorPrimary
                                             : "unset"
        const textNode = <Text _css={`color: ${color};`}>{name}</Text>

        return (
          <HeaderCell
            _css={css`${columnContainerStyles(c)} ${_css}`}
            checkableRow={checkable}
            columnConfigs={columnConfigs}
            index={index}
            key={name}
            width={_css ? undefined : width ?? undefined}>
            <FlexBox _css={`flex: 1;`} gap={SPACINGS.XS} withRows>
              {textNode}
            </FlexBox>
          </HeaderCell>
        )
      })}

      {hasRowActions ? <HeaderCell hasOverflow /> : null}
    </HeaderRow>
  </TableHead>
}
