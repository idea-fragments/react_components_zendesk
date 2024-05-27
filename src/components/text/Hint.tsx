import { XS } from "components/text/Paragraph"
import styled from "styled-components"
import { ColorProps } from "styles/types"
import { FONT_WEIGHTS } from "styles/typography"

export const Hint = styled(XS).attrs<ColorProps>(({ color, danger, theme }) => {
  const getTextColor = () => {
    if (color) return color
    if (danger) return theme.styles.colorDanger
    return theme.styles.textColorSecondary
  }

  return {
    color: getTextColor(),
  }
})`
  color: ${({ color }) => color};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`
