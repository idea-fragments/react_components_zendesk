import { ChatMessage, ChatMessageProps } from "components/chats/ChatMessage"
import React from "react"

export default {
  title: "chats/ChatMessage",
  component: ChatMessage,
  argTypes: {},
}

const Story = (props: ChatMessageProps) => {
  return (
    <>
      <ChatMessage
        message="This is the message should now be displayed This is the message should now be displayed This is the message should now besage should now be displayed"
        dateTime="2023-10-27, 22:15PM"
        isUserMessage={false}
        icon={"so"}
        color="green"
        {...props}
      />
    </>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
