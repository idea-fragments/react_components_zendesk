import { mdiTrashCanOutline } from "@mdi/js"
import { FlexBox } from "components/layout/FlexBox"
import { BUTTON_SIZES } from "components/forms/Button"
import {
  ColumnConfig,
  FinalizedTableProps,
  Item,
  ItemAction,
  ItemKey,
  SortState,
  Table,
  TableAction,
} from "components/tables/Table"
import React, { FC, useCallback, useMemo, useState } from "react"
import { css } from "styled-components"
import { DO_NOTHING } from "utils/functionHelpers"

export default {
  title: "table/Table",
  component: Table,
  argTypes: {},
}

const Story = (args: Partial<FinalizedTableProps>) => {
  const [checkedItems, setCheckedItems] = useState<Set<ItemKey>>(new Set())
  const [sortState, setSortState] = useState<SortState>({})
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const actions = useMemo((): TableAction[] => {
    return [
      {
        buttonProps: {
          compact: true,
          danger: true,
          icon: mdiTrashCanOutline,
          size: BUTTON_SIZES.SMALL,
        },
        dropdownItemProps: { danger: true },
        label: "Delete",
        notCompactable: true,
        onClick: DO_NOTHING,
      },
      {
        buttonProps: { neutral: true, size: BUTTON_SIZES.SMALL },
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
        // notCompactable: true,
        onClick: DO_NOTHING,
      },
    ]
  }, [])

  const onFiltersChange = useCallback((...args: any) => {
    console.log("onFiltersChange", ...args)
  }, [])

  const handlePageSizeChange = (newSize: number) => {
    setPageSize(newSize)
    setCurrentPage(1)
  }

  const handleItemChecked = useCallback((key: ItemKey, isChecked: boolean) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev)
      if (isChecked) {
        newSet.add(key)
      } else {
        newSet.delete(key)
      }
      return newSet
    })
  }, [])

  const totalCount = items.length
  const paginatedItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <Table
      {...args}
      actions={actions}
      checkable
      checkedItems={checkedItems}
      columnConfigs={columnConfigs}
      desktopTableProps={{
        showStickyShadow: false,
        showStickyBorder: true,
      }}
      filterState={{ "Filter Multi Color": ["red", "blue"] }}
      helpText={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
      items={paginatedItems}
      maxHeight={"240px"}
      mobileListviewNodes={listviewNodes}
      pagination={{
        page: currentPage,
        pageSize: pageSize,
        totalCount: totalCount,
      }}
      sortState={sortState}
      title={"Table Title"}
      onColumnSort={setSortState}
      onFiltersChange={onFiltersChange}
      onItemChecked={handleItemChecked}
      onItemsChecked={setCheckedItems}
      onPageChange={setCurrentPage}
      onPageSizeChange={handlePageSizeChange}
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

export const WithDropdownFilters = Story.bind({})
// @ts-ignore
WithDropdownFilters.args = {
  useDropdownFilters: true,
}

// @ts-ignore
const items: Item[] = [
  {
    Color: "red",
    key: "1",
    "Column 2": "Product Alpha",
    "Column 3": "Engineering",
    "Column 4": "High Priority",
    "Column 5": "Implement new authentication system with OAuth 2.0 support",
    "Created At": "2024-01-15",
    Status: "pending",
  },
  {
    Color: "blue",
    key: "2",
    "Column 2": "Product Beta",
    "Column 3": "Design",
    "Column 4": "Medium",
    "Column 5":
      "Update UI components to match new design system specifications",
    "Created At": "2024-02-20",
    Status: "in-progress",
  },
  {
    Color: "orange",
    key: "3",
    "Column 2": "Product Gamma",
    "Column 3": "Marketing",
    "Column 4": "Low Priority",
    "Column 5": "Create landing page for Q2 product launch campaign",
    "Created At": "2024-03-10",
    Status: "completed",
  },
  {
    Color: "yellow",
    key: "4",
    "Column 2": "Product Delta",
    "Column 3": "Engineering",
    "Column 4": "Critical",
    "Column 5": "Fix security vulnerability in payment processing module",
    "Created At": "2024-01-05",
    Status: "in-progress",
  },
  {
    Color: "green",
    key: "5",
    "Column 2": "Product Epsilon",
    "Column 3": "Sales",
    "Column 4": "High Priority",
    "Column 5": "Prepare demo environment for enterprise client presentation",
    "Created At": "2024-04-01",
    Status: "pending",
  },
  {
    Color: "purple",
    key: "6",
    "Column 2": "Product Zeta",
    "Column 3": "Engineering",
    "Column 4": "Medium",
    "Column 5": "Migrate legacy database to new cloud infrastructure platform",
    "Created At": "2024-02-14",
    Status: "completed",
  },
  {
    Color: "violet",
    key: "7",
    "Column 2": "Product Eta",
    "Column 3": "Product",
    "Column 4": "High Priority",
    "Column 5": "Conduct user research interviews for mobile app redesign",
    "Created At": "2024-03-22",
    Status: "in-progress",
  },
  {
    Color: "magenta",
    key: "8",
    "Column 2": "Product Theta",
    "Column 3": "Engineering",
    "Column 4": "Low Priority",
    "Column 5":
      "Refactor analytics tracking code to improve performance metrics",
    "Created At": "2024-01-30",
    Status: "pending",
  },
  {
    Color: "cyan",
    key: "9",
    "Column 2": "Product Iota",
    "Column 3": "Design",
    "Column 4": "Critical",
    "Column 5": "Design emergency response workflow for customer support team",
    "Created At": "2024-04-05",
    Status: "in-progress",
  },
  {
    Color: "black",
    key: "10",
    "Column 2": "Product Kappa",
    "Column 3": "Operations",
    "Column 4": "Medium",
    "Column 5":
      "Automate deployment pipeline with continuous integration system",
    "Created At": "2024-02-28",
    Status: "completed",
  },
  {
    Color: "white",
    key: "11",
    "Column 2": "Product Lambda",
    "Column 3": "Engineering",
    "Column 4": "High Priority",
    "Column 5": "Develop API endpoints for third-party integration platform",
    "Created At": "2024-03-18",
    Status: "pending",
  },
  {
    Color: "grey",
    key: "12",
    "Column 2": "Product Mu",
    "Column 3": "Marketing",
    "Column 4": "Low Priority",
    "Column 5": "Write technical blog post about new feature release schedule",
    "Created At": "2024-04-12",
    Status: "pending",
  },
].map((item) => ({
  ...item,
  actions: [
    { action: DO_NOTHING, label: "Edit" },
    { action: DO_NOTHING, label: "Delete" },
  ] as ItemAction[],
}))

// @ts-ignore

const listviewNodes = items.map(({ Color, Status }, index: number) => {
  return (
    <FlexBox
      withRows
      key={index}>
      <div>{Color}</div>
      <div>{Status}</div>
    </FlexBox>
  )
})

const columnConfigs: ColumnConfig[] = [
  {
    collapsible: false,
    filter: {
      fieldName: "filter_color",
      label: "Filter Color",
      options: items.map(({ Color }) => ({
        label: Color as string,
        value: Color as string,
      })),
      type: "select",
    },
    important: true,
    name: "Color",
    width: "100px",
  },
  {
    collapsible: false,
    filter: {
      fieldName: "filter_multi_color",
      label: "Filter Multi Color",
      options: items.map(({ Color }) => ({
        label: Color as string,
        value: Color as string,
      })),
      type: "multi-select",
    },
    important: true,
    name: "Column 2",
    sort: {
      fieldName: "filter_multi_color",
      label: "Color",
    },
    width: "150px",
  },
  {
    collapsible: false,
    filter: {
      fieldName: "searchable_filter_color",
      label: "Searchable Filter Color",
      options: items.map(({ Color }) => ({
        label: Color as string,
        value: Color as string,
      })),
      type: "searchable-select",
    },
    important: false,
    name: "Column 3",
    width: "150px",
  },
  {
    collapsible: true,
    important: false,
    name: "Column 4",
    width: "150px",
  },
  {
    collapsible: true,
    css: `width: 500px;`,
    important: false,
    name: "Column 5",
  },
  {
    collapsible: true,
    important: false,
    name: "Created At",
    width: "150px",
  },
  {
    collapsible: true,
    css: css`
      width: 150px;
    `,
    filter: {
      fieldName: "filter_status",
      label: "Status Color",
      options: undefined,
      type: "text",
    },
    flexible: true,
    important: false,
    name: "Status",
  },
]
