// @flow

import { FlexBlock } from "components/layout/FlexBlock"
import * as React    from "react"

type Props = {
    sidebar :React.Node,
    content :React.Node,
    className? :string,
}


export const SidebarLayout = ({ className, sidebar, content } :Props) => {
    throw "Not Completed Yet"
    return (
        <FlexBlock data-component-name={SidebarLayout.COMPONENT_NAME}
                   alignSelf={"center"}
                   className={className}>
            <FlexBlock withRows css={`height: 100vh`}>
                {sidebar}
            </FlexBlock>
            <FlexBlock withRows fluid>
                {content}
            </FlexBlock>
        </FlexBlock>
    )
}

SidebarLayout.COMPONENT_NAME = "SidebarLayout"