import { Validation } from "components/forms/Validation.type";
import React, { ChangeEvent, ReactNode } from "react";
import { ContainerProps } from "styles/types";
export declare type FormFieldProps = {
    label?: ReactNode;
    message?: ReactNode;
    hint?: ReactNode;
    emptyState?: ReactNode;
    disabled?: boolean;
    validation?: Validation | undefined;
} & ContainerProps;
export declare type FormComponent = React.ComponentType<any & FormFieldProps> & {
    defaultProps: FormFieldProps;
};
export declare type TextFieldProps<V = string, T = ChangeEvent<HTMLInputElement>> = {
    autoComplete?: string;
    faux?: boolean;
    small?: boolean;
    type?: string;
    value?: V;
    onChange: (event: T) => void;
} & FormFieldProps;
//# sourceMappingURL=formField.types.d.ts.map