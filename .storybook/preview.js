import React             from "react"
import { ThemeProvider } from "styles/theme/ThemeProvider"
import { light }         from "styles/theme/light"
// import "calendarCss"

export const decorators = [
  (Story) => <ThemeProvider theme={light}>
    <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;400;500;600;700&display=swap"
          rel="stylesheet" />
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
