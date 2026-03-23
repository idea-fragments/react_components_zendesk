import { FlexBox } from "components/layout/FlexBox"
import { MobileTableV2 } from "components/tables/MobileTableV2"
import {
  ColumnConfig,
  Item,
  ItemAction,
  ItemKey,
} from "components/tables/Table"
import { Text } from "components/text/Text"
import React, { useState } from "react"
import { Card } from "components/layout/Card"
import styled, { css } from "styled-components"
import { SPACINGS } from "styles/spacings"
import { FONT_SIZES, FONT_WEIGHTS } from "styles/typography"
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

const ListViewStory = () => {
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

  const listviewNodes = items.map(
    (item) =>
      ({ checkbox, onClick, overflowMenu }) =>
        (
          <Card onClick={onClick}>
            <FlexBox
              gap={SPACINGS.SM}
              withRows>
              <FlexBox
                alignItems={"center"}
                fluid
                gap={SPACINGS.SM}>
                {checkbox}
                <HeaderTitle fluid>
                  <Text
                    _css={css`
                      font-weight: ${FONT_WEIGHTS.BOLD};
                      font-size: ${FONT_SIZES.SM};
                    `}>
                    {item.Product}
                  </Text>
                </HeaderTitle>
                {overflowMenu}
              </FlexBox>

              <ListViewContent
                gap={SPACINGS.SM}
                withRows>
                <FlexBox
                  gap={SPACINGS.XS}
                  withRows>
                  <Text
                    _css={css`
                      font-size: ${FONT_SIZES.SM};
                      color: ${({ theme }) => theme.styles.colors.grey["600"]};
                    `}>
                    {item.Description}
                  </Text>
                  <FlexBox gap={SPACINGS.XS}>
                    <StatusBadge status={item.Status as string}>
                      {item.Status}
                    </StatusBadge>
                    <PriorityBadge priority={item.Priority as string}>
                      {item.Priority}
                    </PriorityBadge>
                  </FlexBox>
                </FlexBox>
                <FlexBox
                  gap={SPACINGS.XS}
                  justifyContent={"space-between"}>
                  <Text
                    _css={css`
                      font-size: ${FONT_SIZES.XS};
                      color: ${({ theme }) => theme.styles.colors.grey["500"]};
                    `}>
                    {item.Department}
                  </Text>
                  <Text
                    _css={css`
                      font-size: ${FONT_SIZES.XS};
                      color: ${({ theme }) => theme.styles.colors.grey["500"]};
                    `}>
                    {item.Date}
                  </Text>
                </FlexBox>
              </ListViewContent>
            </FlexBox>
          </Card>
        ),
  )

  return (
    <div style={{ maxWidth: "600px", padding: "1rem" }}>
      <MobileTableV2
        checkable
        checkedItems={checkedItems}
        columnConfigs={columnConfigs}
        hasRowActions
        items={items}
        mobileListview
        mobileListviewNodes={listviewNodes}
        onItemChecked={handleItemChecked}
        onSelectAllToggle={handleSelectAllToggle}
      />
    </div>
  )
}

export const ListView = ListViewStory.bind({})

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

const HeaderTitle = styled(FlexBox)`
  overflow: hidden;
  text-overflow: ellipsis;
`

const ListViewContent = styled(FlexBox)``

const StatusBadge = styled.div<{ status: string }>`
  background: ${({ status, theme }) => {
    if (status === "completed") return theme.styles.colors.green["100"]
    if (status === "in-progress") return theme.styles.colors.blue["100"]
    return theme.styles.colors.grey["200"]
  }};
  border-radius: 4px;
  color: ${({ status, theme }) => {
    if (status === "completed") return theme.styles.colors.green["700"]
    if (status === "in-progress") return theme.styles.colors.blue["700"]
    return theme.styles.colors.grey["700"]
  }};
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  padding: ${SPACINGS.XS} ${SPACINGS.SM};
  text-transform: capitalize;
`

const PriorityBadge = styled.div<{ priority: string }>`
  background: ${({ priority, theme }) => {
    if (priority === "High") return theme.styles.colors.red["100"]
    if (priority === "Medium") return theme.styles.colors.yellow["100"]
    return theme.styles.colors.grey["200"]
  }};
  border-radius: 4px;
  color: ${({ priority, theme }) => {
    if (priority === "High") return theme.styles.colors.red["700"]
    if (priority === "Medium") return theme.styles.colors.yellow["700"]
    return theme.styles.colors.grey["700"]
  }};
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  padding: ${SPACINGS.XS} ${SPACINGS.SM};
`
