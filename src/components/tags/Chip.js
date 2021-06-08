// @flow


import { ComponentType }            from "@zendeskgarden/react-tags"
import { XXS }                      from "components/text/Paragraph"
import styled                       from "styled-components"
import { COLORS, light, veryLight } from "styles/colors"
import { FONT_WEIGHTS }             from "styles/typography"

type Props = {
    danger? :boolean,
    primary? :boolean,
    success? :boolean,
}

export const Chip :ComponentType<Props> = styled(XXS)
    .attrs(({ danger, primary, success, theme }) => {
        let background
        let color
        switch (true) {
            case danger:
                background = light(COLORS.RED, .5)
                color      = COLORS.RED
                break
            case success:
                background = veryLight(COLORS.GREEN)
                color      = COLORS.GREEN
                break
            case primary:
                background = theme.styles.colorPrimary
                color      = theme.styles.getTextColorForBackground({
                    color: theme.styles.colorPrimary, theme,
                })
                break
            default:
                background = light(COLORS.GREY, .6)
                color      = COLORS.GREY
        }

        return { as: "div", background, color }
    })`
  background: ${p => p.background};
  color: ${p => p.color};
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: ${FONT_WEIGHTS.BOLD};
`
