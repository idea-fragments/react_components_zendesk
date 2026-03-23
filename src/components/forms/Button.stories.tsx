import { mdiInformation } from "@mdi/js"
import { Button, ButtonProps, BUTTON_SIZES } from "components/forms/Button"
import React from "react"
import { DO_NOTHING } from "utils/functionHelpers"

export default {
  argTypes: {
    alignSelf: {
      control: { type: "select" },
      options: [
        "auto",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch",
      ],
    },
    autoLoadable: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
    compact: {
      control: { type: "boolean" },
    },
    danger: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    flat: {
      control: { type: "boolean" },
    },
    fluid: {
      control: { type: "boolean" },
    },
    icon: {
      control: { type: "text" },
      description: "Icon path or component",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    iconSize: {
      control: { type: "text" },
    },
    inline: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    neutral: {
      control: { type: "boolean" },
    },
    pill: {
      control: { type: "boolean" },
    },
    primary: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select" },
      options: Object.values(BUTTON_SIZES),
    },
    success: {
      control: { type: "boolean" },
    },
    warning: {
      control: { type: "boolean" },
    },
    wrapInlineText: {
      control: { type: "boolean" },
    },
  },
  component: Button,
  title: "forms/Button",
}

const Story = (props: Partial<ButtonProps>) => {
  return (
    <Button
      onClick={DO_NOTHING}
      {...props}>
      {props.children || "Button"}
    </Button>
  )
}

export const Default = Story.bind({})
Default.args = {
  children: "Default Button",
  primary: true,
}

export const WithIcon = Story.bind({})
WithIcon.args = {
  children: "Button with Icon",
  icon: mdiInformation,
  primary: false,
}

export const WithIconAndLongText = Story.bind({})
WithIconAndLongText.args = {
  alignItems: "flex-start",
  children:
    "Learn more about what notifications you'll receive from IdentiShare",
  icon: mdiInformation,
  iconSize: "1rem",
  primary: false,
  wrapInlineText: true,
}
