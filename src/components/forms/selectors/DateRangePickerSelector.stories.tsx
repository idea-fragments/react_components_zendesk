import { DateRangePickerSelector } from "components/forms/selectors/DateRangePickerSelector"
import { DateRange } from "utils/dateTime/DateRange.type"
import React, { useState } from "react"

export default {
  component: DateRangePickerSelector,
  title: "forms/DateRangePickerSelector",
}

const Story = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - Default</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangePickerSelector
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWithInitialValue = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    endDate: new Date(2024, 6, 20),
    startDate: new Date(2024, 6, 10),
  })

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - With Initial Value</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangePickerSelector
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithInitialValue = StoryWithInitialValue.bind({})

const StoryWithMinimumDate = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)
  const minDate = new Date(2024, 0, 1)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - With Minimum Date</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Cannot select dates before January 1, 2024
      </p>
      <DateRangePickerSelector
        minimumDate={minDate}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithMinimumDate = StoryWithMinimumDate.bind({})

const StoryWithMaxDate = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)
  const maxDate = new Date(2024, 11, 31)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - With Maximum Date</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Cannot select dates after December 31, 2024
      </p>
      <DateRangePickerSelector
        maxDate={maxDate}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithMaxDate = StoryWithMaxDate.bind({})

const StoryWithDisabledDates = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)
  const disabledDates = [
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2025, 0, 1),
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - With Disabled Dates</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        December 25-26, 2024 and January 1, 2025 are disabled
      </p>
      <DateRangePickerSelector
        disabledDates={disabledDates}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithDisabledDates = StoryWithDisabledDates.bind({})

const StoryDisabled = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    endDate: new Date(2024, 6, 20),
    startDate: new Date(2024, 6, 10),
  })

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - Disabled</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangePickerSelector
        disabled
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const Disabled = StoryDisabled.bind({})

const StoryWithCustomEmptyState = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - Custom Empty State</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangePickerSelector
        emptyState={"Choose your date range..."}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithCustomEmptyState = StoryWithCustomEmptyState.bind({})

const StoryWithLabel = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - With Label</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangePickerSelector
        label={"Select Date Range"}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithLabel = StoryWithLabel.bind({})

const StoryWithValidation = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - With Validation</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangePickerSelector
        label={"Select Date Range"}
        validation={{
          message: "Date range is required",
          validation: "error",
        }}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithValidation = StoryWithValidation.bind({})

const StoryComplex = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    endDate: new Date(2024, 5, 20),
    startDate: new Date(2024, 5, 10),
  })
  const disabledDates = [new Date(2024, 5, 15), new Date(2024, 5, 16)]
  const maxDate = new Date(2024, 11, 31)
  const minDate = new Date(2024, 0, 1)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Picker Selector - Complex Configuration</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Initial range: June 10-20, 2024
        <br />
        Limited to year 2024
        <br />
        June 15-16 disabled
      </p>
      <DateRangePickerSelector
        disabledDates={disabledDates}
        label={"Vacation Dates"}
        maxDate={maxDate}
        minimumDate={minDate}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const Complex = StoryComplex.bind({})
