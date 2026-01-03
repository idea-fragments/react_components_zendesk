import { FC } from "react";
import { FormFieldProps } from "components/forms/formField.types";
export type RadioButtonOption = {
    color?: string;
    disabled?: boolean;
    hint?: string;
    label: string;
    value: string;
};
export type RadioButtonGroupProps = {
    checkedOption?: string;
    color?: string;
    disabled?: boolean;
    name: string;
    options: Array<RadioButtonOption>;
    onChange: (value: string) => void;
} & Omit<FormFieldProps, "onChange">;
export declare const RadioButtonGroup: FC<RadioButtonGroupProps>;
//# sourceMappingURL=RadioButtonGroup.d.ts.map