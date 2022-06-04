import { Button }              from "components/forms/Button"
import { Modal, ModalContent } from "components/Modal"
import React, { useState }     from "react"

export default {
  title:     "Modal",
  component: Modal,
  argTypes:  {},
}

const Story = () => {
  const [isModalOpen, setIsModalOpenTo] = useState(false)
  const modalContent: ModalContent      = {
    body:  "Body of the Modal",
    title: "Modal Title",
  }


  return <>

    <Button onClick={() => setIsModalOpenTo(true)}>Open Modal</Button>
    <Modal closeModal={() => setIsModalOpenTo(false)}
           disableActions={false}
           isVisible={isModalOpen}
           modalContent={modalContent}
    />
  </>
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
