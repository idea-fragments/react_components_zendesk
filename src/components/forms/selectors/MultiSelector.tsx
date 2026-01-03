import { Dropdown, MultiSelect } from "components/forms/selectors/Dropdown"
import {
  MultiSelectorProps,
  SelectorItemKey,
} from "components/forms/selectors/types"
import { SelectorOptionKeyMap } from "components/forms/utils/SelectorOptionKeyMap"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { Tag } from "components/tags/Tag"
import React, { ReactNode } from "react"

type RenderItemFuncParams = {
  value: SelectorItemKey
  removeValue: () => void
}

export let MultiSelector = <T,>({
  emptyState,
  maxItems,
  validation = { validation: VALIDATION_STATES.NONE },
  ...props
}: MultiSelectorProps<T>) => {
  let { labelField, small } = props

  const optionsKeyMap = SelectorOptionKeyMap.call(props)

  return (
    <Dropdown
      {...props}
      shouldFilterOptions
      validation={validation}>
      <MultiSelect
        isCompact={small}
        maxItems={maxItems}
        placeholder={emptyState}
        renderItem={({ value, removeValue }: RenderItemFuncParams) => (
          <Tag onClose={removeValue}>
            <span>{optionsKeyMap[value!]?.[labelField] as ReactNode}</span>
          </Tag>
        )}
        validation={validation.validation}
      />
    </Dropdown>
  )
}
