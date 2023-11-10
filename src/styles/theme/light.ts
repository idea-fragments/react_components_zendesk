import { COLORS, fade } from "styles/colors"
import { base } from "styles/theme/base"
import { Theme } from "styles/theme/Theme.type"

const textColorPrimary = COLORS.JAZZ_MAN_BLUE

export const light: Theme = {
  isDark: false,
  styles: {
    ...base,
    // @ts-ignore
    appBar: {
      ...base.appBar,
    },
    // deprecated
    // @ts-ignore
    navBackground: COLORS.GREY_NOT_QUITE_BLUE,
    nav: {
      linkColor: COLORS.MIDNIGHT_PURPLE,
    },
    footer: {
      background: COLORS.MIDNIGHT_BLUE,
    },
    infoPanel: {
      background: COLORS.VERY_LIGHT_GREY,
    },
    pageBackground: COLORS.WHITE,
    overlayBackground: fade(COLORS.LIGHT_GREY),
    scrollbar: {
      thumbColor: "#00000033",
      trackColor: "#00000022",
    },
    sidebar: {
      ...base.sidebar!!,
      // background: COLORS.WHITE,
    },
    textColorDark: textColorPrimary,
    textColorLight: COLORS.WHITE,
    textColorOverPrimaryBg: COLORS.WHITE,
    textColorPrimary,
    textColorSecondary: COLORS.GREY_NOT_QUITE_BLUE,
  },
}
