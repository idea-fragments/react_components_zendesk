// @flow

import { Tooltip as ZTooltip } from "@zendeskgarden/react-tooltips"
import styled, { css }         from "styled-components"

const darkMode = css`
  background: ${({theme}) => theme.styles.tooltip.darkBackground};
`

export let Tooltip = styled(ZTooltip)`
  && {
    ${({type}) => type !== "light" ? darkMode : ""}
  }
`
