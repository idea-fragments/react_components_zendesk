import { TinyCalendar } from "components/calendars/TinyCalendar"
import { TextFieldProps } from "components/forms/formField.types"
import { Dropdown, Select } from "components/forms/selectors/Dropdown"
import { StateChange } from "components/forms/selectors/types"
import Downshift, { StateChangeTypes } from "downshift"
import moment, { Moment } from "moment"
import React, { useState } from "react"
import { formatMonthDateYear } from "utils/dateTimeHelpers"
import { DO_NOTHING } from "utils/functionHelpers"
import { Logger } from "utils/logging/Logger"

type Props = {
  minimumDate?: Moment
  disabledDates: Array<Moment>
  onChange: (d: Moment) => void
} & Omit<TextFieldProps, "onChange">

type State = {
  isOpen: boolean
}

const logger = new Logger("DatePickerSelector")

const stateChangesThatFailWithDatePicker: StateChangeTypes[] = [
  Downshift.stateChangeTypes.blurInput,
  Downshift.stateChangeTypes.blurButton,
]

export const DatePickerSelector = (props: Props) => {
  const [state, setState] = useState<State>({ isOpen: false })

  const {
    value,
    emptyState,
    minimumDate,
    disabled,
    disabledDates,
    onChange,
  }: Props = props

  const setDropdownState = ({ isOpen, type }: StateChange) => {
    logger.writeInfo("Dropdown state changed:", { isOpen })
    if (
      disabled ||
      isOpen == null ||
      stateChangesThatFailWithDatePicker.includes(type)
    )
      return
    setState({ isOpen })
  }

  const handleCalendarChange = (d: Date) => {
    logger.writeInfo("Date selected:", d)
    onChange(moment(d))
    closeCalendar()
  }

  const closeCalendar = () => {
    setState({ isOpen: false })
  }

  return (
    // @ts-ignore
    <Dropdown
      {...props}
      onStateChange={setDropdownState}
      isOpen={state.isOpen}
      useRawOptions
      options={[
        <TinyCalendar
          onChange={handleCalendarChange}
          key={"CalendarPanel"}
          minDate={minimumDate}
          disabledDates={disabledDates}
        />,
      ]}
      menuCSS={`width: auto !important;`}>
      <Select
        validation={props.validation ? props.validation.validation : null}
        disabled={disabled}>
        {value ? formatMonthDateYear(moment(value)) : emptyState}
      </Select>
    </Dropdown>
  )
}

DatePickerSelector.COMPONENT_NAME = "DatePickerSelector"
DatePickerSelector.defaultProps = {
  onChange: DO_NOTHING,
  emptyState: "Click to select date",
  disabledDates: [],
  disabled: false,
}
