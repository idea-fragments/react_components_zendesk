import { MobileTableV2 } from "components/tables/MobileTableV2"
import {
  ColumnConfig,
  Item,
  ItemAction,
  ItemKey,
} from "components/tables/Table"
import React, { useState } from "react"
import { DO_NOTHING } from "utils/functionHelpers"

export default {
  title: "table/MobileTableV2",
  component: MobileTableV2,
  argTypes: {},
}

const Story = () => {
  const [checkedItems, setCheckedItems] = useState<Set<ItemKey>>(new Set())

  const handleItemChecked = (key: ItemKey, isChecked: boolean) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev)
      if (isChecked) {
        newSet.add(key)
      } else {
        newSet.delete(key)
      }
      return newSet
    })
  }

  const handleSelectAllToggle = (isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems(new Set(items.map((item) => item.key)))
    } else {
      setCheckedItems(new Set())
    }
  }

  return (
    <div style={{ maxWidth: "600px", padding: "1rem" }}>
      <MobileTableV2
        checkable
        checkedItems={checkedItems}
        columnConfigs={columnConfigs}
        hasRowActions
        items={items}
        onItemChecked={handleItemChecked}
        onSelectAllToggle={handleSelectAllToggle}
      />
    </div>
  )
}

export const Default = Story.bind({})

const items: Item[] = [
  {
    Color: "red",
    key: "1",
    Product: "Product Alpha",
    Department: "Engineering",
    Priority: "High",
    Description: "Implement new authentication system",
    Date: "2024-01-15",
    Status: "pending",
    actions: [
      { action: DO_NOTHING, label: "Edit" },
      { action: DO_NOTHING, label: "Delete" },
    ] as ItemAction[],
  },
  {
    Color: "blue",
    key: "2",
    Product: "Product Beta",
    Department: "Design",
    Priority: "Medium",
    Description: "Update UI components",
    Date: "2024-02-20",
    Status: "in-progress",
    actions: [
      { action: DO_NOTHING, label: "Edit" },
      { action: DO_NOTHING, label: "Delete" },
    ] as ItemAction[],
  },
  {
    Color: "green",
    key: "3",
    Product: "Product Gamma",
    Department: "Marketing",
    Priority: "Low",
    Description: "Create landing page",
    Date: "2024-03-10",
    Status: "completed",
    actions: [
      { action: DO_NOTHING, label: "Edit" },
      { action: DO_NOTHING, label: "Delete" },
    ] as ItemAction[],
  },
]

const columnConfigs: ColumnConfig[] = [
  {
    name: "Product",
    important: true,
    collapsible: false,
  },
  {
    name: "Department",
    important: true,
    collapsible: false,
  },
  {
    name: "Priority",
    important: true,
    collapsible: false,
  },
  {
    name: "Description",
    important: true,
    collapsible: true,
  },
  {
    name: "Date",
    important: false,
    collapsible: true,
  },
  {
    name: "Status",
    important: false,
    collapsible: true,
  },
]
