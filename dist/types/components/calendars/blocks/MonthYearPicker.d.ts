/// <reference types="react" />
import { Moment } from "moment";
export declare type MonthYearPickerChange = {
    month: number;
    year: number;
};
declare type Props = {
    month: number;
    year: number;
    minDate?: Moment;
    pastFutureYearRangeSize: number;
    onChange: (c: MonthYearPickerChange) => void;
};
export declare const MonthYearPicker: ({ month, year, minDate, pastFutureYearRangeSize, onChange, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=MonthYearPicker.d.ts.map