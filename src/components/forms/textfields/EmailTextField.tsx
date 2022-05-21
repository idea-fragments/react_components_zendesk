import { TextFieldProps } from "components/forms/formField.types"
import { TextField }           from "components/forms/textfields/TextField"
import * as React              from "react"

export const EmailTextField = (props :TextFieldProps<any>) => {
    return <TextField type={"email"} {...props} />
}
