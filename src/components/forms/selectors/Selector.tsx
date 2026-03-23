import { Dropdown, Select } from "components/forms/selectors/Dropdown"
import { SelectorEmptyState } from "components/forms/selectors/SelectorEmptyState"
import { SelectorProps } from "components/forms/selectors/types"
import { SelectorOptionKeyMap } from "components/forms/utils/SelectorOptionKeyMap"
import { VALIDATION_STATES } from "components/forms/validationStates"
import React from "react"

export let Selector = <T,>({
  disabled,
  invalidOnNoSelection = true,
  validation = { validation: VALIDATION_STATES.NONE },
  ...props
}: SelectorProps<T>) => {
  let { emptyState, selectedKey, small, labelField } = props

  const optionsKeyMap = SelectorOptionKeyMap.call(props)

  // TODO validation
  // const getValidation = () => (
  //     (invalidOnNoSelection && !selectedKey) ?
  //     VALIDATION_RESULTS.ERROR : validation
  // )

  return (
    <Dropdown
      {...props}
      validation={validation}>
      <Select
        isCompact={small}
        disabled={disabled}
        validation={validation?.validation}>
        {selectedKey && optionsKeyMap?.hasOwnProperty(selectedKey) ? (
          optionsKeyMap[selectedKey][labelField]
        ) : (
          <SelectorEmptyState>{emptyState}</SelectorEmptyState>
        )}
      </Select>
    </Dropdown>
  )
}
