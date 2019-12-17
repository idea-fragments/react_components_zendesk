// @flow

import { css } from "styled-components"


export const backgroundPrimaryWithText = css`
  background: ${({ theme }) => theme.styles.colorPrimary};
  color: ${({ theme }) => {
      const {getTextColorForBackground, colorPrimary } = theme.styles
      return getTextColorForBackground({color: colorPrimary, theme})
  }};
`

export const textColorForBackground = css`
  color: ${(props) => props.theme.styles.getTextColorForBackground(props)};
`

export const textColorPrimary = css`
  color: ${({ theme }) => theme.styles.textColorPrimary};
`

export const textWithColor = css`
  color: ${(props) => props.color };
`
