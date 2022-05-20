import {
  AddItem,
  Autocomplete as ZenAutocomplete,
  Dropdown as ZenDropdown,
  Field,
  HeaderItem,
  Hint,
  Item as ZItem,
  Label as ZenLabel,
  Menu,
  Message,
  Multiselect as ZenMultiSelect,
  NextItem,
  PreviousItem,
  Select as ZenSelect,
  Trigger,
}                                                  from "@zendeskgarden/react-dropdowns"
import { IItemProps }                              from "@zendeskgarden/react-dropdowns/dist/typings/Menu/Items/Item"
import { VALIDATION }                              from "@zendeskgarden/react-dropdowns/dist/typings/styled/field/StyledMessage"
import { buttonLikeHoverable }                     from "components/forms/buttonMixins"
import {
  getItemType,
  Item
}                                                  from "components/forms/selectors/Dropdown/Item"
import type {
  MultiSelectorProps,
  SelectorItemKey,
  SelectorOption,
  SelectorProps,
  StateChange,
}                                                  from "components/forms/selectors/types"
import { VALIDATION_STATES }                       from "components/forms/validationStates"
import { Loadable }                                from "components/loaders/Loadable"
import { StateChangeOptions }                      from "downshift"
import { debounce }                                from "lodash"
import * as React                                  from "react"
import {
  ComponentType,
  FC, PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
}                                                  from "react"
import styled, { css, FlattenSimpleInterpolation } from "styled-components"
import { Theme }                                   from "styles/theme/Theme.type"
import { FONT_SIZES }                              from "styles/typography"
import {
  isEmpty,
  isNotEmpty
}                                                  from "utils/arrayHelpers"
import { DO_NOTHING }                              from "utils/functionHelpers"
import { Logger }                                  from "utils/logging/Logger"
import {
  isArray,
  isNumber,
  isString
}                                                  from "utils/typeCheckers"

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
  keyField?: string,
  valueField?: string,
}

type CommonProps = {
  async?: boolean,
  isOpen?:boolean,
  maxMenuHeight?: string,
  menuCSS?: string,
  menuItemComponent?: ComponentType<any>,
  placement?: MenuPlacement,
  returnItemOnChange?: boolean,
  shouldFilterOptions?: boolean,
  trigger?: ReactNode,
  useRawOptions?: boolean,
}

type SelectorsProps = (CommonProps & SelectorProps)
  | (CommonProps & MultiSelectorProps)

type Props =
  Omit<SelectorsProps, "keyField" | "valueField">
  & OptionalSelectorProps

const menuStyles = (extraStyles: string = "") => css`
  && { width: 100%; }

  &&, && * {
    font-size: inherit;
  }

  ${extraStyles}
`

const CLEAR_OPTION = {
  label:          "-- None --",
  value:          "_cleared",
  isClearingItem: true,
}

const logger = new Logger("Dropdown")

