// @flow

import { Button }                     from "components/forms/Button"
import { IconButton }                 from "components/forms/IconButton"
import { FlexBlock, PaddedFlexBlock } from "components/layout/FlexBlock"
import { H3 }                         from "components/text/Header"
import { useObserver }                from "mobx-react"
import React                          from "react"
import { COLORS }                     from "styles/colors"
import styled                         from "styled-components"
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

export type Action = {
    name :string,
    onClick :() => void,
}

type Props = {
    title :string,
    actions :Array<Action>,
    showBackButton :boolean,
    onBackClicked :() => void
}

export const AppBar = ({
                           title,
                           actions,
                           showBackButton,
                           onBackClicked,
                       } :Props) => {

    return useObserver(() => (
        <PaddedFlexBlock spacing={SPACINGS.SM}>
            {
                showBackButton
                ? <IconButton icon={mdiArrowLeft}
                              flat
                              onClick={onBackClicked} />
                : null
            }

            <Header>{title}</Header>
            <ActionContainer>
                {
                    actions.map(({name, onClick} :Action) => {
                        return <Button flat onClick={onClick}>{name}</Button>
                    })
                }
            </ActionContainer>
        </PaddedFlexBlock>
    ))
}

AppBar.COMPONENT_NAME = "AppBar"
