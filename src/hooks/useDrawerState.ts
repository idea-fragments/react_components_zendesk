import { DrawerContent } from "components/Drawer"
import { useCallback, useContext } from "react"
import {
  DrawerContentState,
  DrawerState,
  DrawerStateContext,
  DrawerStateWithDispatch,
} from "states/DrawerState"

export type DrawerHelperFunctions = {
  closeDrawer: () => void
  openDrawerWith: (c: DrawerContent) => void
  setDrawerContentState: (s: DrawerContentState) => void
}

export const useDrawerState = (): DrawerStateWithDispatch &
  DrawerHelperFunctions => {
  const { drawerState, setDrawerState } = useContext(DrawerStateContext)

  const closeDrawer = useCallback(() => {
    setDrawerState((previous: DrawerState) => ({
      ...previous,
      isDrawerOpen: false,
      drawerContent: undefined,
      drawerContentState: {},
    }))
  }, [setDrawerState])

  const openDrawerWith = useCallback(
    (c: DrawerContent) => {
      setDrawerState((previous: DrawerState) => ({
        ...previous,
        isDrawerOpen: true,
        drawerContent: { autoClose: true, ...c },
        drawerContentState: {},
      }))
    },
    [setDrawerState],
  )

  const setDrawerContentState = useCallback(
    (state: Record<string, any>) => {
      setDrawerState((previous: DrawerState) => ({
        ...previous,
        drawerContentState: { ...previous.drawerContentState, ...state },
      }))
    },
    [setDrawerState],
  )

  return {
    closeDrawer,
    openDrawerWith,
    setDrawerContentState,
    setDrawerState,
    drawerState,
  }
}
