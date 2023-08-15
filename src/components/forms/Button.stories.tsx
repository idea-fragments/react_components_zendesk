import { mdiInformation } from "@mdi/js"
import {
  Button,
  ButtonProps
}                         from "components/forms/Button"
import React              from "react"
import { DO_NOTHING }     from "utils/functionHelpers"

export default {
  title:     "forms/Button",
  component: Button,
  argTypes:  {
    color: {}
  },
}

const Story = (props: Partial<ButtonProps>) => {
  return <Button {...props} onClick={DO_NOTHING}>{props.children ?? "Click Me"}</Button>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {
  // color: "blue",
  compact:  false,
  disabled: false,
  flat:     false,
  fluid:    false,
  inline:   false,
  pill:     false,
  primary:  false,
  neutral:  false,
}

export const Neutral = Story.bind({})
// @ts-ignore
Neutral.args         = {
  compact:  false,
  disabled: false,
  flat:     false,
  fluid:    false,
  inline:   false,
  pill:     false,
  primary:  true,
  neutral:  true,
}

export const WithIcon = Story.bind({})
// @ts-ignore
WithIcon.args         = {
  compact:  false,
  disabled: false,
  flat:     false,
  fluid:    false,
  icon:     mdiInformation,
  inline:   false,
  pill:     false,
  primary:  false,
  neutral:  false,
}

export const WithIconAndLongText = Story.bind({})
// @ts-ignore
WithIconAndLongText.args         = {
  alignItems:     "flex-start",
  children:       "Learn more about what notifications you'll receive from IdentiShare",
  compact:        false,
  disabled:       false,
  flat:           false,
  fluid:          false,
  icon:           mdiInformation,
  iconSize:       1,
  inline:         false,
  wrapInlineText: true,
  pill:           false,
  primary:        false,
  neutral:        false,
}
