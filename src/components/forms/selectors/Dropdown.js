// @flow

import { buttonLikeHoverable }                      from "components/forms/buttonMixins"
import { VALIDATION_STATES }                        from "components/forms/validationStates"
import { Loadable }                                 from "components/loaders/Loadable"
import { debounce }                                 from "lodash"
import { useState, useEffect, useRef, useCallback } from "react"
import * as React                                   from "react"
import type {
    SelectorItemKey,
    SelectorOption,
    SelectorProps,
    StateChange,
}                                                   from "components/forms/selectors/types"
import styled, { css }                              from "styled-components"
import { FONT_SIZES }                               from "styles/typography"
import { isEmpty, isNotEmpty }                      from "utils/arrayHelpers"
import { DO_NOTHING }                               from "utils/functionHelpers"
import {
    Field,
    Label as ZenLabel,
    Hint,
    HeaderItem,
    Item as ZItem,
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
}                                                   from "@zendeskgarden/react-dropdowns"
import { Logger }                                   from "utils/logging/Logger"
import { isArray, isNumber, isString }              from "utils/typeCheckers"

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

type OptionalSelectorProps = {
    keyField? :string,
    valueField? :string,
}

type Props = $Diff<SelectorProps, OptionalSelectorProps> & {
    async :boolean,
    shouldFilterOptions? :boolean,
    maxMenuHeight? :string,
    menuCSS? :string,
    placement? :MenuPlacement,
    returnItemOnChange :boolean,
    trigger? :React.Node,
    useRawOptions :boolean,
} & OptionalSelectorProps

const menuStyles = (extraStyles) => css`
  && { width: 100%; }
  &&, && * {
    font-size: inherit;
  }
  ${extraStyles}
`

const Item = styled(ZItem).attrs(({ danger, theme }) => {
    if (!danger) return
    return { color: theme.styles.colorDanger, primary: true }
})`
  &&&& {
    ${({ danger }) => danger ? buttonLikeHoverable : ""}
  }
`

const CLEAR_OPTION = {
    label         : "-- None --",
    value         : "_cleared",
    isClearingItem: true,
}

const logger = new Logger("Dropdown")

export let Dropdown = (props :Props) => {
    const [state, setState]                         = useState({ isOpen: false })
    const controlledState                           = { ...state, ...props }
    const [filteringOptions, setFilteringOptionsTo] = useState<boolean>(false)
    const [searchFilter, setSearchFilter]           = useState<string>("")

    const [
              filteredOptions, setFilteredOptions,
          ] = useState<SelectorOption[]>(props.options)

    const {
              async,
              children,
              className,
              clearable,
              shouldFilterOptions,
              hint,
              keyField,
              label,
              maxMenuHeight,
              menuCSS,
              menuItemComponent,
              options,
              placement,
              returnItemOnChange,
              selectedKey,
              selectedKeys,
              trigger,
              useRawOptions,
              validation,
              valueField,
              onChange,
              onStateChange,
          } = props

    const filterFunc = useCallback(value => {
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
    }, [options, valueField])

    const filterMatchingOptionsRef = useRef(debounce(filterFunc, 300))

    useEffect(() => {
        if (!shouldFilterOptions) return
        filterMatchingOptionsRef.current = debounce(filterFunc, 300)
        setFilteredOptions(options)
        setSearchFilter("")
    }, [filterFunc, shouldFilterOptions, options])

    useEffect(() => {
        if (!shouldFilterOptions) return

        setFilteringOptionsTo(true)
        filterMatchingOptionsRef.current(searchFilter)
    }, [searchFilter, shouldFilterOptions])

    let { message }   = props
    const optionNodes = useRawOptions ? options : createOptions(
      shouldFilterOptions ? filteredOptions : options,
        keyField,
        valueField,
        menuItemComponent,
        filteringOptions,
        clearable,
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
        logger.writeInfo("selection made", item)
        if (item.isClearingItem) {
            onChange(null)
            return
        }

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

    const handleStateChange = (changes :StateChange) => {
        logger.writeInfo("state change", changes)
        const item = changes.selectedItem || {}

        onStateChange({
            ...changes,
            selectedItem: item.isClearingItem ? null : item,
        })

        if (changes.hasOwnProperty("isOpen")) {
            if (useRawOptions) {
                setState({ ...state, ...changes })
                return
            }

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
                : <Field className={className}>
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

// eslint-disable-next-line no-unused-vars
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
const Label               = styled(ZenLabel)`
  && { color: ${(p) => p.theme.styles.textColorPrimary}; }
`

const getItemType = (o) => {
    if (o.isNextItem) return NextItem
    if (o.isBackItem) return PreviousItem
    if (o.isAddItem) return AddItem
    if (o.isHeaderItem) return HeaderItem

    return Item
}

const createOptions = (
    options, key, value, menuItemComponent, isFilteringOptions, isClearable,
) => {
    if (isFilteringOptions) return <Item disabled>Loading items...</Item>
    if (isEmpty(options)) return <Item disabled>No matches found</Item>

    const nodes = options.map((o) => {
        const ItemType  = getItemType(o)
        const Component = menuItemComponent

        return <ItemType key={o[key]}
                         value={o}
                         disabled={o.disabled}
                         danger={o.danger}>
            {menuItemComponent ? <Component {...o} /> : o[value]}
        </ItemType>
    })

    if (isClearable) {
        nodes.unshift(
            <Item key={CLEAR_OPTION.value} value={CLEAR_OPTION}>
                {CLEAR_OPTION.label}
            </Item>,
        )
    }

    return nodes
}
