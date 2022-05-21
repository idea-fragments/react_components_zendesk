import { TextFieldProps } from "components/forms/formField.types"
import { TextField }           from "components/forms/textfields/TextField"
import React, { ChangeEvent }  from "react"

export let NumberTextField = ({
                                onChange,
                                ...props
                              }: TextFieldProps<number, number>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value || "0"
    onChange(
      parseInt(val.replace(/[^0-9.]+/g, "")),
    )
  }
  // @ts-ignore
  return <TextField {...props} onChange={handleChange} />
}
