// @flow

import { TinyCalendar }        from "components/calendars/TinyCalendar"
import type { TextFieldProps } from "components/forms/formField.types"
import { Dropdown, Select }    from "components/forms/selectors/Dropdown"
import type { StateChange }    from "components/forms/selectors/types"
import moment, { type Moment } from "moment"
import React, { useState }     from "react"
import { formatMonthDateYear } from "utils/dateTimeHelpers"
import { DO_NOTHING }          from "utils/functionHelpers"
import { Logger }              from "utils/logging/Logger"
import Downshift               from "downshift"

type Props = {
    minimumDate? :Moment,
    disabledDates :Array<Moment>,
} & TextFieldProps<?string, ?Moment>

type State = {
    isOpen :boolean
}

const logger                             = new Logger("DatePickerSelector")
const stateChangesThatFailWithDatePicker = [
    Downshift.stateChangeTypes.blurInput,
    Downshift.stateChangeTypes.blurButton,
]

export const DatePickerSelector = (props :Props) => {
    const [state, setState] = useState<State>({ isOpen: false })

    const {
              value,
              emptyState,
              minimumDate,
              disabled,
              disabledDates,
              onChange,
          } :Props = props

    const setDropdownState = ({ isOpen, type } :StateChange) => {
        logger.writeInfo("Dropdown state changed:", { isOpen })
        if (disabled
            || isOpen == null
            || stateChangesThatFailWithDatePicker.includes(type)) return
        setState({ isOpen })
    }

    const handleCalendarChange = (d :Date) => {
        logger.writeInfo("Date selected:", d)
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
            <Select validation={props.validation
                                ? props.validation.validation
                                : null}
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
