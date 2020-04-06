// @flow

import { IconButton }            from "components/forms/IconButton"
import { Container }             from "components/layout/Container"
import {
    FlexBlock,
    PaddedFlexBlock,
}                                from "components/layout/FlexBlock"
import React, { ElementType }    from "react"
import { useStores }             from "stores/useStores"
import styled, { css }           from "styled-components"
import { mdiArrowLeft, mdiMenu } from "@mdi/js"
import { SPACINGS }              from "styles/spacings"
import type { ContainerProps }   from "styles/types"
import { DO_NOTHING }            from "utils/functionHelpers"
import { mediaQueries }          from "styles/mediaQueries"

const { forLargeTabletsAndUp } = mediaQueries()

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

    // TODO this should not use MobX...switch to react context
    const { ui } = useStores()

    const openNavDrawer = () => {
        ui.openDrawerWith({
            body: <FlexBlock withRows>
                {actions.map((a :React.Node, i :number) => (
                    <DrawerItem key={i}>{a}</DrawerItem>
                ))}
            </FlexBlock>,
        })
    }

    const content = (
        <PaddedFlexBlock spacing={SPACINGS.SM}
                         justify={"space-between"}
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
            <DesktopNav alignItems={"center"}>
                {actions}
            </DesktopNav>
            <MobileNav onClick={openNavDrawer} />

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

const DesktopNav = styled(FlexBlock)`
  && {
    display: none;
    ${forLargeTabletsAndUp(css`
      display: flex;
    `)}
  }
`

const MobileNav = styled(IconButton).attrs({ flat: true, icon: mdiMenu })`
  && {
    ${forLargeTabletsAndUp(css`
      display: none;
    `)} 
  }
`

const DrawerItem = styled(FlexBlock)`
  width: 100%;
  padding: 0 1rem;
`
