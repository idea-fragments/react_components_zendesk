import { mdiTrashCanOutline } from "@mdi/js"
import { FlexBox }            from "components/layout/FlexBox"
import {
  ColumnConfig,
  FinalizedTableProps,
  Item,
  ItemAction,
  ItemKey,
  SortState,
  Table,
  TableAction,
}                             from "components/tables/Table"
import React, {
  FC,
  useCallback,
  useMemo,
  useState
}                             from "react"
import { DO_NOTHING }         from "utils/functionHelpers"

export default {
  title:     "table/Table",
  component: Table,
  argTypes:  {},
}

const Story = (args: Partial<FinalizedTableProps>) => {
  const [checkedItems, setCheckedItems] = useState<Set<ItemKey>>(new Set())
  const [sortState, setSortState]       = useState<SortState>({})

  const actions = useMemo((): TableAction[] => {
    return [
      {
        buttonProps:       {
          compact: true,
          danger:  true,
          icon:    mdiTrashCanOutline,
        },
        dropdownItemProps: { danger: true },
        label:             "Delete",
        notCompactable:    true,
        onClick:           DO_NOTHING,
      },
      {
        buttonProps: { neutral: true },
        label:       "Hello World",
        onClick:     DO_NOTHING,
      },
      {
        dropdownItemProps: { color: "#ff10ff" },
        label:             "Fun Days",
        onClick:           DO_NOTHING,
      },
      {
        Component:      DummyLink,
        componentProps: { href: "https://google.com" },
        label:          "Link",
        notCompactable: true,
        onClick:        DO_NOTHING,
      },
    ]
  }, [])

  const onFiltersChange = useCallback((...args: any) => {
    console.log("onFiltersChange", ...args)
  }, [])

  return <Table
    maxHeight={"240px"}
    {...args}
    actions={actions}
    checkable
    checkedItems={checkedItems}
    columnConfigs={columnConfigs}
    items={items}
    mobileListviewNodes={listviewNodes}
    title={"Table Title"}
    filterState={{ "Filter Multi Color": ["red", "blue"] }}
    onColumnSort={setSortState}
    onFiltersChange={onFiltersChange}
    onItemsChecked={setCheckedItems}
    pagination={{
      page:       9,
      pageSize:   3,
      totalCount: 100,
    }}
    sortState={sortState}
  />
}

const DummyLink: FC<any> = (props) => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args         = {}

// @ts-ignore
const items: Item[] = [
  {
    Color:        "red",
    key:          "red",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "blue",
    key:          "blue",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "orange",
    key:          "orange",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "yellow",
    key:          "yellow",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "green",
    key:          "green",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "purple",
    key:          "purple",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "violet",
    key:          "violet",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "magenta",
    key:          "magenta",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "cyan",
    key:          "cyan",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "black",
    key:          "black",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "white",
    key:          "white",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
  {
    Color:        "grey",
    key:          "grey",
    "Column 2":   "Dsfadsafdsafd",
    "Column 3":   "Dsafdsafdsa",
    "Column 4":   "gfdhgsdgf",
    "Column 5":   "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status:       "pending"
  },
].map((item) => ({
  ...item,
  key:     item.Color,
  actions: ([
    { action: DO_NOTHING, label: "Action 1" },
    { action: DO_NOTHING, label: "Action 2" },
  ] as ItemAction[])
}))

// @ts-ignore

const listviewNodes = items.map(({ Color, Status }, index: number) => {
  return <FlexBox withRows key={index}>
    <div>{Color}</div>
    <div>{Status}</div>
  </FlexBox>
})

const columnConfigs: ColumnConfig[] = [
  {
    name:        "Color",
    important:   true,
    collapsible: false,
    filter:      {
      fieldName: "filter_color",
      label:     "Filter Color",
      options:   items.map(({ Color }) => ({ value: Color as string, label: Color as string })),
      type:      "select",
    },
    width:       "100px",
  },
  {
    name:        "Column 2",
    important:   true,
    collapsible: false,
    filter:      {
      fieldName: "filter_multi_color",
      label:     "Filter Multi Color",
      options:   items.map(({ Color }) => ({ value: Color as string, label: Color as string })),
      type:      "multi-select",
    },
    sort:        {
      fieldName: "filter_multi_color",
      label:     "Color",
    },
    width:       "150px",
  },
  {
    name:        "Column 3",
    important:   false,
    collapsible: false,
    filter:      {
      fieldName: "searchable_filter_color",
      label:     "Searchable Filter Color",
      options:   items.map(({ Color }) => ({ value: Color as string, label: Color as string })),
      type:      "searchable-select",
    },
    width:       "150px",
  },
  {
    name:        "Column 4",
    important:   false,
    collapsible: false,
    width:       "150px",
  },
  {
    name:        "Column 5",
    important:   false,
    collapsible: false,
    width:       "500px",
  },
  { name: "Created At", important: false, collapsible: false, width: "150px", },
  {
    name:        "Status",
    important:   false,
    collapsible: false,
    filter:      {
      fieldName: "filter_status",
      label:     "Status Color",
      options:   undefined,
      type:      "text",
    },
    width:       "150px",
  },
]
