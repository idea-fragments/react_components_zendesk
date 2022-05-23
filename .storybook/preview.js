import React             from "react"
import { ThemeProvider } from "styles/theme/ThemeProvider"
import { light }         from "styles/theme/light"
// import "calendarCss"

export const decorators = [
  (Story) => <ThemeProvider theme={light}>
    <Story />
  </ThemeProvider>,
]

export const parameters = {
  actions:  { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date:  /Date$/,
    },
  },
}
