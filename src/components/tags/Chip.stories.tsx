import {
  Chip,
  ChipProps
}            from "components/tags/Chip"
import React from "react"

export default {
  title: "tags/Chip",
  component: Chip,
  argTypes: {},
}


const Story = (args: Partial<ChipProps>) => {
  return <Chip {...args}>A text to show</Chip>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
