import { DatePickerSelectorProps } from "components/forms/selectors/DatePickerSelector";
import { DateRange } from "utils/dateTime/DateRange.type";
import { FC } from "react";
export type DateRangeSelectorProps = {
    disabledDates?: Array<Date>;
    endDateProps?: Partial<Omit<DatePickerSelectorProps, "onChange" | "value">>;
    minimumDate?: Date;
    startDateProps?: Partial<Omit<DatePickerSelectorProps, "onChange" | "value">>;
    value?: DateRange;
    onChange: (range: DateRange) => void;
};
export declare const DateRangeSelector: FC<DateRangeSelectorProps>;
//# sourceMappingURL=DateRangeSelectors.d.ts.map