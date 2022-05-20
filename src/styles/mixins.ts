import { css }            from "styled-components"
import { COLORS, darker } from "styles/colors"


export const backgroundPrimaryWithText = css`
  background: ${({ theme }) => theme.styles.colorPrimary};
  color: ${({ theme }) => {
    const { getTextColorForBackground, colorPrimary } = theme.styles
    return getTextColorForBackground({ color: colorPrimary, theme })
  }};
`

export const textColorForBackground = css`
  color: ${(props) => props.theme.styles.getTextColorForBackground(props)};
`

export const textColorPrimary = css`
  color: ${({ theme }) => theme.styles.textColorPrimary};
`

export const textWithColor = css<{ color: string, inline?: boolean }>`
  color: ${({ color }) => color === COLORS.YELLOW ? darker(color) : color};
`
