// @flow

import { VALIDATION_STATES } from "components/forms/validationStates"

export type InvalidFields = { [string]: string[] }

export const validateField = (invalidFields :InvalidFields, field :string) => (
    invalidFields.hasOwnProperty(field)
    ? {
            validation: VALIDATION_STATES.ERROR,
            message   : `${DISPLAYABLE_FIELDS[field]} ${invalidFields[field][0]}`,
        }
    : { validation: VALIDATION_STATES.NONE }
)
