import {
  TinyCalendar,
  LabeledRangeList,
} from "components/calendars/TinyCalendar"
import React, { useMemo, useState } from "react"

export default {
  component: TinyCalendar,
  title: "calendars/TinyCalendar",
}

const Story = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Calendar - Default</h3>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      <TinyCalendar
        disabledDates={[]}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWithMinDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const minDate = new Date(2024, 0, 1)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Calendar - With Min Date (Jan 1, 2024)</h3>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        Cannot select dates before January 1, 2024
      </p>
      <TinyCalendar
        disabledDates={[]}
        minDate={minDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithMinDate = StoryWithMinDate.bind({})

const StoryWithDisabledDates = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const disabledDates = [
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2025, 0, 1),
  ]
  const minDate = new Date(2024, 0, 1)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Calendar - With Disabled Dates</h3>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      <p style={{ fontSize: "0.875rem", color: "#666" }}>
        December 25-26, 2024 and January 1, 2025 are disabled
      </p>
      <TinyCalendar
        disabledDates={disabledDates}
        minDate={minDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithDisabledDates = StoryWithDisabledDates.bind({})

const StoryWithRanges = () => {
  const minDate = new Date(2024, 0, 1)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const ranges = useMemo(
    () => [
      {
        color: "#e3f2fd",
        endDate: new Date(2024, 11, 31),
        startDate: new Date(2024, 11, 24),
      },
      {
        color: "#fff3e0",
        endDate: new Date(2025, 0, 7),
        startDate: new Date(2025, 0, 1),
      },
    ],
    [],
  )

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Calendar - With Ranges</h3>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      <TinyCalendar
        disabledDates={[]}
        minDate={minDate}
        onChange={setSelectedDate}
        ranges={ranges}
      />
    </div>
  )
}

export const WithRanges = StoryWithRanges.bind({})

const StoryWithLabeledRanges = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const labeledRanges: LabeledRangeList[] = useMemo(
    () => [
      {
        label: "Vacation",
        ranges: [
          {
            endDate: new Date(2024, 11, 31),
            startDate: new Date(2024, 11, 24),
          },
        ],
      },
      {
        label: "Busy Period",
        ranges: [
          {
            endDate: new Date(2025, 0, 15),
            startDate: new Date(2025, 0, 1),
          },
        ],
      },
    ],
    [],
  )

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Calendar - With Labeled Ranges and Legend</h3>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      <TinyCalendar
        disabledDates={[]}
        labeledRanges={labeledRanges}
        showLegend
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithLabeledRanges = StoryWithLabeledRanges.bind({})

const StoryFluid = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div style={{ padding: "2rem", width: "100%" }}>
      <h3>Tiny Calendar - Fluid Width</h3>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      <TinyCalendar
        disabledDates={[]}
        fluid
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const Fluid = StoryFluid.bind({})

const StoryWithInitialDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const initialDate = new Date(2023, 6, 15)

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Tiny Calendar - With Initial Date (July 15, 2023)</h3>
      <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      <TinyCalendar
        disabledDates={[]}
        initialDate={initialDate}
        onChange={setSelectedDate}
      />
    </div>
  )
}

export const WithInitialDate = StoryWithInitialDate.bind({})
