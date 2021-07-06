// @flow

import { Tooltip as ZTooltip }      from "@zendeskgarden/react-tooltips"
import styled, { css }              from "styled-components"
import type { Node, ComponentType } from "react"

const darkMode = css`
  background: ${({ theme }) => theme.styles.tooltip.darkBackground};
`

type Props = {
    arrow? :boolean,
    children :Node,
    trigger :Node,
    type? : "light" | null
}

export let Tooltip :ComponentType<Props> = styled(ZTooltip).attrs({
    delayMilliseconds: 0,
    zIndex:            999,
})`
  && {
    max-width: min(100vw, 300px);
    white-space: unset;
    ${({ type }) => type !== "light" ? darkMode : ""}
  }
`

Tooltip.defaultProps = { arrow: false }
