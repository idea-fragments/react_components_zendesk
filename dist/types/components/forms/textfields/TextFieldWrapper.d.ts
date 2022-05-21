import { TextFieldProps } from "components/forms/formField.types";
import { TextAreaProps } from "components/forms/textfields/TextArea";
import { ComponentType } from "react";
import { ChangeEvent, FC } from "react";
declare type FieldProps = TextFieldProps | (Omit<TextAreaProps, "onChange"> & {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
});
declare type Props = {
    WrappedComponent: ComponentType<FieldProps & any>;
} & FieldProps;
export declare let TextFieldWrapper: FC<Props>;
export {};
//# sourceMappingURL=TextFieldWrapper.d.ts.map