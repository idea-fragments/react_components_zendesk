import { StyledProps } from "components/StyledProps.type"
import { hasGoodContrast, veryLight } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { Styles } from "styles/theme/Theme.type"

export const base: Partial<Styles> = {
  appBar: {
    background: "#fff",
    height: "92px",
    screenPosition: "bottom",
    shadow: "unset",
    zIndex: 399,
  }, // modal backdrop zindex is 400
  border: {
    color: "rgb(233, 235, 237)",
  },
  buttons: { textTransform: null },
  chat: {
    message: {
      currentUser: {
        icon: { background: "" },
        text: { background: "" },
      },
      other: {
        icon: { background: "" },
        text: { background: "" },
      },
    },
  },
  colorAccent: "rgb(255, 122, 89)",
  colorPrimary: undefined,
  colorPrimaryDark: undefined,
  colorTertiary: undefined,
  colors: {
    black: "#1f1f1f",
    white: "#fff",
    product: {
      support: "#00a656",
      message: "#37b8af",
      explore: "#30aabc",
      gather: "#f6c8be",
      guide: "#eb4962",
      connect: "#ff6224",
      chat: "#f79a3e",
      talk: "#efc93d",
      sell: "#c38f00",
    },
    grey: {
      100: "#f8f9f9",
      200: "#e9ebed",
      300: "#d8dcde",
      400: "#c2c8cc",
      500: "#87929d",
      600: "#68737d",
      700: "#49545c",
      800: "#2f3941",
    },
    blue: {
      100: "#edf7ff",
      200: "#cee2f2",
      300: "#adcce4",
      400: "#5293c7",
      500: "#337fbd",
      600: "#1f73b7",
      700: "#144a75",
      800: "#0f3554",
    },
    red: {
      100: "#fff0f1",
      200: "#f5d5d8",
      300: "#f5b5ba",
      400: "#e35b66",
      500: "#d93f4c",
      600: "#cc3340",
      700: "#8c232c",
      800: "#681219",
    },
    yellow: {
      100: "#fff7ed",
      200: "#ffeedb",
      300: "#fed6a8",
      400: "#ffb057",
      500: "#f79a3e",
      600: "#ed8f1c",
      700: "#ad5918",
      800: "#703815",
    },
    green: {
      100: "#edf8f4",
      200: "#d1e8df",
      300: "#aecfc2",
      400: "#5eae91",
      500: "#228f67",
      600: "#038153",
      700: "#186146",
      800: "#0b3b29",
    },
    kale: {
      100: "#f5fcfc",
      200: "#daeded",
      300: "#bdd9d7",
      400: "#90bbbb",
      500: "#498283",
      600: "#17494d",
      700: "#03363d",
      800: "#012b30",
    },
    fuschia: {
      400: "#d653c2",
      600: "#a81897",
      M400: "#cf62a8",
      M600: "#a8458c",
    },
    pink: {
      400: "#ec4d63",
      600: "#d42054",
      M400: "#d57287",
      M600: "#b23a5d",
    },
    crimson: {
      400: "#e34f32",
      600: "#c72a1c",
      M400: "#cc6c5b",
      M600: "#b24a3c",
    },
    orange: {
      400: "#de701d",
      600: "#bf5000",
      M400: "#d4772c",
      M600: "#b35827",
    },
    lemon: {
      400: "#ffd424",
      600: "#ffbb10",
      M400: "#e7a500",
      M600: "#c38f00",
    },
    lime: {
      400: "#43b324",
      600: "#2e8200",
      M400: "#519e2d",
      M600: "#47782c",
    },
    mint: {
      400: "#00a656",
      600: "#058541",
      M400: "#299c66",
      M600: "#2e8057",
    },
    teal: {
      400: "#02a191",
      600: "#028079",
      M400: "#2d9e8f",
      M600: "#3c7873",
    },
    azure: {
      400: "#3091ec",
      600: "#1371d6",
      M400: "#5f8dcf",
      M600: "#3a70b2",
    },
    royal: {
      400: "#5d7df5",
      600: "#3353e2",
      M400: "#7986d8",
      M600: "#4b61c3",
    },
    purple: {
      400: "#b552e2",
      600: "#6a27b8",
      M400: "#b072cc",
      M600: "#9358b0",
    },
  },
  container: { horizontalPadding: "1rem" },
  drawer: { width: "380px" },
  font: { size: "14px" },
  modal: {
    backdrop: {
      background: "rgba(47, 57, 65, 0.85)",
    },
  },
  notifications: {
    zIndex: 401,
  },
  section: {
    background: "transparent",
    body: {
      padding: `${SPACINGS.LG} ${SPACINGS.MD}`,
    },
    borderRadius: `${SPACINGS.XS}`,
    header: {
      padding: `${SPACINGS.LG} ${SPACINGS.MD}`,
    },
    shadow: "0 2px 6px 0 #0000001a",
  },
  sidebar: {
    actionButton: {
      borderRadius: "8px",
      color: "white",
    },
    background: "#f8f9fd",
    boxShadow: "none",
    padding: `${SPACINGS.LG}`,
    width: "250px",
    zIndex: 10000,
  },
  table: {
    borderColor: "---",
    borderSize: "1px",
  },
  tooltip: { darkBackground: "#747183" },

  getTextColorForBackground: ({
    color,
    theme,
  }: StyledProps<{ color: string }>): string => {
    if (hasGoodContrast(color, theme.styles.textColorLight)) {
      return theme.styles.textColorLight
    }
    return theme.styles.textColorDark
  },
}

base.colorDanger = base.colors!.red["600"]
base.colorSuccess = base.colors!.green["600"]
base.colorWarning = base.colors!.yellow["700"]

base.colorPrimary = base.colors!.blue["600"]

base.table!.borderColor = veryLight(base.colors!.grey["500"])

base.chat!.message.currentUser.icon.background = base.colorPrimary
base.chat!.message.currentUser.text.background = base.colors!.grey["200"]
base.chat!.message.other.icon.background = base.colorAccent ?? base.colorPrimary
base.chat!.message.other.text.background = base.colors!.grey["400"]
