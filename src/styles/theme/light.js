// @flow

import { COLORS, fade } from "styles/colors"
import { base }         from "styles/theme/base"
import type { Theme }   from "styles/theme/Theme.type"

const textColorPrimary = COLORS.JAZZ_MAN_BLUE

export const light :Theme = {
    isDark: false,
    styles: {
        ...base,
        navBackground         : COLORS.GREY_NOT_QUITE_BLUE,
        nav                   : {
            linkColor: COLORS.MIDNIGHT_PURPLE,
        },
        footer                : {
            background: COLORS.MIDNIGHT_BLUE,
        },
        pageBackground        : COLORS.VERY_LIGHT_GREY,
        overlayBackground     : fade(COLORS.LIGHT_GREY),
        scrollbar             : {
            thumbColor: "#00000033",
            trackColor: "#00000022",
        },
        sidebar               : {
            ...base.sidebar,
            background: COLORS.VERY_LIGHT_GREY,
        },
        textColorDark         : textColorPrimary,
        textColorLight        : COLORS.WHITE,
        textColorPrimary,
        textColorOverPrimaryBg: COLORS.WHITE,
        textColorSecondary    : COLORS.GREY_NOT_QUITE_BLUE,
    },
}
