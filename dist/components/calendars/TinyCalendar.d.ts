import { Moment } from "moment";
import { DateRange } from "utils/dateTime/DateRange.type";
export type LabeledRangeList = {
    color?: string;
    label: string;
    ranges: Array<DateRange>;
};
type ColoredDateRange = DateRange & {
    color?: string;
};
type Props = {
    disabledDates: Array<Moment>;
    displayMode?: "dateRange" | "date";
    fluid?: boolean;
    initialDate?: Moment;
    labeledRanges?: Array<LabeledRangeList>;
    minDate?: Moment;
    ranges?: Array<ColoredDateRange>;
    showLegend?: boolean;
    onChange: (d: Date) => void;
};
export declare let TinyCalendar: ({ disabledDates, displayMode, fluid, initialDate, labeledRanges, minDate, ranges, showLegend, onChange, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TinyCalendar.d.ts.map