// @flow

import { Button }                     from "components/forms/Button"
import { IconButton }                 from "components/forms/IconButton"
import { Container }                  from "components/layout/Container"
import { FlexBlock, PaddedFlexBlock } from "components/layout/FlexBlock"
import { H3 }                         from "components/text/Header"
import React, { ElementType }         from "react"
import { COLORS }                     from "styles/colors"
import styled                         from "styled-components"
import { mdiArrowLeft }               from "@mdi/js"
import { SPACINGS }                   from "styles/spacings"
import type { ContainerProps }        from "styles/types"
import { DO_NOTHING }                 from "utils/functionHelpers"
import { css }                        from "styled-components"

const Header = styled(H3)`
  color: ${({ theme }) => theme.styles.colorPrimary} !important;
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
    onBackClicked :() => void,
    onLogoClicked :() => void,
    logo? :ElementType
} & ContainerProps

export const AppBar = ({
                           title,
                           actions,
                           showBackButton,
                           onBackClicked,
                           onLogoClicked,
                           fluid,
                           logo,
                       } :Props) => {

    return <Container>
        <PaddedFlexBlock spacing={SPACINGS.SM}
                         css={!fluid ? css`padding-left: 0; padding-right: 0; align-items: center` : css`align-items: center`}
        >
            {
                showBackButton
                ? <IconButton icon={mdiArrowLeft}
                              flat
                              onClick={onBackClicked} />
                : null
            }

            <FlexBlock alignItems={"center"}
                       onClick={onLogoClicked}
                       css={`cursor: pointer;`}>
                {logo ? logo : null}
                <Header>{title}</Header>
            </FlexBlock>

            <ActionContainer>
                {
                    actions.map(({ name, onClick } :Action) => {
                        return <Button flat onClick={onClick}>{name}</Button>
                    })
                }
            </ActionContainer>
        </PaddedFlexBlock>
    </Container>
}

AppBar.defaultProps = {
    actions       : [],
    showBackButton: false,
    onBackClicked : DO_NOTHING,
    onLogoClicked : DO_NOTHING,
}

AppBar.COMPONENT_NAME = "AppBar"
