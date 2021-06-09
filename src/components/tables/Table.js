// @flow

import { FlexBox }                                 from "components/layout/FlexBox"
import { Pagination }                              from "components/tables/blocks/Pagination"
import { MobileTable }                             from "components/tables/MobileTable"
import { NiceTable }                               from "components/tables/NiceTable"
import { SimpleTable }                             from "components/tables/SimpleTable"
import React, { useCallback, useEffect, useState } from "react"
import type { Node, Element }                      from "react"
import type {
    DeviceSize,
    DeviceSizeChangeListener,
}                                                  from "styles/DeviceSizeWatcher"
import { deviceSizeWatcher }                       from "styles/DeviceSizeWatcher"
import { isNotEmpty }                              from "utils/arrayHelpers"
import { DO_NOTHING }                              from "utils/functionHelpers"
import styled, {type CSSRules}                                      from "styled-components"

export type ItemKey = number | string
export type ItemContainerStyles = string
export type ItemAction = {
    action :() => void,
    label :string,
}

export type ItemFilterOptions = {
    name :string,
    options? :{ label :string, value :string },
    type :"select" | "text",
}

export type Item = {
    [string] :Node,
    actions? :Array<ItemAction>,
    containerStyles? :ItemContainerStyles,
    key :ItemKey,
}

export type ColumnConfig = {
    collapsible :boolean,
    css: CSSRules,
    filter? :ItemFilterOptions,
    important :boolean,
    name :string,
    width? :string,
}

export type PaginationData = {
    page :number,
    pageSize :number,
    totalCount :number,
}

export type TableProps = {
    action? :Element<any>,
    checkable :boolean,
    checkedItems :Set<number>,
    columnConfigs :Array<ColumnConfig>,
    emptyState? :Node,
    helpText? :string,
    initialFilterValues :{ [string] :string },
    items :Array<Item>,
    title? :string,
    onFilterChange? :(name :string, value :any) => void,
    onItemChecked :(key :ItemKey, isChecked :boolean) => void,
    onItemClick :(key :number) => void,
    onItemHoverEnd :(key :number) => void,
    onItemHoverStart :(key :number) => void,
    onSelectAllToggle :(boolean) => void,
}

type Props = TableProps & {
    className? :string,
    nice :boolean,
    pagination? :PaginationData,
    onPageChange? :(number) => void,
}

export let Table = ({
                        className,
                        hasRowActions,
                        nice,
                        pagination,
                        onPageChange,
                        ...props
                    } :Props) => {
    const {
              getSize,
              isLargeComputer,
              isSmallComputer,
              subscribe,
              unsubscribe,
          } = deviceSizeWatcher

    const [, setDeviseSize] = useState<DeviceSize>(getSize())

    const handleDeviseSizeChange = useCallback<DeviceSizeChangeListener>(
        (s :DeviceSize) => { setDeviseSize(s) },
        [],
    )

    useEffect(() => {
        const subId = subscribe(handleDeviseSizeChange)
        return () => { unsubscribe(subId) }
    }, [handleDeviseSizeChange, subscribe, unsubscribe])

    hasRowActions = hasRowActions || props.items.some(
        (i :Item) => i.actions && isNotEmpty(i.actions),
    )

    const largeTable = () => nice
                             ? <NiceTable {...props}
                                          hasRowActions={hasRowActions} />
                             : <SimpleTable {...props}
                                            hasRowActions={hasRowActions} />
    return (
        <FlexBox withRows className={className}>
            {
                isSmallComputer() || isLargeComputer()
                ? largeTable()
                : <MobileTable {...props} />
            }
            {
                pagination
                ? <Pagination {...pagination} onPageChange={onPageChange} />
                : null
            }
        </FlexBox>
    )
}

Table.COMPONENT_NAME = "Table"
Table.defaultProps   = {
    checkable        : false,
    checkedItems     : new Set(),
    onItemChecked    : DO_NOTHING,
    onSelectAllToggle: DO_NOTHING,
    nice             : true,
    onItemClick      : DO_NOTHING,
    onItemHoverStart : DO_NOTHING,
    onItemHoverEnd   : DO_NOTHING,
}

Table = styled(Table)``
