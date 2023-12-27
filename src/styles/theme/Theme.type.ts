import { StyledProps } from "components/StyledProps.type"
import { Nullable } from "global"

type FullSpectrumColors = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
}

type MutablePartialSpectrumColors = {
  400: string
  M400: string
  600: string
  M600: string
}

export type ContainerStyles = {
  background?: string
  borderRadius?: string
  height?: string
  margin?: string
  padding?: string
  shadow?: string
  zIndex?: number
}

export type Styles = {
  appBar: Required<
    Pick<ContainerStyles, "background" | "height" | "shadow" | "zIndex">
  > & {
    screenPosition: "top" | "bottom"
  }
  border: {
    color: string
  }
  buttons: {
    textTransform: Nullable<string>
  }
  colorAccent: string
  colorDanger: string
  colorPrimary: string
  colorPrimaryDark: string
  colorSuccess: string
  colorTertiary: string
  colorWarning: string
  colors: {
    black: string
    white: string
    product: {}
    grey: FullSpectrumColors
    blue: FullSpectrumColors
    red: FullSpectrumColors
    yellow: FullSpectrumColors
    green: FullSpectrumColors
    kale: FullSpectrumColors
    fuschia: MutablePartialSpectrumColors
    pink: MutablePartialSpectrumColors
    crimson: MutablePartialSpectrumColors
    orange: MutablePartialSpectrumColors
    lemon: MutablePartialSpectrumColors
    lime: MutablePartialSpectrumColors
    mint: MutablePartialSpectrumColors
    teal: MutablePartialSpectrumColors
    azure: MutablePartialSpectrumColors
    royal: MutablePartialSpectrumColors
    purple: MutablePartialSpectrumColors
  }
  container: { horizontalPadding: string }
  drawer: { width: string }
  font: { size: string }
  footer: {
    background: string
  }
  infoPanel: {
    background: string
  }
  modal: {
    backdrop: {
      background: string
    }
  }
  nav: {
    linkColor: string
  }
  notifications: {
    zIndex: number
  }
  overlayBackground: string
  pageBackground: string
  scrollbar: {
    thumbColor: string
    trackColor: string
  }
  scrollbarColor: string
  section: ContainerStyles & {
    body: {
      padding: string
    }
    header: {
      padding: string
    }
  }
  sidebar: {
    actionButton: {
      borderRadius: string
      color: string
    }
    background: string
    boxShadow: string
    padding: string
    width: string
    zIndex: number
  }
  table: { borderColor: string; borderSize: string }
  textColorDark: string
  textColorLight: string
  textColorOverPrimaryBg: string
  textColorPrimary: string
  textColorSecondary: string
  tooltip: {
    darkBackground: string
  }

  getTextColorForBackground: (p: StyledProps<{ color: string }>) => string
}

export type Theme = {
  isDark: boolean
  styles: Styles
}
