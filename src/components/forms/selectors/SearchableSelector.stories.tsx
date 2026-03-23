import { SearchableSelector } from "components/forms/selectors/SearchableSelector"
import {
  SelectorItemKey,
  SelectorOption,
  SelectorProps,
} from "components/forms/selectors/types"
import { ArrayToSelectorOptionsConverter } from "components/forms/utils/ArrayToSelectorOptionsConverter"
import { FlexBox } from "components/layout/FlexBox"
import React, { useCallback, useEffect, useState } from "react"
import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  component: SearchableSelector,
  title: "forms/SearchableSelector",
}

const OPTIONS = ["AYE", "BE", "SEE"]

const Story = (args: SelectorProps) => {
  const [option, setOption] = useState<SelectorItemKey>()
  return (
    <SearchableSelector
      {...args}
      emptyState={"Select Option"}
      keyField={"key"}
      labelField={"label"}
      onChange={setOption}
      options={ArrayToSelectorOptionsConverter.call(OPTIONS).concat([
        {
          disabled: true,
          key: "33",
          label: "three three",
        },
      ])}
      selectedKey={option}
    />
  )
}

// Simulated database of users for dynamic search
const MOCK_USER_DATABASE = [
  {
    id: "1",
    name: "Alice Anderson",
    email: "alice@example.com",
    department: "Engineering",
  },
  {
    id: "2",
    name: "Bob Brown",
    email: "bob@example.com",
    department: "Marketing",
  },
  {
    id: "3",
    name: "Charlie Chen",
    email: "charlie@example.com",
    department: "Sales",
  },
  {
    id: "4",
    name: "Diana Davis",
    email: "diana@example.com",
    department: "Engineering",
  },
  {
    id: "5",
    name: "Edward Evans",
    email: "edward@example.com",
    department: "HR",
  },
  {
    id: "6",
    name: "Fiona Foster",
    email: "fiona@example.com",
    department: "Finance",
  },
  {
    id: "7",
    name: "George Green",
    email: "george@example.com",
    department: "Engineering",
  },
  {
    id: "8",
    name: "Hannah Hill",
    email: "hannah@example.com",
    department: "Marketing",
  },
  {
    id: "9",
    name: "Ian Irving",
    email: "ian@example.com",
    department: "Sales",
  },
  {
    id: "10",
    name: "Julia Jones",
    email: "julia@example.com",
    department: "Engineering",
  },
  {
    id: "11",
    name: "Kevin King",
    email: "kevin@example.com",
    department: "HR",
  },
  {
    id: "12",
    name: "Laura Lee",
    email: "laura@example.com",
    department: "Finance",
  },
  {
    id: "13",
    name: "Michael Miller",
    email: "michael@example.com",
    department: "Engineering",
  },
  {
    id: "14",
    name: "Nancy Nelson",
    email: "nancy@example.com",
    department: "Marketing",
  },
  {
    id: "15",
    name: "Oliver Owen",
    email: "oliver@example.com",
    department: "Sales",
  },
]

const DynamicSearchStory = () => {
  const [selectedUserId, setSelectedUserId] = useState<SelectorItemKey>()
  const [options, setOptions] = useState<SelectorOption[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Simulate API call with delay
  const simulateApiSearch = useCallback(
    async (query: string): Promise<SelectorOption[]> => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 300))

      const lowerQuery = query.toLowerCase()
      const filtered = MOCK_USER_DATABASE.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerQuery) ||
          user.email.toLowerCase().includes(lowerQuery) ||
          user.department.toLowerCase().includes(lowerQuery),
      )

      return filtered.slice(0, 8).map((user) => ({
        department: user.department,
        email: user.email,
        key: user.id,
        label: `${user.name} - ${user.department}`,
      }))
    },
    [],
  )

  // Update options when component mounts or search term changes
  useEffect(() => {
    const loadOptions = async () => {
      setIsLoading(true)
      try {
        const results = await simulateApiSearch(searchTerm)
        setOptions(results)
      } finally {
        setIsLoading(false)
      }
    }

    // Debounce the search
    const timeoutId = setTimeout(loadOptions, 200)
    return () => clearTimeout(timeoutId)
  }, [searchTerm, simulateApiSearch])

  // Custom render function for options
  const renderOption = useCallback(
    (option: SelectorOption) => (
      <FlexBox
        gap={SPACINGS.XS}
        withRows>
        <strong>{option.label}</strong>
        <small style={{ color: "#888" }}>{option.email}</small>
      </FlexBox>
    ),
    [],
  )

  return (
    <FlexBox
      gap={SPACINGS.LG}
      withRows>
      <h3>Dynamic User Search</h3>
      <p>
        Type to search users by name, email, or department. Options update
        dynamically as you type.
      </p>

      <SearchableSelector
        emptyState={isLoading ? "Loading..." : "Search for a user"}
        keyField="key"
        labelField="label"
        onChange={setSelectedUserId}
        onStateChange={(state) => {
          if (state.inputValue !== undefined) {
            setSearchTerm(state.inputValue)
          }
        }}
        options={options}
        selectedKey={selectedUserId}
        validation={isLoading ? "WARNING" : undefined}>
        {renderOption}
      </SearchableSelector>

      {selectedUserId && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "4px",
          }}>
          <strong>Selected User ID:</strong> {selectedUserId}
          <br />
          <strong>User Details:</strong>{" "}
          {options.find((o) => o.key === selectedUserId)?.label}
        </div>
      )}
    </FlexBox>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}

export const DynamicSearch = DynamicSearchStory.bind({})
// @ts-ignore
DynamicSearch.args = {}
