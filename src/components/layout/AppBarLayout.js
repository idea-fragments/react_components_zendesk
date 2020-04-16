// @flow

import { FlexBlock } from "components/layout/FlexBlock"
import * as React    from "react"

type Props = {
    alertView :React.Node,
    drawerView :React.Node,
    appBar :React.Node,
    content :React.Node,
    className? :string,
}


export const AppBarLayout = ({
                                 alertView,
                                 appBar,
                                 className,
                                 content,
                                 drawerView,
                             } :Props) => (
    <FlexBlock data-component-name={AppBarLayout.COMPONENT_NAME}
               withRows
               spacing={null}
               alignSelf={"center"}
               className={className}>
        {appBar}
        <FlexBlock css={`min-height: calc(100vh - 87px);`} spacing={null}
                   withRows fluid>
            {content}
            {alertView}
        </FlexBlock>
        {drawerView}
    </FlexBlock>
)

AppBarLayout.COMPONENT_NAME = "AppBarLayout"
