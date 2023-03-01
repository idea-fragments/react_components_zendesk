import { Button }          from "components/forms/Button"
import {
  Modal,
  ModalProps
}                          from "components/modals/Modal"
import React, { useState } from "react"

export default {
  title:     "Modal",
  component: Modal,
  argTypes:  {},
}

const Story = ({ closeModal, modalContent, ...args }: ModalProps) => {
  const [isModalOpen, setIsModalOpenTo] = useState(false)

  modalContent = {
    body:  "Body of the Modal",
    title: "Modal Title",
    ...modalContent,
  }

  closeModal = closeModal || (() => setIsModalOpenTo(false))

  return <>

    <Button onClick={() => setIsModalOpenTo(true)}>Open Modal</Button>
    <Modal
      {...args}
      closeModal={closeModal}
      disableActions={false}
      isVisible={isModalOpen}
      modalContent={modalContent}
    />
  </>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
