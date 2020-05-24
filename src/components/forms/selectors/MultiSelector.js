// @flow

import type { StateChangeOptions } from "@zendeskgarden/react-dropdowns"
import { Dropdown, MultiSelect }   from "components/forms/selectors/Dropdown"
import { Tag, Close }              from "components/tags/Tag"
import React, { useState, useRef } from "react"
import type {
    OnMultiSelectItemRemoveFunc,
    RefinedMultiSelectorProps,
    SelectorItemKey,
    SelectorOption,
}                                  from "components/forms/selectors/types"
import { VALIDATION_STATES }       from "components/forms/validationStates"
import { debounce }                from "lodash"

type Props = {
    selectedKeys :Array<SelectorItemKey>,
} & RefinedMultiSelectorProps

export let MultiSelector = (props :Props) => {
    let {
            keyField,
            options,
            optionsKeyMap,
            emptyState,
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
                validation={validation.validation}
                renderItem={({ value, removeValue }) => (
                    <Tag size="large">
                        {optionsKeyMap[value][valueField]}
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
    optionNodes         : [],
}
