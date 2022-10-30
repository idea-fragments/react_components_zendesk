import { mdiTrashCanOutline } from "@mdi/js"
import {
  Button,
  BUTTON_SIZES
}                             from "components/forms/Button"
import { FlexBox }            from "components/layout/FlexBox"
import {
  ColumnConfig,
  FinalizedTableProps,
  Item,
  ItemAction,
  Table,
}                             from "components/tables/Table"
import React                  from "react"
import { DO_NOTHING }         from "utils/functionHelpers"

export default {
  title:     "table/Table",
  component: Table,
  argTypes:  {},
}


const Story = (args: Partial<FinalizedTableProps>) => {
  const actions = () => {
    return [
      <FlexBox fluid>
        <FlexBox fluid>
          <Button compact
                  danger
                  icon={mdiTrashCanOutline}
                  onClick={DO_NOTHING}
                  size={BUTTON_SIZES.SMALL} />
        </FlexBox>

        <Button neutral onClick={DO_NOTHING} size={BUTTON_SIZES.SMALL}>Hello</Button>
        <Button onClick={DO_NOTHING} size={BUTTON_SIZES.SMALL}>World</Button>
      </FlexBox>
    ]
  }
  return <Table
    actions={actions}
    checkable
    columnConfigs={columnConfigs}
    items={items}
    title={"Table Title"}
    {...args}
  />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}

// @ts-ignore
const items: Item[] = [
  { Color: "red", "Created At": "2021-01-01", Status: "pending" },
  { Color: "blue", "Created At": "2021-01-01", Status: "pending" },
  { Color: "orange", "Created At": "2021-01-01", Status: "pending" },
  { Color: "yellow", "Created At": "2021-01-01", Status: "pending" },
  { Color: "green", "Created At": "2021-01-01", Status: "pending" },
  { Color: "purple", "Created At": "2021-01-01", Status: "pending" },
].map((item) => ({
  ...item,
  key:     item.Color,
  actions: ([
    { action: DO_NOTHING, label: "Action 1" },
    { action: DO_NOTHING, label: "Action 2" },
  ] as ItemAction[])
}))

const columnConfigs: ColumnConfig[] = [
  {
    name:        "Color",
    important:   true,
    collapsible: false,
    filter:      {
      name:    "Filter Color",
      options: items.map(({ Color }) => ({ value: Color as string, label: Color as string })),
      type:    "select",
    }
  },
  { name: "Created At", important: false, collapsible: false },
  {
    name:        "Status",
    important:   false,
    collapsible: false,
    filter:      {
      name:    "Status Color",
      options: undefined,
      type:    "text",
    }
  },
]
