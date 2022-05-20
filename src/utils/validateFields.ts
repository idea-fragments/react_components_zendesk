import { VALIDATION_STATES } from "components/forms/validationStates"

export type InvalidFields = { [key: string] :string[] }

export const validateFields = (fieldLabels :{ [key: string] :string }) => (
    (invalidFields :InvalidFields, field :string) => (
        invalidFields.hasOwnProperty(field)
        ? {
                validation: VALIDATION_STATES.ERROR,
                message   : `${fieldLabels[field]} ${invalidFields[field][0]}`,
            }
        : { validation: VALIDATION_STATES.NONE }
    )
)
