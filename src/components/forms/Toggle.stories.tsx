import { Toggle, ToggleProps } from "components/forms/Toggle"
import React, { useState }     from "react"

export default {
  title:     "forms/Toggle",
  component: Toggle,
  argTypes:  {},
}


const Story = (args: Partial<ToggleProps>) => {
  const [active, setState] = useState(false)
  return <Toggle {...args} checked={active} hint={"some hint"} onChange={setState} />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}

export const Disabled = Story.bind({})
// @ts-ignore
Disabled.args         = {
  disabled: true,
}
export const Labeled  = Story.bind({})
// @ts-ignore
Labeled.args          = {
  hint:  "Will do the thing",
  label: "Do Something",
}
