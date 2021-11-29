import { Selector }   from "components/forms/selectors/Selector"
import type {
  OnItemSelectedFunc,
  SelectorItemKey,
}                     from "components/forms/selectors/types"
import { observer }   from "mobx-react"
import React, { FC }  from "react"
import { DO_NOTHING } from "utils/functionHelpers"

const TRUE: "1"  = "1",
      FALSE: "0" = "0"

type Bool = typeof TRUE | typeof FALSE

type Props = {
  label: string,
  selectedKey?: boolean | undefined,
  onChange: OnItemSelectedFunc,
}

export let BooleanSelector: FC<Props> = (props) => {
  const {
          onChange, selectedKey, label,
        } = props

  /*
   * Having issues using boolean as key from FLOW.
   * Also being told not to coerce a boolean into a string here.
   * Switching to using 1 and 0 as my boolean
   * */

  const convertedKey = convertBooleanToKey(selectedKey)

  const options = [
    { text: "Yes", value: TRUE },
    { text: "No", value: FALSE },
  ]

  const optionsKeyMap = {
    [options[0].value]: options[0],
    [options[1].value]: options[1],
  }

  return (
    <Selector label={label}
              options={options}
              optionsKeyMap={optionsKeyMap}
              keyField={"value"}
              valueField={"text"}
              selectedKey={convertedKey}
              emptyState={"Select Yes or No"}
              onChange={notifyWithBoolean(onChange)}
              fluid />
  )
}

BooleanSelector.defaultProps = {
  label:     "",
  hideLabel: false,
  onChange:  DO_NOTHING,
}

// @ts-ignore
BooleanSelector.COMPONENT_NAME = "BooleanSelector"
BooleanSelector                = observer(BooleanSelector)

const convertBooleanToKey = (b?: boolean): Bool | string => {
  if (b == null) return ""
  return b ? TRUE : FALSE
}

const notifyWithBoolean = (notify: OnItemSelectedFunc) => (
  (s: SelectorItemKey): void => {
    const bool = s === TRUE
    notify(bool)
  }
)
