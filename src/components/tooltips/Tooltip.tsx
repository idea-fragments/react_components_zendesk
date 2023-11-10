// @ts-ignore
import { Tooltip as ZTooltip } from "@zendeskgarden/react-tooltips"
import { PropsWithChildren, ReactNode } from "react"
import styled, { css } from "styled-components"

const darkMode = css`
  background: ${({ theme }) => theme.styles.tooltip.darkBackground};
`

type Placement =
  | "start"
  | "end"
  | "auto"
  | "top"
  | "bottom"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "end-top"
  | "end-bottom"
  | "start-top"
  | "start-bottom"

export type TooltipProps = PropsWithChildren<{
  arrow?: boolean
  maxWidth?: string
  placement?: Placement
  content: ReactNode
  type?: "light" | null
}>

export const Tooltip = styled(ZTooltip).attrs<TooltipProps>(({ arrow }) => ({
  delayMS: 0,
  hasArrow: arrow,
  zIndex: 999,
}))<TooltipProps>`
  && {
    max-width: ${({ maxWidth }: TooltipProps) => `min(100vw, ${maxWidth})`};
    white-space: unset;
    ${({ type }) => (type !== "light" ? darkMode : "")}
  }
`

Tooltip.defaultProps = { arrow: false, maxWidth: "300px", placement: "auto" }
