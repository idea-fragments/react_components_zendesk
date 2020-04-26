// @flow
import type { TextChild }      from "components/text/types"
import type { ContainerProps } from "styles/types"
import type { TextProps }      from "styles/typography"
import styled, { css }         from "styled-components"

type Props = {
    children :TextChild
} & TextProps & ContainerProps

const getColor = css`
  color: ${({ color }) => color};
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
  text-align: ${({ align } :Props) => align};
  width: ${({ fluid }) => fluid ? "100%" : "unset"};
  ${({ color }) => color ? getColor : ""}
  ${({ hasSubText }) => hasSubText ? subTextStyling : ""}
  
`

Text.COMPONENT_NAME = "Text"
