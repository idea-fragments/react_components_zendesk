import { Button } from "components/forms/Button"
import { DrawerModal, DrawerModalProps } from "components/modals/DrawerModal"
import { Chat } from "components/chats/Chat";
import { ChatMessage } from "components/chats/ChatMessage";
import React, { useState } from "react"

export default {
  title:     "DrawerModal",
  component: DrawerModal,
  argTypes:  {},
}

const ChatBody = () => {
  const messages = [
    {
      message: "This is the user message",
      dateTime: "2023-10-11, 12:45PM",
      isUserMessage: true
    },
    {
      message: "This is the chatgpt message",
      dateTime: "2023-10-11, 12:50PM",
      isUserMessage: false
    },
    {
      message: "This is the user message 2",
      dateTime: "2023-10-11, 12:52PM",
      isUserMessage: true
    }

  ]

  return (
    <>
      {messages.map(msg => {
        return (
          <ChatMessage 
            key={msg.message}
            message={msg.message}
            dateTime={msg.dateTime}
            icon={!msg.isUserMessage ? "so" : undefined}
          />
        )
      })}
    </>
  )
}

const Story = (props: DrawerModalProps) => {

  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <>
      <Button onClick={open}>Open Modal</Button>
      <DrawerModal 
        isOpen={isOpen}
        title="How can I help?"
        drawerModalBody={<Chat 
          header={<ChatMessage 
            message="With that goal in mind, how can I help?"
            dateTime="2023-10-12, 12:55PM"
            icon="so"
          />}
          chatBody={<ChatBody />}
          onClick={close}
          onChange={open}
        />}
        footer={<Button onClick={close}>
          Close
        </Button>
        }
        closeDrawerModal={close}
        {...props}
      />
    </>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
