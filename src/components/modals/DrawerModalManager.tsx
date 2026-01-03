import { Drawer } from "components/Drawer"
import { useDrawerState } from "hooks/useDrawerState"
import { FC } from "react"

export const DrawerModalManager: FC = () => {
  const { closeDrawer, drawerState } = useDrawerState()
  const { isDrawerOpen, drawerContent } = drawerState

  return (
    <Drawer
      closeDrawer={closeDrawer}
      drawerContent={drawerContent}
      isOpen={isDrawerOpen}
    />
  )
}
