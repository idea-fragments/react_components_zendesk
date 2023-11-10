import { ComponentStory } from "@storybook/react"
import { Slider } from "components/forms/Slider"
import React, { useState } from "react"

export default {
  title: "forms/Slider",
  component: Slider,
  argTypes: {},
}

const Component: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState<number>(0)

  return (
    <Slider
      {...args}
      hint={"Slide this for some reason"}
      label={"Slider Label"}
      onChange={setValue}
      value={value}
    />
  )
}

export const Default = Component.bind({})
Default.args = {}
