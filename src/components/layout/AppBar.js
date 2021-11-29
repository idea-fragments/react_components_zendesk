// @flow

import { IconButton }              from "components/forms/IconButton"
import { Container }               from "components/layout/Container"
import { FlexBlock }               from "components/layout/FlexBlock"
import React, { type ElementType } from "react"
import { useStores }               from "stores/useStores"
import styled, { css }             from "styled-components"
import { mdiArrowLeft, mdiMenu }   from "@mdi/js"
import { SPACINGS }                from "styles/spacings"
import { useTheme }                from "styles/theme/useTheme"
import type { ContainerProps }     from "styles/types"
import { DO_NOTHING }              from "utils/functionHelpers"
import { mediaQueries }            from "styles/mediaQueries"

const { forLargeTabletsAndUp } = mediaQueries()

type Props = {
    actions :Array<React.Node>,
    fixed? :boolean,
    logo? :ElementType,
    onBackClicked :() => void,
    onLogoClicked :() => void,
    showBackButton :boolean,
    title :ElementType,
} & ContainerProps

export let AppBar = ({
                         actions,
                         className,
                         fixed,
                         fluid,
                         logo,
                         onBackClicked,
                         onLogoClicked,
                         showBackButton,
                         title,
                     } :Props) => {

    // TODO this should not use MobX...switch to react context
    const { ui }       = useStores()
    const theme        = useTheme()
    const appBarHeight = theme.styles.appBar.height

    const openNavDrawer = () => {
        ui.openDrawerWith({
            body: <FlexBlock withRows alignItems={"flex-start"}>
                {actions.map((a :React.Node, i :number) => (
                    <DrawerItem key={i} onClick={ui.closeDrawer}>
                        {a}
                    </DrawerItem>
                ))}
            </FlexBlock>,
        })
    }

    return <>
        {fixed ? <FixedPlaceHolder height={`${appBarHeight}`} /> : null}
        <BarWrapper fixed={fixed} className={className}>
            <Content height={appBarHeight} fluid={fluid}>
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
                <MobileNav
                    color={
                        theme.styles.nav.linkColor ||
                        theme.styles.getTextColorForBackground({
                            color: theme.styles.appBar.background,
                            theme,
                        })
                    }
                    onClick={openNavDrawer} />
                <DesktopNav alignItems={"center"}>
                    {actions}
                </DesktopNav>
            </Content>
        </BarWrapper>
    </>
}

AppBar              = styled(AppBar)``
AppBar.defaultProps = {
    actions       : [],
    height        : "auto",
    showBackButton: false,
    onBackClicked : DO_NOTHING,
    onLogoClicked : DO_NOTHING,
}

AppBar.COMPONENT_NAME = "AppBar"

const BarWrapper = styled.header`
  background: ${({ theme }) => theme.styles.appBar.background};
  box-shadow: ${({ theme }) => theme.styles.appBar.shadow};
  position: ${({ fixed }) => fixed ? "fixed" : "unset"};
  top: ${({ fixed }) => fixed ? "0" : "unset"};
  left: ${({ fixed }) => fixed ? "0" : "unset"};
  width: 100%;
  z-index: ${({ theme }) => theme.styles.appBar.zIndex};
`

const Content = styled(Container).attrs({
    withRows  : false,
    spacing   : SPACINGS.SM,
    justify   : "space-between",
    alignItems: "center",
})`
  height: ${({ height }) => height ? height : "fit-content"};
`

const DesktopNav = styled(FlexBlock).attrs({
    as: "nav",
})`
  && {
    display: none;
    ${forLargeTabletsAndUp(css`
      display: flex;
    `)}
  }
`

const DrawerItem = styled(FlexBlock)`
  width: 100%;
  padding: 0 1rem;
`

const FixedPlaceHolder = styled.div`
  height: ${({ height }) => height};
`

const MobileNav = styled(IconButton).attrs({
    flat: true,
    icon: mdiMenu,
})`
  && {
    margin-right: 0;
    ${forLargeTabletsAndUp(css`
      display: none;
    `)}
  }
`

