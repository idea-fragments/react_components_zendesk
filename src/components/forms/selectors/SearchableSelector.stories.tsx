import { SearchableSelector }             from "components/forms/selectors/SearchableSelector"
import { SelectorItemKey, SelectorProps } from "components/forms/selectors/types"
import {
  ArrayToSelectorOptionsConverter
}                                         from "components/forms/utils/ArrayToSelectorOptionsConverter"
import React, { useState }                from "react"

export default {
  title:     "forms/SearchableSelector",
  component: SearchableSelector,
  argTypes:  {},
}

const OPTIONS = ["AYE", "BE", "SEE"]

const Story = (args: SelectorProps) => {
  const [option, setOption] = useState<SelectorItemKey>()
  return <SearchableSelector {...args}
                             emptyState={"Select Option"}
                             options={ArrayToSelectorOptionsConverter.call(OPTIONS).concat([
                               {
                                 key:      "33",
                                 label:    "three three",
                                 disabled: true
                               }
                             ])}
                             keyField={"key"}
                             labelField={"label"}
                             selectedKey={option}
                             onChange={setOption}
  />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}
