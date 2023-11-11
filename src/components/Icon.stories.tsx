import { mdiAccount, mdiInformation } from "@mdi/js"
import { Icon, IconProps } from "components/Icon"
import React from "react"

export default {
  title: "Icon",
  component: Icon,
  argTypes: {},
}

const Story = (args: Partial<IconProps>) => {
  return (
    <Icon
      onClick={() => alert("icon clicked")}
      svg={mdiInformation}
      {...args}
    />
  )
}

export const Default = Story.bind({})
export const Stacked = Story.bind({})
Default.args = {}
Stacked.args = {
  svg: [mdiInformation, mdiAccount],
}
