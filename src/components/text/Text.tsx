import { ReactNode } from "react"
import styled, { css, StyledProps } from "styled-components"
import { ColorProps, ContainerProps, CSSProp } from "styles/types"
import { TextProps } from "styles/typography"

type Props = TextProps &
  ContainerProps & {
    children: ReactNode
  } & ColorProps

const getColor = css`
  color: ${({ color, danger, theme }: StyledProps<ColorProps>) => {
    if (danger) return theme.styles.colorDanger
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

export const Text = styled.div`
  text-align: ${({ align }: Props) => align};
  width: ${({ fluid }) => (fluid ? "100%" : "unset")};
  ${({ color }) => (color ? getColor : "")}
  ${({ hasSubText }) => (hasSubText ? subTextStyling : "")}
  ${getColor}
  ${({ _css }: CSSProp) => _css}
`

// @ts-ignore
Text.COMPONENT_NAME = "Text"
