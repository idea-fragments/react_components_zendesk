import { FC } from "react";
import { FormFieldProps } from "components/forms/formField.types";
export type RadioButtonProps = {
    checked?: boolean;
    color?: string;
    disabled?: boolean;
    name: string;
    value: string;
    onChange: (value: string) => void;
} & Omit<FormFieldProps, "onChange">;
export declare let RadioButton: FC<RadioButtonProps>;
//# sourceMappingURL=RadioButton.d.ts.map