// @flow

import type { Validation }     from "components/forms/Validation.type"
import React, { type Node }    from "react"
import type { ContainerProps } from "styles/types"

export type FormFieldProps = {
    label? :string,
    message? :Node,
    hint? :Node,
    emptyState? :Node,
    disabled? :boolean,
    validation? :Validation,
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
