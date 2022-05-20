import "calendarCss" // TODO probably not needed anymore
import { GlobalStyle }                          from "GlobalStyle"
import React, { FC, PropsWithChildren }         from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { light }                                from "styles/theme/light"
import "zendeskGardenCss"

export const ThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <StyledThemeProvider theme={light}>
    <>
      <GlobalStyle />
      {children}
    </>
  </StyledThemeProvider>
}
