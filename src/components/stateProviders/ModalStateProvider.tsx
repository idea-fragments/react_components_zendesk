import { FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import {
  ModalState,
  ModalStateContext,
  ModalStateWithDispatch,
} from "states/ModalState"

export const ModalStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const defaultState = useContext(ModalStateContext)
  const [state, setState] = useState<ModalState>(defaultState.modalState)

  const [modalStateWithDispatch, setModalStateWithDispatch] =
    useState<ModalStateWithDispatch>({
      setModalState: setState,
      modalState: state,
    })

  useEffect(() => {
    setModalStateWithDispatch({ setModalState: setState, modalState: state })
  }, [state])

  return (
    <ModalStateContext.Provider value={modalStateWithDispatch}>
      {children}
    </ModalStateContext.Provider>
  )
}
