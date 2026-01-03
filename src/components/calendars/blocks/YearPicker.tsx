import { SearchableSelector } from "components/forms/selectors/SearchableSelector"
import { OnItemSelectedFunc } from "components/forms/selectors/types"
import React from "react"
import { arrayOfSizeN } from "utils/arrayHelpers"

type Props = {
  year: number
  minYear: number
  maxYear: number
  onYearSelected: (year: string) => void
}

const KEY_FIELD = "value"

const yearOptions = (minYear: number, maxYear: number) => {
  const options: Array<{ value: string }> = []
  const optionsKeyMap: { [key: number]: { value: string } } = {}

  arrayOfSizeN(maxYear - minYear + 1).forEach((_, i: number) => {
    const op = { [KEY_FIELD]: `${minYear + i}` }
    options.push(op)
    optionsKeyMap[minYear + i] = op
  })

  return [options, optionsKeyMap] as const
}

export const YearPicker = ({
  year,
  minYear,
  maxYear,
  onYearSelected,
}: Props) => {
  const [options, optionsKeyMap] = yearOptions(minYear, maxYear)
  return (
    <SearchableSelector
      compact
      flat
      options={options}
      optionsKeyMap={optionsKeyMap}
      keyField={"value"}
      labelField={"value"}
      selectedKey={year}
      small
      emptyState={"Type or Select Year"}
      onChange={onYearSelected as OnItemSelectedFunc}
    />
  )
}
