// @flow

import type { Validation }     from "components/forms/Validation.type"
import React, { type Node }    from "react"
import type { ContainerProps } from "styles/types"

export type FormFieldProps = {
    label? :Node,
    message? :Node,
    hint? :Node,
    emptyState? :Node,
    disabled? :boolean,
    validation? :?Validation,
} & ContainerProps

export type FormComponent =
    React.ComponentType<* & FormFieldProps>
    & { defaultProps :FormFieldProps }

export type TextFieldProps<V = string, T = SyntheticInputEvent<HTMLInputElement>> =
    {
        autoComplete? :string,
        small? :boolean,
        type? :string,
        value? :V,
        onChange :(T) => void
    } & FormFieldProps
