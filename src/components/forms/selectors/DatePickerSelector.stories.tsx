import { DatePickerSelector } from "components/forms/selectors/DatePickerSelector"
import React, { useState } from "react"

export default {
  component: DatePickerSelector,
  title: "forms/DatePickerSelector",
}

const Story = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - Default</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <DatePickerSelector
        disabledDates={[]}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWithInitialValue = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(2024, 6, 15),
  )

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - With Initial Value</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <DatePickerSelector
        disabledDates={[]}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithInitialValue = StoryWithInitialValue.bind({})

const StoryWithMinDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const minDate = new Date(2024, 0, 1)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - With Minimum Date</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        Cannot select dates before January 1, 2024
      </p>
      <DatePickerSelector
        disabledDates={[]}
        minimumDate={minDate}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithMinimumDate = StoryWithMinDate.bind({})

const StoryWithDisabledDates = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const disabledDates = [
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2025, 0, 1),
  ]

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - With Disabled Dates</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        December 25-26, 2024 and January 1, 2025 are disabled
      </p>
      <DatePickerSelector
        disabledDates={disabledDates}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithDisabledDates = StoryWithDisabledDates.bind({})

const StoryDisabled = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(2024, 5, 15),
  )

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - Disabled</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <DatePickerSelector
        disabledDates={[]}
        disabled
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const Disabled = StoryDisabled.bind({})

const StoryWithCustomEmptyState = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - Custom Empty State</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <DatePickerSelector
        disabledDates={[]}
        emptyState={"Choose a date..."}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithCustomEmptyState = StoryWithCustomEmptyState.bind({})

const StoryWithLabel = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - With Label</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <DatePickerSelector
        disabledDates={[]}
        label={"Event Date"}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithLabel = StoryWithLabel.bind({})

const StoryWithValidation = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Date Picker Selector - With Validation Error</h3>
      <p>Selected Date: {selectedDate?.toLocaleDateString() || "None"}</p>
      <DatePickerSelector
        disabledDates={[]}
        label={"Required Date"}
        validation={{
          message: "Please select a date",
          validation: "error",
        }}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithValidation = StoryWithValidation.bind({})
