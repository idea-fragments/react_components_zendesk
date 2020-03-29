// @flow

import { IconButton }                 from "components/forms/IconButton"
import { Container }                  from "components/layout/Container"
import { FlexBlock, PaddedFlexBlock } from "components/layout/FlexBlock"
import React, { ElementType }         from "react"
import styled                         from "styled-components"
import { mdiArrowLeft }               from "@mdi/js"
import { SPACINGS }                   from "styles/spacings"
import type { ContainerProps }        from "styles/types"
import { DO_NOTHING }                 from "utils/functionHelpers"
import { css }                        from "styled-components"

const ActionContainer = styled(FlexBlock)`
  padding: 0;
  flex: 1;
  justify-content: flex-end;
`

type Props = {
    title :string,
    actions :Array<React.Node>,
    showBackButton :boolean,
    onBackClicked :() => void,
    onLogoClicked :() => void,
    logo? :ElementType
} & ContainerProps

export const AppBar = ({
                           actions,
                           className,
                           fluid,
                           logo,
                           onBackClicked,
                           onLogoClicked,
                           showBackButton,
                           title,
                       } :Props) => {

    const content = (
        <PaddedFlexBlock spacing={SPACINGS.SM}
                         css={!fluid
                              ? css`padding-left: 0; padding-right: 0; align-items: center`
                              : css`align-items: center`}
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
                {title}
            </FlexBlock>

            <ActionContainer alignItems={"center"}>
                {actions}
            </ActionContainer>
        </PaddedFlexBlock>
    )

    return fluid
           ? <>{content}</>
           : <Container className={className}>{content}</Container>
}

AppBar.defaultProps = {
    actions       : [],
    showBackButton: false,
    onBackClicked : DO_NOTHING,
    onLogoClicked : DO_NOTHING,
}

AppBar.COMPONENT_NAME = "AppBar"
