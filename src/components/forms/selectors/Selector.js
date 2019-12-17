// @flow

import { Dropdown, Select }          from "components/forms/selectors/Dropdown"
import * as React                    from "react"
import type { RefinedSelectorProps } from "components/forms/selectors/types"
import { VALIDATION_STATES }         from "components/forms/validationStates"

export let Selector = (props :RefinedSelectorProps) => {
    const {
              optionsKeyMap,
              emptyState,
              selectedKey,
              valueField,
              validation,
          } = props

    // TODO validation
    // const getValidation = () => (
    //     (invalidOnNoSelection && !selectedKey) ?
    //     VALIDATION_RESULTS.ERROR : validation
    // )

    return (
        <Dropdown {...props}>
            <Select validation={validation.validation}>
                {selectedKey ? optionsKeyMap[selectedKey][valueField] : emptyState}
            </Select>
        </Dropdown>
    )
}

Selector.defaultProps = {
    invalidOnNoSelection: true,
    validation          : { validation: VALIDATION_STATES.NONE },
    optionNodes         : [],
}
