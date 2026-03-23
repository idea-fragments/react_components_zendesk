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
  reversed?: boolean
  withRows?: boolean
  wrapped?: boolean
} & CSSProp

const getFlexDirection = ({ reversed, withRows }: FlexBoxProps) => {
  const base = withRows ? "column" : "row"
  return reversed ? `${base}-reverse` : base
}

export const FlexBox = styled.div<FlexBoxProps>`
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  display: ${(p) => (p.inline ? "inline-flex" : "flex")};
  flex-direction: ${getFlexDirection};
  gap: ${(p) => (p.gap ? p.gap : SPACINGS.SM)};
  justify-content: ${(p) => p.justifyContent || "initial"};
  ${(p: FlexBoxProps) => (p.wrapped ? wrappedStyling : "")}
  ${(p: FlexBoxProps) => (p.fluid ? "flex: 1;" : "")}
  ${(p: FlexBoxProps) => (p.responsivePropsList ? responsiveStyles(p) : "")}
  ${(p: FlexBoxProps) => p._css}
`

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
      ${fluid ? "flex: 1;" : ""}
      flex-direction: ${getFlexDirection(props)};
      gap: ${gap ? gap : SPACINGS.SM};
      justify-content: ${justifyContent || "initial"};
      ${wrapped ? wrappedStyling : ""}
    `).join("")
  })

const wrappedStyling = css`
  flex-wrap: wrap;
`
