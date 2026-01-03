import { mdiTrashCanOutline } from "@mdi/js"
import { DesktopTableV2 } from "components/tables/DesktopTableV2"
import {
  ColumnConfig,
  Item,
  ItemAction,
  ItemKey,
  SortState,
  TableAction,
} from "components/tables/Table"
import React, { FC, useCallback, useMemo, useState } from "react"
import { css } from "styled-components"
import { DO_NOTHING } from "utils/functionHelpers"
import { isNotEmpty } from "utils/arrayHelpers"

export default {
  title: "table/DesktopTableV2",
  component: DesktopTableV2,
  argTypes: {},
}

const Story = (args: Partial<any>) => {
  const [checkedItems, setCheckedItems] = useState<Set<ItemKey>>(new Set())
  const [sortState, setSortState] = useState<SortState>({})
  const [currentPage, setCurrentPage] = useState(1)

  const actions = useMemo((): TableAction[] => {
    return [
      {
        buttonProps: {
          compact: true,
          danger: true,
          icon: mdiTrashCanOutline,
        },
        dropdownItemProps: { danger: true },
        label: "Delete",
        notCompactable: true,
        onClick: DO_NOTHING,
      },
      {
        buttonProps: { neutral: true },
        label: "Hello World",
        onClick: DO_NOTHING,
      },
      {
        dropdownItemProps: { color: "#ff10ff" },
        label: "Fun Days",
        onClick: DO_NOTHING,
      },
      {
        Component: DummyLink,
        componentProps: { href: "https://google.com" },
        label: "Link",
        notCompactable: true,
        onClick: DO_NOTHING,
      },
    ]
  }, [])

  const onFiltersChange = useCallback((...args: any) => {
    console.log("onFiltersChange", ...args)
  }, [])

  const onSelectAllToggle = useCallback((selected: boolean) => {
    if (selected) {
      setCheckedItems(new Set(items.map((i) => i.key)))
    } else {
      setCheckedItems(new Set())
    }
  }, [])

  const onItemChecked = useCallback((key: ItemKey, isChecked: boolean) => {
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (isChecked) {
        next.add(key)
      } else {
        next.delete(key)
      }
      return next
    })
  }, [])

  const hasRowActions = items.some(
    (i: Item) => i.actions && isNotEmpty(i.actions),
  )

  const pageSize = 5
  const totalCount = items.length
  const paginatedItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <DesktopTableV2
      maxHeight={"240px"}
      {...args}
      actions={actions}
      checkable
      checkedItems={checkedItems}
      columnConfigs={columnConfigs}
      items={paginatedItems}
      title={"Table Title (Grid Version)"}
      helpText={"This table uses CSS Grid instead of table elements"}
      filterState={{ "Filter Multi Color": ["red", "blue"] }}
      hasRowActions={hasRowActions}
      pagination={{
        page: currentPage,
        pageSize: pageSize,
        totalCount: totalCount,
      }}
      onColumnSort={setSortState}
      onFiltersChange={onFiltersChange}
      onItemChecked={onItemChecked}
      onPageChange={setCurrentPage}
      onSelectAllToggle={onSelectAllToggle}
      showStickyBorder
      // showStickyShadow
      sortState={sortState}
    />
  )
}

const DummyLink: FC<any> = (props) => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a {...props} />
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}

// @ts-ignore
const items: Item[] = [
  {
    Color: "red",
    key: "red",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "blue",
    key: "blue",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "orange",
    key: "orange",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "yellow",
    key: "yellow",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "green",
    key: "green",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "purple",
    key: "purple",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "violet",
    key: "violet",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "magenta",
    key: "magenta",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "cyan",
    key: "cyan",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "black",
    key: "black",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "white",
    key: "white",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
  {
    Color: "grey",
    key: "grey",
    "Column 2": "Dsfadsafdsafd",
    "Column 3": "Dsafdsafdsa",
    "Column 4": "gfdhgsdgf",
    "Column 5": "ndhjskalfhdjakldhfjakldhfajklfhdjasklfhdsjklafhdsajkl",
    "Created At": "2021-01-01",
    Status: "pending",
  },
].map((item) => ({
  ...item,
  key: item.Color,
  actions: [
    {
      action: DO_NOTHING,
      itemProps: {
        danger: true,
        primary: false,
      },
      label: "Action 1",
    },
    { action: DO_NOTHING, label: "Action 2" },
  ] as ItemAction[],
}))

const columnConfigs: ColumnConfig[] = [
  {
    name: "Color",
    important: true,
    collapsible: false,
    filter: {
      fieldName: "filter_color",
      label: "Filter Color",
      options: items.map(({ Color }) => ({
        value: Color as string,
        label: Color as string,
      })),
      type: "select",
    },
    width: "100px",
  },
  {
    name: "Column 2",
    important: true,
    collapsible: false,
    filter: {
      fieldName: "filter_multi_color",
      label: "Filter Multi Color",
      options: items.map(({ Color }) => ({
        value: Color as string,
        label: Color as string,
      })),
      type: "multi-select",
    },
    sort: {
      fieldName: "filter_multi_color",
      label: "Color",
    },
    width: "150px",
  },
  {
    name: "Column 3",
    important: false,
    collapsible: false,
    filter: {
      fieldName: "searchable_filter_color",
      label: "Searchable Filter Color",
      options: items.map(({ Color }) => ({
        value: Color as string,
        label: Color as string,
      })),
      type: "searchable-select",
    },
    width: "150px",
  },
  {
    name: "Column 4",
    important: false,
    collapsible: false,
    width: "150px",
  },
  {
    css: `width: 500px;`,
    name: "Column 5",
    important: false,
    collapsible: false,
  },
  { name: "Created At", important: false, collapsible: false, width: "150px" },
  {
    css: css`
      width: 150px;
    `,
    name: "Status",
    important: false,
    collapsible: false,
    flexible: true, // This column will expand to fill available space
    filter: {
      fieldName: "filter_status",
      label: "Status Color",
      options: undefined,
      type: "text",
    },
  },
]
