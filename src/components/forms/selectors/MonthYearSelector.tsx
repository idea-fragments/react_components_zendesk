// --- UNFINISHED ----

import { TextFieldProps } from "components/forms/formField.types"
import { Dropdown, Select } from "components/forms/selectors/Dropdown"
import { Moment } from "moment"
import moment from "moment"
import * as React from "react"
import { useState } from "react"

type Props = {
  minimumDate?: Moment
} & TextFieldProps

type State = {
  isOpen: boolean
}

export const MonthYearSelector = (props: Props) => {
  const [state, setState] = useState<State>({ isOpen: false })

  const { value, emptyState, disabled, onChange }: Props = props

  const setDropdownState = ({ isOpen }: State) => {
    if (disabled || isOpen == null) return
    setState({ isOpen })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCalendarChange = (d: Date) => {
    // @ts-ignore
    onChange(moment(d))
    closeCalendar()
  }

  const closeCalendar = () => {
    setState({ isOpen: false })
  }
  return (
    <Dropdown
      {...props}
      // @ts-ignore
      onStateChange={setDropdownState}
      isOpen={state.isOpen}
      useRawOptions
      options={[]}
      menuCSS={`width: auto !important;`}>
      <Select
        validation={props.validation?.validation}
        disabled={disabled}>
        {value ? value : emptyState}
      </Select>
    </Dropdown>
  )
}
