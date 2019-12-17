// @flow

import { Button }                     from "components/forms/Button"
import { IconButton }                 from "components/forms/IconButton"
import { FlexBlock, PaddedFlexBlock } from "components/layout/FlexBlock"
import { Container }                  from "components/layout/Container"
import { H3 }                         from "components/text/Header"
import { useObserver }                from "mobx-react"
import React                          from "react"
import { useRouter }                  from "router/Router"
import { useStores }                  from "stores/useStores"
import { COLORS }                     from "styles/colors"
import styled                         from "styled-components"
import { Env }                        from "config/env"
import { mdiArrowLeft }               from "@mdi/js"
import { SPACINGS }                   from "styles/spacings"

const Header = styled(H3)`
  color: ${COLORS.BLUE} !important;
  margin: 0;
`

const ActionContainer = styled(FlexBlock)`
  padding: 0;
  flex: 1;
  justify-content: flex-end;
`

export const AppBar = () => {
    const { auth } = useStores()
    const router   = useRouter()

    return useObserver(() => (
        <PaddedFlexBlock spacing={SPACINGS.SM}>
            {
                router.hasHistory
                ? <IconButton icon={mdiArrowLeft}
                              flat
                              onClick={router.goBack} />
                : null
            }

            <Header>{Env.appName()}</Header>
            <ActionContainer>
                {
                    auth.isUserAuthenticated
                    ? <Button flat onClick={auth.logOut}>Log Out</Button>
                    : null
                }
            </ActionContainer>
        </PaddedFlexBlock>
    ))
}

AppBar.COMPONENT_NAME = "AppBar"
