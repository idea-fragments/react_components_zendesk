import { Dropdown, Select }   from "components/forms/selectors/Dropdown"
import { SelectorEmptyState } from "components/forms/selectors/SelectorEmptyState"
import type {
  SelectorOption,
  SelectorProps,
}                             from "components/forms/selectors/types"
import { VALIDATION_STATES }  from "components/forms/validationStates"
import React                  from "react"

export let Selector = ({ disabled, ...props }: SelectorProps) => {
  let {
        keyField,
        options,
        optionsKeyMap,
        emptyState,
        selectedKey,
        small,
        valueField,
        validation,
      } = props

  if (optionsKeyMap == null && options != null) {
    optionsKeyMap = options.reduce(
      (m: { [key: string]: SelectorOption }, o: SelectorOption) => {
        m[o[keyField]] = o
        return m
      }, {},
    )
  }

  // TODO validation
  // const getValidation = () => (
  //     (invalidOnNoSelection && !selectedKey) ?
  //     VALIDATION_RESULTS.ERROR : validation
  // )

  return (
    <Dropdown {...props}>
      <Select small={small}
              disabled={disabled}
              validation={validation?.validation}>
        {selectedKey && optionsKeyMap?.hasOwnProperty(selectedKey)
         ? optionsKeyMap[selectedKey][valueField]
         : <SelectorEmptyState>{emptyState}</SelectorEmptyState>}
      </Select>
    </Dropdown>
  )
}

// @ts-ignore
Selector.defaultProps = {
  invalidOnNoSelection: true,
  validation:           { validation: VALIDATION_STATES.NONE },
  optionNodes:          [],
}