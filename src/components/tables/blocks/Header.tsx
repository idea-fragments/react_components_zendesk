import { mdiFilterVariant } from "@mdi/js"
import { Checkbox }         from "components/forms/Checkbox"
import { IconButton }       from "components/forms/IconButton"
import { FlexBlock }        from "components/layout/FlexBlock"
import { StyledProps }      from "components/StyledProps.type"
import { TableFilter }      from "components/tables/blocks/TableFilter"
import {
  Head as TableHead,
  HeaderCell,
  HeaderRow,
}                           from "components/tables/index"
import type {
  ColumnConfig,
  Item,
  ItemKey
}                           from "components/tables/Table"
import { columnWidth }      from "components/tables/utils"
import { Text }             from "components/text/Text"
import React, { useState }  from "react"
import { SPACINGS }         from "styles/spacings"
import { FONT_WEIGHTS }     from "styles/typography"
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

  const colWidth    = columnWidth(columnConfigs.length)
  const allSelected = checkedItems?.size === items.length

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
        <HeaderCell minimum>
          <Checkbox checked={allSelected} onChange={handleSelectAll} />
        </HeaderCell>
      ) : null}

      {columnConfigs.map(
        ({ css, important, name, width, filter }: ColumnConfig) => {
          const color    = (p: StyledProps) => important
                                               ? p.theme.styles.colorPrimary
                                               : "unset"
          const weight   = important ? FONT_WEIGHTS.BOLD : FONT_WEIGHTS.BOLD
          const textNode = (
            <Text css={`color: ${color}; font-weight: ${weight};`}>{name}</Text>
          )
          return (
            <HeaderCell key={name}
                        css={css}
                        width={css ? null : width || colWidth}>
              {
                filter
                ? <FlexBlock css={`flex: 1;`}
                             spacing={SPACINGS.XS}
                             withRows>
                  <FlexBlock spacing={SPACINGS.XS}>
                    {textNode}
                    <IconButton
                      icon={mdiFilterVariant}
                      iconSize={"1.2rem"}
                      inline
                      onClick={toggleFilter(filter.name)} />
                  </FlexBlock>
                  {
                    enabledFilters.includes(filter.name)
                    ? <TableFilter {...filter}
                                   initialValue={initialFilterValues[filter.name]}
                                   onChange={onFilterChange ?? DO_NOTHING} />
                    : null
                  }
                </FlexBlock>
                : textNode
              }
            </HeaderCell>
          )
        },
      )}

      {hasRowActions ? <HeaderCell menu /> : null}
    </HeaderRow>
  </TableHead>
}
