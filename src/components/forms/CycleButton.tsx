import React, { Fragment }              from "react"
import { Button, Props as ButtonProps } from "components/forms/Button"
import styled                           from "styled-components"
import { isLastItem, isNotLastItem }    from "utils/arrayHelpers"
import { FlexBox }                      from "components/layout/FlexBox"
import { COLORS }                       from "styles/colors"
import { FONT_SIZES }                   from "styles/typography"

type Option = { label: string, value: string }

type Props = Omit<ButtonProps, "onClick"> & {
  options: Array<Option>,
  selectedOption: string,
  onCycleChanged: (value: string) => void,
}

export const CycleButton = ({
                              options,
                              selectedOption,
                              onCycleChanged,
                              ...buttonProps
                            }: Props) => (
  <Button primary={false}
          {...buttonProps}
          onClick={() => {
            const next = cycle<string>(
              options.map((o: Option): string => o.value),
              selectedOption,
            )
            onCycleChanged(next)
          }}>
    <FlexBox alignItems={"center"} gap={"5px"}>
      {options.map((o: Option) => (
        <Fragment key={o.label}>
          <Label selected={selectedOption === o.value}>{o.label}</Label>
          {isNotLastItem(options, o) ? <Label>/</Label> : null}
        </Fragment>
      ))}
    </FlexBox>
  </Button>
)

const Label = styled.span<{ selected?: boolean }>`
  color: ${p => p.selected ? "inherit" : COLORS.LIGHT_GREY};
  font-size: ${p => p.selected ? "inherit" : FONT_SIZES.XS};;
`

const cycle = <T, >(cycleables: T[], current: T): T => (
  isLastItem(cycleables, current)
  ? cycleables[0]
  : cycleables[cycleables.indexOf(current) + 1]
)
