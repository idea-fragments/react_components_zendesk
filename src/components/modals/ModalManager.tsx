import { Modal }              from "components/modals/Modal"
import { useModalState }      from "hooks/useModalState"
import { FC }                 from "react"


export const ModalManager: FC = () => {
  const { closeModal, modalState }    = useModalState()
  const { isModalOpen, modalContent } = modalState

  return <Modal closeModal={closeModal}
           css={`max-width: 90%;`}
           disableActions={false}
           isVisible={isModalOpen}
           modalContent={modalContent} />
}
