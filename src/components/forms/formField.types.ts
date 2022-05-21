import { Validation }     from "components/forms/Validation.type"
import { ChangeEvent }         from "react"
import React, { ReactNode }    from "react"
import { ContainerProps } from "styles/types"

export type FormFieldProps = {
    label? :ReactNode,
    message? :ReactNode,
    hint? :ReactNode,
    emptyState? :ReactNode,
    disabled? :boolean,
    validation? :Validation | undefined,
} & ContainerProps

export type FormComponent =
    React.ComponentType<any & FormFieldProps>
    & { defaultProps :FormFieldProps }

export type TextFieldProps<V = string, T = ChangeEvent<HTMLInputElement>> =
    {
        autoComplete? :string,
        small? :boolean,
        type? :string,
        value? :V,
        onChange :(event: T) => void
    } & FormFieldProps
