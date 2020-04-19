// @flow

import { useContext }   from "react"
import { ThemeContext } from "styled-components"
import type { Theme }   from "styles/theme/Theme.type"

export const useTheme = () :Theme => useContext<Theme>(ThemeContext)
