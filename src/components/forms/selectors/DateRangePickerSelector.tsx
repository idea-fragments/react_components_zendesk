import { Logger } from "@idea-fragments/logger-js"
import { TinyDateRangePicker } from "components/calendars/TinyDateRangePicker"
import { Button, BUTTON_SIZES } from "components/forms/Button"
import { TextFieldProps } from "components/forms/formField.types"
import {
  Dropdown,
  DropdownProps,
  Select,
} from "components/forms/selectors/Dropdown"
import { StateChange } from "components/forms/selectors/types"
import { FlexBox } from "components/layout/FlexBox"
import Downshift, { StateChangeTypes } from "downshift"
import React, { FC, useCallback, useMemo, useState } from "react"
import { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { formatDate } from "utils/dateTimeHelpers"
import { DO_NOTHING } from "utils/functionHelpers"
import { DateRange } from "utils/dateTime/DateRange.type"

export type DateRangePickerSelectorProps = {
  disabledDates?: Array<Date>
  maxDate?: Date
  minimumDate?: Date
  value?: DateRange
  onChange: (range: DateRange) => void
} & Omit<TextFieldProps, "onChange" | "value"> &
  Omit<
    DropdownProps<DateRange>,
    "isOpen" | "onChange" | "onStateChange" | "options" | "useRawOptions"
  >

type State = {
  isOpen: boolean
}

const logger = new Logger("DateRangePickerSelector")

const stateChangesThatFailWithDateRangePicker: StateChangeTypes[] = [
  Downshift.stateChangeTypes.blurInput,
  Downshift.stateChangeTypes.blurButton,
]

export const DateRangePickerSelector: FC<DateRangePickerSelectorProps> = (
  props,
) => {
  const [state, setState] = useState<State>({ isOpen: false })
  const [selectedRange, setSelectedRange] = useState<DateRange | null>(null)

  const {
    disabled = false,
    disabledDates = [],
    emptyState = "Click to select date range",
    maxDate,
    minimumDate,
    onChange = DO_NOTHING,
    value,
  }: DateRangePickerSelectorProps = props

  const displayValue = useMemo(() => {
    return value
      ? `${formatDate(value.startDate)} - ${formatDate(value.endDate)}`
      : emptyState
  }, [emptyState, value])

  const closeCalendar = useCallback(() => {
    setState({ isOpen: false })
  }, [])

  const setDropdownState = useCallback(
    ({ isOpen, type }: StateChange<any>) => {
      logger.writeInfo("Dropdown state changed:", { isOpen })

      if (
        disabled ||
        isOpen == null ||
        stateChangesThatFailWithDateRangePicker.includes(type)
      )
        return
      setState({ isOpen })
    },
    [disabled],
  )

  const handleRangeChange = useCallback((range: DateRange) => {
    logger.writeInfo("Date range selected:", range)
    setSelectedRange(range)
  }, [])

  const submitRange = useCallback(() => {
    onChange(selectedRange!)
    closeCalendar()
  }, [closeCalendar, onChange, selectedRange])

  return (
    // @ts-ignore
    <Dropdown
      {...props}
      isOpen={state.isOpen}
      menuCSS={css`
        && {
          width: auto !important;
          font-size: 12px;
          ${props.menuCSS}
        }
      `}
      options={[
        <TinyDateRangePicker
          disabledDates={disabledDates}
          initialRange={value}
          key={"DateRangePickerPanel"}
          maxDate={maxDate}
          minDate={minimumDate}
          onChange={handleRangeChange}
        />,
        <FlexBox
          _css={css`
            padding: 0 ${SPACINGS.SM} ${SPACINGS.SM};
          `}
          key={"close button"}>
          <Button
            fluid
            onClick={submitRange}
            primary={false}
            size={BUTTON_SIZES.SMALL}>
            Set Date Range
          </Button>
        </FlexBox>,
      ]}
      useRawOptions
      onStateChange={setDropdownState}>
      <Select
        disabled={disabled}
        validation={props.validation ? props.validation.validation : null}>
        {displayValue}
      </Select>
    </Dropdown>
  )
}
