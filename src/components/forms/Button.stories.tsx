import { Button, Props }      from "components/forms/Button"
import React           from "react"
import { DO_NOTHING }  from "utils/functionHelpers"

export default {
  title:     "forms/Button",
  component: Button,
  argTypes: {
    color: {

    }
  },
}

const Story = (props :Props) => {
  return <Button {...props} onClick={DO_NOTHING}>Click Me</Button>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {
  color: "blue",
  compact: false,
  disabled: false,
  flat: false,
  fluid: false,
  inline: false,
  pill: false,
  primary: false,
  neutral: false,
}

export const Neutral = Story.bind({})
// @ts-ignore
Neutral.args = {
  compact: false,
  disabled: false,
  flat: false,
  fluid: false,
  inline: false,
  pill: false,
  primary: true,
  neutral: true,
}
