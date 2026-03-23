import { Tooltip as ZTooltip } from "@zendeskgarden/react-tooltips"
import { ComponentProps, PropsWithChildren, ReactNode } from "react"
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

export type TooltipProps = PropsWithChildren<
  {
    arrow?: boolean
    maxWidth?: string
    placement?: Placement
    content: ReactNode
    type?: "light"
  } & Pick<ComponentProps<typeof ZTooltip>, "appendToNode">
>

export const Tooltip = styled(ZTooltip).attrs<TooltipProps>(
  ({
    appendToNode,
    arrow = false,
    maxWidth = "300px",
    placement = "auto",
    ...props
  }) => ({
    appendToNode: appendToNode ?? document.body,
    delayMS: 0,
    hasArrow: arrow,
    maxWidth,
    placement,
    zIndex: 999,
    ...props,
  }),
)<TooltipProps>`
  && {
    max-width: ${({ maxWidth }: TooltipProps) => `min(100vw, ${maxWidth})`};
    white-space: unset;
    ${({ type }) => (type !== "light" ? darkMode : "")}
  }
`
