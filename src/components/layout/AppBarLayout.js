// @flow

import { FlexBlock }                   from "components/layout/FlexBlock"
import { useEffect, useRef, useState } from "react"
import * as React                      from "react"
import styled                          from "styled-components"
import { NavBarScrollWatcher }         from "utils/NavBarScrollWatcher"

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
    const appBarRef                       = useRef<HTMLDivElement>(null)
    const [appBarHeight, setAppBarHeight] = useState<number>(0)

    useEffect(() => {
        NavBarScrollWatcher.setNavBar(appBarRef.current)
    }, [])

    useEffect(() => {
        setAppBarHeight(appBarRef.current.getBoundingClientRect().height)
    }, [])

    return (
        <FlexBlock data-component-name={AppBarLayout.COMPONENT_NAME}
                   withRows
                   spacing={null}
                   alignSelf={"center"}
                   className={className}>
            <div ref={appBarRef}>{appBar}</div>
            <FlexBlock css={`min-height: calc(100vh - ${appBarHeight}px);`}
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
