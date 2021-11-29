// @flow
import { Text } from "components/text/Text"
import styled                                  from "styled-components"
import { FONT_SIZES, FONT_TAGS, FONT_WEIGHTS } from "styles/typography"

const COMPONENT_NAME = "Paragraph"

export const Paragraph = styled(Text).attrs({
    as                   : FONT_TAGS.P,
    "data-component-name": COMPONENT_NAME,
})`
  font-weight: ${FONT_WEIGHTS.REGULAR};
`

Paragraph.COMPONENT_NAME = COMPONENT_NAME

export const XXS = styled(Paragraph)`
  font-size: ${FONT_SIZES.XXS};
`

export const XS = styled(Paragraph)`
  font-size: ${FONT_SIZES.XS};
`

export const MD = styled(Paragraph)`
  font-size: ${FONT_SIZES.MD};
`

export const LG = styled(Paragraph)`
  font-size: ${FONT_SIZES.LG};
`

export const XL = styled(Paragraph)`
  font-size: ${FONT_SIZES.XL};
`
