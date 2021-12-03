import { Toggle, ToggleProps } from "components/forms/Toggle"
import React, { useState }     from "react"

export default {
  title:     "react_components_zendesk/forms/Toggle",
  component: Toggle,
  argTypes:  {},
}


const Story = (args: Partial<ToggleProps>) => {
  const [active, setState] = useState(false)
  return <Toggle {...args} checked={active} onChange={setState} />
}

export const Default = Story.bind({})
Default.args         = {}

export const Disabled = Story.bind({})
Disabled.args         = {
  disabled: true,
}
export const Labeled  = Story.bind({})
Labeled.args          = {
  hint:  "Will do the thing",
  label: "Do Something",
}
