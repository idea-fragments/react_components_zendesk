import {
  DatePickerSelector,
  DatePickerSelectorProps,
} from "components/forms/selectors/DatePickerSelector"
import { FlexBox } from "components/layout/FlexBox"
import { DateRange } from "utils/dateTime/DateRange.type"
import React, { FC, useCallback } from "react"
import { SPACINGS } from "styles/spacings"

export type DateRangeSelectorProps = {
  disabledDates?: Array<Date>
  endDateProps?: Partial<Omit<DatePickerSelectorProps, "onChange" | "value">>
  minimumDate?: Date
  startDateProps?: Partial<Omit<DatePickerSelectorProps, "onChange" | "value">>
  value?: DateRange
  onChange: (range: DateRange) => void
}

export const DateRangeSelector: FC<DateRangeSelectorProps> = ({
  disabledDates = [],
  endDateProps = {},
  minimumDate,
  startDateProps = {},
  value,
  onChange,
}) => {
  const handleStartDateChange = useCallback(
    (startDate: Date) => {
      onChange({
        endDate: value?.endDate || startDate,
        startDate,
      })
    },
    [onChange, value?.endDate],
  )

  const handleEndDateChange = useCallback(
    (endDate: Date) => {
      onChange({
        endDate,
        startDate: value?.startDate || endDate,
      })
    },
    [onChange, value?.startDate],
  )

  const startDateMinimum = minimumDate
  const endDateMinimum = value?.startDate || minimumDate

  return (
    <FlexBox gap={SPACINGS.SM}>
      <DatePickerSelector
        {...startDateProps}
        disabledDates={disabledDates}
        emptyState={startDateProps.emptyState || "Select start date"}
        label={startDateProps.label || "Start Date"}
        minimumDate={startDateMinimum}
        value={value?.startDate}
        onChange={handleStartDateChange}
      />
      <DatePickerSelector
        {...endDateProps}
        disabledDates={disabledDates}
        emptyState={endDateProps.emptyState || "Select end date"}
        label={endDateProps.label || "End Date"}
        minimumDate={endDateMinimum}
        value={value?.endDate}
        onChange={handleEndDateChange}
      />
    </FlexBox>
  )
}
