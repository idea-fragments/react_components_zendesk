// @flow

import type { TextFieldProps } from "components/forms/formField.types"
import { TextField }           from "components/forms/textfields/TextField"
import * as React              from "react"

export let NumberTextField = ({ onChange, ...props } :TextFieldProps<number, number>) => {
    const handleChange = (e :SyntheticInputEvent<HTMLInputElement>) => {
        const val = e.target.value || "0"
        onChange(
            parseInt(val.replace(/[^0-9.]+/g, "")),
        )
    }
    return <TextField {...props} onChange={handleChange} />
}

NumberTextField.COMPONENT_NAME = "NumberTextField"
