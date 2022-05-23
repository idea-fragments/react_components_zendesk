import React, { useState } from "react"
import { CycleButton }     from "components/forms/CycleButton"

export default {
  title:     "forms/CycleButton",
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
// @ts-ignore
Default.args         = {}
