import { mdiClose, mdiFilterOutline } from "@mdi/js"
import { StyledProps } from "components/StyledProps.type"
import { hasGoodContrast } from "styles/colors"
import { SPACINGS } from "styles/spacings"
import { Styles } from "styles/theme/Theme.type"

export const base: Partial<Styles> = {
  appBar: {
    background: "#fff",
    height: "92px",
    screenPosition: "bottom",
    scrollBar: { height: "0px" },
    shadow: "unset",
    zIndex: 399,
  }, // modal backdrop zindex is 400
  border: {
    color: "rgb(233, 235, 237)",
  },
  buttons: { borderRadius: "4px", textTransform: null },
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
    purple: {
      100: "#f3eef9",
      200: "#e1d3f3",
      300: "#cab0ea",
      400: "#a576db",
      500: "#8240c8",
      600: "#6331a1",
      700: "#45217a",
      800: "#2f1550",
    },
    magenta: {
      100: "#f9eef8",
      200: "#f0d4ed",
      300: "#e3b1de",
      400: "#cd6fc6",
      500: "#b841ad",
      600: "#93348b",
      700: "#6a2465",
      800: "#461743",
    },
    pink: {
      100: "#fceef1",
      200: "#f7d4dc",
      300: "#f2b3c1",
      400: "#ec4d63",
      500: "#e0355a",
      600: "#d42054",
      700: "#9c1840",
      800: "#68102b",
    },
    red: {
      100: "#fdefef",
      200: "#f9d4d8",
      300: "#f5b4bc",
      400: "#eb6573",
      500: "#de3d4d",
      600: "#c92a38",
      700: "#941f29",
      800: "#63141c",
    },
    crimson: {
      100: "#fdeeed",
      200: "#f9d4cf",
      300: "#f3b1a3",
      400: "#e34f32",
      500: "#d63820",
      600: "#c72a1c",
      700: "#921f15",
      800: "#61150e",
    },
    orange: {
      100: "#fff3ed",
      200: "#ffe3cc",
      300: "#ffcba0",
      400: "#ff9a4d",
      500: "#f27825",
      600: "#d45a0e",
      700: "#9d4109",
      800: "#6b2c06",
    },
    amber: {
      100: "#fff8ed",
      200: "#ffedce",
      300: "#ffdba3",
      400: "#ffbb5a",
      500: "#f59d2f",
      600: "#d6810f",
      700: "#9e5f0a",
      800: "#6b4007",
    },
    yellow: {
      100: "#fffef2",
      200: "#fff9d4",
      300: "#ffefab",
      400: "#ffda50",
      500: "#f5ba21",
      600: "#d49a0f",
      700: "#9e7009",
      800: "#6b4a06",
    },
    lemon: {
      100: "#fffef5",
      200: "#fffbdb",
      300: "#fff5b8",
      400: "#ffe975",
      500: "#edd141",
      600: "#c9b120",
      700: "#8f7d14",
      800: "#5e520d",
    },
    sage: {
      100: "#f5f6e8",
      200: "#e7e8cc",
      300: "#dee0b3",
      400: "#d0d2a6",
      500: "#b3b674",
      600: "#8c8f4c",
      700: "#5e6030",
      800: "#3b3c1c",
    },
    lime: {
      100: "#f0f9eb",
      200: "#d9f0cc",
      300: "#bbe5a3",
      400: "#43b324",
      500: "#38991d",
      600: "#2e8200",
      700: "#236000",
      800: "#184000",
    },
    mint: {
      100: "#ebf9f2",
      200: "#cef0de",
      300: "#a8e6c5",
      400: "#00a656",
      500: "#048f4a",
      600: "#058541",
      700: "#046334",
      800: "#034224",
    },
    green: {
      100: "#eef9f5",
      200: "#d1ede3",
      300: "#aedfc9",
      400: "#41b989",
      500: "#1b9466",
      600: "#147654",
      700: "#125640",
      800: "#0d3a2a",
    },
    teal: {
      100: "#ebf9f7",
      200: "#cef0eb",
      300: "#a7e5dc",
      400: "#02a191",
      500: "#028a7d",
      600: "#028079",
      700: "#025e5a",
      800: "#013f3c",
    },
    kale: {
      100: "#eaf7f6",
      200: "#c5e7e5",
      300: "#9ed3d0",
      400: "#6ab7b3",
      500: "#3d9692",
      600: "#266e6b",
      700: "#164e4c",
      800: "#0c302f",
    },
    blue: {
      100: "#eff6fc",
      200: "#d4e7f7",
      300: "#b0d4f0",
      400: "#5fa8db",
      500: "#3584c4",
      600: "#1e67a6",
      700: "#144a7a",
      800: "#0d3152",
    },
    azure: {
      100: "#eef5fd",
      200: "#d4e7fa",
      300: "#b0d5f5",
      400: "#3091ec",
      500: "#1f7edb",
      600: "#1371d6",
      700: "#0e54a0",
      800: "#09386b",
    },
    denim: {
      100: "#e7ebf3",
      200: "#c6d0e7",
      300: "#9aadda",
      400: "#5c7ecc",
      500: "#3b5eb0",
      600: "#2a4993",
      700: "#1b3674",
      800: "#0f214d",
    },
    royal: {
      100: "#f0f2fd",
      200: "#dbe1fa",
      300: "#bdc8f5",
      400: "#5d7df5",
      500: "#4561e8",
      600: "#3353e2",
      700: "#263da8",
      800: "#1a2970",
    },
    accent: {
      100: "transparent",
      200: "transparent",
      300: "transparent",
      400: "transparent",
      500: "transparent",
      600: "transparent",
      700: "transparent",
      800: "transparent",
    },
    primary: {
      100: "transparent",
      200: "transparent",
      300: "transparent",
      400: "transparent",
      500: "transparent",
      600: "transparent",
      700: "transparent",
      800: "transparent",
    },
  },
  container: { horizontalPadding: "1rem" },
  drawer: { icon: mdiClose, width: "380px" },
  font: { size: "14px" },
  modal: {
    backdrop: {
      background: "rgba(47, 57, 65, 0.85)",
    },
    borderRadius: "4px",
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
    shadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  sidebar: {
    actionButton: {
      borderRadius: "8px",
      color: "white",
    },
    background: "#fff",
    boxShadow: "none",
    padding: `${SPACINGS.LG}`,
    width: "250px",
    zIndex: 10000,
  },
  table: {
    borderColor: "---",
    borderSize: "1px",
    filterButtonIcon: mdiFilterOutline,
  },
  tag: {
    textColorWeight: 600,
    backgroundColor: 100,
  },
  tooltip: { darkBackground: "#747183" },

  getTextColorForBackground: ({
    color,
    theme,
  }: StyledProps<{ color: string }>): string => {
    if (color === "transparent") return theme.styles.textColorPrimary
    if (hasGoodContrast(color, theme.styles.textColorLight)) {
      return theme.styles.textColorLight
    }
    return theme.styles.textColorDark
  },
}

base.border!.color = base.colors!.grey["200"]
base.colorDanger = base.colors!.red["600"]
base.colorSuccess = base.colors!.green["600"]
base.colorWarning = base.colors!.yellow["700"]

base.colorPrimary = base.colors!.blue["600"]
base.colors!.primary = base.colors!.blue
base.colors!.accent = base.colors!.orange

base.table!.borderColor = base.colors!.grey["200"]

base.chat!.message.currentUser.icon.background = base.colorPrimary
base.chat!.message.currentUser.text.background = base.colors!.grey["200"]
base.chat!.message.other.icon.background = base.colorAccent ?? base.colorPrimary
base.chat!.message.other.text.background = base.colors!.grey["400"]
