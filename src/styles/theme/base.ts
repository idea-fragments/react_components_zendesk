import { StyledProps } from "components/StyledProps.type"
import {
  COLORS,
  hasGoodContrast,
  veryLight
}                      from "styles/colors"
import { SPACINGS }    from "styles/spacings"
import { Styles }      from "styles/theme/Theme.type"

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
  colorAccent:   COLORS.HUB_SPOT_ORANGE,
  colorPrimary:  COLORS.BLUE,
  colorDanger:   COLORS.RED,
  colorWarning:  COLORS.YELLOW,
  colorSuccess:  COLORS.GREEN,
  container:     { horizontalPadding: "1rem" },
  font:          { size: "14px" },
  modal:         {
    backdrop: {
      background: "rgba(47, 57, 65, 0.85)",
    }
  },
  notifications: {
    zIndex: 401,
  },
  section:       {
    background:   "transparent",
    body:         {
      padding: `0 ${SPACINGS.MD} ${SPACINGS.LG} ${SPACINGS.MD}`,
    },
    borderRadius: `${SPACINGS.XS}`,
    header:       {
      padding: `${SPACINGS.LG} ${SPACINGS.MD}`,
    },
    shadow:       "0 2px 6px 0 #0000001a"
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
  table:         {
    borderColor: veryLight(COLORS.GREY),
    borderSize:  "1px"
  },
  tooltip:       { darkBackground: "#747183" },

  getTextColorForBackground: ({ color, theme }: StyledProps<{ color: string }>): string => {
    if (hasGoodContrast(color, theme.styles.textColorLight)) {
      return theme.styles.textColorLight
    }
    return theme.styles.textColorDark
  },
}
