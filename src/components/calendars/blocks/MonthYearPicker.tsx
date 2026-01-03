import { mdiArrowLeft, mdiArrowRight } from "@mdi/js"
import { MonthPicker } from "components/calendars/blocks/MonthPicker"
import { YearPicker } from "components/calendars/blocks/YearPicker"
import { IconButton } from "components/forms/IconButton"
import { FlexBox } from "components/layout/FlexBox"
import moment from "moment"
import React, { FC } from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { getNextMonth, getPrevMonth, MONTH_MAP } from "utils/dateTime/calendar"
import { maxNumberBetween } from "utils/numberHelpers"

export type MonthYearPickerChange = { month: number; year: number }

type MonthYearPickerProps = {
  maxYear?: number
  minDate?: Date
  month: number
  pastFutureYearRangeSize: number
  year: number
  onChange: (c: MonthYearPickerChange) => void
}

export const MonthYearPicker: FC<MonthYearPickerProps> = ({
  maxYear: maxYearProp,
  minDate,
  month,
  pastFutureYearRangeSize,
  year,
  onChange,
}) => {
  const currentYear = moment().year()
  const maxYear = maxYearProp ?? currentYear + pastFutureYearRangeSize
  const minYear = maxNumberBetween(
    currentYear - pastFutureYearRangeSize,
    minDate ? minDate.getUTCFullYear() : Number.NEGATIVE_INFINITY,
  )

  const sendPreviousMonth = () => {
    const changes = {
      month: getPrevMonth(month),
      year: month === MONTH_MAP.JANUARY ? year - 1 : year,
    }

    if (changes.year < minYear) return

    onChange(changes)
  }

  const sendNextMonth = () => {
    const changes = {
      month: getNextMonth(month),
      year: month === MONTH_MAP.DECEMBER ? year + 1 : year,
    }

    if (changes.year > maxYear) return

    onChange(changes)
  }

  const sendSelectedMonth = (m: number) => {
    onChange({ month: Number(m), year })
  }

  const sendSelectedYear = (y: string) => {
    onChange({ month, year: Number(y) })
  }

  return (
    <Container
      alignItems={"center"}
      gap={SPACINGS.XS}>
      <NavButton
        icon={mdiArrowLeft}
        onClick={sendPreviousMonth}
      />
      <FlexBox
        alignItems={"center"}
        fluid
        gap={SPACINGS.XS}
        justifyContent={"center"}>
        <MonthPicker
          month={month}
          onMonthSelected={sendSelectedMonth}
        />
        <YearPicker
          year={year}
          minYear={minYear}
          maxYear={maxYear}
          onYearSelected={sendSelectedYear}
        />
      </FlexBox>
      <NavButton
        icon={mdiArrowRight}
        onClick={sendNextMonth}
      />
    </Container>
  )
}

const NavButton = styled(IconButton).attrs({
  flat: true,
  iconSize: "1.2rem",
})`
  flex: none;
  height: unset;
`

const Container = styled(FlexBox)`
  margin-bottom: ${SPACINGS.XS};
`
