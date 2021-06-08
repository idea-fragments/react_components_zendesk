// @flow


import { ComponentType }                from "@zendeskgarden/react-tags"
import { Close as ZClose, Tag as ZTag } from "@zendeskgarden/react-tags"
import styled                           from "styled-components"

export const Close = styled(ZClose)`
  &&& { height: 26px; }
`

type Props = {
    size? :"small" | "large",
    children :any | Close
}

export const Tag :ComponentType<Props> = styled(ZTag)`
  && {
    height: unset;
    padding: .3rem 12px;

    span {
      line-height: 1rem;
    }
  }
`
