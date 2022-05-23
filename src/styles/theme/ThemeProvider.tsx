import { GlobalStyle } from "GlobalStyle"
import React, { FC, PropsWithChildren } from "react"
import { ThemeProvider as Provider } from "styled-components"
import { DEFAULT_THEME } from '@zendeskgarden/react-theming'

export type Props = PropsWithChildren<{
  theme: object,
}>


export const ThemeProvider: FC<Props> = ({ children, theme }) => {
  return <Provider theme={{
    ...DEFAULT_THEME, ...theme,
    zendeskThemeKeys: Object.keys(DEFAULT_THEME)
  }}>
    <GlobalStyle />
    {children}
  </Provider>
}
