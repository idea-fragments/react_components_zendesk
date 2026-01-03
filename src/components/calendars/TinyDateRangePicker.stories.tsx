import { TinyDateRangePicker } from "components/calendars/TinyDateRangePicker"
import { DateRange } from "utils/dateTime/DateRange.type"
import React, { useState } from "react"

export default {
  component: TinyDateRangePicker,
  title: "calendars/TinyDateRangePicker",
}

const Story = () => {
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - Default</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <TinyDateRangePicker onChange={setRange} />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWithInitialRange = () => {
  const initialRange: DateRange = {
    endDate: new Date(2024, 6, 20),
    startDate: new Date(2024, 6, 10),
  }
  const [range, setRange] = useState<DateRange>(initialRange)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - With Initial Range</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <TinyDateRangePicker
        initialRange={initialRange}
        onChange={setRange}
      />
    </div>
  )
}

export const WithInitialRange = StoryWithInitialRange.bind({})

const StoryWithMinDate = () => {
  const minDate = new Date(2024, 0, 1)
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - With Minimum Date</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Cannot select dates before January 1, 2024
      </p>
      <TinyDateRangePicker
        minDate={minDate}
        onChange={setRange}
      />
    </div>
  )
}

export const WithMinDate = StoryWithMinDate.bind({})

const StoryWithMaxDate = () => {
  const maxDate = new Date(2024, 11, 31)
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - With Maximum Date</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Cannot select dates after December 31, 2024
      </p>
      <TinyDateRangePicker
        maxDate={maxDate}
        onChange={setRange}
      />
    </div>
  )
}

export const WithMaxDate = StoryWithMaxDate.bind({})

const StoryWithMinAndMaxDate = () => {
  const maxDate = new Date(2024, 11, 31)
  const minDate = new Date(2024, 0, 1)
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - With Date Range Limits</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Can only select dates within 2024
      </p>
      <TinyDateRangePicker
        maxDate={maxDate}
        minDate={minDate}
        onChange={setRange}
      />
    </div>
  )
}

export const WithMinAndMaxDate = StoryWithMinAndMaxDate.bind({})

const StoryWithDisabledDates = () => {
  const disabledDates = [
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2025, 0, 1),
  ]
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - With Disabled Dates</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        December 25-26, 2024 and January 1, 2025 are disabled
      </p>
      <TinyDateRangePicker
        disabledDates={disabledDates}
        onChange={setRange}
      />
    </div>
  )
}

export const WithDisabledDates = StoryWithDisabledDates.bind({})

const StoryFluid = () => {
  const [range, setRange] = useState<DateRange | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - Fluid Width</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Calendar expands to fill parent container width
      </p>
      <div style={{ width: "100%" }}>
        <TinyDateRangePicker
          fluid
          onChange={setRange}
        />
      </div>
    </div>
  )
}

export const Fluid = StoryFluid.bind({})

const StoryComplex = () => {
  const disabledDates = [
    new Date(2024, 5, 15),
    new Date(2024, 5, 16),
    new Date(2024, 5, 17),
  ]
  const initialRange: DateRange = {
    endDate: new Date(2024, 5, 20),
    startDate: new Date(2024, 5, 10),
  }
  const maxDate = new Date(2024, 11, 31)
  const minDate = new Date(2024, 0, 1)
  const [range, setRange] = useState<DateRange>(initialRange)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Date Range Picker - Complex Configuration</h3>
      <p>
        Selected Range:{" "}
        {range
          ? `${range.startDate.toLocaleDateString()} - ${range.endDate.toLocaleDateString()}`
          : "None"}
      </p>
      <p style={{ color: "#666", fontSize: "0.875rem" }}>
        Initial range: June 10-20, 2024
        <br />
        Limited to year 2024
        <br />
        June 15-17 disabled
      </p>
      <TinyDateRangePicker
        disabledDates={disabledDates}
        initialRange={initialRange}
        maxDate={maxDate}
        minDate={minDate}
        onChange={setRange}
      />
    </div>
  )
}

export const Complex = StoryComplex.bind({})
