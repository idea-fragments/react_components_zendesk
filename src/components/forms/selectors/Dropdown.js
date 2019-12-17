// @flow

import { VALIDATION_STATES }       from "components/forms/validationStates"
import { Loadable }                from "components/loaders/Loadable"
import { useState }                from "react"
import * as React                  from "react"
import type { SelectorProps }      from "components/forms/selectors/types"
import { SPACINGS }                from "styles/spacings"
import { isEmpty, isNotEmpty }     from "utils/arrayHelpers"
import { DO_NOTHING }              from "utils/functionHelpers"
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
    Autocomplete as ZenAutocomplete,
    Trigger,
}                                  from "@zendeskgarden/react-dropdowns"
import type { StateChangeOptions } from "@zendeskgarden/react-dropdowns"

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
    maxMenuHeight? :string,
    menuCSS? :string,
    placement? :MenuPlacement,
    returnItemOnChange :boolean,
    trigger? :React.Node,
    useRawOptions :boolean,
}

export const Dropdown = (props :Props) => {
    const [state, setState] = useState({ isOpen: false })
    const controlledState   = { ...state, ...props }

    const {
              label, options, keyField, valueField,
              hint, selectedKey, onChange, children, onStateChange,
              useRawOptions, trigger, menuCSS, maxMenuHeight, returnItemOnChange,
              placement, async, fluid, validation, menuItemComponent
          } = props

    let { message }   = props
    const optionNodes = useRawOptions ? options : createOptions(
        options,
        keyField,
        valueField,
        menuItemComponent,
    )
    message           = validation.message || message
    const messageNode = message ? <Message>{message}</Message> : null
    const hintNode    = hint ? <Hint>{hint}</Hint> : null
    const labelNode   = label ? <Label>{label}</Label> : null

    const handleChange = (item) => {
        onChange(
            useRawOptions || returnItemOnChange ? item : item[keyField],
        )
    }

    const handleStateChange = (
        changes :StateChangeOptions,
        stateAndHelpers,
    ) => {
        onStateChange(changes)

        if (changes.hasOwnProperty("isOpen")) {
            if (useRawOptions) {
                setState(changes)
                return
            }

            const item = changes.selectedItem || {}
            setState({
                isOpen: item.isNextItem || item.isBackItem || changes.isOpen,
            })
            return
        }

        if (changes.hasOwnProperty("inputValue")) {
            setState(changes)
        }
    }

    const optionsLoaded = optionNodes && isNotEmpty(optionNodes)

    return (
        <ZenDropdown selectedItem={selectedKey}
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
                    {messageNode}
                    {children}
                </Field>

            }

            <Menu style={{ width: "100%" }}
                  css={menuCSS}
                  maxHeight={maxMenuHeight}
                  placement={placement}
                  popperModifiers={getPopperModifiers(fluid)}>
                {
                    async
                    ? <Loadable css={`padding: ${SPACINGS.SM} 0`}
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

const getItemType = (o) => {
    if (o.isNextItem) return NextItem
    if (o.isBackItem) return PreviousItem
    if (o.isAddItem) return AddItem
    return Item
}

const createOptions = (options, key, value, menuItemComponent) => (
    options.map((o) => {
        const ItemType = getItemType(o)
        const Component = menuItemComponent

        return <ItemType key={o[key]} value={o} disabled={o.disabled}>
            {menuItemComponent ? <Component {...o}/> : o[value]}
        </ItemType>
    })
)
//
// const Spinner = ({ children: optionNodes }) => (
//     <Loadable css={`padding: ${SPACINGS.SM} 0`}
//               loaded={optionNodes && isNotEmpty(optionNodes)}>
//         {optionNodes}
//     </Loadable>
// )
//
// const Spinner = styled(Loadable)
