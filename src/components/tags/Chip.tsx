import { StyledProps } from "components/StyledProps.type"
import { XXS } from "components/text/Paragraph"
import styled from "styled-components"
import { light } from "styles/colors"
import { FONT_WEIGHTS } from "styles/typography"

type Props = {
  danger?: boolean
  fluid?: boolean
  primary?: boolean
  success?: boolean
}

export type ChipProps = Props & StyledProps

// Deprecated. Do not use
export const Chip = styled(XXS).attrs(
  ({ danger, primary, success, theme }: Props & StyledProps) => {
    let background
    let color
    switch (true) {
      case danger:
        background = theme.styles.colors.red["300"]
        color = theme.styles.colorDanger
        break
      case success:
        background = "#e1ede8"
        color = theme.styles.colorSuccess
        break
      case primary:
        background = theme.styles.colorPrimary
        color = theme.styles.getTextColorForBackground({
          color: theme.styles.colorPrimary,
          theme,
        })
        break
      default:
        background = light(theme.styles.colors!.grey["500"], 0.6)
        color = theme.styles.colors.grey["500"]
    }

    return { as: "div", background, color }
  },
)<Props>`
  background: ${(p) => p.background};
  color: ${(p) => p.color};
  padding: 2px 8px;
  border-radius: 8px;
  font-weight: ${FONT_WEIGHTS.BOLD};
  width: ${(p) => (p.fluid ? "100%" : "fit-content")};
`
