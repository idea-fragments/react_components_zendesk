import { TextFieldProps } from "components/forms/formField.types"
import { TextField } from "components/forms/textfields/TextField"
import React, { ChangeEvent } from "react"

export type NumberTextFieldChangeValue = {
  inputValue: string
  numberValue: number
}

export let NumberTextField = ({
  onChange,
  step = 1,
  value: numberValue,
  ...props
}: TextFieldProps<NumberTextFieldChangeValue>) => {
  const handleChange = (
    inputValue: string,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    inputValue = inputValue === "" ? "0" : inputValue

    const parse = inputValue.includes(".") ? parseFloat : parseInt
    onChange({ inputValue, numberValue: parse(inputValue) }, e)
  }

  return (
    <TextField
      inputMode={"numeric"}
      step={step}
      type={"number"}
      value={`${numberValue}`}
      {...props}
      onChange={handleChange}
    />
  )
}
