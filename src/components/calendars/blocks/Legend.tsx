import { FlexBox } from "components/layout/FlexBox"
import { Text } from "components/text/Text"
import * as React from "react"
import styled from "styled-components"
import { FONT_SIZES } from "styles/typography"

export type Legendable = {
  color?: string
  label: string
}

type Props = {
  legendables: Array<Legendable>
  defaultColor: string
}

export const Legend = ({ legendables, defaultColor }: Props) => {
  const foundLabels = new Set()

  return (
    <LegendContainer withRows>
      {legendables.map(({ color, label }: Legendable) => {
        if (foundLabels.has(label)) return null
        foundLabels.add(label)

        return (
          <FlexBox
            key={label}
            alignItems={"center"}>
            <ColorBlock color={color || defaultColor} />
            <Text>{label}</Text>
          </FlexBox>
        )
      })}
    </LegendContainer>
  )
}

Legend.COMPONENT_NAME = "Legend"

const LegendContainer = styled(FlexBox)`
  font-size: ${FONT_SIZES.XS};
`

const ColorBlock = styled.div`
  background: ${({ color }) => color};
  height: 0.75rem;
  width: 0.75rem;
`
