// @ts-ignore
import { Message as ZMessage } from "@zendeskgarden/react-forms"
import styled from "styled-components"
import { FONT_SIZES } from "styles/typography"

export const Message = styled(ZMessage)`
  &&& {
    font-size: ${FONT_SIZES.XS};
  }
`
