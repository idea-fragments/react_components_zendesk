import { YearPicker } from "components/calendars/blocks/YearPicker"
import React, { useState } from "react"

export default {
  component: YearPicker,
  title: "calendars/YearPicker",
}

const Story = () => {
  const [selectedYear, setSelectedYear] = useState(2024)

  return (
    <div style={{ padding: "2rem", width: "300px" }}>
      <h3>Year Picker - 2020 to 2030</h3>
      <p>Selected Year: {selectedYear}</p>
      <YearPicker
        maxYear={2030}
        minYear={2020}
        year={selectedYear}
        onYearSelected={(year) => setSelectedYear(Number(year))}
      />
    </div>
  )
}

export const Default = Story.bind({})

const StoryWideRange = () => {
  const [selectedYear, setSelectedYear] = useState(2000)

  return (
    <div style={{ padding: "2rem", width: "300px" }}>
      <h3>Year Picker - Wide Range (1950 to 2050)</h3>
      <p>Selected Year: {selectedYear}</p>
      <YearPicker
        maxYear={2050}
        minYear={1950}
        year={selectedYear}
        onYearSelected={(year) => setSelectedYear(Number(year))}
      />
    </div>
  )
}

export const WideRange = StoryWideRange.bind({})

const StoryNarrowRange = () => {
  const [selectedYear, setSelectedYear] = useState(2023)

  return (
    <div style={{ padding: "2rem", width: "300px" }}>
      <h3>Year Picker - Narrow Range (2020 to 2025)</h3>
      <p>Selected Year: {selectedYear}</p>
      <YearPicker
        maxYear={2025}
        minYear={2020}
        year={selectedYear}
        onYearSelected={(year) => setSelectedYear(Number(year))}
      />
    </div>
  )
}

export const NarrowRange = StoryNarrowRange.bind({})

const StoryHistoricalRange = () => {
  const [selectedYear, setSelectedYear] = useState(1990)

  return (
    <div style={{ padding: "2rem", width: "300px" }}>
      <h3>Year Picker - Historical (1980 to 2000)</h3>
      <p>Selected Year: {selectedYear}</p>
      <YearPicker
        maxYear={2000}
        minYear={1980}
        year={selectedYear}
        onYearSelected={(year) => setSelectedYear(Number(year))}
      />
    </div>
  )
}

export const HistoricalRange = StoryHistoricalRange.bind({})
