import { Selector } from "components/forms/selectors/Selector"
import {
  SelectorItemKey,
  SelectorOption,
  SelectorProps,
} from "components/forms/selectors/types"
import { FlexBox } from "components/layout/FlexBox"
import React, { useState } from "react"
import { css } from "styled-components"

export default {
  title: "forms/Selector",
  component: Selector,
  argTypes: {},
}

type Option = { label: string; value: string }

const OPTIONS = ["AYEEEEEEEEEEE", "BEEEEEEEEEEEEEEEEEE", "SEEEEEEEEEEEEE"]

const PAGE_ONE_OPTIONS: SelectorOption<Option>[] = [
  { isHeaderItem: true, label: "Page 1", value: "__header_1__" },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { isAddItem: true, label: "Add new fruit", value: "__add__" },
  { isNextItem: true, label: "More fruits", value: "__next__" },
]

const PAGE_TWO_OPTIONS: SelectorOption<Option>[] = [
  { isBackItem: true, label: "Back", value: "__back__" },
  { isHeaderItem: true, label: "Page 2", value: "__header_2__" },
  { label: "Dragonfruit", value: "dragonfruit" },
  { label: "Elderberry", value: "elderberry" },
  { label: "Fig", value: "fig" },
]

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

const ItemTypesStory = (args: SelectorProps) => {
  const [option, setOption] = useState<SelectorItemKey>()
  const [page, setPage] = useState<1 | 2>(1)

  const handleChange = (key: SelectorItemKey) => {
    if (key === "__next__") {
      setPage(2)
      return
    }
    if (key === "__back__") {
      setPage(1)
      return
    }
    setOption(key)
  }

  return (
    <FlexBox>
      <Selector
        {...args}
        appendMenuToNode={document.body}
        emptyState={"Choose"}
        keyField={"value"}
        labelField={"label"}
        menuCSS={css`&& { min-width: 500px; !important;}`}
        onChange={handleChange}
        options={page === 1 ? PAGE_ONE_OPTIONS : PAGE_TWO_OPTIONS}
        selectedKey={option}
      />
    </FlexBox>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = { fluid: false }

export const FullWidth = Story.bind({})
FullWidth.args = { fluid: true }

export const WithItemTypes = ItemTypesStory.bind({})
// @ts-ignore
WithItemTypes.args = { fluid: false }
