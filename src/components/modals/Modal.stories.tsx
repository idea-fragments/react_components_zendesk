import { Button } from "components/forms/Button"
import { Modal, ModalProps } from "components/modals/Modal"
import React, { useState } from "react"

export default {
  title: "Modal",
  component: Modal,
  argTypes: {},
}

const Story = ({ closeModal, modalContent, ...args }: ModalProps) => {
  const [isModalOpen, setIsModalOpenTo] = useState(false)

  modalContent = {
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam\n" +
      " aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed euismod, nisl\n" +
      " nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed\n" +
      " euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl\n" +
      " quis",
    title: "Modal Title",
    ...modalContent,
  }

  closeModal = closeModal || (() => setIsModalOpenTo(false))

  return (
    <>
      <Button onClick={() => setIsModalOpenTo(true)}>Open Modal</Button>
      <Modal
        {...args}
        closeModal={closeModal}
        disableActions={false}
        isVisible={isModalOpen}
        modalContent={modalContent}
      />
    </>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
