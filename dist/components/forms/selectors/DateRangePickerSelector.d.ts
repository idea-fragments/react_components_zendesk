import { TextFieldProps } from "components/forms/formField.types";
import { DropdownProps } from "components/forms/selectors/Dropdown";
import { FC } from "react";
import { DateRange } from "utils/dateTime/DateRange.type";
export type DateRangePickerSelectorProps = {
    disabledDates?: Array<Date>;
    maxDate?: Date;
    minimumDate?: Date;
    value?: DateRange;
    onChange: (range: DateRange) => void;
} & Omit<TextFieldProps, "onChange" | "value"> & Omit<DropdownProps<DateRange>, "isOpen" | "onChange" | "onStateChange" | "options" | "useRawOptions">;
export declare const DateRangePickerSelector: FC<DateRangePickerSelectorProps>;
//# sourceMappingURL=DateRangePickerSelector.d.ts.map