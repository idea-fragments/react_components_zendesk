// @flow

import { IconButton }            from "components/forms/IconButton"
import { Container }             from "components/layout/Container"
import { FlexBlock }             from "components/layout/FlexBlock"
import React, { ElementType }    from "react"
import { useStores }             from "stores/useStores"
import styled, { css }           from "styled-components"
import { mdiArrowLeft, mdiMenu } from "@mdi/js"
import { SPACINGS }              from "styles/spacings"
import { useTheme }              from "styles/theme/useTheme"
import type { ContainerProps }   from "styles/types"
import { DO_NOTHING }            from "utils/functionHelpers"
import { mediaQueries }          from "styles/mediaQueries"

const { forLargeTabletsAndUp } = mediaQueries()

type Props = {
    actions :Array<React.Node>,
    fixed? :boolean,
    height :string,
    logo? :ElementType,
    onBackClicked :() => void,
    onLogoClicked :() => void,
    showBackButton :boolean,
    title :string,
} & ContainerProps

export const AppBar = ({
                           actions,
                           color,
                           fixed,
                           fluid,
                           logo,
                           height,
                           onBackClicked,
                           onLogoClicked,
                           showBackButton,
                           title,
                       } :Props) => {

    // TODO this should not use MobX...switch to react context
    const { ui } = useStores()
    const theme  = useTheme()

    const openNavDrawer = () => {
        ui.openDrawerWith({
            body: <FlexBlock withRows>
                {actions.map((a :React.Node, i :number) => (
                    <DrawerItem key={i}>{a}</DrawerItem>
                ))}
            </FlexBlock>,
        })
    }

    return <>
        {fixed ? <FixedPlaceHolder height={height} /> : null}
        <BarWrapper color={color} fixed>
            <Content height={height} fluid={fluid}>
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
                <MobileNav
                    color={theme.styles.getTextColorForBackground({
                        color,
                        theme,
                    })}
                    onClick={openNavDrawer} />
            </Content>
        </BarWrapper>
    </>
}

AppBar.defaultProps = {
    actions       : [],
    height        : "auto",
    showBackButton: false,
    onBackClicked : DO_NOTHING,
    onLogoClicked : DO_NOTHING,
}

AppBar.COMPONENT_NAME = "AppBar"

const BarWrapper = styled.header`
  background: ${({ color }) => color ? color : "transparent"};
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
    ${forLargeTabletsAndUp(css`
      display: none;
    `)} 
  }
`

