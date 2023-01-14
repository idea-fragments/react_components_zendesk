import { Checkbox }              from "components/forms/Checkbox"
import { FlexBox }               from "components/layout/FlexBox"
import { StyledProps }           from "components/StyledProps.type"
import {
  Head as TableHead,
  HeaderCell,
  HeaderRow,
}                                from "components/tables/index"
import {
  ColumnConfig,
  Item,
  ItemKey
}                                from "components/tables/Table"
import { columnContainerStyles } from "components/tables/utils"
import { Text }                  from "components/text/Text"
import React, { ReactNode }      from "react"
import { css }                   from "styled-components"
import { SPACINGS }              from "styles/spacings"
import {
  FONT_SIZES,
  FONT_WEIGHTS
}                                from "styles/typography"

type Props = {
  bodyScrollbarWidth: number,
  checkable?: boolean,
  checkedItems?: Set<ItemKey>,
  columnConfigs: Array<ColumnConfig>,
  hasRowActions?: boolean,
  items: Array<Item>,
  onSelectAllToggle?: (selected: boolean) => void,
}

export const Header = ({
                         bodyScrollbarWidth,
                         checkable,
                         checkedItems,
                         columnConfigs,
                         hasRowActions,
                         items,
                         onSelectAllToggle,
                       }: Props) => {
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

        index = checkable ? index + 1 : index

        return (
          <HeaderCell
            _css={css`${columnContainerStyles(c)} ${_css}`}
            checkableRow={checkable}
            columnConfigs={columnConfigs}
            index={index}
            key={name}
            width={_css ? undefined : width ?? undefined}>
            <FlexBox _css={`flex: 1;`} gap={SPACINGS.XS} withRows>
              <HeaderText important={important}>{name}</HeaderText>
            </FlexBox>
          </HeaderCell>
        )
      })}

      {
        hasRowActions
        ? <HeaderCell extraWidth={`${bodyScrollbarWidth}px`} hasOverflow />
        : null
      }
      {
        !hasRowActions && bodyScrollbarWidth
        ? <HeaderCell width={`${bodyScrollbarWidth}px`} />
        : null
      }
    </HeaderRow>
  </TableHead>
}

const HeaderText = ({ children, important }: { children: ReactNode, important: boolean }) => {
  const color = (p: StyledProps) => important
                                    ? p.theme.styles.colorPrimary
                                    : "unset"
  return <Text _css={css`
    color: ${color};
    font-size: ${FONT_SIZES.XS};
    font-weight: ${FONT_WEIGHTS.BOLD};
  `}>
    {children}
  </Text>
}
