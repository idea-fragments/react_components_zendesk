// @flow

import { XS }           from "components/text/Paragraph"
import { FONT_WEIGHTS } from "styles/typography"
import styled           from "styled-components"

const COMPONENT_NAME = "Hint"

export const Hint = styled(XS).attrs(({ color, danger, theme }) => {
    const getTextColor = () => {
        if (color) return color
        if (danger) return theme.styles.colorDanger
        return theme.styles.textColorSecondary
    }

    return ({
        "data-component-name": COMPONENT_NAME,
        color                : getTextColor(),
    })
})`
  color: ${({ color }) => color};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`

Hint.COMPONENT_NAME = COMPONENT_NAME
