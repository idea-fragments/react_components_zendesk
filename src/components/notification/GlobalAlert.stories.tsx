import {
  GlobalAlert,
  GlobalAlertProps,
} from "components/notification/GlobalAlert"
import React from "react"

export default {
  title: "globalAlert/GlobalAlert",
  component: GlobalAlert,
  argTypes: {},
}

const Story = (args: Partial<GlobalAlertProps>) => {
  const globalAlertProps = {
    ...args,
    body: "Modal Body",
    title: "Modal Title",
    buttonText: "Button Text",
    showTitle: true,
  }
  return <GlobalAlert {...globalAlertProps} />
}

export const Info = Story.bind({})
// @ts-ignore
Info.args = { info: true }

export const Danger = Story.bind({})
// @ts-ignore
Danger.args = { danger: true }

export const Warning = Story.bind({})
// @ts-ignore
Warning.args = { warning: true }

export const Success = Story.bind({})
// @ts-ignore
Success.args = { success: true }

export const NoActionButton = Story.bind({})
// @ts-ignore
NoActionButton.args = { noActionButton: true, info: true }

export const NotDismissible = Story.bind({})
// @ts-ignore
NotDismissible.args = { notDismissible: true, info: true }

export const WithoutAllActions = Story.bind({})
// @ts-ignore
WithoutAllActions.args = {
  noActionButton: true,
  notDismissible: true,
  info: true,
}
