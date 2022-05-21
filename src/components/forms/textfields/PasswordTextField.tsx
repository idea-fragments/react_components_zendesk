import { TextFieldProps } from "components/forms/formField.types"
import { TextField }           from "components/forms/textfields/TextField"
import React                   from "react"

type Props = TextFieldProps<any> & {
  newPassword?: boolean
}

export const PasswordTextField = ({ newPassword, ...props }: Props) => {
  const autoCompleteAttr = newPassword ? { autoComplete: "new-password" } : {}
  return <TextField {...autoCompleteAttr} type={"password"} {...props} />
}
