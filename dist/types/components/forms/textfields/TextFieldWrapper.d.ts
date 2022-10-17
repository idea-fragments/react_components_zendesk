import { TextFieldProps } from "components/forms/formField.types";
import { TextAreaProps } from "components/forms/textfields/TextArea";
import React, { ChangeEvent, ComponentType, PropsWithChildren } from "react";
declare type FieldProps = TextFieldProps | (Omit<TextAreaProps, "onChange"> & {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
});
declare type Props = PropsWithChildren<{
    WrappedComponent: ComponentType<FieldProps & any>;
    compact?: boolean;
}> & FieldProps;
export declare let TextFieldWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export {};
//# sourceMappingURL=TextFieldWrapper.d.ts.map