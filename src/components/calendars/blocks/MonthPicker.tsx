import { SearchableSelector } from "components/forms/selectors/SearchableSelector"
import React                  from "react"
import { Month, MONTH_MAP }   from "utils/dateTime/calendar"

const parseNumberAndCall = (action: (n: number) => void) => (s: string) => {
  action(Number(s))
}

const toTitleCase = (s: string) => (
  s.toLowerCase()
   .split(" ")
   .map((str: string) => str.charAt(0).toUpperCase() + str.substring(1))
   .join(" ")
)

const keyField                         = "monthNum"
const valueField                       = "monthName"
const [MONTH_OPTIONS, OPTIONS_KEY_MAP] = Object.keys(MONTH_MAP).reduce(
  ([monthOptions, optionsKeyMap], m: string) => {
    const op = {
      [keyField]:   MONTH_MAP[m as Month],
      [valueField]: toTitleCase(m),
    }
    // @ts-ignore
    monthOptions.push(op)
    // @ts-ignore
    optionsKeyMap[MONTH_MAP[m as Month]] = op

    return [monthOptions, optionsKeyMap]
  },
  [[], {}],
)

type Props = {
  month: number,
  onMonthSelected: (n: number) => void
}

export const MonthPicker = ({ month, onMonthSelected }: Props) => {
  return (
    <SearchableSelector compact
                        flat
                        maxMenuHeight={"10rem"}
                        options={MONTH_OPTIONS}
                        optionsKeyMap={OPTIONS_KEY_MAP}
                        keyField={keyField}
                        labelField={valueField}
                        selectedKey={month.toString()}
                        emptyState={"Type or Select Month"}
      // @ts-ignore
                        onChange={parseNumberAndCall(onMonthSelected)}
    />
  )
}
