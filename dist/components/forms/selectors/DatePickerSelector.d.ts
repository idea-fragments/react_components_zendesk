import { TextFieldProps } from "components/forms/formField.types";
import { FC } from "react";
export type DatePickerSelectorProps = {
    minimumDate?: Date;
    disabledDates: Array<Date>;
    onChange: (d: Date) => void;
} & Omit<TextFieldProps<Date>, "onChange">;
export declare const DatePickerSelector: FC<DatePickerSelectorProps>;
//# sourceMappingURL=DatePickerSelector.d.ts.map