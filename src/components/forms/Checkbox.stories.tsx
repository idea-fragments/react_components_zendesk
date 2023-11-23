import { Checkbox, CheckboxProps } from "components/forms/Checkbox"
import React, { useState } from "react"

export default {
  title: "forms/Checkbox",
  component: Checkbox,
  argTypes: {},
}

const Story = (args: CheckboxProps) => {
  const [checked, setCheckedTo] = useState<boolean>(false)
  return (
    <Checkbox
      {...args}
      checked={checked}
      label={"Fly Away?"}
      onChange={setCheckedTo}
    />
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
