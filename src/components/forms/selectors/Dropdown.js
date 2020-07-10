// @flow

import { VALIDATION_STATES }           from "components/forms/validationStates"
import { Loadable }                    from "components/loaders/Loadable"
import { debounce }                    from "lodash"
import { useState, useEffect, useRef } from "react"
import * as React                      from "react"
import type {
    SelectorItemKey,
    SelectorOption,
    SelectorProps,
}                                      from "components/forms/selectors/types"
import styled, { css }                 from "styled-components"
import { FONT_SIZES }                  from "styles/typography"
import { isEmpty, isNotEmpty }         from "utils/arrayHelpers"
import { DO_NOTHING }                  from "utils/functionHelpers"
import {
    Field,
    Label,
    Hint,
    Item,
    NextItem,
    PreviousItem,
    Message,
    AddItem,
    Dropdown as ZenDropdown,
    Menu,
    Select as ZenSelect,
    Multiselect as ZenMultiSelect,
    Autocomplete as ZenAutocomplete,
    Trigger,
}                                      from "@zendeskgarden/react-dropdowns"

import type { StateChangeOptions }     from "@zendeskgarden/react-dropdowns"
import { isArray, isNumber, isString } from "utils/typeCheckers"

export type MenuPlacement =
    "start"
    | "auto"
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "end"
    | "end-top"
    | "end-bottom"
    | "start-top"
    | "start-bottom"

type Props = SelectorProps & {
    async :boolean,
    filterOption :boolean,
    maxMenuHeight? :string,
    menuCSS? :string,
    placement? :MenuPlacement,
    returnItemOnChange :boolean,
    trigger? :React.Node,
    useRawOptions :boolean,
}

const menuStyles = (extraStyles) => css`
  && { width: 100%; }
  &&, && * {
    font-size: inherit;
  }
  ${extraStyles}
`

export let Dropdown = (props :Props) => {
    const [
              state,
              setState,
          ]               = useState({ isOpen: false })
    const [
              filteringOptions,
              setFilteringOptionsTo,
          ]               = useState<boolean>(false)
    const [
              filteredOptions,
              setFilteredOptions,
          ]               = useState<SelectorOption[]>(props.options)
    const [
              searchFilter,
              setSearchFilter,
          ]               = useState<string>("")
    const controlledState = { ...state, ...props }

    const {
              label, options, keyField, valueField,
              hint, selectedKey, selectedKeys, onChange, children, onStateChange,
              useRawOptions, trigger, menuCSS, maxMenuHeight, returnItemOnChange,
              placement, async, fluid, validation, menuItemComponent,
              filterOptions,
          } = props

    const filterFunc = value => {
        const searchText    = value.trim().toLowerCase()
        let matchingOptions = options

        if (searchText !== "") {
            matchingOptions = options.filter(option => {
                return (
                    option[valueField]
                        .trim()
                        .toLowerCase()
                        .indexOf(value.trim().toLowerCase()) !== -1
                )
            })
        }

        setFilteredOptions(matchingOptions)
        setFilteringOptionsTo(false)
    }

    const filterMatchingOptionsRef = useRef(debounce(filterFunc, 300))

    useEffect(() => {
        if (!filterOptions) return
        filterMatchingOptionsRef.current = debounce(filterFunc, 300)
        setFilteredOptions(options)
        setSearchFilter("")
    }, [options])

    useEffect(() => {
        if (!filterOptions) return

        setFilteringOptionsTo(true)
        filterMatchingOptionsRef.current(searchFilter)
    }, [searchFilter, filterOptions])

    let { message }   = props
    const optionNodes = useRawOptions ? options : createOptions(
        filterOptions ? filteredOptions : options,
        keyField,
        valueField,
        menuItemComponent,
        filteringOptions,
    )
    message           = validation.message || message
    const messageNode = message
                        ? <Message validation={validation.validation}>
                            {message}
                        </Message>
                        : null
    const hintNode    = hint ? <Hint>{hint}</Hint> : null
    const labelNode   = label ? <Label>{label}</Label> : null

    const handleChange = (item :SelectorOption | SelectorOption[]) => {
        if (isArray(item)) {
            // $FlowFixMe
            handleMultiSelectChange(item)
            return
        }

        if (useRawOptions || returnItemOnChange) {
            onChange(item)
            return
        }

        onChange(item[keyField])
    }

    const handleMultiSelectChange = (items :Array<SelectorItemKey | SelectorOption>) => {
        if (useRawOptions || returnItemOnChange) {
            onChange([...new Set(items)])
            return
        }
        // When using the Dropdown with a MultiSelector, the dropdown
        // spits back the item keys its given and will append the SelectorOption
        // item to the end of the list. So we need to transform the last item
        // into the SelectorItemKey
        const changes = items.map((i :SelectorItemKey | SelectorOption) => {
            if (isNumber(i) || isString(i)) return i
            // $FlowFixMe
            return i[keyField]
        })

        onChange([...new Set(changes)])
    }

    const handleStateChange = (
        changes :StateChangeOptions,
        stateAndHelpers,
    ) => {
        onStateChange(changes)

        if (changes.hasOwnProperty("isOpen")) {
            if (useRawOptions) {
                setState({ ...state, ...changes })
                return
            }

            const item = changes.selectedItem || {}
            setState({
                ...state,
                isOpen: item.isNextItem || item.isBackItem || changes.isOpen,
            })
            return
        }

        if (changes.hasOwnProperty("inputValue")) {
            setSearchFilter(changes.inputValue || "")
        }
    }

    const optionsLoaded = optionNodes && isNotEmpty(optionNodes)

    return (
        <ZenDropdown
            selectedItem={selectedKey}
            selectedItems={selectedKeys
                           ? [...new Set(selectedKeys)]
                           : undefined}
            isOpen={controlledState.isOpen}
            onSelect={handleChange}
            onStateChange={handleStateChange}
            downshiftProps={{ itemToString: item => item }}
        >
            {
                trigger
                ? <Trigger>{trigger}</Trigger>
                : <Field className={props.className}>
                    {labelNode}
                    {hintNode}
                    {children}
                    {messageNode}
                </Field>
            }

            <Menu css={menuStyles(menuCSS)}
                  maxHeight={maxMenuHeight}
                  placement={placement}
                // popperModifiers={getPopperModifiers(fluid)}
            >
                {
                    async
                    ? <Loadable css={`flex-direction: column; min-height: 50px`}
                                showSpinner={controlledState.isOpen && !optionsLoaded}>
                        {optionNodes}
                    </Loadable>
                    : optionNodes
                }
            </Menu>
        </ZenDropdown>
    )
}

