import { TaggedToggle, TaggedToggleProps } from "components/forms/TaggedToggle"
import React, { useState } from "react"

export default {
  title: "forms/TaggedToggle",
  component: TaggedToggle,
  argTypes: {},
}

const Story = (args: Partial<TaggedToggleProps>) => {
  const [active, setState] = useState(false)
  return (
    <TaggedToggle
      {...args}
      active={active}
      onChange={setState}
    />
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
