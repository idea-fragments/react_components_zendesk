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
               alignSelf={"center"}
               className={className}>
        <FlexBlock withRows>
            {appBar}
        </FlexBlock>
        <FlexBlock spacing={null} withRows fluid>
            {content}
            {alertView}
        </FlexBlock>
        {drawerView}
    </FlexBlock>
)

AppBarLayout.COMPONENT_NAME = "AppBarLayout"
