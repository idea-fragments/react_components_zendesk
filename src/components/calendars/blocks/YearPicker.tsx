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

const yearOptions = (minYear: number, maxYear: number) =>
  arrayOfSizeN(maxYear - minYear + 1).reduce(
    ([options, optionsKeyMap], _, i: number) => {
      const op = { [KEY_FIELD]: `${minYear + i}` }
      options.push(op)
      optionsKeyMap[minYear + i] = op
      return [options, optionsKeyMap]
    },
    [[], {}],
  )

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
      emptyState={"Type or Select Year"}
      onChange={onYearSelected as OnItemSelectedFunc}
    />
  )
}
