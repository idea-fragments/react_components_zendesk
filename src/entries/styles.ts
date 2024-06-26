import { dark } from "styles/theme/dark"
import { light } from "styles/theme/light"
import { light2 } from "styles/theme/light2"
import { DEFAULT_THEME } from "@zendeskgarden/react-theming"

export const THEMES = {
  light,
  light2,
  dark,
  __ZENDESK_DEFAULT_THEME__: DEFAULT_THEME,
}

export * from "components/StyledProps.type"
export * from "styles/theme/Theme.type"
export * from "styles/colors"
export * from "styles/spacings"
export * from "styles/typography"
export * from "styles/types"
export * from "styles/mixins"
export * from "styles/mediaQueries"
export * from "styles/theme/ThemeProvider"
