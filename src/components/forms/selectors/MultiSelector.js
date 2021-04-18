// @flow

import { Dropdown, MultiSelect }   from "components/forms/selectors/Dropdown"
import { Tag, Close }              from "components/tags/Tag"
import React from "react"
import type {
    MultiSelectorProps,
    SelectorItemKey,
    SelectorOption,
}                                  from "components/forms/selectors/types"
import { VALIDATION_STATES }       from "components/forms/validationStates"

type Props = {
    maxItems: 2,
    selectedKeys :Array<SelectorItemKey>,
} & MultiSelectorProps

export let MultiSelector = ({maxItems, ...props} :Props) => {
    let {
            keyField,
            options,
            optionsKeyMap,
            valueField,
            validation,
        } = props

    if (optionsKeyMap == null && options != null) {
        optionsKeyMap = options.reduce(
            (m :{ [string] :SelectorOption }, o :SelectorOption) => {
                m[o[keyField]] = o
                return m
            }, {},
        )
    }

    return (
        <Dropdown {...props} filterOptions>
            <MultiSelect
                maxItems={maxItems}
                validation={validation.validation}
                renderItem={({ value, removeValue }) => (
                    <Tag size="large">
                        <span>{optionsKeyMap[value][valueField]}</span>
                        <Close onClick={() => removeValue()} />
                    </Tag>
                )}
            />
        </Dropdown>
    )
}

MultiSelector.defaultProps = {
    invalidOnNoSelection: true,
    validation          : { validation: VALIDATION_STATES.NONE },
}

