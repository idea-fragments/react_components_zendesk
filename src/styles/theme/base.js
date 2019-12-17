// @flow

import { COLORS, hasGoodContrast } from "styles/colors"

export const base = {
    colorAccent : COLORS.BLUE,
    colorPrimary: COLORS.HUB_SPOT_ORANGE,
    colorDanger : COLORS.RED,
    colorSuccess : COLORS.GREEN,

    getTextColorForBackground: ({ color, theme }) => {
        if (hasGoodContrast(color, theme.styles.textColorLight)) {
            return theme.styles.textColorLight
        }
        return theme.styles.textColorDark
    },
}
