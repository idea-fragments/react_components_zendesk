// @flow

import { Text }                                from "components/text/Text"
import { FONT_SIZES, FONT_TAGS, FONT_WEIGHTS } from "styles/typography"
import styled                                  from "styled-components"

const COMPONENT_NAME = "Label"

export const Label = styled(Text).attrs({
    as                   : FONT_TAGS.LABEL,
    "data-component-name": COMPONENT_NAME,
})`
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: ${FONT_SIZES.SM};
  line-height: 2.14286rem;
`

Label.COMPONENT_NAME = COMPONENT_NAME
