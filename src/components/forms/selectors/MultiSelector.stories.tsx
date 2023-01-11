import { MultiSelector }   from "components/forms/selectors/MultiSelector"
import {
  SelectorItemKey,
  SelectorProps
}                          from "components/forms/selectors/types"
import React, { useState } from "react"

export default {
  title:     "forms/MultiSelector",
  component: MultiSelector,
  argTypes:  {},
}

const OPTIONS = ["AYE", "BE", "SEE"]

const Story = (args: SelectorProps) => {
  const [options, setOptions] = useState<SelectorItemKey[]>([])
  return <MultiSelector {...args}
                        emptyState={"Select Option"}
                        options={OPTIONS.map((o) => ({ label: o, value: o }))}
                        keyField={"value"}
                        labelField={"label"}
                        selectedKeys={options}
                        onChange={setOptions}
  />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
