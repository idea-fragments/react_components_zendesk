// @ts-ignore
import { Tag as ZTag } from "@zendeskgarden/react-tags"
import styled          from "styled-components"

export const Close = styled(ZTag.Close)`

`

type Props = {
  size?: "small" | "large",
  children: any | typeof Close
}

export const Tag = styled(ZTag)<Props>`
  cursor: ${({ onClick }) => onClick ? "pointer" : "initial"};
`
