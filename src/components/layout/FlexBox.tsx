import styled, { css } from "styled-components"
import { MediaQuery } from "styles/mediaQueries"
import { SPACINGS } from "styles/spacings"
import { CSSProp } from "styles/types"

export type ResponsiveProps<P> = {
  mediaQueryFunc: MediaQuery
  props: P
}

export type FlexBoxProps = {
  alignItems?: string
  gap?: string | null | "unset"
  fluid?: boolean
  inline?: boolean
  justifyContent?: string
  responsivePropsList?: ResponsiveProps<FlexBoxProps>[]
  withRows?: boolean
  wrapped?: boolean
} & CSSProp

const getFlexDirection = ({ withRows }: FlexBoxProps) =>
  withRows ? "column" : "row"

export const FlexBox = styled.div<FlexBoxProps>`
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  display: ${(p) => (p.inline ? "inline-flex" : "flex")};
  flex: ${({ fluid }: FlexBoxProps) => (fluid ? 1 : "unset")};
  flex-direction: ${getFlexDirection};
  gap: ${(p) => (p.gap ? p.gap : SPACINGS.SM)};
  justify-content: ${(p) => p.justifyContent || "initial"};
  ${(p: FlexBoxProps) => (p.wrapped ? wrappedStyling : "")}

  ${(p: FlexBoxProps) => (p.responsivePropsList ? responsiveStyles(p) : "")}
  ${(p: FlexBoxProps) => p._css}
`

FlexBox.defaultProps = { withRows: false }

const responsiveStyles = ({
  responsivePropsList,
  ...originalProps
}: FlexBoxProps) =>
  responsivePropsList?.map(({ mediaQueryFunc, props: rProps }): string => {
    const props = { ...originalProps, ...rProps }
    const { alignItems, gap, inline, justifyContent, fluid, wrapped } = props

    return mediaQueryFunc(css`
      align-items: ${alignItems ? alignItems : "initial"};
      display: ${inline ? "inline-flex" : "flex"};
      flex: ${fluid ? 1 : "unset"};
      flex-direction: ${getFlexDirection(props)};
      gap: ${gap ? gap : SPACINGS.SM};
      justify-content: ${justifyContent || "initial"};
      ${wrapped ? wrappedStyling : ""}
    `).join("")
  })

const wrappedStyling = css`
  flex-wrap: wrap;
`
