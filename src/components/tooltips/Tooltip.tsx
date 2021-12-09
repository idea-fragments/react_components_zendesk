// @ts-ignore
import { Tooltip as ZTooltip } from "@zendeskgarden/react-tooltips"
import type { ReactNode }      from "react"
import styled, { css }         from "styled-components"

const darkMode = css`
  background: ${({ theme }) => theme.styles.tooltip.darkBackground};
`

export type TooltipProps = {
  arrow?: boolean,
  children: ReactNode,
  maxWidth?: string,
  placement?: "start"
  trigger: ReactNode,
  type?: "light" | null
}

export let Tooltip = styled(ZTooltip).attrs({
  delayMilliseconds: 0,
  zIndex:            999,
})<TooltipProps>`
  && {
    max-width: ${({ maxWidth }: TooltipProps) => `min(100vw, ${maxWidth})`};
    white-space: unset;
    ${({ type }) => type !== "light" ? darkMode : ""}
  }
`

Tooltip.defaultProps = { arrow: false, maxWidth: "300px" }
