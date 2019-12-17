// @flow

import { VALIDATION_STATES } from "components/forms/validationStates"

export type ValidationState = $Values<typeof VALIDATION_STATES>

export type Validation = {
    validation :ValidationState,
    message? :string,
}
