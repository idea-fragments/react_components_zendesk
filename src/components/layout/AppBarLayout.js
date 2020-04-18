// @flow

import { FlexBlock }           from "components/layout/FlexBlock"
import { useEffect, useRef }   from "react"
import * as React              from "react"
import { NavBarScrollWatcher } from "utils/NavBarScrollWatcher"

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
                                 appBarHeight,
                                 className,
                                 content,
                                 drawerView,
                             } :Props) => {

    const appBarRef = useRef<HTMLDivElement>(null)

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
            {drawerView}
        </FlexBlock>
    )
}

AppBarLayout.COMPONENT_NAME = "AppBarLayout"
