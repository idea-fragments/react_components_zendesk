import {
  MonthYearPicker,
  MonthYearPickerChange,
} from "components/calendars/blocks/MonthYearPicker"
import React, { useState } from "react"

export default {
  component: MonthYearPicker,
  title: "calendars/MonthYearPicker",
}

const Story = () => {
  const [date, setDate] = useState({ month: 1, year: 2024 })

  const handleChange = (change: MonthYearPickerChange) => {
    setDate(change)
  }

  return (
    <div>
      <h3>Month Year Picker - 10 Year Range</h3>
      <p>
        Selected: Month {date.month}, Year {date.year}
      </p>
      <MonthYearPicker
        month={date.month}
        pastFutureYearRangeSize={10}
        year={date.year}
        onChange={handleChange}
      />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWithMinDate = () => {
  const [date, setDate] = useState({ month: 6, year: 2024 })
  const minDate = new Date(2020, 0, 1)

  const handleChange = (change: MonthYearPickerChange) => {
    setDate(change)
  }

  return (
    <div>
      <h3>Month Year Picker - With Min Date (Jan 2020)</h3>
      <p>
        Selected: Month {date.month}, Year {date.year}
      </p>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        Min Date: January 2020
      </p>
      <MonthYearPicker
        minDate={minDate}
        month={date.month}
        pastFutureYearRangeSize={10}
        year={date.year}
        onChange={handleChange}
      />
    </div>
  )
}

export const WithMinDate = StoryWithMinDate.bind({})

const StoryNarrowRange = () => {
  const [date, setDate] = useState({ month: 3, year: 2024 })

  const handleChange = (change: MonthYearPickerChange) => {
    setDate(change)
  }

  return (
    <div>
      <h3>Month Year Picker - 3 Year Range</h3>
      <p>
        Selected: Month {date.month}, Year {date.year}
      </p>
      <MonthYearPicker
        month={date.month}
        pastFutureYearRangeSize={3}
        year={date.year}
        onChange={handleChange}
      />
    </div>
  )
}

export const NarrowRange = StoryNarrowRange.bind({})

const StoryWideRange = () => {
  const [date, setDate] = useState({ month: 12, year: 2024 })

  const handleChange = (change: MonthYearPickerChange) => {
    setDate(change)
  }

  return (
    <div>
      <h3>Month Year Picker - 25 Year Range</h3>
      <p>
        Selected: Month {date.month}, Year {date.year}
      </p>
      <MonthYearPicker
        month={date.month}
        pastFutureYearRangeSize={25}
        year={date.year}
        onChange={handleChange}
      />
    </div>
  )
}

export const WideRange = StoryWideRange.bind({})

const StoryWithMinDateAndNavigation = () => {
  const [date, setDate] = useState({ month: 1, year: 2023 })
  const minDate = new Date(2023, 0, 1)

  const handleChange = (change: MonthYearPickerChange) => {
    setDate(change)
  }

  return (
    <div>
      <h3>Month Year Picker - Min Date Boundary Test</h3>
      <p>
        Selected: Month {date.month}, Year {date.year}
      </p>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        Min Date: January 2023 - Try clicking the left arrow at January 2023
      </p>
      <MonthYearPicker
        minDate={minDate}
        month={date.month}
        pastFutureYearRangeSize={5}
        year={date.year}
        onChange={handleChange}
      />
    </div>
  )
}

export const WithMinDateBoundary = StoryWithMinDateAndNavigation.bind({})
