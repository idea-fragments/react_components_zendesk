// @flow

import { mdiFilterVariant }        from "@mdi/js"
import { Checkbox, Label }         from "@zendeskgarden/react-forms"
import { IconButton }              from "components/forms/IconButton"
import { FlexBlock }               from "components/layout/FlexBlock"
import { TableFilter }             from "components/tables/blocks/TableFilter"
import {
    Head as TableHead,
    HeaderCell,
    HeaderRow,
}                                  from "components/tables/index"
import type { ColumnConfig, Item } from "components/tables/Table"
import { columnWidth }             from "components/tables/utils"
import { Text }                    from "components/text/Text"
import React, { useState }         from "react"
import { SPACINGS }                from "styles/spacings"
import { FONT_WEIGHTS }            from "styles/typography"

type Props = {
    checkable :boolean,
    checkedItems :Set<number>,
    columnConfigs :Array<ColumnConfig>,
    hasRowActions :boolean,
    initialFilterValues: { [string]: string },
    items :Array<Item>,
    onFilterChange :(name :string, value :any) => void,
    onSelectAllToggle :(boolean) => void,
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
                       } :Props) => {
    const [enabledFilters, setVisibleFiltersTo] = useState(
        Object.keys(initialFilterValues)
    )

    const colWidth    = columnWidth(columnConfigs.length)
    const allSelected = checkedItems.size === items.length

    const handleSelectAll = (e :SyntheticInputEvent<HTMLInputElement>) => {
        onSelectAllToggle(e.target.checked)
    }

    const toggleFilter = (name :string) => () => {
        setVisibleFiltersTo((state :string[]) => {
            return state.includes(name)
                   ? state.filter((s :string) => s !== name)
                   : [...state, name]
        })
    }

    return <TableHead>
        <HeaderRow>
            {checkable ? (
                <HeaderCell minimum>
                    <Checkbox checked={allSelected}
                              onChange={handleSelectAll}>
                        <Label hidden
                               indeterminate={checkedItems.size > 0 && !allSelected}>
                            Select all
                        </Label>
                    </Checkbox>
                </HeaderCell>
            ) : null}

            {columnConfigs.map(({ name, width, filter } :ColumnConfig) => (
                <HeaderCell key={name} width={width || colWidth}>
                    {
                        filter
                        ? <FlexBlock css={`flex: 1;`}
                                     spacing={SPACINGS.XS}
                                     withRows>
                            <FlexBlock spacing={SPACINGS.XS}>
                                <Text weight={FONT_WEIGHTS.BOLD}>
                                    {name}
                                </Text>
                                <IconButton
                                    // css={`&&&& { color:
                                    // ${COLORS.LIGHT_GREY}; }`}
                                    icon={mdiFilterVariant}
                                    iconSize={"1.2rem"}
                                    inline
                                    onClick={toggleFilter(filter.name)} />
                            </FlexBlock>
                            {
                                enabledFilters.includes(filter.name)
                                ? <TableFilter {...filter}
                                               initialValue={initialFilterValues[filter.name]}
                                               onChange={onFilterChange} />
                                : null
                            }
                        </FlexBlock>
                        : <Text weight={FONT_WEIGHTS.BOLD}>
                            {name}
                        </Text>
                    }
                </HeaderCell>
            ))}

            {hasRowActions ? <HeaderCell menu /> : null}
        </HeaderRow>
    </TableHead>
}
