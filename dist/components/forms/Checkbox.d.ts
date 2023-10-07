import { FormFieldProps } from "components/forms/formField.types";
export type CheckboxProps = FormFieldProps & {
    checked?: boolean;
    indeterminate?: boolean;
    onChange: (checked: boolean) => void;
};
export declare let Checkbox: ({ checked: checkedProp, compact, emptyState, fluid, hint, indeterminate, label, message, validation, onChange, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Checkbox.d.ts.map