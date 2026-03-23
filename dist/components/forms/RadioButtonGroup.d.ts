import { FormFieldProps } from "components/forms/formField.types";
import { RadioStyle } from "components/forms/RadioButton";
import { FC, ReactNode } from "react";
import { FullSpectrumColors } from "styles/theme/Theme.type";
export type RadioButtonOption = {
    color?: FullSpectrumColors;
    darkColorIndex?: keyof FullSpectrumColors;
    disabled?: boolean;
    hint?: string;
    label: string;
    renderAdditional?: (args: {
        renderedRadioButton: ReactNode;
    }) => ReactNode;
    value: string;
};
export type RadioButtonGroupProps = {
    checkedOption?: string;
    color?: FullSpectrumColors;
    darkColorIndex?: keyof FullSpectrumColors;
    disabled?: boolean;
    name: string;
    onChange: (value: string) => void;
    options: Array<RadioButtonOption>;
    radioStyle?: RadioStyle;
} & Omit<FormFieldProps, "color" | "onChange">;
export declare const RadioButtonGroup: FC<RadioButtonGroupProps>;
//# sourceMappingURL=RadioButtonGroup.d.ts.map