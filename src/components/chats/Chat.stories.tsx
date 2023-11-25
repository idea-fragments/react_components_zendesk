import { Chat, ChatProps } from "components/chats/Chat"
import { ChatMessage } from "components/chats/ChatMessage"
import React, { useState } from "react"

export default {
  title: "chats/Chat",
  component: Chat,
  argTypes: {},
}

const ChatBody = () => {
  const messages = [
    {
      message: "This is the user message",
      dateTime: "2023-10-11, 12:45PM",
      isUserMessage: true,
    },
    {
      message: "This is the chatgpt message message",
      dateTime: "2023-10-11, 12:50PM",
      isUserMessage: false,
    },
    {
      message: "This is the user message 2",
      dateTime: "2023-10-11, 12:52PM",
      isUserMessage: true,
    },
    {
      message: "This is the chatgpt message message",
      dateTime: "2023-10-11, 12:50PM",
      isUserMessage: false,
    },
    {
      message: "This is the user message 2",
      dateTime: "2023-10-11, 12:52PM",
      isUserMessage: true,
    },
    {
      message: "This is the chatgpt message message",
      dateTime: "2023-10-11, 12:50PM",
      isUserMessage: false,
    },
  ]

  return (
    <>
      {messages.map((msg) => {
        return (
          <ChatMessage
            key={msg.message}
            message={msg.message}
            dateTime={msg.dateTime}
            icon={msg.isUserMessage ? "Me" : "So"}
            isUserMessage={msg.isUserMessage}
            color={msg.isUserMessage ? "pink" : undefined}
          />
        )
      })}
    </>
  )
}

const Story = (props: ChatProps) => {
  const [message, setMessage] = useState<string>()

  const handleChange = (str: string) => {
    setMessage(str)
  }

  const handleClick = () => {}

  return (
    <>
      <Chat
        header={<h2>Hello World</h2>}
        chatBody={<ChatBody />}
        footer={"this is the footer message"}
        userInputValue={message}
        onChange={handleChange}
        onClick={handleClick}
        {...props}
      />
    </>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
