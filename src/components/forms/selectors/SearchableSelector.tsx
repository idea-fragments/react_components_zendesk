import { Autocomplete, Dropdown } from "components/forms/selectors/Dropdown"
import { SelectorEmptyState } from "components/forms/selectors/SelectorEmptyState"
import {
  OnItemSelectedFunc,
  SelectorItemKey,
  SelectorOption,
  SelectorProps,
  StateChange,
} from "components/forms/selectors/types"
import { SelectorOptionKeyMap } from "components/forms/utils/SelectorOptionKeyMap"
import React, { ReactNode, useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { FONT_WEIGHTS } from "styles/typography"
import { Logger } from "utils/logging/Logger"
import { isFunction } from "utils/typeCheckers"

const logger = new Logger("SearchableSelector")

/* optionsKeyMap prop is not needed here. SearchableSelector uses Zendesk's Autocomplete
 * component which generates its own display value from options prop, unlike
 * our Selector component, which relies on you passing in the display value as a
 * child.
 *
 * SearchableSelector will take passed in options props and create required options
 * prop for Autocomplete based on passed in keyField and labelField.
 * */
export type SearchableSelectorProps<T> = {
  children?: (o: SelectorOption<T>) => void | ReactNode
  dynamicSearching?: boolean
  onSearchTextChange?: (text: string) => Promise<void>
  skipResetOnSelection?: boolean
} & SelectorProps<T>

/*
 * If we need this full width, maybe add a Block wrapper here
 * */
export let SearchableSelector = <T,>({
  children,
  disabled,
  dynamicSearching,
  onSearchTextChange,
  onStateChange,
  skipResetOnSelection = false,
  ...props
}: SearchableSelectorProps<T>) => {
  const { emptyState, labelField, onChange, options, selectedKey, small } =
    props

  const optionsKeyMap = SelectorOptionKeyMap.call(props)
  const selectedOption = selectedKey ? optionsKeyMap[selectedKey] : null
  const [searchText, setSearchText] = useState("")
  const [matchingOptions, setMatchingOptions] = useState(options)

  // TODO See if we need to remove this filter function here
  //  and keep the filtering done in the Dropdown component
  // ...otherwise we need to Debounce this function
  const filterOptions = useCallback(
    (value: any) => {
      logger.writeInfo("filtering options containing")

      const matchingOptions = options.filter((option) => {
        return (
          (option[labelField] as string)
            .trim()
            .toLowerCase()
            .indexOf(String(value).trim().toLowerCase()) !== -1
        )
      })

      setMatchingOptions(matchingOptions)
    },
    [labelField, options],
  )

  const handleStateChange = (state: StateChange<T>) => {
    onStateChange?.(state)

    if (state.hasOwnProperty("inputValue")) {
      setSearchText(state.inputValue!)
      onSearchTextChange?.(state.inputValue!)
    }
  }

  const handleChange = useCallback(
    (k: SelectorItemKey | SelectorOption<T> | null | undefined) => {
      if (!skipResetOnSelection) setSearchText("")

      // @ts-ignore
      onChange?.(k)
    },
    [onChange, skipResetOnSelection],
  )

  useEffect(() => {
    if (dynamicSearching) return
    filterOptions(searchText)
  }, [dynamicSearching, filterOptions, searchText])

  useEffect(() => {
    if (dynamicSearching && !onSearchTextChange && !onStateChange)
      throw new Error(
        "SearchableSelector with dynamicSearching=true requires onSearchTextChange " +
          "or onStateChange prop to be passed in for handling search text changes.",
      )
  }, [dynamicSearching, onSearchTextChange, onStateChange])

  if (!dynamicSearching) {
    logger.writeInfo("matchingOptions", matchingOptions)
  }

  return (
    <Dropdown
      {...props}
      onChange={handleChange}
      onStateChange={handleStateChange}
      options={dynamicSearching ? options : matchingOptions}>
      <Autocomplete
        disabled={disabled}
        isCompact={small}>
        {selectedOption ? (
          isFunction(children) ? (
            (children as Function)(selectedOption)
          ) : (
            selectedOption[labelField]
          )
        ) : (
          <SelectorEmptyState>{emptyState}</SelectorEmptyState>
        )}
      </Autocomplete>
    </Dropdown>
  )
}

SearchableSelector = styled(SearchableSelector)`
  font-weight: ${({ flat }) => (flat ? FONT_WEIGHTS.BOLD : "inherit")};

  &&& * {
    ${({ flat }) => (flat ? "border: none;" : "")}
    cursor: ${({ flat }) => (flat ? "pointer !important" : "inherit")};
  }

  :hover > div {
    ${({ flat, theme }) =>
      flat ? `background: ${theme.styles.colors.grey["200"]};` : ""};
  }

  ${(props) => {
    if (props.small) {
      return `
      [data-garden-id="forms.faux_input"] {
        min-height: unset;
        min-width: unset;
      }
      `
    }
  }}
`
