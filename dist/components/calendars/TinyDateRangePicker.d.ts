import React from "react";
import { CSSProp } from "styles/types";
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
} & CSSProp;
export declare const TinyDateRangePicker: import("styled-components").StyledComponent<React.FC<{
    disabledDates?: Date[] | undefined;
    fluid?: boolean | undefined;
    initialRange?: DateRange | undefined;
    maxDate?: Date | undefined;
    minDate?: Date | undefined;
    onChange: (range: DateRange) => void;
} & CSSProp<any> & {
    className?: string | undefined;
}>, import("styled-components").DefaultTheme, {
    disabledDates?: Date[] | undefined;
    fluid?: boolean | undefined;
    initialRange?: DateRange | undefined;
    maxDate?: Date | undefined;
    minDate?: Date | undefined;
    onChange: (range: DateRange) => void;
} & CSSProp<any>, never>;
//# sourceMappingURL=TinyDateRangePicker.d.ts.map