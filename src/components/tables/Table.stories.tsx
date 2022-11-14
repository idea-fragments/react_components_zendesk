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
  { Color: "red", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "blue", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "orange", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "yellow", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "green", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "purple", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "violet", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "magenta", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "cyan", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "black", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "white", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
  { Color: "grey", "Column 2": "Dsfadsafdsafd", "Column 3": "Dsafdsafdsa", "Column 4": "gfdhgsdgf", "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl", "Created At": "2021-01-01", Status: "pending" },
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
    },
    width: "100px",
  },
  {
    name:        "Column 2",
    important:   true,
    collapsible: false,
    width: "150px",
  },
  {
    name:        "Column 3",
    important:   false,
    collapsible: false,
    width: "150px",
  },
  {
    name:        "Column 4",
    important:   false,
    collapsible: false,
    width: "150px",
  },
  {
    name:        "Column 5",
    important:   false,
    collapsible: false,
    width: "500px",
  },
  { name: "Created At", important: false, collapsible: false, width: "150px", },
  {
    name:        "Status",
    important:   false,
    collapsible: false,
    filter:      {
      name:    "Status Color",
      options: undefined,
      type:    "text",
    },
    width: "150px",
  },
]
