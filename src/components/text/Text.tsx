import { ReactNode } from "react"
import styled, { css, StyledProps } from "styled-components"
import { ColorProps, ContainerProps, CSSProp } from "styles/types"
import { CommonTextProps } from "styles/typography"

export type TextProps = CommonTextProps &
  ContainerProps &
  ColorProps & {
    children: ReactNode
  }

const getColor = css`
  color: ${({ color, danger, secondary, theme }: StyledProps<ColorProps>) => {
    if (danger) return theme.styles.colorDanger
    if (secondary) return theme.styles.textColorSecondary
    if (color) return color

    return "inherit"
  }};
`
// const subTextStyling = css`
//   margin-top: 0;
// `

const subTextStyling = css`
  margin-bottom: 0;

  & + * {
    margin-top: 0;
  }
`

export const Text = styled.div<TextProps>`
  text-align: ${({ align }: TextProps) => align};
  width: ${({ fluid }) => (fluid ? "100%" : "unset")};
  ${getColor}

  &&& {
    ${({ compact }) =>
      compact
        ? css`
            margin-top: 0;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: 0;
          `
        : ""}
    ${({ size }) => (size ? `font-size: ${size};` : "")}
    ${({ weight }) => (weight ? `font-weight: ${weight};` : "")}
    ${({ hasSubText }) => (hasSubText ? subTextStyling : "")}
    ${({ _css }: CSSProp) => _css}
  }
`
