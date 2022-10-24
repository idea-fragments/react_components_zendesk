import { COLORS, hasGoodContrast } from "styles/colors"
import { SPACINGS }                from "styles/spacings"
import { Styles }                  from "styles/theme/Theme.type"

export const base: Partial<Styles> = {
  appBar:        {
    background:     "#fff",
    height:         "92px",
    screenPosition: "bottom",
    shadow:         "unset",
    zIndex:         399,
  }, // modal backdrop zindex is 400
  border:        {
    color: "rgb(233, 235, 237)",
  },
  buttons:       { textTransform: null },
  colorAccent:   COLORS.BLUE,
  colorPrimary:  COLORS.HUB_SPOT_ORANGE,
  colorDanger:   COLORS.RED,
  colorWarning:  COLORS.YELLOW,
  colorSuccess:  COLORS.GREEN,
  container:     { horizontalPadding: "1rem" },
  modal:         {
    backdrop: {
      background: "rgba(47, 57, 65, 0.85)",
    }
  },
  notifications: {
    zIndex: 401,
  },
  section:       {
    background: "transparent",
    padding:    `${SPACINGS.XXXL} 0`,
  },
  sidebar:       {
    actionButton: {
      borderRadius: "8px",
      color:        "white",
    },
    background:   "#f8f9fd",
    boxShadow:    "none",
    padding:      `${SPACINGS.LG}`,
    width:        "250px",
    zIndex:       10000,
  },
  table:         { borderSize: "1rem" },
  tooltip:       { darkBackground: "#747183" },

  getTextColorForBackground: ({ color, theme }) => {
    if (hasGoodContrast(color, theme.styles.textColorLight)) {
      return theme.styles.textColorLight
    }
    return theme.styles.textColorDark
  },
}
