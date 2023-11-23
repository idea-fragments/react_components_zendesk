import { YearPicker } from "components/calendars/blocks/YearPicker"
import { FlexBlock, PaddedFlexBlock } from "components/layout/FlexBlock"
import moment, { Moment } from "moment"
import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { SPACINGS } from "styles/spacings"
import { maxDateBetween } from "utils/dateTimeHelpers"
import { DO_NOTHING } from "utils/functionHelpers"
import { maxNumberBetween } from "utils/numberHelpers"

type Props = {
  fluid: boolean
  initialDate: Moment
  minDate?: Moment
  onChange: () => void
}

export let TinyMonthYearCalendar = ({
  fluid = false,
  initialDate = moment(),
  minDate = moment().year(Number.MIN_VALUE),
  onChange = DO_NOTHING,
}: Props) => {
  const [date, setDate] = useState<Moment>(initialDate)
  const currentYear = moment().year()
  const maxYear = currentYear + 10
  const minYear = maxNumberBetween(
    currentYear - 5,
    minDate ? minDate.year() : Number.NEGATIVE_INFINITY,
  )

  const changeDateState = (year: string) => {
    const newDate = moment(date).year(Number(year))
    setDate(maxDateBetween(newDate, minDate))
  }

  return (
    <Container
      fluid={fluid}
      withRows
      spacing={SPACINGS.SM}>
      <YearPicker
        minYear={minYear}
        maxYear={maxYear}
        year={date.year()}
        onYearSelected={changeDateState}
      />
      <FlexBlock></FlexBlock>
    </Container>
  )
}

const Container = styled(PaddedFlexBlock)`
  width: ${({ fluid }) => (fluid ? "100%" : "24.5rem")};
`
