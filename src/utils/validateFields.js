// @flow

import { VALIDATION_STATES } from "components/forms/validationStates"

export type InvalidFields = { [string] :string[] }

export const validateFields = (fieldLabels :{ [string] :string }) => (
    (invalidFields :InvalidFields, field :string) => (
        invalidFields.hasOwnProperty(field)
        ? {
                validation: VALIDATION_STATES.ERROR,
                message   : `${fieldLabels[field]} ${invalidFields[field][0]}`,
            }
        : { validation: VALIDATION_STATES.NONE }
    )
)
