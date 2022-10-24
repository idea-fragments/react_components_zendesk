import { Selector }   from "components/forms/selectors/Selector"
import {
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
  hideLabel?: boolean,
  selectedKey?: boolean | undefined,
  onChange: OnItemSelectedFunc,
}

export let BooleanSelector: FC<Props> = (props) => {
  const {
          onChange = DO_NOTHING, selectedKey, label = "", hideLabel = false,
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
              labelField={"text"}
              selectedKey={convertedKey}
              emptyState={"Select Yes or No"}
              onChange={notifyWithBoolean(onChange)}
              fluid />
  )
}

BooleanSelector = observer(BooleanSelector)

const convertBooleanToKey = (b?: boolean): Bool | string => {
  if (b == null) return ""
  return b ? TRUE : FALSE
}

const notifyWithBoolean = (notify: OnItemSelectedFunc) => (
  (s: SelectorItemKey): void => {
    const bool = s === TRUE
    // @ts-ignore
    notify(bool)
  }
)
