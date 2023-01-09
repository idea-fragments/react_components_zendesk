import {
  Tag,
  TagProps
}            from "components/tags/Tag"
import React from "react"

export default {
  title:     "tags/Tag",
  component: Tag,
  argTypes:  {},
}


const Story = (args: Partial<TagProps>) => {
  return <Tag {...args} color={"red"}>A text to show</Tag>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
