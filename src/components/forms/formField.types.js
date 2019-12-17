// @flow

import type { Validation }     from "components/forms/Validation.type"
import * as React              from "react"
import type { ContainerProps } from "styles/types"

export type FormFieldProps = {
    label? :string,
    message? :string,
    hint? :string,
    emptyState? :string,
    disabled? :boolean,
    validation :Validation,
} & ContainerProps

export type FormComponent =
    React.ComponentType<* & FormFieldProps>
    & { defaultProps :FormFieldProps }

export type TextFieldProps<V = string, T = SyntheticInputEvent<HTMLInputElement>> =
    {
        value? :V,
        type? :string,
        autoComplete? :string,
        onChange :(T) => void
    }
    & FormFieldProps
