// @flow

import { FlexBlock } from "components/layout/FlexBlock"
import * as React    from "react"

type Props = {
    alertView :React.Node,
    appBar :React.Node,
    content :React.Node,
    className? :string,
}


export const AppBarLayout = ({ className, appBar, content, alertView } :Props) => (
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
    </FlexBlock>
)

AppBarLayout.COMPONENT_NAME = "AppBarLayout"
