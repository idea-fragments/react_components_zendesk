import { Button } from "components/forms/Button"
import { MODAL_SIZES, Modal, ModalProps } from "components/modals/Modal"
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

export const SmallSize = Story.bind({})
// @ts-ignore
SmallSize.args = {
  modalContent: {
    size: MODAL_SIZES.SM,
    title: "Small modal (576px)",
  },
}

export const LargeSize = Story.bind({})
// @ts-ignore
LargeSize.args = {
  modalContent: {
    size: MODAL_SIZES.LG,
    title: "Large modal (768px)",
  },
}

export const ExtraLargeSize = Story.bind({})
// @ts-ignore
ExtraLargeSize.args = {
  modalContent: {
    size: MODAL_SIZES.XL,
    title: "Extra large modal (1024px)",
  },
}

export const FullScreenSize = Story.bind({})
// @ts-ignore
FullScreenSize.args = {
  modalContent: {
    size: MODAL_SIZES.FULL_SCREEN,
    title: "Full screen modal",
  },
}

export const DangerVariant = Story.bind({})
// @ts-ignore
DangerVariant.args = {
  modalContent: {
    danger: true,
    title: "Delete this item?",
  },
}

export const WarningVariant = Story.bind({})
// @ts-ignore
WarningVariant.args = {
  modalContent: {
    title: "Heads up",
    warning: true,
  },
}

export const SuccessVariant = Story.bind({})
// @ts-ignore
SuccessVariant.args = {
  modalContent: {
    success: true,
    title: "All done",
  },
}
