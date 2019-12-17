// @flow

import type { TextFieldProps } from "components/forms/formField.types"
import { TextField }           from "components/forms/textfields/TextField"
import * as React              from "react"

export const PasswordTextField = (props :TextFieldProps<>) => {
    return <TextField type={"password"} {...props} />
}

PasswordTextField.COMPONENT_NAME = "PasswordTextField"
