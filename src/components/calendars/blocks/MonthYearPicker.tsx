import { mdiArrowLeft, mdiArrowRight } from "@mdi/js"
import { MonthPicker } from "components/calendars/blocks/MonthPicker"
import { YearPicker } from "components/calendars/blocks/YearPicker"
import { IconButton } from "components/forms/IconButton"
import { FlexBlock } from "components/layout/FlexBlock"
import moment, { Moment } from "moment"
import React from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { getNextMonth, getPrevMonth, MONTH_MAP } from "utils/dateTime/calendar"
import { maxNumberBetween } from "utils/numberHelpers"

export type MonthYearPickerChange = { month: number; year: number }

type Props = {
  month: number
  year: number
  minDate?: Moment
  pastFutureYearRangeSize: number
  onChange: (c: MonthYearPickerChange) => void
}

export const MonthYearPicker = ({
  month,
  year,
  minDate,
  pastFutureYearRangeSize,
  onChange,
}: Props) => {
  const currentYear = moment().year()
  const maxYear = currentYear + pastFutureYearRangeSize
  const minYear = maxNumberBetween(
    currentYear - pastFutureYearRangeSize,
    minDate ? minDate.year() : Number.NEGATIVE_INFINITY,
  )

  const sendPreviousMonth = () => {
    const changes = {
      month: getPrevMonth(month),
      year: month === MONTH_MAP.JANUARY ? year - 1 : year,
    }

    if (changes.year < minYear) return

    // @ts-ignore
    onChange(changes)
  }

  const sendNextMonth = () => {
    const changes = {
      month: getNextMonth(month),
      year: month === MONTH_MAP.DECEMBER ? year + 1 : year,
    }

    if (changes.year > maxYear) return

    // @ts-ignore
    onChange(changes)
  }

  const sendSelectedMonth = (m: number) => {
    onChange({ month: Number(m), year })
  }

  const sendSelectedYear = (y: string) => {
    onChange({ month, year: Number(y) })
  }

  return (
    <Container alignItems={"center"}>
      <NavButton
        icon={mdiArrowLeft}
        onClick={sendPreviousMonth}
      />
      <PickersContainer>
        {/*@ts-ignore*/}
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
      </PickersContainer>
      <NavButton
        icon={mdiArrowRight}
        onClick={sendNextMonth}
      />
    </Container>
  )
}

const NavButton = styled(IconButton).attrs({
  flat: true,
})``

const Container = styled(FlexBlock)`
  margin-bottom: ${SPACINGS.XS};
  align-items: center;
`

const PickersContainer = styled(FlexBlock).attrs({
  spacing: SPACINGS.XS,
})`
  margin-left: ${SPACINGS.XS};
  flex: 1;
  justify-content: center;
`
