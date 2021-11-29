import { COLORS, hasGoodContrast } from "styles/colors"
import { SPACINGS }                from "styles/spacings"

export const base = {
  appBar:       {
    height: "80px",
    shadow: "unset",
    zIndex: 399,
  }, // modal backdrop zindex is 400
  buttons:      { textTransform: null },
  colorAccent:  COLORS.BLUE,
  colorPrimary: COLORS.HUB_SPOT_ORANGE,
  colorDanger:  COLORS.RED,
  colorWarning: COLORS.YELLOW,
  colorSuccess: COLORS.GREEN,
  container:    { horizontalPadding: "1rem" },
  section:      {
    background: "transparent",
    padding:    `${SPACINGS.XXXL} 0`,
  },
  sidebar:      { zIndex: 10000 },
  table:        { borderSize: "1rem" },
  tooltip:      { darkBackground: "#747183" },

  getTextColorForBackground: ({ color, theme }) => {
    if (hasGoodContrast(color, theme.styles.textColorLight)) {
      return theme.styles.textColorLight
    }
    return theme.styles.textColorDark
  },
}