// @flow

import React, { useState } from "react"
import { CycleButton }     from "components/forms/CycleButton"

export default {
    title:     "react_components_zendesk/forms/CycleButton",
    component: CycleButton,
    argTypes:  {},
}

const OPTIONS = ["AYE", "BE", "SEE"]

const Story = () => {
    const [option, setOption] = useState(OPTIONS[0])

    return <CycleButton options={OPTIONS.map((o) => ({ label: o, value: o }))}
                        selectedOption={option}
                        onCycleChanged={setOption}
    />
}

export const Default = Story.bind({})
Default.args         = {}