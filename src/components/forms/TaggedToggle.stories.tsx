import React, { useState } from "react"
import { TaggedToggle }    from "components/forms/TaggedToggle"

export default {
    title:     "react_components_zendesk/forms/TaggedToggle",
    component: TaggedToggle,
    argTypes:  {},
}


const Story = () => {
    const [active, setState] = useState(false)
    return <TaggedToggle active={active} onChange={setState} />
}

export const Default = Story.bind({})
Default.args         = {}
