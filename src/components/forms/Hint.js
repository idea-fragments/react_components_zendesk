// @flow

import styled            from "styled-components"
import { Hint as ZHint }            from "@zendeskgarden/react-forms"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"

export const Hint = styled(ZHint)`
  && {
    font-size: ${FONT_SIZES.XS};
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    color: ${({ theme }) => theme.styles.textColorSecondary};
  }
`
