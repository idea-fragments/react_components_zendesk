import { MonthPicker } from "components/calendars/blocks/MonthPicker"
import React, { useState } from "react"

export default {
  component: MonthPicker,
  title: "calendars/MonthPicker",
}

const Story = () => {
  const [selectedMonth, setSelectedMonth] = useState(1)

  return (
    <div style={{ padding: "2rem", width: "300px" }}>
      <h3>Month Picker</h3>
      <p>Selected Month: {selectedMonth + 1}</p>
      <MonthPicker
        month={selectedMonth}
        onMonthSelected={setSelectedMonth}
      />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWithDifferentMonth = () => {
  const [selectedMonth, setSelectedMonth] = useState(5)

  return (
    <div style={{ padding: "2rem", width: "300px" }}>
      <h3>Month Picker - Starting in June</h3>
      <p>Selected Month: {selectedMonth + 1}</p>
      <MonthPicker
        month={selectedMonth}
        onMonthSelected={setSelectedMonth}
      />
    </div>
  )
}

export const StartingInJune = StoryWithDifferentMonth.bind({})

const StoryWithDecember = () => {
  const [selectedMonth, setSelectedMonth] = useState(11)

  return (
    <div style={{ padding: "2rem", width: "300px" }}>
      <h3>Month Picker - Starting in December</h3>
      <p>Selected Month: {selectedMonth + 1}</p>
      <MonthPicker
        month={selectedMonth}
        onMonthSelected={setSelectedMonth}
      />
    </div>
  )
}

export const StartingInDecember = StoryWithDecember.bind({})
