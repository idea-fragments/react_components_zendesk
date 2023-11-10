import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { Theme } from "styles/theme/Theme.type"

export const useTheme = (): Theme => useContext<Theme>(ThemeContext)
// export const setThemeContext = (ctx :)
