// @flow

import { IconButton }                from "components/forms/IconButton"
import { PaddedFlexBlock }           from "components/layout/FlexBlock"
import type { StyledComponentProps } from "components/StyledComponentProps.type"
import * as React                    from "react"
import styled                        from "styled-components"
import { mdiClose }                  from "@mdi/js"

export type DrawerContent = {
    body :any,
    onClose? :() => void,
}

type Props = {
    isOpen :boolean,
    closeDrawer :() => void,
    drawerContent :?DrawerContent,
} & StyledComponentProps

export let Drawer = ({
                         isOpen,
                         closeDrawer,
                         drawerContent,
                     } :Props) => {

    if (!isOpen) return null
    if (!drawerContent) throw new Error("Drawer found null drawer content")

    const { body, onClose } :DrawerContent = drawerContent

    const handleClose = () => {
        closeDrawer()
        if (onClose) onClose()
    }

    return (
        <AbsoluteContainer withRows>
            <IconButton icon={mdiClose}
                        onClick={handleClose}
                        aria-label="Close drawer" />
            <div css={"flex: 1"}>{body}</div>
        </AbsoluteContainer>
    )

}

Drawer                = styled(Drawer)``
Drawer.COMPONENT_NAME = "Drawer"
Drawer.defaultProps   = {}

const AbsoluteContainer = styled(PaddedFlexBlock)`
  position: absolute;
  height: 100vh;
  width: 90vw;
  background: ${({ theme }) => theme.styles.pageBackground};
  z-index: 1000;
  top: 0;
  right: 0;
  box-shadow: #00000094 0 0 6px 0;
`
