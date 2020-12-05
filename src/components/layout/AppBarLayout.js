// @flow

import { FlexBlock }           from "components/layout/FlexBlock"
import { useEffect, useRef }   from "react"
import * as React              from "react"
import styled                  from "styled-components"
import { NavBarScrollWatcher } from "utils/NavBarScrollWatcher"
import { useTheme }            from "vendor/react_components_zendesk/hooks"

type Props = {
    alertView :React.Node,
    appBar :React.Node,
    appBarHeight :string,
    className? :string,
    content :React.Node,
    drawerView :React.Node,
}

export const AppBarLayout = ({
                                 alertView,
                                 appBar,
                                 className,
                                 content,
                                 drawerView,
                             } :Props) => {
    const theme        = useTheme()
    const appBarHeight = theme.styles.appBar.height
    const appBarRef    = useRef<HTMLDivElement>(null)

    useEffect(() => {
        NavBarScrollWatcher.setNavBar(appBarRef.current)
    }, [])

    return (
        <FlexBlock data-component-name={AppBarLayout.COMPONENT_NAME}
                   withRows
                   spacing={null}
                   alignSelf={"center"}
                   className={className}>
            <div ref={appBarRef}>{appBar}</div>
            <FlexBlock css={`min-height: calc(100vh - ${appBarHeight});`}
                       spacing={null}
                       withRows
                       fluid>
                {content}
                {alertView}
            </FlexBlock>
            <DrawerWrapper>
                {drawerView}
            </DrawerWrapper>
        </FlexBlock>
    )
}

AppBarLayout.COMPONENT_NAME = "AppBarLayout"

const DrawerWrapper = styled.div`
  z-index: ${({ theme }) => theme.styles.sidebar.zIndex};
`
