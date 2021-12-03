import { Tooltip as ZTooltip } from "@zendeskgarden/react-tooltips"
import type { ReactNode }      from "react"
import styled, { css }         from "styled-components"

const darkMode = css`
  background: ${({ theme }) => theme.styles.tooltip.darkBackground};
`

type Props = {
  arrow?: boolean,
  children: ReactNode,
  placement?: "start"
  trigger: ReactNode,
  type?: "light" | null
}

export let Tooltip = styled(ZTooltip).attrs({
  delayMilliseconds: 0,
  zIndex:            999,
})<Props>`
  && {
    max-width: min(100vw, 300px);
    white-space: unset;
    ${({ type }) => type !== "light" ? darkMode : ""}
  }
`

Tooltip.defaultProps = { arrow: false }
