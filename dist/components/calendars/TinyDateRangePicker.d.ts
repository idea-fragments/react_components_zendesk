import { FC } from "react";
import { DateRange } from "utils/dateTime/DateRange.type";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
export type TinyDateRangePickerProps = {
    disabledDates?: Array<Date>;
    fluid?: boolean;
    initialRange?: DateRange;
    maxDate?: Date;
    minDate?: Date;
    onChange: (range: DateRange) => void;
};
export declare const TinyDateRangePicker: FC<TinyDateRangePickerProps>;
//# sourceMappingURL=TinyDateRangePicker.d.ts.map