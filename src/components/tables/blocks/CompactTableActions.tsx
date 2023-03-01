import { Dropdown }          from "components/forms/selectors/Dropdown"
import {
  SelectorItemKey,
  SelectorOption
}                            from "components/forms/selectors/types"
import { OverflowButton }    from "components/layout/OverflowMenu"
import { TableActionsProps } from "components/tables/blocks/TableActions"
import React, {
  FC,
  useCallback,
  useMemo
}                            from "react"

export type CompactTableActionsProps = Required<Pick<TableActionsProps, | "actions">>

export const CompactTableActions: FC<CompactTableActionsProps> = ({ actions }) => {
  const options = useMemo((): SelectorOption[] => actions.map((a) => {
    const {
            buttonProps:    _,
            notCompactable: __,
            Component,
            componentProps,
            dropdownItemProps,
            ...attrs
          } = a

    const customCompAttr = Component ? { Component, componentProps } : {}

    return { ...attrs, ...customCompAttr, itemProps: dropdownItemProps }
  }), [actions])

  const triggerAction = useCallback((k: SelectorItemKey) => {
    options.find(({ label }) => label === k as string)?.onClick()
  }, [options])

  return <Dropdown
    keyField={"label"}
    labelField={"label"}
    onChange={triggerAction}
    options={options}
    trigger={<OverflowButton />}
  />
}
