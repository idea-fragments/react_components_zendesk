import { Dropdown, MultiSelect } from "components/forms/selectors/Dropdown"
import {
  MultiSelectorProps,
  SelectorItemKey,
  SelectorOption,
} from "components/forms/selectors/types"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { Tag } from "components/tags/Tag"
import React from "react"

type Props = {
  maxItems?: number
  selectedKeys: Array<SelectorItemKey>
} & MultiSelectorProps

export let MultiSelector = ({ maxItems, ...props }: Props) => {
  let { keyField, labelField, options, optionsKeyMap, small, validation } =
    props

  if (optionsKeyMap == null && options != null) {
    optionsKeyMap = options.reduce(
      (m: { [key: string]: SelectorOption }, o: SelectorOption) => {
        m[o[keyField]] = o
        return m
      },
      {},
    )
  }

  return (
    <Dropdown
      {...props}
      shouldFilterOptions>
      <MultiSelect
        isCompact={small}
        maxItems={maxItems}
        validation={validation?.validation}
        renderItem={({ value, removeValue }: any) => (
          <Tag onClose={removeValue}>
            <span>{optionsKeyMap?.[value]?.[labelField]}</span>
          </Tag>
        )}
      />
    </Dropdown>
  )
}

// @ts-ignore
MultiSelector.defaultProps = {
  invalidOnNoSelection: true,
  validation: { validation: VALIDATION_STATES.NONE },
}
