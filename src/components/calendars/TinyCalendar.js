// @flow

import { Legend }                      from "components/calendars/blocks/Legend"
import type { MonthYearPickerChange }  from "components/calendars/blocks/MonthYearPicker"
import { MonthYearPicker }             from "components/calendars/blocks/MonthYearPicker"
import type { Legendable }             from "components/calendars/Legendable.type"
import { PaddedFlexBlock }             from "components/layout/FlexBlock"
import moment, { Moment }              from "moment"
import { useEffect, useRef, useState } from "react"
import * as React                      from "react"
import { Calendar }                    from "react-date-range"
import { useTheme }                    from "styles/theme/useTheme"
import type { DateRange }              from "utils/dateTime/DateRange.type"
import styled                          from "styled-components"
import {
    maxDateBetween,
    momentListToDateList,
}                                      from "utils/dateTimeHelpers"
import { DO_NOTHING }                  from "utils/functionHelpers"
import { COLORS, fade }                from "styles/colors"
import { SPACINGS }                    from "styles/spacings"
import { FONT_WEIGHTS }                from "styles/typography"
import { flatten }                     from "utils/arrayHelpers"

export type LabeledRangeList = {
    color? :string,
    label :string,
    ranges :Array<DateRange>,
}

type ColoredDateRange = DateRange & { color? :string }

type Props = {
    disabledDates :Array<Moment>,
    displayMode? :"dateRange" | "date",
    fluid :boolean,
    initialDate :Moment,
    labeledRanges? :Array<LabeledRangeList>,
    minDate? :Moment,
    ranges? :Array<ColoredDateRange>,
    showLegend :boolean,
    onChange :(Date) => void,
}

export let TinyCalendar = ({
                               disabledDates,
                               displayMode,
                               fluid,
                               initialDate,
                               labeledRanges,
                               minDate,
                               ranges,
                               showLegend,
                               onChange,
                           } :Props) => {
    const [date, setDate]    = useState<Moment>(minDate || initialDate)
    const theme              = useTheme()
    const outOfMinRange      = minDate && date.isBefore(minDate)
    const usableDate :Moment = outOfMinRange ? minDate : date
    const changeShownDate    = useRef<?(Date) => void>(null)

    useEffect(() => {
        if (changeShownDate.current != null) {
            changeShownDate.current(usableDate.toDate())
        }
    }, [usableDate])

    const changeDateState = ({ month, year } :MonthYearPickerChange) => {
        const newDate       = moment(usableDate).month(month).year(year)
        const newUsableDate = maxDateBetween(
            newDate, (minDate || moment().year(Number.MIN_VALUE)),
        )
        setDate(newUsableDate)
    }

    const rangeColors = [
        COLORS.PURPLE,
        COLORS.GREEN,
        COLORS.YELLOW,
    ].map((color :string) => fade(color))

    let numUsedColors                           = 0
    const labelColors :{ [string] :Legendable } = {}
    if (labeledRanges) {
        labeledRanges.forEach((l :LabeledRangeList) => {
            labelColors[l.label] = {
                label: l.label,
                color: l.color || rangeColors[numUsedColors++],
            }
        })

        ranges = flatten<ColoredDateRange>(labeledRanges.map(
            (l :LabeledRangeList) => (
                l.ranges.map((r :DateRange) => ({
                    ...r,
                    color: labelColors[l.label].color,
                }))
            ),
        ))
    }

    displayMode = displayMode || (ranges ? "dateRange" : "date")

    return <Container data-component-name={TinyCalendar.COMPONENT_NAME}
                      fluid={fluid}
                      withRows
                      spacing={SPACINGS.SM}>
        <Calendar
            color={theme.styles.colorPrimary}
            // date={usableDate.toDate()}
            displayMode={displayMode}
            disabledDates={momentListToDateList(disabledDates)}
            dragSelectionEnabled={false}
            minDate={minDate ? minDate.toDate() : undefined}
            /*
             navigatorRenderer causes library's month and year pickers to be hidden.
             showMonthAndYearPickers prop doesnt need to be set to false at the moment
             but will be done anyway just in case.
             */
            navigatorRenderer={(_, changeShownDateFunc) => {
                changeShownDate.current = changeShownDateFunc
                return <MonthYearPicker
                    month={usableDate.month()}
                    year={usableDate.year()}
                    minDate={minDate}
                    pastFutureYearRangeSize={3}
                    onChange={({ month, year } :MonthYearPickerChange) => {
                        // changeShownDate(
                        //     moment(usableDate).month(month).year(year).toDate(),
                        // )
                        changeDateState({ month, year })
                    }}
                />
            }}
            ranges={ranges}
            rangeColors={rangeColors}
            shownDate={usableDate.toDate()}
            showSelectionPreview={false}
            showMonthAndYearPickers={false}
            showMonthArrow={false}
            showPreview={true}
            showDateDisplay={false}
            onChange={onChange}
            onShownDateChange={DO_NOTHING}
            onPreviewChange={DO_NOTHING}
        />
        {
            showLegend && labeledRanges
            ?
            <Legend legendables={Object.values(labelColors)}
                    defaultColor={theme.styles.colorPrimary} />
            :
            null
        }
    </Container>
}

TinyCalendar.COMPONENT_NAME = "TinyCalendar"
TinyCalendar.defaultProps   = {
    disabledDates: [],
    fluid        : false,
    initialDate  : moment(),
    // minDate      : moment().year(Number.MIN_VALUE),
    showLegend   : false,
    onChange     : DO_NOTHING,
}

const Container = styled(PaddedFlexBlock)`
  width: ${({ fluid }) => fluid ? "100%" : "24.5rem"};

  .rdrMonth {
    width: 100%;
  }

  .rdrDay.rdrDayToday .rdrDayNumber span:after {
    background: ${({ theme }) => theme.styles.colorPrimary};
  }

  .rdrDay.rdrDayHovered {
    .rdrDayNumber {
      background: ${({ theme }) => theme.styles.colorPrimary};
      border-radius: 2em;

      span {
        color: ${({ theme }) => theme.styles.textColorOverPrimaryBg};
      }

      ::after {
        display: none;
      }
    }
  }

  .rdrDayNumber {
    font-weight: ${FONT_WEIGHTS.REGULAR};
    top: 2px;
    bottom: 2px;
  }

  .rdrMonthAndYearWrapper {
    display: none;
  }
`
