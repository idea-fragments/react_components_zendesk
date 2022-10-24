/// <reference types="react" />
import { FormFieldProps } from "components/forms/formField.types";
export declare type CheckboxProps = FormFieldProps & {
    checked?: boolean;
    indeterminate?: boolean;
    onChange: (checked: boolean) => void;
};
export declare let Checkbox: ({ checked: checkedProp, compact, emptyState, fluid, hint, indeterminate, label, message, validation, onChange, ...props }: CheckboxProps) => JSX.Element;
//# sourceMappingURL=Checkbox.d.ts.map