import { fade } from "styles/colors"
import { base } from "styles/theme/base"
import { Theme } from "styles/theme/Theme.type"

const textColorPrimary = "#4a5965"
// const textColorPrimary = base.colors?.grey["800"]

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
    navBackground: base.colors!.grey["400"],
    nav: {
      linkColor: base.colors!.grey["700"],
    },
    footer: {
      background: base.colors!.grey["800"],
    },
    infoPanel: {
      background: base.colors!.grey["100"],
    },
    pageBackground: base.colors!.white,
    overlayBackground: fade(base.colors!.grey["300"]),
    scrollbar: {
      thumbColor: "#00000033",
      trackColor: "#00000022",
    },
    sidebar: {
      ...base.sidebar!!,
    },
    textColorDark: textColorPrimary,
    textColorLight: base.colors!.white,
    textColorOverPrimaryBg: base.colors!.white,
    textColorPrimary,
    textColorSecondary: base.colors!.grey["400"],
  },
}
