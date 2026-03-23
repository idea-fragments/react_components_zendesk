import { MultiSelector } from "components/forms/selectors/MultiSelector"
import {
  SelectorItemKey,
  SelectorOption,
  SelectorProps,
} from "components/forms/selectors/types"
import { FlexBox } from "components/layout/FlexBox"
import React, { useCallback, useEffect, useState } from "react"
import { SPACINGS } from "styles/spacings"

export default {
  argTypes: {},
  component: MultiSelector,
  title: "forms/MultiSelector",
}

const OPTIONS = ["AYE", "BE", "SEE"]

const Story = (args: SelectorProps) => {
  const [options, setOptions] = useState<SelectorItemKey[]>([])
  return (
    <MultiSelector
      {...args}
      emptyState={"Select Option"}
      keyField={"value"}
      labelField={"label"}
      onChange={setOptions}
      options={OPTIONS.map((o) => ({ label: o, value: o }))}
      selectedKeys={options}
    />
  )
}

// List 1: Programming languages (triggered by "abc")
const PROGRAMMING_LANGUAGES: SelectorOption[] = [
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "Python", value: "py" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
  { label: "C#", value: "cs" },
  { label: "Ruby", value: "rb" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rust" },
  { label: "Swift", value: "swift" },
  { label: "Kotlin", value: "kotlin" },
  { label: "PHP", value: "php" },
  { label: "Scala", value: "scala" },
  { label: "Elixir", value: "elixir" },
  { label: "Haskell", value: "hs" },
]

// List 2: Country codes (triggered by "123")
const COUNTRY_CODES: SelectorOption[] = [
  { label: "United States (+1)", value: "us_1" },
  { label: "Canada (+1)", value: "ca_1" },
  { label: "United Kingdom (+44)", value: "uk_44" },
  { label: "France (+33)", value: "fr_33" },
  { label: "Germany (+49)", value: "de_49" },
  { label: "Italy (+39)", value: "it_39" },
  { label: "Spain (+34)", value: "es_34" },
  { label: "Japan (+81)", value: "jp_81" },
  { label: "China (+86)", value: "cn_86" },
  { label: "India (+91)", value: "in_91" },
  { label: "Brazil (+55)", value: "br_55" },
  { label: "Mexico (+52)", value: "mx_52" },
  { label: "Australia (+61)", value: "au_61" },
  { label: "South Korea (+82)", value: "kr_82" },
  { label: "Russia (+7)", value: "ru_7" },
]

const DynamicListStory = () => {
  const [selectedKeys, setSelectedKeys] = useState<SelectorItemKey[]>([])
  const [options, setOptions] = useState<SelectorOption[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [listType, setListType] = useState<"none" | "languages" | "countries">(
    "none",
  )

  // Simulate API call based on search term
  const loadOptions = useCallback(async (query: string) => {
    setIsLoading(true)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    let newOptions: SelectorOption[] = []
    let newListType: "none" | "languages" | "countries" = "none"

    // Check if search term contains "abc" or "123"
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("abc")) {
      // Load programming languages
      newOptions = PROGRAMMING_LANGUAGES
      newListType = "languages"
    } else if (lowerQuery.includes("123")) {
      // Load country codes
      newOptions = COUNTRY_CODES
      newListType = "countries"
    } else {
      // Default empty or show instructions
      newOptions = []
      newListType = "none"
    }

    setOptions(newOptions)
    setListType(newListType)
    setIsLoading(false)
  }, [])

  // Watch for input changes via onStateChange
  const handleStateChange = useCallback((state: any) => {
    if (state.inputValue !== undefined) {
      setSearchTerm(state.inputValue)
    }
  }, [])

  // Update options when search term changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadOptions(searchTerm)
    }, 200) // Debounce

    return () => clearTimeout(timeoutId)
  }, [searchTerm, loadOptions])

  // Clear selections when switching lists
  useEffect(() => {
    if (listType !== "none") {
      // Clear selections when switching between lists
      const currentListValues = options.map((o) => o.value)
      const validSelections = selectedKeys.filter((key) =>
        currentListValues.includes(key as string),
      )
      if (validSelections.length !== selectedKeys.length) {
        setSelectedKeys(validSelections)
      }
    }
  }, [listType, options, selectedKeys])

  const getEmptyStateMessage = () => {
    if (isLoading) return "Loading..."
    if (searchTerm === "")
      return "Type 'abc' for languages or '123' for countries"
    if (listType === "none")
      return "Type 'abc' for programming languages or '123' for country codes"
    if (listType === "languages") return "Select programming languages"
    if (listType === "countries") return "Select countries"
    return "Select options"
  }

  const getListDescription = () => {
    if (listType === "languages") {
      return "Programming Languages - Type 'abc' to load this list"
    }
    if (listType === "countries") {
      return "Country Codes - Type '123' to load this list"
    }
    return "Type 'abc' for programming languages or '123' for country codes"
  }

  return (
    <FlexBox
      gap={SPACINGS.LG}
      withRows>
      <h3>Dynamic Multi-Select with List Switching</h3>
      <p>{getListDescription()}</p>

      <MultiSelector
        emptyState={getEmptyStateMessage()}
        keyField="value"
        labelField="label"
        onChange={setSelectedKeys}
        onStateChange={handleStateChange}
        options={options}
        selectedKeys={selectedKeys}
        validation={isLoading ? { validation: "WARNING" } : undefined}
      />

      {selectedKeys.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: listType === "languages" ? "#e3f2fd" : "#fff3e0",
            borderRadius: "4px",
            border: `1px solid ${
              listType === "languages" ? "#90caf9" : "#ffcc80"
            }`,
          }}>
          <strong>
            Selected {listType === "languages" ? "Languages" : "Countries"}:
          </strong>
          <ul style={{ marginTop: "10px", marginBottom: 0 }}>
            {selectedKeys.map((key) => {
              const option = options.find((o) => o.value === key)
              return option ? <li key={key}>{option.label}</li> : null
            })}
          </ul>
        </div>
      )}

      {searchTerm && listType === "none" && !isLoading && (
        <div
          style={{
            padding: "10px",
            background: "#fff9c4",
            borderRadius: "4px",
            border: "1px solid #f9a825",
          }}>
          💡 <strong>Tip:</strong> Include "abc" in your search to see
          programming languages, or "123" to see country codes.
        </div>
      )}
    </FlexBox>
  )
}

export const Default = Story.bind({})
// @ts-ignore
Default.args = {}

export const DynamicListSwitching = DynamicListStory.bind({})
// @ts-ignore
DynamicListSwitching.args = {}
