import { Legend, Legendable } from "components/calendars/blocks/Legend"
import {
  MonthYearPicker,
  MonthYearPickerChange,
} from "components/calendars/blocks/MonthYearPicker"
import { FlexBox } from "components/layout/FlexBox"
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Calendar, Range } from "react-date-range"
import styled from "styled-components"
import { fade } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { Styles } from "styles/theme/Theme.type"
import { useTheme } from "styles/theme/useTheme"
import { FONT_WEIGHTS } from "styles/typography"
import { flatten } from "utils/arrayHelpers"
import { DateRange } from "utils/dateTime/DateRange.type"
import { maxDateBetween } from "utils/dateTimeHelpers"
import { DO_NOTHING } from "utils/functionHelpers"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

export type LabeledRangeList = {
  color?: string
  label: string
  ranges: Array<DateRange>
}

type ColoredDateRange = DateRange & { color?: string }

export type TinyCalendarProps = {
  disabledDates: Array<Date>
  fluid?: boolean
  initialDate?: Date
  labeledRanges?: Array<LabeledRangeList>
  minDate?: Date
  ranges?: Array<ColoredDateRange>
  showLegend?: boolean
  onChange: (d: Date) => void
}

const lowestPossibleDate = new Date()
lowestPossibleDate.setFullYear(Number.MIN_VALUE)

export let TinyCalendar: FC<TinyCalendarProps> = ({
  disabledDates = [],
  fluid = false,
  initialDate = new Date(),
  labeledRanges,
  minDate,
  ranges,
  showLegend = false,
  onChange = DO_NOTHING,
}) => {
  const [date, setDate] = useState<Date>(minDate ?? initialDate)
  const [displayMode] = useState<"dateRange" | "date">(
    labeledRanges || ranges ? "dateRange" : "date",
  )
  const theme = useTheme()
  const colors = theme.styles.colors
  const changeShownDate = useRef<(d: Date) => void>()
  const rangeColors = useMemo(() => {
    return Object.keys(colors)
      .filter((key: string) => !["black", "product", "white"].includes(key))
      .map((key: string) => {
        const c =
          colors[
            key as keyof Omit<Styles["colors"], "black" | "product" | "white">
          ]
        return c["600"]
      })
      .map((color: string) => fade(color, 0.3))
  }, [colors])

  const labeledRangeLegend = useMemo(() => {
    if (!labeledRanges) return undefined
    let numUsedColors = 0
    const labelColors: { [key: string]: Legendable } = {}

    labeledRanges.forEach((l: LabeledRangeList) => {
      labelColors[l.label] = {
        label: l.label,
        color: l.color ?? rangeColors[numUsedColors++],
      }
    })

    return labelColors
  }, [labeledRanges, rangeColors])

  const finalizedRanges: ColoredDateRange[] | undefined = useMemo(() => {
    if (!labeledRanges) return ranges

    return flatten<ColoredDateRange>(
      labeledRanges.map((l: LabeledRangeList) =>
        l.ranges.map((r: DateRange) => ({
          ...r,
          key: r.startDate.getTime() + "-" + r.endDate.getTime(),
          color: labeledRangeLegend![l.label].color,
        })),
      ),
    )
  }, [labeledRangeLegend, labeledRanges, ranges])

  const outOfMinRange = useMemo(() => {
    if (!minDate) return false

    return date < minDate
  }, [date, minDate])

  const usableDate: Date = useMemo(() => {
    return outOfMinRange ? minDate! : date
  }, [date, minDate, outOfMinRange])

  const changeDateState = useCallback(
    ({ month, year }: MonthYearPickerChange) => {
      const newDate = new Date(usableDate.toISOString())
      newDate.setMonth(month)
      newDate.setFullYear(year)

      const newUsableDate = maxDateBetween(
        newDate,
        minDate ?? lowestPossibleDate,
      )

      setDate(newUsableDate)
    },
    [minDate, usableDate],
  )

  useEffect(() => {
    if (changeShownDate.current != null) {
      changeShownDate.current(usableDate)
    }
  }, [usableDate])

  return (
    <Container
      fluid={fluid}
      withRows>
      <Calendar
        // focusedRange={undefined}
        // onRangeFocusChange={() => {
        //   console.log("onRangeFocusChange")
        // }}
        // initialFocusedRange={undefined}
        color={theme.styles.colorPrimary}
        // date={usableDate}
        displayMode={displayMode}
        disabledDates={disabledDates}
        dragSelectionEnabled={false}
        minDate={minDate ?? undefined}
        /*
         navigatorRenderer causes library's month and year pickers to be hidden.
         showMonthAndYearPickers prop doesnt need to be set to false at the moment
         but will be done anyway just in case.
         */
        navigatorRenderer={(_, changeShownDateFunc) => {
          changeShownDate.current = changeShownDateFunc
          return (
            <MonthYearPicker
              month={usableDate.getMonth()}
              year={usableDate.getFullYear()}
              minDate={minDate}
              pastFutureYearRangeSize={3}
              onChange={({ month, year }: MonthYearPickerChange) => {
                // changeShownDate(
                //     moment(usableDate).month(month).year(year).toDate(),
                // )
                changeDateState({ month, year })
              }}
            />
          )
        }}
        ranges={
          finalizedRanges as Pick<
            Range,
            "startDate" | "endDate" | "key" | "color"
          >[]
        }
        rangeColors={rangeColors}
        shownDate={usableDate}
        showMonthAndYearPickers={false}
        showMonthArrow={false}
        showPreview={true}
        showDateDisplay={false}
        onChange={onChange}
        // onShownDateChange={() => {
        //   console.log("onShownDateChange")
        // }}
        // onPreviewChange={() => {
        //   console.log("onPreviewChange")
        // }}
      />
      {showLegend && labeledRangeLegend ? (
        <Legend
          defaultColor={theme.styles.colorPrimary}
          legendables={Object.values(labeledRangeLegend)}
        />
      ) : null}
    </Container>
  )
}

const Container = styled(FlexBox)`
  padding: ${SPACINGS.SM};
  width: ${({ fluid }) => (fluid ? "100%" : "24.5rem")};

  .rdrMonth {
    width: 100%;
    padding: 0;
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
