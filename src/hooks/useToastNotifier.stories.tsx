import { Button } from "components/forms/Button"
import {
  NotificationProps,
  ToastProvider,
} from "components/notification/Notification"
import { useToastNotifier } from "hooks/useToastNotifier"
import React from "react"

export default {
  title: "hooks/useToastNotifier",
  component: useToastNotifier,
  argTypes: {},
}

const Story = (args: Partial<NotificationProps>) => {
  return (
    <ToastProvider>
      <Component {...args} />
    </ToastProvider>
  )
}

const Component = (args: Partial<NotificationProps>) => {
  const { notify } = useToastNotifier()

  const notificationProps = {
    ...args,
    body: "Modal Body",
    title: "Modal Title",
  }

  return (
    <Button onClick={() => notify(notificationProps as NotificationProps)}>
      Add Toast Message
    </Button>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}

export const Danger = Story.bind({})
// @ts-ignore
Danger.args = { danger: true }

export const Info = Story.bind({})
// @ts-ignore
Info.args = { info: true }

export const Success = Story.bind({})
// @ts-ignore
Success.args = { success: true }

export const Warning = Story.bind({})
// @ts-ignore
Warning.args = { warning: true }
