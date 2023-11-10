import { Hint as ZHint } from "@zendeskgarden/react-forms"
import styled from "styled-components"
import { CSSProp } from "styles/types"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"

export const Hint = styled(ZHint)<CSSProp>`
  &&& {
    font-size: ${FONT_SIZES.XS};
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    color: ${({ theme }) => theme.styles.textColorSecondary};
    ${({ _css }: CSSProp) => _css}
  }
`
