import styled, { css } from "styled-components"
import { SPACINGS }    from "styles/spacings"

const COMPONENT_NAME = "FlexBox"

export type Props = {
  alignItems?: string,
  gap?: string | null,
  fluid?: boolean,
  inline?: boolean,
  justifyContent?: string,
  withRows?: boolean,
  wrap?: boolean,
}

const getFlexDirection = ({ withRows }: Props) => withRows ? "column" : "row"

export const FlexBox = styled.div`
  align-items: ${({ alignItems }) => alignItems ? alignItems : "initial"};
  display: ${(p) => p.inline ? "inline-flex" : "flex"};
  flex: ${({ fluid }: Props) => fluid ? 1 : "unset"};
  flex-direction: ${getFlexDirection};
  gap: ${(p) => p.gap ? p.gap : SPACINGS.SM};
  justify-content: ${(p) => p.justifyContent || "initial"};
  ${(p :Props) => p.wrap ? wrappedStyling : ""}
`

// @ts-ignore
FlexBox.COMPONENT_NAME = COMPONENT_NAME
FlexBox.defaultProps   = { withRows: false }

const wrappedStyling = css`
  flex-wrap: wrap;
`
