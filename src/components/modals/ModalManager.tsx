import { Modal, ModalProps } from "components/modals/Modal"
import { useModalState } from "hooks/useModalState"
import { FC } from "react"
import { css } from "styled-components"

export type ModalManagerProps = Pick<ModalProps, "blurBackdrop" | "_css">
export const ModalManager: FC<ModalManagerProps> = ({ blurBackdrop, _css }) => {
  const { closeModal, modalState } = useModalState()
  const { isModalOpen, modalContent } = modalState

  return (
    <Modal
      blurBackdrop={blurBackdrop}
      closeModal={closeModal}
      _css={css`
        max-width: 90%;
        ${_css ?? ""}
      `}
      disableActions={false}
      isVisible={isModalOpen}
      modalContent={modalContent}
    />
  )
}