export let Dropdown: FC<PropsWithChildren<Props>> = (props) => {
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
          trigger,
          useRawOptions,
          validation,
          valueField,
          onChange,
          onStateChange,
        } = props

  const { selectedKey }  = props as SelectorProps
  const { selectedKeys } = props as MultiSelectorProps

  const filterFunc = useCallback((value: string) => {
    const searchText    = value.trim().toLowerCase()
    let matchingOptions = options

    if (searchText !== "") {
      matchingOptions = options.filter(option => {
        return (
          option[valueField!]
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
  const optionNodes = useRawOptions ? options as JSX.Element[] : createOptions(
    shouldFilterOptions ? filteredOptions : options,
    keyField!,
    valueField!,
    menuItemComponent,
    filteringOptions,
    clearable,
  )
  message           = validation?.message ?? message
  const messageNode = message
                      ?
                      <Message validation={validation!.validation as VALIDATION}>
                        {message}
                      </Message>
                      : null
  const hintNode    = hint ? <Hint>{hint}</Hint> : null
  const labelNode   = label ? <Label>{label}</Label> : null

  const handleChange = (item: SelectorOption | SelectorOption[]) => {
    logger.writeInfo("selection made", item)
    if ((item as SelectorOption).isClearingItem) {
      onChange!(null)
      return
    }

    if (isArray(item)) {
      handleMultiSelectChange(item as SelectorOption[])
      return
    }

    if (useRawOptions || returnItemOnChange) {
      // @ts-ignore
      onChange!(item)
      return
    }

    onChange!((item as SelectorOption)[keyField!])
  }

  const handleMultiSelectChange = (items: Array<SelectorItemKey | SelectorOption>) => {
    if (useRawOptions || returnItemOnChange) {
      const rawSet = new Set(items)
      // @ts-ignore
      onChange!([...rawSet])
      return
    }
    // When using the Dropdown with a MultiSelector, the dropdown
    // spits back the item keys its given and will append the SelectorOption
    // item to the end of the list. So we need to transform the last item
    // into the SelectorItemKey
    const changes = items.map((i: SelectorItemKey | SelectorOption) => {
      if (isNumber(i) || isString(i)) return i as SelectorItemKey
      return (i as SelectorOption)[keyField!] as SelectorItemKey
    })

    // @ts-ignore
    onChange!([...new Set(changes)])
  }

  const handleStateChange = (changes: StateChange) => {
    logger.writeInfo("state change", changes)
    const item = changes.selectedItem || {}

    onStateChange!({
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
        isOpen: item.isNextItem || item.isBackItem || changes.isOpen || false,
      })
      return
    }

    if (changes.hasOwnProperty("inputValue")) {
      setSearchFilter(changes.inputValue || "")
    }
  }

  const optionsLoaded = optionNodes && isNotEmpty(optionNodes)

  return (
    // @ts-ignore
    <ZenDropdown
      selectedItem={selectedKey}
      selectedItems={selectedKeys
                     ? [...new Set(selectedKeys)]
                     : undefined}
      isOpen={controlledState.isOpen}
      onSelect={handleChange}
      onStateChange={handleStateChange}
      downshiftProps={{ itemToString: (item: any) => item }}
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

      {controlledState.isOpen
       ? <Menu css={menuStyles(menuCSS)}
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
       : null}

    </ZenDropdown>
  )
}

// const getPopperModifiers = (fluid) => {
//   if (!fluid) return null
//   return {
//     computeStyle: {
//       fn: (data) => {
//         const { width, left, right } = data.offsets.reference
//
//         data.styles.width         = width
//         data.offsets.popper.width = width
//         data.offsets.popper.left  = left
//         data.offsets.popper.right = right
//
//         return data
//       },
//     },
//   }
// }

// @ts-ignore
Dropdown = styled(Dropdown)`
  &&, && * {
    font-size: inherit;
  }

  && {
    ${({ fluid }) => fluid ? "width: 100%;" : ""}
    ${Message as any} {
      font-size: ${FONT_SIZES.XS};
    }
  }
`

Dropdown.defaultProps = {
  async:              false,
  useRawOptions:      false,
  emptyState:         "Select One",
  returnItemOnChange: false,
  validation:         { validation: VALIDATION_STATES.NONE },
  // maxMenuHeight: "20rem",
  onChange:      DO_NOTHING,
  onStateChange: DO_NOTHING,
}

export const Autocomplete = ZenAutocomplete as ComponentType<any>
export const Select = ZenSelect as ComponentType<any>
export const MultiSelect = styled(ZenMultiSelect as ComponentType<any>)`
  && {
    div { max-width: 100%; }
  }
`

const Label = styled(ZenLabel)`
  && { color: ${(p) => p.theme.styles.textColorPrimary}; }
`

const createOptions = (
  options: SelectorOption[],
  key: string,
  value: string,
  menuItemComponent: ComponentType<any> | undefined,
  isFilteringOptions: boolean,
  isClearable: boolean = false,
) => {
  if (isFilteringOptions) return [<Item disabled>Loading items...</Item>]
  if (isEmpty(options)) return [<Item disabled>No matches found</Item>]

  const nodes = options.map((o) => {
    const ItemType  = getItemType(o)
    const Component = menuItemComponent

    return <ItemType key={o[key]}
                     value={o}
                     disabled={false}
                     danger={o.danger}>
      {Component ? <Component {...o} /> : o[value]}
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
