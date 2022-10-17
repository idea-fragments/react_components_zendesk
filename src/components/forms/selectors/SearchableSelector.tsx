import { Autocomplete, Dropdown }                                 from "components/forms/selectors/Dropdown"
import {
  SelectorEmptyState
}                                                                 from "components/forms/selectors/SelectorEmptyState"
import {
  SelectorItemKey,
  SelectorOption,
  SelectorProps,
  StateChange,
}                                                                 from "components/forms/selectors/types"
import {
  SelectorOptionKeyMap
}                                                                 from "components/forms/utils/SelectorOptionKeyMap"
import React, { FC, ReactNode, useCallback, useEffect, useState } from "react"
import styled                                                     from "styled-components"
import { COLORS, veryLight }                                      from "styles/colors"
import { FONT_WEIGHTS }                                           from "styles/typography"
import { DO_NOTHING }                                             from "utils/functionHelpers"
import { Logger }                                                 from "utils/logging/Logger"
import { isFunction }                                             from "utils/typeCheckers"

const logger = new Logger("SearchableSelector")

/* optionsKeyMap prop is not needed here. SearchableSelector uses Zendesk's Autocomplete
 * component which generates its own display value from options prop, unlike
 * our Selector component, which relies on you passing in the display value as a
 * child.
 *
 * SearchableSelector will take passed in options props and create required options
 * prop for Autocomplete based on passed in keyField and labelField.
 * */
type Props = {
               children?: (o: SelectorOption) => void | ReactNode,
               onSearchTextChange?: (s: string) => void,
             } & SelectorProps

/*
 * If we need this full width, maybe add a Block wrapper here
 * */
export let SearchableSelector: FC<Props> = ({ children, disabled, ...props }) => {
  const {
          emptyState,
          labelField,
          onChange,
          options,
          selectedKey,
        } = props

  const optionsKeyMap                         = SelectorOptionKeyMap.call(props)
  const selectedOption                        = selectedKey ? optionsKeyMap[selectedKey] : null
  const [searchText, setSearchText]           = useState("")
  const [matchingOptions, setMatchingOptions] = useState(options)

  // TODO See if we need to remove this filter function here
  //  and keep the filtering done in the Dropdown component
  // ...otherwise we need to Debounce this function
  const filterOptions = useCallback((value: any) => {
    logger.writeInfo("filtering options containing")

    const matchingOptions = options.filter(option => {
      return (
        option[labelField]
          .trim()
          .toLowerCase()
          .indexOf(String(value).trim().toLowerCase()) !== -1
      )
    })

    setMatchingOptions(matchingOptions)
  }, [labelField, options])

  useEffect(() => {
    filterOptions(searchText)
  }, [filterOptions, searchText])

  const handleStateChange = (state: StateChange) => {
    if (state.hasOwnProperty("inputValue")) {
      setSearchText(state.inputValue!)
    }
  }

  const handleChange = (k: SelectorItemKey | (SelectorOption | null)) => {
    setSearchText("")
    if (onChange) {
      // @ts-ignore
      onChange(k)
    }
  }

  logger.writeInfo("matchingOptions", matchingOptions)

  return (
    <Dropdown {...props}
              onChange={handleChange}
              onStateChange={handleStateChange}
              options={matchingOptions}>
      <Autocomplete disabled={disabled}>
        {
          selectedOption
          ? isFunction(children)
            ? (children as Function)(selectedOption)
            : selectedOption[labelField]
          : <SelectorEmptyState>{emptyState}</SelectorEmptyState>
        }
      </Autocomplete>
    </Dropdown>
  )
}

SearchableSelector.defaultProps = {
  onSearchTextChange: DO_NOTHING,
}

SearchableSelector = styled(SearchableSelector)`
  font-weight: ${({ flat }: Props) => flat ? FONT_WEIGHTS.BOLD : "inherit"};

  &&& * {
    ${({ flat }: Props) => flat ? "border: none;" : ""}
    cursor: ${({ flat }: Props) => flat ? "pointer !important" : "inherit"};
  }

  :hover > div {
    ${({ flat }: Props) => flat
                           ? `background: ${veryLight(COLORS.GREY)};`
                           : ""};
  }
`
