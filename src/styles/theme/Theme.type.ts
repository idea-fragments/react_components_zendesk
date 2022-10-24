import { StyledProps } from "components/StyledProps.type"
import { Nullable }    from "global"

export type ContainerStyles = {
  background?: string,
  borderRadius?: string,
  height?: string,
  margin?: string,
  padding?: string,
  shadow?: string,
  zIndex?: number,
}

export type Styles = {
  appBar: ContainerStyles & {
    screenPosition: "top" | "bottom",
  },
  border: {
    color: string,
  },
  buttons: {
    textTransform: Nullable<string>,
  },
  colorAccent: string,
  colorSecondary: string,
  colorPrimary: string,
  colorPrimaryDark: string,
  colorWarning: string,
  colorDanger: string,
  colorSuccess: string,
  container: { horizontalPadding: string },
  footer: {
    background: string
  },
  infoPanel: {
    background: string,
  },
  modal: {
    backdrop: {
      background: string,
    }
  },
  nav: {
    linkColor: string,
  },
  notifications: {
    zIndex: number,
  },
  overlayBackground: string,
  pageBackground: string,
  scrollbar: {
    thumbColor: string,
    trackColor: string,
  },
  scrollbarColor: string,
  section: ContainerStyles,
  sidebar: {
    actionButton: {
      borderRadius: string,
      color: string,
    }
    background: string,
    boxShadow: string,
    padding: string,
    width: string,
    zIndex: number
  },
  table: { borderSize: string, },
  textColorDark: string,
  textColorLight: string,
  textColorOverPrimaryBg: string,
  textColorPrimary: string,
  textColorSecondary: string,
  tooltip: {
    darkBackground: string,
  },

  getTextColorForBackground: (p: StyledProps<{ color: string }>) => string
}

export type Theme = {
  isDark: boolean,
  styles: Styles,
}
