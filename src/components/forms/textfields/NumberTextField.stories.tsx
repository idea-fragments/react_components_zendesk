import { NumberTextField } from "components/forms/textfields/NumberTextField"
import React, { useCallback, useState } from "react"
import { TextFieldProps } from "components/forms/formField.types"

export default {
  title: "forms/NumberTextField",
  component: NumberTextField,
  argTypes: {},
}

const Story = (args: TextFieldProps<number>) => {
  const [inputValue, setInputValue] = useState("")
  const [numberValue, setNumberValue] = useState(0)

  const handleChange = useCallback(({ inputValue, numberValue }) => {
    setInputValue(inputValue)
    setNumberValue(numberValue)
  }, [])

  return (
    <div>
      <NumberTextField
        {...args}
        hint={"This is a hint"}
        onChange={handleChange}
        value={numberValue}
      />
      <div>Input Value: {inputValue}</div>
      <div>Number Value: {numberValue}</div>
    </div>
  )
}

export const Default = Story.bind({})
Default.args = {}

export const Labeled = Story.bind({})
Labeled.args = { label: "Text Label" }

export const Required = Story.bind({})
Required.args = { required: true }

export const RequiredAndLabeled = Story.bind({})
RequiredAndLabeled.args = { label: "Text Label", required: true }

// export const Default = Story.bind({})
// Default.args         = {}
