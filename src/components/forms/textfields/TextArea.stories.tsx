import {
  TextArea,
  TextAreaProps
} from "components/forms/textfields/TextArea"
import React, { useState } from "react"
import { CycleButton }     from "components/forms/CycleButton"

export default {
  title:     "forms/TextArea",
  component: TextArea,
  argTypes:  {},
}

const Story = (args :Partial<TextAreaProps>) => {
  const [value, setValue] = useState("")

  return <TextArea
    {...args}
    onChange={setValue}
    value={value}
  />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
