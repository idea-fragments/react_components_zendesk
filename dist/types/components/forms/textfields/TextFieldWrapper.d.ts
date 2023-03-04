import { TextFieldProps } from "components/forms/formField.types";
import { TextAreaProps } from "components/forms/textfields/TextArea";
import React, { ChangeEvent, ComponentType, PropsWithChildren } from "react";
declare type FieldProps = TextFieldProps | TextAreaProps;
declare type Props = PropsWithChildren<{
    WrappedComponent: ComponentType<Omit<FieldProps, "onChange" | "validation"> & {
        onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | ((e: ChangeEvent<HTMLTextAreaElement>) => void);
        validation?: string;
    }>;
    compact?: boolean;
}> & FieldProps;
export declare let TextFieldWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export {};
//# sourceMappingURL=TextFieldWrapper.d.ts.map