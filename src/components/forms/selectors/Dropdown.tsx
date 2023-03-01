import {
  Autocomplete as ZenAutocomplete,
  Dropdown as ZenDropdown,
  Field,
  Hint,
  Label as ZenLabel,
  Menu,
  Message as ZenMessage,
  Multiselect as ZenMultiSelect,
  Select as ZenSelect,
  Trigger,
}                            from "@zendeskgarden/react-dropdowns"
import {
  getItemType,
  Item
}                            from "components/forms/selectors/Dropdown/Item"
import {
  MultiSelectorProps,
  OnItemSelectedFunc,
  SelectorItemKey,
  SelectorOption,
  SelectorProps,
  StateChange,
}                            from "components/forms/selectors/types"
import { VALIDATION_STATES } from "components/forms/validationStates"
import { Loadable }          from "components/loaders/Loadable"
import { debounce }          from "lodash"
import React, {
  ComponentType,
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
}                            from "react"
import styled, {
  FlattenInterpolation,
  ThemeProps
}                            from "styled-components"
import { CSS }               from "styles/types"
import { FONT_SIZES }        from "styles/typography"
import {
  isEmpty,
  isNotEmpty
}                            from "utils/arrayHelpers"
import { DO_NOTHING }        from "utils/functionHelpers"
import { Logger }            from "utils/logging/Logger"
import {
  isArray,
  isNumber,
  isString
}                            from "utils/typeCheckers"

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
  labelField?: string,
}

type CommonProps = {
  _css?: CSS,
  appendMenuToNode?: HTMLElement,
  async?: boolean,
  isOpen?: boolean,
  maxMenuHeight?: string,
  menuCSS?: string | FlattenInterpolation<ThemeProps<any>>,
  menuItemComponent?: ComponentType<any>,
  placement?: MenuPlacement,
  returnItemOnChange?: boolean,
  shouldFilterOptions?: boolean,
  small?: boolean,
  trigger?: ReactNode,
  useRawOptions?: boolean,
}

type SelectorsProps = (CommonProps & SelectorProps)
                      | (CommonProps & MultiSelectorProps)

type Props =
  Omit<SelectorsProps, "keyField" | "labelField">
  & OptionalSelectorProps

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
          appendMenuToNode,
          async,
          children,
          className,
          clearable,
          shouldFilterOptions,
          hint,
          keyField,
          label,
          labelField,
          maxMenuHeight,
          menuCSS,
          menuItemComponent,
          menuPopperModifiers,
          options,
          placement,
          returnItemOnChange,
          small,
          trigger,
          useRawOptions,
          validation,
          onChange,
          onStateChange,
        } = props

  const { selectedKey }  = props as SelectorProps
  const { selectedKeys } = props as MultiSelectorProps

  // TODO see if this function needs to be removed if we're also filtering
  // in the SearchableSelector component
  const filterFunc = useCallback((value: string) => {
    const searchText    = value.trim().toLowerCase()
    let matchingOptions = options

    if (searchText !== "") {
      matchingOptions = options.filter(option => {
        return (
          option[labelField!]
            .trim()
            .toLowerCase()
            .indexOf(value.trim().toLowerCase()) !== -1
        )
      })
    }

    setFilteredOptions(matchingOptions)
    setFilteringOptionsTo(false)
  }, [options, labelField])

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
    labelField!,
    menuItemComponent,
    filteringOptions,
    clearable,
  )
  message           = validation?.message ?? message
  const messageNode = message
                      ?
                      <Message validation={validation!.validation}>
                        {message}
                      </Message>
                      : null
  const hintNode    = hint ? <Hint>{hint}</Hint> : null
  const labelNode   = label ? <Label>{label}</Label> : null

  const handleChange = (item: SelectorOption | SelectorOption[] | SelectorItemKey) => {
    logger.writeInfo("selection made", item)
    setSearchFilter("")

    if ((item as SelectorOption)?.isClearingItem) {
      (onChange as OnItemSelectedFunc)!(null)
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


    if (!item || isString(item) || isNumber(item)) {
      logger.writeInfo("Received SelectorItemKey from downshift")
      // @ts-ignore
      onChange!(item as SelectorItemKey)
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
      inputValue:   searchFilter,
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

    // if (changes.hasOwnProperty("inputValue")) {
    //   setSearchFilter(changes.inputValue || "")
    // }
  }

  const optionsLoaded = optionNodes && isNotEmpty(optionNodes)

  return (
    // @ts-ignore
    <ZenDropdown
      inputValue={searchFilter}
      selectedItem={selectedKey}
      selectedItems={selectedKeys
                     ? [...new Set(selectedKeys)]
                     : undefined}
      isOpen={controlledState.isOpen}
      onInputValueChange={(val) => {
        logger.writeInfo("Input value change", val)
        setSearchFilter(val)
      }}
      onSelect={handleChange}
      onStateChange={handleStateChange}
      downshiftProps={{
        itemToString: (item: any) => {
          if (keyField && item && item.hasOwnProperty(keyField)) {
            return (item as SelectorOption)[keyField]
          }

          return item
        }
      }}
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
       ? (
         // @ts-ignore
         <StyledMenu _css={menuCSS ?? ""}
                     appendToNode={appendMenuToNode}
                     isCompact={small}
                     maxHeight={maxMenuHeight}
                     placement={placement}
                     popperModifiers={menuPopperModifiers}
         >
           {
             async
             ? <StyledLoadable showSpinner={controlledState.isOpen && !optionsLoaded}>
               {optionNodes}
             </StyledLoadable>
             : optionNodes
           }
         </StyledMenu>
       )
       : null}

    </ZenDropdown>
  )
}

// @ts-ignore
Dropdown = styled(Dropdown)`
  &&, && * {
    font-size: inherit;
  }

  && {
    ${({ fluid }) => fluid ? "width: 100%;" : ""}
  }

  ${({ _css }) => _css}
`

const Message = styled(ZenMessage)`
  && {
    font-size: ${FONT_SIZES.XS};
  }
`

const StyledMenu = styled(Menu)`
  && { width: 100%; }

  &&, && * {
    font-size: inherit;
  }

  ${({ _css }: { _css: string }) => _css}
`

const StyledLoadable = styled(Loadable)`
  flex-direction: column;
  min-height: 50px;
`

Dropdown.defaultProps = {
  async:              false,
  useRawOptions:      false,
  returnItemOnChange: false,
  validation:         { validation: VALIDATION_STATES.NONE },
  // maxMenuHeight: "20rem",
  onChange:      DO_NOTHING,
  onStateChange: DO_NOTHING,
}

export const Autocomplete = ZenAutocomplete as ComponentType<any>
export const Select       = ZenSelect as ComponentType<any>
export const MultiSelect  = styled(ZenMultiSelect as ComponentType<any>)`
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
  label: string,
  menuItemComponent: ComponentType<any> | undefined,
  isFilteringOptions: boolean,
  isClearable: boolean = false,
) => {
  if (isFilteringOptions) return [<Item disabled>Loading items...</Item>]
  if (isEmpty(options)) return [<Item disabled>No matches found</Item>]

  const nodes = options.map((o) => {
    const {
            Component,
            componentProps,
            itemProps,
            ...attrs
          }        = o
    const ItemType = getItemType(attrs)

    return <ItemType key={o[key]} value={o} {...itemProps}>
      {
        Component
        ? <Component {...componentProps}>{attrs[label]}</Component>
        : attrs[label]
      }
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
