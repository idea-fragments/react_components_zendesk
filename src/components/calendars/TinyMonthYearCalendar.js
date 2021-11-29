// @flow

import { Legend }                     from "components/calendars/blocks/Legend"
import type { MonthYearPickerChange } from "components/calendars/blocks/MonthYearPicker"
import { MonthYearPicker }            from "components/calendars/blocks/MonthYearPicker"
import { YearPicker }                 from "components/calendars/blocks/YearPicker"
import type { Legendable }            from "components/calendars/Legendable.type"
import { FlexBlock, PaddedFlexBlock } from "components/layout/FlexBlock"
import moment, { Moment }             from "moment"
import { useState, useContext }       from "react"
import * as React                     from "react"
import { Calendar }                   from "react-date-range"
import { useTheme }                   from "styles/theme/useTheme"
import type { DateRange }             from "utils/dateTime/DateRange.type"
import styled, { css }                from "styled-components"
import {
    maxDateBetween,
    momentListToDateList,
}                           from "utils/dateTimeHelpers"
import { DO_NOTHING }       from "utils/functionHelpers"
import { loggable }         from "utils/logging/loggable"
import { COLORS, fade }     from "styles/colors"
import { SPACINGS }         from "styles/spacings"
import type { Theme }       from "styles/theme/Theme.type"
import { FONT_WEIGHTS }     from "styles/typography"
import { ThemeContext }     from "styled-components"
import { flatten }          from "utils/arrayHelpers"
import { maxNumberBetween } from "utils/numberHelpers"

type Props = {
    fluid :boolean,
    initialDate :Moment,
    minDate? :Moment,
    onChange :() => void,
}

export let TinyMonthYearCalendar = ({
                                        fluid,
                                        initialDate,
                                        minDate,
                                        onChange,
                                    } :Props) => {
    const [date, setDate] = useState<Moment>(initialDate)
    const theme           = useTheme()

    const currentYear = moment().year()
    const maxYear     = currentYear + 10
    const minYear     = maxNumberBetween(
        currentYear - 5,
        minDate ? minDate.year() : Number.NEGATIVE_INFINITY,
    )

    const changeDateState = (year :string) => {
        const newDate = moment(date).year(year)
        setDate(maxDateBetween(newDate, minDate))
    }

    return <Container data-component-name={TinyMonthYearCalendar.COMPONENT_NAME}
                      fluid={fluid}
                      withRows
                      spacing={SPACINGS.SM}>
        <YearPicker minYear={minYear}
                    maxYear={maxYear}
                    year={date.year()}
                    onYearSelected={changeDateState}
        />
        <FlexBlock>

        </FlexBlock>
    </Container>
}

TinyMonthYearCalendar.COMPONENT_NAME = "TinyMonthYearCalendar"
TinyMonthYearCalendar.defaultProps   = {
    fluid        : false,
    initialDate  : moment(),
    minDate      : moment().year(Number.MIN_VALUE),
    onChange     : DO_NOTHING,
}

const Container = styled(PaddedFlexBlock)`  
  width: ${({ fluid }) => fluid ? "100%" : "24.5rem"};
`
