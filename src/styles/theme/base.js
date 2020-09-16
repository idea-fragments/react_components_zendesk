// @flow

import { COLORS, hasGoodContrast } from "styles/colors"

export const base = {
    appBar      : { zIndex: 399 }, // modal backdrop zindex is 400
    buttons     : { textTransform: null },
    colorAccent : COLORS.BLUE,
    colorPrimary: COLORS.HUB_SPOT_ORANGE,
    colorDanger : COLORS.RED,
    colorWarning: COLORS.YELLOW,
    colorSuccess: COLORS.GREEN,
    container   : { horizontalPadding: "1rem" },
    sidebar     : { zIndex: 10000 },
    tooltip     : { darkBackground: "#747183" },

    getTextColorForBackground: ({ color, theme }) => {
        if (hasGoodContrast(color, theme.styles.textColorLight)) {
            return theme.styles.textColorLight
        }
        return theme.styles.textColorDark
    },
}
