import { VALIDATION_STATES } from "components/forms/validationStates"
import { ReactNode } from "react"
import { ValueOf } from "utils/types"

export type ValidationState = ValueOf<typeof VALIDATION_STATES>

export type Validation = {
  validation: ValidationState
  message?: ReactNode
}
