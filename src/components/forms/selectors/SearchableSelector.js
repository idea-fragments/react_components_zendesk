// @flow

import { Autocomplete, Dropdown }      from "components/forms/selectors/Dropdown"
import type {
    SelectorOption,
    SelectorProps,
} from "components/forms/selectors/types"
import { useState, useEffect, useRef } from "react"
import * as React                      from "react"
import styled                          from "styled-components"
import { DO_NOTHING }                  from "utils/functionHelpers"
import { COLORS, veryLight } from "styles/colors"
import { FONT_WEIGHTS }      from "styles/typography"
import { isFunction }        from "utils/typeCheckers"

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
} & SelectorProps

/*
 * If we need this full width, maybe add a Block wrapper here
 * */
export let SearchableSelector = ({ children, ...props } :Props) => {
    const {
              emptyState,
              keyField,
              options,
              selectedKey,
              valueField,
          } = props
    let { optionsKeyMap } = props

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

    if (optionsKeyMap == null && options != null) {
        optionsKeyMap = options.reduce(
            (m :{ [string] :SelectorOption }, o :SelectorOption) => {
                m[o[keyField]] = o
                return m
            }, {},
        )
    }

    if (!optionsKeyMap) return null
    return (
        <Dropdown {...props}
                  onStateChange={handleStateChange}
                  options={matchingOptions}>
            <Autocomplete>
                {
                    !!selectedKey
                    ? isFunction(children)
                      ? children(optionsKeyMap[selectedKey])
                      : optionsKeyMap[selectedKey][valueField]
                    : emptyState
                }
            </Autocomplete>
        </Dropdown>
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
    ${({ flat } :Props) => flat ? `background: ${veryLight(COLORS.GREY)};` : ""};
  }
`
