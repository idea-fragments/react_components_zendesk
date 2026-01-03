import { SearchableSelector } from "components/forms/selectors/SearchableSelector"
import {
  SelectorItemKey,
  SelectorOption,
} from "components/forms/selectors/types"
import React from "react"
import { Month, MONTH_MAP } from "utils/dateTime/calendar"

const parseNumberAndCall =
  (action: (n: number) => void) => (s: SelectorItemKey) => {
    action(Number(s))
  }

const toTitleCase = (s: string) =>
  s
    .toLowerCase()
    .split(" ")
    .map((str: string) => str.charAt(0).toUpperCase() + str.substring(1))
    .join(" ")

const keyField = "monthNum"
const labelField = "monthName"

const [MONTH_OPTIONS, OPTIONS_KEY_MAP] = Object.keys(MONTH_MAP).reduce(
  ([monthOptions, optionsKeyMap], m: string) => {
    const op = {
      [keyField]: MONTH_MAP[m as Month],
      [labelField]: toTitleCase(m),
    }

    monthOptions.push(op)
    optionsKeyMap[MONTH_MAP[m as Month]] = op

    return [monthOptions, optionsKeyMap]
  },
  [
    [] as Array<{ monthNum: number; monthName: string }>,
    {} as { [key: number]: { monthNum: number; monthName: string } },
  ],
)

export type MonthPickerProps = {
  month: number
  onMonthSelected: (n: number) => void
}

export const MonthPicker = ({ month, onMonthSelected }: MonthPickerProps) => {
  return (
    <SearchableSelector
      compact
      emptyState={"Type or Select Month"}
      flat
      keyField={keyField}
      labelField={labelField}
      maxMenuHeight={"10rem"}
      onChange={parseNumberAndCall(onMonthSelected)}
      options={
        MONTH_OPTIONS as SelectorOption<{
          monthNum: number
          monthName: string
        }>[]
      }
      optionsKeyMap={OPTIONS_KEY_MAP}
      selectedKey={month.toString()}
      small
    />
  )
}
