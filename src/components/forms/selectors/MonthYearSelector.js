// @flow
// --- UNFINISHED ----

import type { TextFieldProps } from "components/forms/formField.types"
import { Dropdown, Select }    from "components/forms/selectors/Dropdown"
import type { Moment }         from "moment"
import moment                  from "moment"
import { useState }            from "react"
import * as React              from "react"

type Props = {
    minimumDate? :Moment,
} & TextFieldProps<string, string>

type State = {
    isOpen :boolean
}

export const MonthYearSelector = (props :Props) => {
    const [state, setState] = useState<State>({ isOpen: false })

    const {
              value,
              emptyState,
              disabled,
              onChange,
          } :Props = props

    const setDropdownState = ({ isOpen } :State) => {
        if (disabled || isOpen == null) return
        setState({ isOpen })
    }

    // eslint-disable-next-line no-unused-vars
    const handleCalendarChange = (d :Date) => {
        onChange(moment(d))
        closeCalendar()
    }

    const closeCalendar = () => { setState({ isOpen: false }) }
    return <Dropdown {...props}
                     onStateChange={setDropdownState}
                     isOpen={state.isOpen}
                     useRawOptions
                     options={[]}
                     menuCSS={`width: auto !important;`}>
        <Select validation={props.validation.validation}
                disabled={disabled}>
            {value ? value : emptyState}
        </Select>
    </Dropdown>
}
