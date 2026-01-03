import { FC, PropsWithChildren, useContext, useEffect, useState } from "react"
import {
  DrawerState,
  DrawerStateContext,
  DrawerStateWithDispatch,
} from "states/DrawerState"

export const DrawerModalStateProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const defaultState = useContext(DrawerStateContext)
  const [state, setState] = useState<DrawerState>(defaultState.drawerState)

  const [drawerModalStateWithDispatch, setDrawerModalStateWithDispatch] =
    useState<DrawerStateWithDispatch>({
      setDrawerState: setState,
      drawerState: state,
    })

  useEffect(() => {
    setDrawerModalStateWithDispatch({
      setDrawerState: setState,
      drawerState: state,
    })
  }, [state])

  return (
    <DrawerStateContext.Provider value={drawerModalStateWithDispatch}>
      {children}
    </DrawerStateContext.Provider>
  )
}
