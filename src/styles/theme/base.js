// @flow

import { COLORS, hasGoodContrast } from "styles/colors"

export const base = {
    appBar      : { zIndex: 9000 },
    colorAccent : COLORS.BLUE,
    colorPrimary: COLORS.HUB_SPOT_ORANGE,
    colorDanger : COLORS.RED,
    colorSuccess: COLORS.GREEN,
    container   : { horizontalPadding: "1rem" },
    sidebar     : { zIndex: 10000 },

    getTextColorForBackground: ({ color, theme }) => {
        if (hasGoodContrast(color, theme.styles.textColorLight)) {
            return theme.styles.textColorLight
        }
        return theme.styles.textColorDark
    },
}
