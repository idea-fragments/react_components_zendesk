import { Chat, ChatProps } from "components/chats/Chat"
import { ChatMessage } from "components/chats/ChatMessage"
import { FlexBox } from "components/layout/FlexBox"
import React, { useCallback, useMemo, useState } from "react"

export default {
  title: "chats/Chat",
  component: Chat,
  argTypes: {},
}

const initialMessages: Record<string, string | boolean>[] = [
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

const Story = (props: ChatProps) => {
  const [messages, setMessages] =
    useState<Record<string, string | boolean>[]>(initialMessages)
  const [message, setMessage] = useState<string>("")

  const chatBody = useMemo(() => {
    return (
      <>
        {messages.map((msg, i) => {
          return (
            <ChatMessage
              actions={i % 3 === 0 ? [] : null}
              color={msg.isUserMessage ? "pink" : undefined}
              dateTime={msg.dateTime}
              icon={msg.isUserMessage ? "Me" : "So"}
              isUserMessage={msg.isUserMessage}
              key={msg.message}
              message={msg.message}
            />
          )
        })}
      </>
    )
  }, [messages])

  const handleChange = (str: string) => {
    setMessage(str)
  }

  const addMessage = useCallback(() => {
    const newMessage = {
      message,
      datetime: new Date().toISOString(),
      isUserMessage: true,
    } as Record<string, string | boolean>

    setMessages([...messages, newMessage])
    setMessage("")
  }, [message, messages])

  return (
    <FlexBox _css={`height: 600px;`}>
      <Chat
        header={<h2>Hello World</h2>}
        chatBody={chatBody}
        footer={"this is the footer message"}
        {...props}
        userInputValue={message}
        onChange={handleChange}
        onSaveClicked={addMessage}
      />
    </FlexBox>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
