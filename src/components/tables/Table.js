// @flow

import { FlexBlock }                        from "components/layout/FlexBlock"
import { MobileTable }                      from "components/tables/MobileTable"
import { NiceTable }                        from "components/tables/NiceTable"
import { SimpleTable }                      from "components/tables/SimpleTable"
import { useCallback, useEffect, useState } from "react"
import * as React                           from "react"
import type {
    DeviceSize,
    DeviceSizeChangeListener,
}                                           from "styles/DeviceSizeWatcher"
import { deviceSizeWatcher }                from "styles/DeviceSizeWatcher"
import { DO_NOTHING }                       from "utils/functionHelpers"
import styled                               from "styled-components"


export type ItemKey = number | string
export type ItemContainerStyles = string
export type ItemAction = {
    label :string,
    action :(ItemKey) => void
}

export type Item = {
    [string] :React.Node,
    key :ItemKey,
    containerStyles? :ItemContainerStyles,
    actions :Array<ItemAction>
}

export type ColumnConfig = {
    name :string,
    important :boolean,
    collapsible :boolean,
}

type Props = {
    title? :string,
    helpText? :string,
    action? :React.Node,
    columnConfigs :Array<ColumnConfig>,
    className? :string,
    items :Array<Item>,
    onItemClick :(key :number) => void,
    onItemHoverStart :(key :number) => void,
    onItemHoverEnd :(key :number) => void,
    checkable :boolean,
    hasRowActions :boolean,
    checkedItems :Set<number>,
    onItemChecked :(key :ItemKey, isChecked :boolean) => void,
    onSelectAllToggle :(boolean) => void,
    nice :boolean,
}

export let Table = ({ nice, className, ...props } :Props) => {
    const {
              getSize,
              isLargeComputer,
              isSmallComputer,
              subscribe,
              unsubscribe,
          } = deviceSizeWatcher

    const [_, setDeviseSize] = useState<DeviceSize>(getSize())

    const handleDeviseSizeChange = useCallback<DeviceSizeChangeListener>(
        (s :DeviceSize) => { setDeviseSize(s) },
        [],
    )

    useEffect(() => {
        const subId = subscribe(handleDeviseSizeChange)
        return () => { unsubscribe(subId) }
    }, [handleDeviseSizeChange])

    const largeTable = () => nice ? <NiceTable {...props} />
                                  : <SimpleTable {...props} />
    return (
        <FlexBlock withRows className={className}>
            {
                isSmallComputer() || isLargeComputer()
                ? largeTable()
                : <MobileTable {...props} />
            }
        </FlexBlock>
    )
}

Table.COMPONENT_NAME = "Table"
Table.defaultProps   = {
    hasRowActions    : false,
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
