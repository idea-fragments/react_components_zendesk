/// <reference types="react" />
import type { FormFieldProps } from "components/forms/formField.types";
declare type Props = FormFieldProps & {
    checked?: boolean;
    indeterminate?: boolean;
    onChange: (checked: boolean) => void;
};
export declare let Checkbox: ({ checked: checkedProp, compact, emptyState, fluid, hint, indeterminate, label, message, validation, onChange, ...props }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Checkbox.d.ts.map