// @flow

import { Tooltip as ZTooltip } from "@zendeskgarden/react-tooltips"
import styled, { css }         from "styled-components"

const darkMode = css`
  background: ${({theme}) => theme.styles.tooltip.darkBackground};
`

export let Tooltip = styled(ZTooltip).attrs({
    arrow: false,
    delayMilliseconds: 0
})`
  && {
    width: 300px;
    max-width: 100vw;
    white-space: unset;
    ${({type}) => type !== "light" ? darkMode : ""}
  }
`
