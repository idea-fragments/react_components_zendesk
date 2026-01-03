import { DateRangeSelector } from "components/forms/selectors/DateRangeSelectors"
import { DateRange } from "utils/dateTime/DateRange.type"
import React, { useState } from "react"

export default {
  component: DateRangeSelector,
  title: "forms/DateRangeSelector",
}

const Story = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Selector - Default</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangeSelector
        onChange={setDateRange}
        value={dateRange}
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
      <h3>Date Range Selector - With Initial Value</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangeSelector
        onChange={setDateRange}
        value={dateRange}
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
      <h3>Date Range Selector - With Minimum Date</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Cannot select dates before January 1, 2024
      </p>
      <DateRangeSelector
        minimumDate={minDate}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithMinimumDate = StoryWithMinimumDate.bind({})

const StoryWithDisabledDates = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)
  const disabledDates = [
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2025, 0, 1),
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Selector - With Disabled Dates</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        December 25-26, 2024 and January 1, 2025 are disabled
      </p>
      <DateRangeSelector
        disabledDates={disabledDates}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithDisabledDates = StoryWithDisabledDates.bind({})

const StoryWithCustomLabels = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Selector - Custom Labels</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangeSelector
        endDateProps={{
          emptyState: "Choose end...",
          label: "End",
        }}
        startDateProps={{
          emptyState: "Choose start...",
          label: "Start",
        }}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithCustomLabels = StoryWithCustomLabels.bind({})

const StoryWithValidation = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Selector - With Validation</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <DateRangeSelector
        endDateProps={{
          validation: {
            message: "End date is required",
            validation: "error",
          },
        }}
        startDateProps={{
          validation: {
            message: "Start date is required",
            validation: "error",
          },
        }}
        value={dateRange}
        onChange={setDateRange}
      />
    </div>
  )
}

export const WithValidation = StoryWithValidation.bind({})

const StoryVerticalLayout = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Range Selector - Vertical Layout</h3>
      <p>
        Selected Range:{" "}
        {dateRange
          ? `${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "300px",
        }}>
        <DateRangeSelector
          value={dateRange}
          onChange={setDateRange}
        />
      </div>
    </div>
  )
}

export const VerticalLayout = StoryVerticalLayout.bind({})
