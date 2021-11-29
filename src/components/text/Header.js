// @flow

import { Text } from "components/text/Text"
import styled                                  from "styled-components"
import { FONT_SIZES, FONT_TAGS, FONT_WEIGHTS } from "styles/typography"


export const H1 = styled(Text).attrs({
    as: FONT_TAGS.H1,
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.XXL};
`

export const H2 = styled(Text).attrs({
    as: FONT_TAGS.H2,
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.XL};
`

export const H3 = styled(Text).attrs({
    as: FONT_TAGS.H3,
})`
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: ${FONT_SIZES.LG};
`

export const H4 = styled(Text).attrs({
    as: FONT_TAGS.H4,
})`
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: ${FONT_SIZES.MD};
`

export const H5 = styled(Text).attrs({
    as: FONT_TAGS.H5,
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.SM};
`

export const H6 = styled(Text).attrs({
    as: FONT_TAGS.H6,
})`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${FONT_SIZES.XS};
`

H1.COMPONENT_NAME = "H1"
H2.COMPONENT_NAME = "H2"
H3.COMPONENT_NAME = "H3"
H4.COMPONENT_NAME = "H4"
H5.COMPONENT_NAME = "H5"
H6.COMPONENT_NAME = "H6"
