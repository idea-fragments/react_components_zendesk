import { FC } from "react";
import { DateRange } from "utils/dateTime/DateRange.type";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
export type LabeledRangeList = {
    color?: string;
    label: string;
    ranges: Array<DateRange>;
};
type ColoredDateRange = DateRange & {
    color?: string;
};
export type TinyCalendarProps = {
    disabledDates: Array<Date>;
    fluid?: boolean;
    initialDate?: Date;
    labeledRanges?: Array<LabeledRangeList>;
    minDate?: Date;
    ranges?: Array<ColoredDateRange>;
    showLegend?: boolean;
    onChange: (d: Date) => void;
};
export declare let TinyCalendar: FC<TinyCalendarProps>;
export {};
//# sourceMappingURL=TinyCalendar.d.ts.map