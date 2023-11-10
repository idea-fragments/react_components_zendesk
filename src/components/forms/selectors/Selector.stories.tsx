import { Selector } from "components/forms/selectors/Selector"
import {
  SelectorItemKey,
  SelectorProps,
} from "components/forms/selectors/types"
import React, { useState } from "react"

export default {
  title: "forms/Selector",
  component: Selector,
  argTypes: {},
}

const OPTIONS = ["AYE", "BE", "SEE"]

const Story = (args: SelectorProps) => {
  const [option, setOption] = useState<SelectorItemKey>()
  return (
    <Selector
      {...args}
      emptyState={"Select Option"}
      options={OPTIONS.map((o) => ({ label: o, value: o }))}
      keyField={"value"}
      labelField={"label"}
      selectedKey={option}
      onChange={setOption}
    />
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}
