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
import { DateRangePicker, RangeKeyDict } from "react-date-range"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { useTheme } from "styles/theme/useTheme"
import { CSSProp } from "styles/types"
import { FONT_WEIGHTS } from "styles/typography"
import { DateRange } from "utils/dateTime/DateRange.type"
import { maxDateBetween } from "utils/dateTimeHelpers"
import { DO_NOTHING } from "utils/functionHelpers"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

export type TinyDateRangePickerProps = {
  disabledDates?: Array<Date>
  fluid?: boolean
  initialRange?: DateRange
  maxDate?: Date
  minDate?: Date
  onChange: (range: DateRange) => void
} & CSSProp

const lowestPossibleDate = new Date()
lowestPossibleDate.setFullYear(Number.MIN_VALUE)

let _TinyDateRangePicker: FC<
  TinyDateRangePickerProps & { className?: string }
> = ({
  className,
  disabledDates = [],
  fluid = false,
  initialRange,
  maxDate,
  minDate,
  onChange = DO_NOTHING,
}) => {
  const theme = useTheme()
  const changeShownDate = useRef<(d: Date) => void>()

  const [range, setRange] = useState<DateRange>({
    endDate: initialRange?.endDate || new Date(),
    startDate: initialRange?.startDate || new Date(),
  })

  const [date, setDate] = useState<Date>(initialRange?.startDate ?? new Date())

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

  const handleRangeChange = useCallback(
    (rangesByKey: RangeKeyDict) => {
      const selection = rangesByKey.selection
      if (selection && selection.startDate && selection.endDate) {
        const newRange: DateRange = {
          endDate: selection.endDate,
          startDate: selection.startDate,
        }
        setRange(newRange)
        onChange(newRange)
      }
    },
    [onChange],
  )

  useEffect(() => {
    if (changeShownDate.current != null) {
      changeShownDate.current(usableDate)
    }
  }, [usableDate])

  const ranges = [
    {
      endDate: range.endDate,
      key: "selection",
      startDate: range.startDate,
    },
  ]

  return (
    <Container
      className={className}
      fluid={fluid}
      withRows>
      <DateRangePicker
        color={theme.styles.colorPrimary}
        disabledDates={disabledDates}
        dragSelectionEnabled={true}
        maxDate={maxDate}
        minDate={minDate}
        navigatorRenderer={(_, changeShownDateFunc) => {
          changeShownDate.current = changeShownDateFunc
          return (
            <MonthYearPicker
              maxYear={maxDate?.getFullYear()}
              minDate={minDate}
              month={usableDate.getMonth()}
              pastFutureYearRangeSize={3}
              year={usableDate.getFullYear()}
              onChange={changeDateState}
            />
          )
        }}
        rangeColors={[theme.styles.colorPrimary]}
        ranges={ranges}
        scroll={{ enabled: true }}
        shownDate={usableDate}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        showMonthArrow={false}
        showPreview={true}
        onChange={handleRangeChange}
      />
    </Container>
  )
}

export const TinyDateRangePicker = styled(
  _TinyDateRangePicker,
)<TinyDateRangePickerProps>`
  ${({ _css }) => _css}
`

const Container = styled(FlexBox)`
  padding: ${SPACINGS.SM};
  width: ${({ fluid }) => (fluid ? "100%" : "24.5rem")};

  .rdrCalendarWrapper,
  .rdrDateRangeWrapper {
    width: 100%;
  }

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

  .rdrDefinedRangesWrapper {
    display: none;
  }
`
