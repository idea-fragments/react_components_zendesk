import type { Theme }        from "styles/theme/Theme.type"
import { ThemedStyledProps } from "styled-components"

export type StyledProps<Props = {}> = ThemedStyledProps<Props, Theme>
