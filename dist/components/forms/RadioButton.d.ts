import { FormFieldProps } from "components/forms/formField.types";
import { FC } from "react";
import { FullSpectrumColors } from "styles/theme/Theme.type";
export type RadioStyle = "default" | "checkmark";
export type RadioButtonProps = {
    checked?: boolean;
    color?: FullSpectrumColors;
    darkColorIndex?: keyof FullSpectrumColors;
    disabled?: boolean;
    name: string;
    radioStyle?: RadioStyle;
    value: string;
    onChange: (value: string) => void;
} & Omit<FormFieldProps, "color" | "onChange">;
export declare let RadioButton: FC<RadioButtonProps>;
//# sourceMappingURL=RadioButton.d.ts.map