// @flow

import { FlexBlock } from "components/layout/FlexBlock"
import * as React    from "react"

type Props = {
    appBar :React.Node,
    content :React.Node,
    className? :string,
}


export const AppBarLayout = ({ className, appBar, content } :Props) => (
    <FlexBlock withRows alignSelf={"center"} className={className}>
        <FlexBlock withRows>
            {appBar}
        </FlexBlock>
        <FlexBlock withRows fluid>
            {content}
        </FlexBlock>
    </FlexBlock>
)

AppBarLayout.COMPONENT_NAME = "AppBarLayout"
