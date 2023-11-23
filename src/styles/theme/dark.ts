import { COLORS, fade, light, lighter } from "styles/colors"
import { base } from "styles/theme/base"
import { Theme } from "styles/theme/Theme.type"

const textColorPrimary = COLORS.LIGHT_GREY

export const dark: Theme = {
  isDark: true,
  styles: {
    ...base,
    // deprecated
    // @ts-ignore
    navBackground: "#1d1e21",
    nav: {
      linkColor: light(COLORS.GREY),
    },
    footer: {
      background: lighter(COLORS.MIDNIGHT_BLUE),
    },
    overlayBackground: fade(COLORS.LIGHT_GREY, 0.9),
    pageBackground: COLORS.MIDNIGHT_BLUE,
    scrollbar: {
      thumbColor: "#ffffff55",
      trackColor: "#ffffff33",
    },
    sidebar: {
      ...base.sidebar!!,
      background: COLORS.MIDNIGHT_BLUE,
    },
    textColorDark: COLORS.MIDNIGHT_PURPLE,
    textColorLight: textColorPrimary,
    textColorOverPrimaryBg: COLORS.WHITE,
    textColorPrimary,
    textColorSecondary: COLORS.GREY_NOT_QUITE_BLUE,
  },
}
