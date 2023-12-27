import { fade, light, lighter } from "styles/colors"
import { base } from "styles/theme/base"
import { Theme } from "styles/theme/Theme.type"

const textColorPrimary = base.colors!.grey["300"]

export const dark: Theme = {
  isDark: true,
  styles: {
    ...base,
    // deprecated
    // @ts-ignore
    navBackground: "#1d1e21",
    nav: {
      linkColor: light(base.colors!.grey["500"]),
    },
    footer: {
      background: lighter(base.colors!.grey["800"]),
    },
    overlayBackground: fade(base.colors!.grey["300"], 0.9),
    pageBackground: base.colors!.grey["800"],
    scrollbar: {
      thumbColor: "#ffffff55",
      trackColor: "#ffffff33",
    },
    sidebar: {
      ...base.sidebar!!,
      background: base.colors!.grey["800"],
    },
    textColorDark: base.colors!.grey["700"],
    textColorLight: textColorPrimary,
    textColorOverPrimaryBg: base.colors!.white,
    textColorPrimary,
    textColorSecondary: base.colors!.grey["400"],
  },
}
