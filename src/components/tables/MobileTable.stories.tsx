import { MobileTable } from "components/tables/MobileTable"
import {
  ColumnConfig,
  Item,
  ItemAction,
  ItemKey,
} from "components/tables/Table"
import React, { useState } from "react"
import { DO_NOTHING } from "utils/functionHelpers"

export default {
  title: "table/MobileTable",
  component: MobileTable,
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

  return (
    <div style={{ maxWidth: "480px", padding: "1rem" }}>
      <MobileTable
        checkable
        checkedItems={checkedItems}
        columnConfigs={columnConfigs}
        items={items}
        hasRowActions
        onItemChecked={handleItemChecked}
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
    Description: "Implement new authentication system with OAuth 2.0 support",
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
    Description:
      "Update UI components to match new design system specifications",
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
    Description: "Create landing page for Q2 product launch campaign",
    Date: "2024-03-10",
    Status: "completed",
    actions: [
      { action: DO_NOTHING, label: "Edit" },
      { action: DO_NOTHING, label: "Delete" },
    ] as ItemAction[],
  },
  {
    Color: "yellow",
    key: "4",
    Product: "Product Delta",
    Department: "Engineering",
    Priority: "Critical",
    Description: "Fix security vulnerability in payment processing module",
    Date: "2024-01-05",
    Status: "in-progress",
    actions: [
      { action: DO_NOTHING, label: "Edit" },
      { action: DO_NOTHING, label: "Delete" },
    ] as ItemAction[],
  },
  {
    Color: "purple",
    key: "5",
    Product: "Product Epsilon",
    Department: "Sales",
    Priority: "High",
    Description: "Prepare demo environment for enterprise client presentation",
    Date: "2024-04-01",
    Status: "pending",
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
    important: false,
    collapsible: true,
  },
  {
    name: "Description",
    important: false,
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
