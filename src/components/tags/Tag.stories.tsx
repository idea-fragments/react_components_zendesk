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
  const onClick = () => { alert("tag clicked") }
  const onClose = () => { alert("Close clicked") }

  return <Tag {...args} color={"red"} onClick={onClick} onClose={onClose}>A text to show</Tag>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
