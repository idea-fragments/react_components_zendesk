import { TinyCalendar } from "components/calendars/TinyCalendar"
import { TextFieldProps } from "components/forms/formField.types"
import { Dropdown, Select } from "components/forms/selectors/Dropdown"
import { StateChange } from "components/forms/selectors/types"
import Downshift, { StateChangeTypes } from "downshift"
import React, { FC, useCallback, useState } from "react"
import { formatDate } from "utils/dateTimeHelpers"
import { DO_NOTHING } from "utils/functionHelpers"
import { Logger } from "utils/logging/Logger"

export type DatePickerSelectorProps = {
  minimumDate?: Date
  disabledDates: Array<Date>
  onChange: (d: Date) => void
} & Omit<TextFieldProps<Date>, "onChange">

type State = {
  isOpen: boolean
}

const logger = new Logger("DatePickerSelector")

const stateChangesThatFailWithDatePicker: StateChangeTypes[] = [
  Downshift.stateChangeTypes.blurInput,
  Downshift.stateChangeTypes.blurButton,
]

export const DatePickerSelector: FC<DatePickerSelectorProps> = (props) => {
  const [state, setState] = useState<State>({ isOpen: false })

  const {
    value,
    emptyState = "Click to select date",
    minimumDate,
    disabled = false,
    disabledDates = [],
    onChange = DO_NOTHING,
  }: DatePickerSelectorProps = props

  const closeCalendar = useCallback(() => {
    setState({ isOpen: false })
  }, [])

  const setDropdownState = useCallback(
    ({ isOpen, type }: StateChange<any>) => {
      logger.writeInfo("Dropdown state changed:", { isOpen })
      if (
        disabled ||
        isOpen == null ||
        stateChangesThatFailWithDatePicker.includes(type)
      )
        return
      setState({ isOpen })
    },
    [disabled],
  )

  const handleCalendarChange = useCallback(
    (d: Date) => {
      logger.writeInfo("Date selected:", d)
      onChange(d)
      closeCalendar()
    },
    [closeCalendar, onChange],
  )

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
      menuCSS={`&& { width: auto !important; font-size: 12px; }`}>
      <Select
        validation={props.validation ? props.validation.validation : null}
        disabled={disabled}>
        {value ? formatDate(new Date(value)) : emptyState}
      </Select>
    </Dropdown>
  )
}
