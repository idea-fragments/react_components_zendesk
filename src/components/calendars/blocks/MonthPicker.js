// @flow

import { SearchableSelector } from "components/forms/selectors/SearchableSelector"
import React                  from "react"
import { MONTH_MAP }          from "utils/dateTime/calendar"

const parseNumberAndCall = (action :(number) => void) => (s :string) => {
    action(Number(s))
}

const toTitleCase = (s :string) => (
    s.toLowerCase()
     .split(" ")
     .map((str :string) => str.charAt(0).toUpperCase() + str.substring(1))
     .join(" ")
)

const keyField                         = "monthNum"
const valueField                       = "monthName"
const [MONTH_OPTIONS, OPTIONS_KEY_MAP] = Object.keys(MONTH_MAP).reduce(
    ([monthOptions, optionsKeyMap], m :string) => {
        const op = {
            [keyField]  : MONTH_MAP[m],
            [valueField]: toTitleCase(m),
        }
        monthOptions.push(op)
        optionsKeyMap[MONTH_MAP[m]] = op

        return [monthOptions, optionsKeyMap]
    },
    [[], {}],
)

type Props = {
    month :number,
    onMonthSelected :(number) => void
}

export const MonthPicker = ({ month, onMonthSelected } :Props) => {
    return (
        <SearchableSelector compact
                            flat
                            maxMenuHeight={"10rem"}
                            options={MONTH_OPTIONS}
                            optionsKeyMap={OPTIONS_KEY_MAP}
                            keyField={keyField}
                            valueField={valueField}
                            selectedKey={month.toString()}
                            emptyState={"Type or Select Month"}
                            onChange={parseNumberAndCall(onMonthSelected)}
        />
    )
}
