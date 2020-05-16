// @flow

import { Autocomplete, Dropdown }      from "components/forms/selectors/Dropdown"
import type { RefinedSelectorProps }   from "components/forms/selectors/types"
import { useState, useEffect, useRef } from "react"
import * as React                      from "react"
import styled                          from "styled-components"
import { DO_NOTHING }                  from "utils/functionHelpers"
import { COLORS, veryLight }           from "styles/colors"
import { FONT_WEIGHTS }                from "styles/typography"

/* optionsKeyMap prop is not needed here. SearchableSelector uses Zendesk's Autocomplete
* component which generates its own display value from options prop, unlike
* our Selector component, which relies on you passing in the display value as a
* child.
*
* SearchableSelector will take passed in options props and create required options
* prop for Autocomplete based on passed in keyField and valueField.
* */
type Props = {
    onSearchTextChange :?(string) => void,
} & RefinedSelectorProps

/*
* If we need this full width, maybe add a Block wrapper here
* */
export let SearchableSelector :React.ComponentType<Props> = (props :Props) => {
    const {
              emptyState, className, compact,
              selectedKey, keyField, valueField, onChange, options,
              optionsKeyMap, dropdownState, flat,
          } = props

    const [searchText, setSearchText]           = useState("")
    const [matchingOptions, setMatchingOptions] = useState(options)

    const filterOptions = useRef((value) => {
        const matchingOptions = options.filter(option => {
            return (
                option[valueField]
                    .trim()
                    .toLowerCase()
                    .indexOf(String(value).trim().toLowerCase()) !== -1
            )
        })

        setMatchingOptions(matchingOptions)
    })

    useEffect(() => {
        filterOptions.current(searchText)
    }, [searchText])

    const handleStateChange = (state) => {
        if (state.hasOwnProperty("inputValue")) {
            setSearchText(state.inputValue)
        }
    }

    if (!optionsKeyMap) return null
    return (
        <Dropdown {...props}
                  onStateChange={handleStateChange}
                  options={matchingOptions}>
            <Autocomplete>
                {selectedKey != null ? optionsKeyMap[selectedKey][valueField] : emptyState}
            </Autocomplete>
        </Dropdown>
        // {/*<Block compact={compact} className={className}>*/}
        // </Block>
    )
}

// $FlowFixMe
SearchableSelector.defaultProps = {
    onSearchTextChange: DO_NOTHING,
}

SearchableSelector = styled(SearchableSelector)`
  font-weight: ${({ flat } :Props) => flat ? FONT_WEIGHTS.BOLD : "inherit"};
  &&& * {
    ${({ flat } :Props) => flat ? "border: none;" : ""}
    cursor: ${({ flat } :Props) => flat ? "pointer !important" : "inherit"};
  }
  :hover > div {
    background: ${veryLight(COLORS.GREY)};
  }
`

// SearchableSelector = (observer(SearchableSelector))
