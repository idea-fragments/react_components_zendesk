import { SelectorItemKey } from "components/forms/selectors/types"
import React, { useState } from "react"
import { Selector }        from "components/forms/selectors/Selector"

export default {
  title:     "forms/Selector",
  component: Selector,
  argTypes:  {},
}

const OPTIONS = ["AYE", "BE", "SEE"]

const Story = () => {
  const [option, setOption] = useState<SelectorItemKey>(OPTIONS[0])
  return <Selector options={OPTIONS.map((o) => ({ label: o, value: o }))}
                   keyField={"value"}
                   valueField={"label"}
                      selectedKey={option}
                      onChange={setOption}
  />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
