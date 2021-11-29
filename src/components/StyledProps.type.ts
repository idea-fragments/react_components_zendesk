// @flow

import type { Theme } from "styles/theme/Theme.type"

export type StyledProps<Props = {}> = Props & {
    theme: Theme,
}
