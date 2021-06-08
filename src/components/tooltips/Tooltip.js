// @flow

import { Tooltip as ZTooltip }      from "@zendeskgarden/react-tooltips"
import styled, { css }              from "styled-components"
import type { Node, ComponentType } from "react"

const darkMode = css`
  background: ${({ theme }) => theme.styles.tooltip.darkBackground};
`

type Props = {
    trigger :Node,
    arrow? :boolean,
    children :Node,
}

export let Tooltip :ComponentType<Props> = styled(ZTooltip).attrs({
    arrow:             false,
    delayMilliseconds: 0,
    zIndex:            999,
})`
  && {
    max-width: min(100vw, 300px);
    white-space: unset;
    ${({ type }) => type !== "light" ? darkMode : ""}
  }
`
