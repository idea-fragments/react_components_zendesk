// @flow

import type { ComponentType as RComponentType } from "react"

export type ComponentType<T> = RComponentType<T> & {
    COMPONENT_NAME :string
}
