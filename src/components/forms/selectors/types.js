// @flow

import type { Validation }     from "components/forms/Validation.type"
import type { ContainerProps } from "styles/types"
import type { Node }           from "react"

export type SelectorItemKey = string | number | null
export type SelectorOption = { [string] :any }
export type OnMultiSelectItemRemoveFunc<T = SelectorItemKey> = (T) => void
export type OnItemSelectedFunc = (SelectorItemKey) => void | (SelectorOption) => void
export type StateChange = {
    highlightedIndex?: number,
    isOpen?: boolean,
    selectedItem?: SelectorOption | null,
}

type Common = {
    clearable? :boolean,
    disabled? :boolean,
    label? :string,
    options :Array<SelectorOption>,
    optionsKeyMap? :{ [SelectorItemKey] :SelectorOption },
    keyField :string,
    valueField :string,
    message? :?string | null,
    emptyState? :string,
    hint? :string | Node,
    onChange? :OnItemSelectedFunc,
    onStateChange? :(StateChange) => void,
    invalidOnNoSelection? :boolean,
    validation :Validation,
    flat? :boolean,
    open? :boolean,
    small? :boolean,
} & ContainerProps

export type SelectorProps = {
    selectedKey? :SelectorItemKey,
    onChange? :OnItemSelectedFunc,
} & Common

export type MultiSelectorProps = {
    selectedKeys? :SelectorItemKey[],
    onChange? :OnItemSelectedFunc<SelectorItemKey[] | SelectorOption[]>,
} & Common
