import { mdiFilterVariant } from "@mdi/js"
import { Checkbox }         from "components/forms/Checkbox"
import { IconButton }       from "components/forms/IconButton"
import { FlexBox }          from "components/layout/FlexBox"
import { StyledProps }      from "components/StyledProps.type"
import { TableFilter }      from "components/tables/blocks/TableFilter"
import {
  Head as TableHead,
  HeaderCell,
  HeaderRow,
}                           from "components/tables/index"
import {
  ColumnConfig,
  Item,
  ItemKey
}                           from "components/tables/Table"
import {
  columnContainerStyles,
  columnWidth
}                           from "components/tables/utils"
import { Text }             from "components/text/Text"
import React, { useState }  from "react"
import { css }              from "styled-components"
import { SPACINGS }         from "styles/spacings"
import { DO_NOTHING }       from "utils/functionHelpers"

type Props = {
  checkable?: boolean,
  checkedItems?: Set<ItemKey>,
  columnConfigs: Array<ColumnConfig>,
  hasRowActions?: boolean,
  initialFilterValues?: { [key: string]: string },
  items: Array<Item>,
  onFilterChange?: (name: string, value: any) => void,
  onSelectAllToggle?: (selected: boolean) => void,
}

export const Header = ({
                         checkable,
                         checkedItems,
                         columnConfigs,
                         hasRowActions,
                         initialFilterValues = {},
                         items,
                         onFilterChange,
                         onSelectAllToggle,
                       }: Props) => {
  const [enabledFilters, setVisibleFiltersTo] = useState(
    Object.keys(initialFilterValues),
  )

  const colWidth     = columnWidth(columnConfigs.length)
  const allSelected  = checkedItems?.size === items.length
  const someSelected = !!checkedItems?.size && !allSelected

  const handleSelectAll = (checked: boolean) => {
    if (!!onSelectAllToggle) onSelectAllToggle(checked)
  }

  const toggleFilter = (name: string) => () => {
    setVisibleFiltersTo((state: string[]) => {
      return state.includes(name)
             ? state.filter((s: string) => s !== name)
             : [...state, name]
    })
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
        const { css: _css = "", important, name, width, filter } = c

        index          = checkable ? index + 1 : index
        const color    = (p: StyledProps) => important
                                             ? p.theme.styles.colorPrimary
                                             : "unset"
        const textNode = <Text css={`color: ${color};`}>{name}</Text>

        return (
          <HeaderCell
            _css={css`${columnContainerStyles(c)} ${_css}`}
            checkableRow={checkable}
            columnConfigs={columnConfigs}
            index={index}
            key={name}
            width={_css ? undefined : width ?? undefined}>
            <FlexBox _css={`flex: 1;`}
                     gap={SPACINGS.XS}
                     withRows>
              {
                filter
                ?
                <>
                  <FlexBox alignItems={"center"} gap={SPACINGS.XS}>
                    {textNode}
                    <IconButton
                      _css={`height: fit-content;`}
                      icon={mdiFilterVariant}
                      iconSize={"1.2rem"}
                      inline
                      onClick={toggleFilter(filter.name)} />
                  </FlexBox>
                  {
                    enabledFilters.includes(filter.name)
                    ? <TableFilter {...filter}
                                   initialValue={initialFilterValues[filter.name]}
                                   onChange={onFilterChange ?? DO_NOTHING} />
                    : null
                  }
                </>
                : textNode
              }
            </FlexBox>
          </HeaderCell>
        )
      })}

      {hasRowActions ? <HeaderCell hasOverflow /> : null}
    </HeaderRow>
  </TableHead>
}
