import { ComponentStory }  from "@storybook/react"
import { TextField, }      from "components/forms/textfields/TextField"
import React, { useState } from "react"

export default {
  title:     "forms/TextField",
  component: TextField,
  argTypes:  {},
}

const Component: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState("")

  return <TextField
    {...args}
    onChange={setValue}
    value={value}
  />
}

export const Default = Component.bind({})
Default.args         = {}

export const Labeled = Component.bind({})
Labeled.args         = { label: "Text Label" }

export const Required = Component.bind({})
Required.args         = { required: true }

export const RequiredAndLabeled = Component.bind({})
RequiredAndLabeled.args         = { label: "Text Label", required: true }

// export const Default = Story.bind({})
// Default.args         = {}
