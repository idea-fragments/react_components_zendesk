import { DrawerContent } from "components/Drawer"
import { createContext, Dispatch, SetStateAction } from "react"

export type DrawerContentState = Record<string, any>

export type DrawerState = {
  isDrawerOpen: boolean
  drawerContent?: DrawerContent
  drawerContentState: DrawerContentState
}

export type DrawerStateWithDispatch = {
  drawerState: Readonly<DrawerState>
  setDrawerState: Dispatch<SetStateAction<DrawerState>>
}

export const defaultUiState: DrawerStateWithDispatch = {
  setDrawerState: () => {
    throw new Error("initial state not set")
  },
  drawerState: { isDrawerOpen: false, drawerContentState: {} },
}

export const DrawerStateContext =
  createContext<DrawerStateWithDispatch>(defaultUiState)