const getPopperModifiers = (fluid) => {
    if (!fluid) return null
    return {
        computeStyle: {
            fn: (data) => {
                const { width, left, right } = data.offsets.reference

                data.styles.width         = width
                data.offsets.popper.width = width
                data.offsets.popper.left  = left
                data.offsets.popper.right = right

                return data
            },
        },
    }
}

Dropdown = styled(Dropdown)`
  &&, && * {
    font-size: inherit;
  }
  && {
    ${({ fluid }) => fluid ? "width: 100%;" : ""}
    ${Message} {
      font-size: ${FONT_SIZES.XS};
    }
  }
`

// $FlowFixMe
Dropdown.defaultProps = {
    async             : false,
    useRawOptions     : false,
    emptyState        : "Select One",
    returnItemOnChange: false,
    validation        : { validation: VALIDATION_STATES.NONE },
    // maxMenuHeight: "20rem",
    onChange          : DO_NOTHING,
    onStateChange     : DO_NOTHING,
}

export const Autocomplete = ZenAutocomplete
export const Select       = ZenSelect
export const MultiSelect  = styled(ZenMultiSelect)`
  && {
    div { max-width: 100%; }
  }
`

const getItemType = (o) => {
    if (o.isNextItem) return NextItem
    if (o.isBackItem) return PreviousItem
    if (o.isAddItem) return AddItem
    return Item
}

const createOptions = (
    options, key, value, menuItemComponent, isFilteringOptions,
) => {
    if (isFilteringOptions) return <Item disabled>Loading items...</Item>
    if (isEmpty(options)) return <Item disabled>No matches found</Item>

    return options.map((o) => {
        const ItemType  = getItemType(o)
        const Component = menuItemComponent

        return <ItemType key={o[key]} value={o} disabled={o.disabled}>
            {menuItemComponent ? <Component {...o} /> : o[value]}
        </ItemType>
    })

}
