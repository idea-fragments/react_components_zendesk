import { ReactNode }   from "react"
import styled, { css } from "styled-components"
import {
  ColorProps,
  ContainerProps,
  CSSProp
}                      from "styles/types"
import { TextProps }   from "styles/typography"

type Props = TextProps & ContainerProps & {
  children: ReactNode
}

const getColor = css`
  color: ${({ color }: ColorProps) => color};
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
  width: ${({ fluid }) => fluid ? "100%" : "unset"};
  ${({ color }) => color ? getColor : ""}
  ${({ hasSubText }) => hasSubText ? subTextStyling : ""}
  ${({ _css }: CSSProp) => _css}
`

// @ts-ignore
Text.COMPONENT_NAME = "Text"
