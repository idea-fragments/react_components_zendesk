// @flow

import type { FormFieldProps } from "components/forms/formField.types"

export type SelectorItemKey = string | number | null
export type SelectorOption = { [string] :any }
export type OnMultiSelectItemRemoveFunc<T = SelectorItemKey> = (T) => void
export type OnItemSelectedFunc = (SelectorItemKey) => void | (SelectorOption) => void
export type StateChange = {
    highlightedIndex?: number,
    isOpen?: boolean,
    selectedItem?: SelectorOption | null,
    type: string,
}

type Common = FormFieldProps & {
    clearable? :boolean,
    options :Array<SelectorOption>,
    optionsKeyMap? :{ [SelectorItemKey] :SelectorOption },
    keyField :string,
    valueField :string,
    onChange? :OnItemSelectedFunc,
    onStateChange? :(StateChange) => void,
    invalidOnNoSelection? :boolean,
    flat? :boolean,
    open? :boolean,
    small? :boolean,
}

export type SelectorProps = {
    selectedKey? :SelectorItemKey,
    onChange? :OnItemSelectedFunc,
} & Common

export type MultiSelectorProps = {
    selectedKeys? :SelectorItemKey[],
    onChange? :OnItemSelectedFunc<SelectorItemKey[] | SelectorOption[]>,
} & Common
