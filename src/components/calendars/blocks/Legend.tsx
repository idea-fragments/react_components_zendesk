// @flow

import type { Legendable } from "components/calendars/Legendable.type"
import { FlexBlock }       from "components/layout/FlexBlock"
import { Text }            from "components/text/Text"
import * as React          from "react"
import styled              from "styled-components"
import { SPACINGS }        from "styles/spacings"
import { FONT_SIZES }      from "styles/typography"

type Props = {
    legendables :Array<Legendable>,
    defaultColor :string,
}

export const Legend = ({ legendables, defaultColor } :Props) => {
    const foundLabels = new Set()

    return <LegendContainer withRows spacing={SPACINGS.XS}>
        {legendables.map(({ color, label } :Legendable) => {
            if (foundLabels.has(label)) return null
            foundLabels.add(label)

            return <FlexBlock key={label}
                              alignItems={"center"}
                              spacing={SPACINGS.SM}>
                <ColorBlock color={color || defaultColor} />
                <Text>{label}</Text>
            </FlexBlock>
        })}
    </LegendContainer>
}

Legend.COMPONENT_NAME = "Legend"

const LegendContainer = styled(FlexBlock)`
  font-size: ${FONT_SIZES.XS};
`

const ColorBlock = styled.div`
  background: ${({ color }) => color};
  height: .75rem;
  width: .75rem;
`
