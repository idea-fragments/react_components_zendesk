import { ModalContent } from "components/modals/Modal"
import { useCallback, useContext } from "react"
import {
  ModalContentState,
  ModalState,
  ModalStateContext,
  ModalStateWithDispatch,
} from "states/ModalState"

export type ModalHelperFunctions = {
  closeModal: () => void
  openErrorModalWith: (c: ModalContent) => void
  openModalWith: (c: ModalContent) => void
  openSuccessModalWith: (c: ModalContent) => void
  openWarningModalWith: (c: ModalContent) => void
  setModalContentState: (s: ModalContentState) => void
}

export const useModalState = (): ModalStateWithDispatch &
  ModalHelperFunctions => {
  const { modalState, setModalState } = useContext(ModalStateContext)

  const closeModal = useCallback(() => {
    setModalState((previous: ModalState) => ({
      ...previous,
      isModalOpen: false,
      modalContent: undefined,
      modalContentState: {},
    }))
  }, [setModalState])

  const openModalWith = useCallback(
    (c: ModalContent) => {
      // The following check causes the app to make infinite requests due
      // to the HttpManager error handler relying on the error modal.
      // This function will reload over and over due to the `isModalOpen`
      // state value constantly changes between true and false.

      //    if (isModalOpen && !modalContent?.blocking) {
      //       closeModal()
      //     }
      setModalState((previous: ModalState) => ({
        ...previous,
        isModalOpen: true,
        modalContent: { autoClose: true, ...c },
        modalContentState: {},
      }))
    },
    [setModalState],
  )

  const openErrorModalWith = useCallback(
    (c: ModalContent) => {
      openModalWith({ ...c, title: c.title ?? "Uh Oh!", danger: true })
    },
    [openModalWith],
  )

  const openSuccessModalWith = useCallback(
    (c: ModalContent) => {
      openModalWith({ ...c, title: c.title ?? "Success!", success: true })
    },
    [openModalWith],
  )

  const openWarningModalWith = useCallback(
    (c: ModalContent) => {
      openModalWith({ ...c, title: c.title ?? "Warning!", warning: true })
    },
    [openModalWith],
  )

  const setModalContentState = useCallback(
    (state: Record<string, any>) => {
      setModalState((previous: ModalState) => ({
        ...previous,
        modalContentState: { ...previous.modalContentState, ...state },
      }))
    },
    [setModalState],
  )

  return {
    closeModal,
    openErrorModalWith,
    openModalWith,
    openSuccessModalWith,
    openWarningModalWith,
    setModalContentState,
    setModalState,
    modalState,
  }
}
