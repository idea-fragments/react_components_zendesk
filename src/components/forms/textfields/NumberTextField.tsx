import { TextFieldProps } from "components/forms/formField.types"
import { TextField } from "components/forms/textfields/TextField"
import React, { ChangeEvent } from "react"

export let NumberTextField = ({
  onChange,
  value: numberValue,
  ...props
}: TextFieldProps<number>) => {
  const handleChange = (value: string, e: ChangeEvent<HTMLInputElement>) => {
    const val = value ?? "0"
    onChange(parseInt(val.replace(/[^0-9.]+/g, "")), e)
  }

  return (
    <TextField
      value={`${numberValue}`}
      {...props}
      onChange={handleChange}
    />
  )
}
