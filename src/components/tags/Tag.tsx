// @ts-ignore
import { Tag as ZTag } from "@zendeskgarden/react-tags"
import styled          from "styled-components"

export const Close = styled(ZTag.Close)`
  &&& { height: 26px; }
`

type Props = {
  size?: "small" | "large",
  children: any | typeof Close
}

export const Tag = styled(ZTag)<Props>`
  && {
    height: unset;
    padding: .3rem 12px;

    span {
      line-height: 1rem;
    }
  }
`
