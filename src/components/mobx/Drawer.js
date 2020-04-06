// @flow

import { Drawer as DrawerView } from "components/Drawer"
import * as React               from "react"
import { useObserver }          from "mobx-react"

export let Drawer = ({ uiStore: ui }) => {
    return useObserver(() => {
        const { closeDrawer, drawerContent } = ui

        return <DrawerView closeDrawer={closeDrawer}
                           drawerContent={drawerContent}
                           isOpen={ui.isDrawerOpen} />
    })
}

Drawer.COMPONENT_NAME = "Drawer"
Drawer.defaultProps   = {}
