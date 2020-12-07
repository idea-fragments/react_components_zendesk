// @flow

import { VALIDATION_STATES } from "components/forms/validationStates"
import type { Node }         from "react"

export type ValidationState = $Values<typeof VALIDATION_STATES>

export type Validation = {
    validation :ValidationState,
    message? :Node,
}
