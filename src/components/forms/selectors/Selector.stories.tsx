import { Selector } from "components/forms/selectors/Selector"
import {
  SelectorItemKey,
  SelectorProps,
} from "components/forms/selectors/types"
import React, { useState } from "react"
import { FlexBox } from "components/layout/FlexBox"
import { css } from "styled-components"

export default {
  title: "forms/Selector",
  component: Selector,
  argTypes: {},
}

const OPTIONS = ["AYEEEEEEEEEEE", "BEEEEEEEEEEEEEEEEEE", "SEEEEEEEEEEEEE"]

const Story = (args: SelectorProps) => {
  const [option, setOption] = useState<SelectorItemKey>()
  return (
    <FlexBox>
      <Selector
        {...args}
        appendMenuToNode={document.body}
        emptyState={"Choose"}
        menuCSS={css`&& { min-width: 500px; !important;}`}
        options={OPTIONS.map((o) => ({ label: o, value: o }))}
        keyField={"value"}
        labelField={"label"}
        selectedKey={option}
        onChange={setOption}
      />
    </FlexBox>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = { fluid: false }
export const FullWidth = Story.bind({})
FullWidth.args = { fluid: true }
