import { ModalContent } from "components/modals/Modal"
import { createContext, Dispatch, SetStateAction } from "react"

export type ModalContentState = Record<string, any>

export type ModalState = {
  isModalOpen: boolean
  modalContent?: ModalContent
  modalContentState: ModalContentState
}

export type ModalStateWithDispatch = {
  modalState: Readonly<ModalState>
  setModalState: Dispatch<SetStateAction<ModalState>>
}

export const defaultUiState: ModalStateWithDispatch = {
  setModalState: () => {
    throw new Error("initial state not set")
  },
  modalState: { isModalOpen: false, modalContentState: {} },
}

export const ModalStateContext =
  createContext<ModalStateWithDispatch>(defaultUiState)
