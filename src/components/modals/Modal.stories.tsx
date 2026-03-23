import { Button } from "components/forms/Button"
import { Modal, ModalProps } from "components/modals/Modal"
import { useCallback, useMemo, useState } from "react"

export default {
  title: "Modal",
  component: Modal,
  argTypes: {},
}

const Story = ({ modalContent, ...args }: ModalProps) => {
  const [isModalOpen, setIsModalOpenTo] = useState(false)

  modalContent = useMemo(() => {
    return {
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam\n" +
        " aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed euismod, nisl\n" +
        " nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl quis nunc. Sed\n" +
        " euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget consectetur nunc nisl\n" +
        " quis",
      title: "Modal Title",
      ...modalContent,
    }
  }, [modalContent])

  const closeModal = useCallback(() => {
    setIsModalOpenTo(false)
  }, [])
  const openModal = useCallback(() => {
    setIsModalOpenTo(true)
  }, [])

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
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

export const IsNotDismissible = Story.bind({})
// @ts-ignore
IsNotDismissible.args = {
  modalContent: {
    isNotDismissible: true,
  },
}
