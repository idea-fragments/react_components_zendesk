import { Text } from "components/text/Text"
import { CSSProp } from "styles/types"
import { FONT_SIZES, FONT_TAGS, FONT_WEIGHTS } from "styles/typography"
import styled from "styled-components"

export const Label = styled(Text).attrs({
  as: FONT_TAGS.LABEL,
})<CSSProp>`
  display: block;
  font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
  font-size: ${FONT_SIZES.SM};
  line-height: 1em;
  ${({ _css }) => _css}
`
