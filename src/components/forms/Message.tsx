import { Message as ZMessage } from "@zendeskgarden/react-forms"
import styled from "styled-components"
import { CSSProp } from "styles/types"
import { FONT_SIZES } from "styles/typography"

export const Message = styled(ZMessage)<CSSProp>`
  &&& {
    font-size: ${FONT_SIZES.XS};
    ${({ _css }: CSSProp) => _css}
  }
`
