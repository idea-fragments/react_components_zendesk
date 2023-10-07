import { Validation } from "components/forms/Validation.type";
import { ChangeEvent, ReactNode } from "react";
import { ContainerProps } from "styles/types";
export type FormFieldProps = {
    disabled?: boolean;
    emptyState?: ReactNode;
    hint?: ReactNode;
    label?: ReactNode;
    message?: ReactNode;
    required?: boolean;
    validation?: Validation | undefined;
} & ContainerProps;
export type TextFieldProps<V = string> = {
    autoComplete?: string;
    faux?: boolean;
    small?: boolean;
    type?: string;
    value?: V;
    onChange: (value: V, event: ChangeEvent<HTMLInputElement>) => void;
} & FormFieldProps;
//# sourceMappingURL=formField.types.d.ts.map