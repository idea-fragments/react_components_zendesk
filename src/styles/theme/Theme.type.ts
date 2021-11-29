export type ContainerStyles = {
  background: string,
  borderRadius: string,
  height: string,
  margin: string,
  padding: string,
  shadow: string,
  zIndex: string,
}

export type Styles = {
  appBar: ContainerStyles,
  buttons: {
    textTransform: string,
  },
  colorAccent: string,
  colorSecondary: string,
  colorPrimary: string,
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
  nav: {
    linkColor: string,
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
    background: string,
    zIndex: number
  },
  table: { borderSize: string, },
  textColorPrimary: string,
  textColorOverPrimaryBg: string,
  textColorSecondary: string,
  tooltip: {
    darkBackground: string,
  },

  // eslint-disable-next-line no-use-before-define
  getTextColorForBackground: ({ color: string, theme: Theme }) => string
}

export type Theme = {
  isDark: boolean,
  styles: Styles,
}
