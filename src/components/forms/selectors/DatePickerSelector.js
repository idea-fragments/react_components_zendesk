// @flow

import { TinyCalendar }        from "components/calendars/TinyCalendar"
import type { TextFieldProps } from "components/forms/formField.types"
import { Dropdown, Select }    from "components/forms/selectors/Dropdown"
import moment, { type Moment } from "moment"
import { useState }            from "react"
import * as React              from "react"
import { formatMonthDateYear } from "utils/dateTimeHelpers"
import { DO_NOTHING }          from "utils/functionHelpers"

type Props = {
    minimumDate? :Moment,
    disabledDates :Array<Moment>,
} & TextFieldProps<?string, ?Moment>

type State = {
    isOpen :boolean
}

export const DatePickerSelector = (props :Props) => {
    const [
              state,
              setState,
          ] :[State, (State) => void] = useState({ isOpen: false })

    const {
              value,
              emptyState,
              minimumDate,
              disabled,
              disabledDates,
              onChange,
          } :Props = props

    const setDropdownState = ({ isOpen } :State) => {
        if (disabled || isOpen == null) return
        setState({ isOpen })
    }

    const handleCalendarChange = (d :Date) => {
        onChange(moment(d))
        closeCalendar()
    }

    const closeCalendar = () => { setState({ isOpen: false }) }

    return (
        <Dropdown {...props}
                  onStateChange={setDropdownState}
                  isOpen={state.isOpen}
                  useRawOptions
                  options={[
                      <TinyCalendar onChange={handleCalendarChange}
                                    padded
                                    key={"CalendarPanel"}
                                    minDate={minimumDate}
                                    disabledDates={disabledDates} />,
                  ]}
                  menuCSS={`width: auto !important;`}>
            <Select validation={props.validation.validation}
                    disabled={disabled}>
                {value ? formatMonthDateYear(value) : emptyState}
            </Select>
        </Dropdown>
    )
}

DatePickerSelector.COMPONENT_NAME = "DatePickerSelector"
DatePickerSelector.defaultProps   = {
    onChange     : DO_NOTHING,
    emptyState   : "Click to select date",
    disabledDates: [],
    disabled     : false,
}
